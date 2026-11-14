"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, site } from "@/lib/site";
import { ArrowUR, Chevron, Phone } from "@/components/icons";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDrop = (label: string) => {
    clearCloseTimer();
    setDropOpen(label);
  };

  const scheduleCloseDrop = (label: string) => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setDropOpen((value) => (value === label ? null : value));
    }, 180);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
    clearCloseTimer();
    setDropOpen(null);
  }, [pathname]);

  useEffect(() => clearCloseTimer, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setExpanded(null);
        setDropOpen(null);
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!dropOpen) return;
    const close = () => {
      clearCloseTimer();
      setDropOpen(null);
    };
    const onPointer = (event: PointerEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest(".head-nav__item")
      ) {
        close();
      }
    };
    // a hover menu must never linger: close as soon as the page scrolls
    let lastY = window.scrollY;
    const onScroll = () => {
      if (Math.abs(window.scrollY - lastY) > 4) close();
      lastY = window.scrollY;
    };
    // pointer left the browser window entirely -> mouseleave never fires
    const onDocOut = (event: MouseEvent) => {
      if (!event.relatedTarget) close();
    };
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onDocOut);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onDocOut);
    };
  }, [dropOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`site-head ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container head-inner">
          <Link href="/" className="brand" aria-label="Pawanputra Solar Solutions — home">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={48}
              height={37}
              priority
            />
            <span className="brand__type">
              <span className="brand__name">Pawanputra</span>
              <span className="brand__sub">Solar Solutions</span>
            </span>
          </Link>

          <nav className="head-nav" aria-label="Primary">
            {primaryNav.map((item) =>
              "children" in item ? (
                <div
                  className={`head-nav__item ${
                    dropOpen === item.label ? "is-open" : ""
                  }`}
                  key={item.label}
                  onMouseEnter={() => openDrop(item.label)}
                  onMouseLeave={() => scheduleCloseDrop(item.label)}
                >
                  <button
                    type="button"
                    className={`head-nav__link ${
                      item.children.some((child) => isActive(child.href))
                        ? "is-active"
                        : ""
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropOpen === item.label}
                    onClick={() => {
                      // on hover-capable devices the dropdown already
                      // follows the pointer; the click toggle is for touch
                      if (window.matchMedia("(hover: none)").matches) {
                        setDropOpen((value) =>
                          value === item.label ? null : item.label,
                        );
                      }
                    }}
                  >
                    {item.label}
                    <Chevron />
                  </button>
                  <div className="head-drop">
                    {item.children.map((child) => (
                      <Link href={child.href} key={child.href}>
                        <b>{child.label}</b>
                        <span>{child.note}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`head-nav__link ${
                    isActive(item.href) ? "is-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Link href="/quote" className="btn head-cta">
            Get a free quote
            <ArrowUR />
          </Link>

          <button
            type="button"
            id="navToggle"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => {
              if (open) setExpanded(null);
              setOpen((value) => !value);
            }}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mobile-menu__glow" aria-hidden="true" />
            <motion.p
              className="mobile-menu__eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Rooftop solar · Delhi NCR
            </motion.p>
            <nav className="mobile-menu__nav" aria-label="Mobile">
              {primaryNav.map((item, index) => {
                const current =
                  "children" in item
                    ? item.children.some((child) => isActive(child.href))
                    : isActive(item.href);
                const delay = 0.3 + index * 0.055;
                const transition = {
                  delay,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                };
                return "children" in item ? (
                  <motion.div
                    className="mobile-menu__group"
                    key={item.label}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition}
                  >
                    <button
                      type="button"
                      className={`mobile-menu__link mobile-menu__parent ${
                        current ? "is-current" : ""
                      }`}
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded((value) =>
                          value === item.label ? null : item.label,
                        )
                      }
                    >
                      <span className="mobile-menu__label">
                        <small>0{index + 1}</small>
                        {item.label}
                      </span>
                      <Chevron size={16} />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === item.label && (
                        <motion.div
                          className="mobile-menu__sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {item.children.map((child) => (
                            <Link href={child.href} key={child.href}>
                              <b>{child.label}</b>
                              <span>{child.note}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition}
                  >
                    <Link
                      href={item.href}
                      className={`mobile-menu__link ${
                        current ? "is-current" : ""
                      }`}
                    >
                      <small>0{index + 1}</small>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + primaryNav.length * 0.055,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href="/quote" className="mobile-menu__link">
                  <small>0{primaryNav.length + 1}</small>
                  Get a detailed quote
                </Link>
              </motion.div>
            </nav>

            <motion.div
              className="mobile-menu__cta"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/contact" className="btn btn--full">
                Book a free roof survey
                <ArrowUR />
              </Link>
              <a href={site.phoneHref} className="btn btn--line btn--full">
                <Phone />
                {site.phoneDisplay}
              </a>
              <div className="mobile-menu__areas" aria-label="Areas served">
                {site.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mobile-menu__foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.78, duration: 0.5 }}
            >
              <p>
                {site.address.line1}, {site.address.line2}
              </p>
              <p>
                {site.address.city} {site.address.pin} · {site.hours}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
