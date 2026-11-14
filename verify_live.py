import json
import time
import uuid
from playwright.sync_api import sync_playwright

BASE = "https://pawanputrasolar.digiedgeindia.com"
ROUTES = [
    "/", "/residential", "/commercial", "/societies", "/systems/on-grid",
    "/systems/hybrid", "/systems/off-grid", "/projects", "/subsidy", "/calculator",
    "/about", "/process", "/guides", "/guides/pm-surya-ghar-delhi",
    "/guides/right-size-rooftop", "/guides/society-solar-playbook", "/contact", "/quote",
    "/solar/delhi", "/solar/noida", "/solar/greater-noida", "/solar/gurugram",
    "/solar/ghaziabad", "/solar/faridabad",
]
issues = []

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome")

    # ---- desktop: all routes ----
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    for route in ROUTES:
        resp = page.goto(BASE + route, wait_until="domcontentloaded", timeout=45000)
        page.wait_for_timeout(350)
        status = resp.status if resp else 0
        overflow = page.evaluate("document.documentElement.scrollWidth - window.innerWidth")
        if status != 200:
            issues.append(f"{route}: HTTP {status}")
        if overflow > 0:
            issues.append(f"{route}: desktop overflow {overflow}px")
    # OG image + metadata
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.wait_for_timeout(500)
    og = page.evaluate(
        """() => ({
          title: document.title,
          ogUrl: document.querySelector('meta[property="og:url"]')?.content || null,
          ogImage: document.querySelector('meta[property="og:image"]')?.content || null,
        })"""
    )
    print("meta:", json.dumps(og))
    if "pawanputrasolar.digiedgeindia.com" not in (og.get("ogUrl") or ""):
        issues.append(f"og:url wrong: {og.get('ogUrl')}")
    if og.get("ogImage") and "localhost" in og["ogImage"]:
        issues.append("og:image still localhost")
    page.screenshot(path=".ref/live-home-desktop.png")
    ctx.close()
    print("desktop routes done")

    # ---- mobile: all routes + header pin ----
    ctx = browser.new_context(viewport={"width": 390, "height": 844}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    client = ctx.new_cdp_session(page)
    for route in ROUTES:
        resp = page.goto(BASE + route, wait_until="domcontentloaded", timeout=45000)
        page.wait_for_timeout(300)
        status = resp.status if resp else 0
        # real touch drag
        client.send("Input.dispatchTouchEvent", {"type": "touchStart", "touchPoints": [{"x": 195, "y": 700, "id": 1}]})
        for i in range(1, 7):
            client.send("Input.dispatchTouchEvent", {"type": "touchMove", "touchPoints": [{"x": 195, "y": 700 - (400 * i / 6), "id": 1}]})
        client.send("Input.dispatchTouchEvent", {"type": "touchEnd", "touchPoints": []})
        page.wait_for_timeout(1100)
        r = page.evaluate(
            """() => ({
              headTop: Math.round(document.querySelector('.site-head').getBoundingClientRect().top),
              overflow: document.documentElement.scrollWidth - window.innerWidth,
            })"""
        )
        if status != 200:
            issues.append(f"mobile {route}: HTTP {status}")
        if r["headTop"] != 0:
            issues.append(f"mobile {route}: header top {r['headTop']}")
        if r["overflow"] > 0:
            issues.append(f"mobile {route}: overflow {r['overflow']}")
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.wait_for_timeout(1200)
    page.screenshot(path=".ref/live-home-mobile.png")
    ctx.close()
    print("mobile routes done")

    # ---- live forms: contact lead + quote ----
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    tag = str(uuid.uuid4())[:8]
    page.goto(BASE + "/contact", wait_until="domcontentloaded")
    page.wait_for_timeout(1200)
    page.fill('input[name="name"]', f"LiveDeploy Test {tag}")
    page.fill('input[name="phone"]', "9812345678")
    page.select_option('select[name="bill"]', "3000")
    page.select_option('select[name="city"]', label="Delhi")
    page.select_option('select[name="segment"]', "home")
    page.click('button[type="submit"]')
    page.wait_for_timeout(2500)
    ok = page.evaluate("!!document.querySelector('.form-success')")
    print("contact form success:", ok)
    if not ok:
        issues.append("contact form failed on live")

    page.goto(BASE + "/quote", wait_until="domcontentloaded")
    page.wait_for_timeout(1200)
    # step 0: property
    page.click(".option-grid .option >> nth=0")
    page.select_option("#q-ownership", "owned")
    page.select_option("#q-city", label="Delhi")
    page.fill("#q-pincode", "110059")
    page.click("text=Continue")
    page.wait_for_timeout(600)
    # step 1: load
    page.select_option("#q-bill", "3000")
    page.select_option("#q-roof", "rcc")
    page.select_option("#q-area", "300-600")
    page.click(".choice-row >> nth=0 >> button >> nth=0")
    page.click(".choice-row >> nth=1 >> button >> nth=0")
    page.click("text=Continue")
    page.wait_for_timeout(600)
    # step 2: details
    page.fill("#q-name", f"LiveQuote Test {tag}")
    page.fill("#q-phone", "9876543210")
    page.click("text=Send my quote request")
    page.wait_for_timeout(2500)
    ok2 = page.evaluate("!!document.querySelector('.form-success')")
    print("quote form success:", ok2)
    if not ok2:
        issues.append("quote form failed on live")
    ctx.close()
    browser.close()

print("ISSUES:", len(issues))
for i in issues:
    print(" -", i)
