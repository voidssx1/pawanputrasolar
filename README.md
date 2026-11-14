# Pawanputra Solar Solutions

Modern, high-performance web platform and lead engine for **Pawanputra Solar Solutions Pvt. Ltd.**, providing rooftop solar installations, subsidy consulting, and engineering services across Delhi-NCR (Delhi, Gurugram, Noida, Greater Noida, Ghaziabad, Faridabad).

---

## Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server & Client Components)
- **UI / Runtime**: React 19, TypeScript
- **Styling**: Native CSS system with custom properties (`app/globals.css`), responsive layouts, zero runtime CSS overhead
- **Animations & Smooth Scrolling**: Framer Motion & Lenis
- **Validation**: Zod
- **Backend API**: Next.js Route Handler (`/api/leads`) with in-memory IP rate limiting and anti-spam honeypot
- **Lead Storage Strategy**:
  - **Self-hosted / VPS**: Appended locally to `.data/leads.jsonl`.
  - **Serverless / Multi-instance**: Dispatched via HTTP POST to `LEADS_WEBHOOK_URL` (Zapier, Make, CRM, Slack, Google Apps Script).
- **SEO & Performance**: Dynamic metadata, OpenGraph tags, sitemap generation (`app/sitemap.ts`), robots generator (`app/robots.ts`), AVIF/WebP image optimization.

---

## Repository Structure

```text
pawanputrasolar/
├── app/
│   ├── api/
│   │   └── leads/              # Lead ingestion API (rate-limiting, validation, persistence)
│   ├── calculator/             # Solar sizing & PM Surya Ghar subsidy calculator
│   ├── commercial/             # Commercial & industrial solar page
│   ├── contact/                # Contact page & survey booking form
│   ├── guides/                 # Solar & subsidy educational playbooks
│   │   └── [slug]/
│   ├── projects/               # Showcase of completed residential & commercial installations
│   ├── quote/                  # Multi-step solar estimation & quotation flow
│   ├── residential/            # Residential rooftop solar page
│   ├── societies/              # Housing societies & RWA solutions
│   ├── solar/                  # Programmatic local SEO landing pages
│   │   └── [city]/             # Dynamic routes for Delhi, Noida, Gurugram, etc.
│   ├── subsidy/                # Central & State subsidy breakdowns
│   ├── systems/                # On-grid, Hybrid, and Off-grid technical pages
│   │   └── [slug]/
│   ├── layout.tsx              # Root layout with fonts, Lenis smooth scrolling, header & footer
│   ├── globals.css             # Unified CSS tokens, typography, utility classes, and components
│   ├── sitemap.ts              # Automated sitemap generator
│   └── robots.ts               # Robots.txt configuration
├── components/                 # Reusable UI components
│   ├── calculator.tsx          # Interactive rooftop & savings estimator
│   ├── contact-section.tsx     # Site-wide contact CTA section
│   ├── header.tsx              # Responsive navigation with mobile menu drawer
│   ├── footer.tsx              # Footer with links, disclaimers, contact details
│   ├── lead-form.tsx           # Lead capture form with instant estimate feedback
│   ├── quote-form.tsx          # Multi-step structured quote wizard
│   ├── smooth-scroll.tsx       # Lenis smooth-scroll wrapper
│   └── ...                     # Accordion, ticker, parallax, counters
├── lib/
│   ├── calculator.ts           # Solar capacity estimation, tariff yield & subsidy logic
│   ├── cities.ts               # Local city metadata for Delhi-NCR programmatic pages
│   ├── faqs.ts                 # FAQs grouped by topic
│   ├── guides.ts               # Editorial solar guides data
│   ├── projects.ts             # Project portfolio records
│   ├── site.ts                 # Global company metadata, address, contact, and navigation
│   └── systems.ts              # Solar system specifications (on-grid, hybrid, off-grid)
├── public/                     # Static assets (images, icons, fonts)
├── verify_live.py              # Playwright test suite for desktop, mobile & live lead flows
├── next.config.ts              # Next.js configuration (caching headers, image domains)
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` for local development or configure in your deployment platform:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Yes** (in production) | Base URL of the deployment (e.g. `https://pawanputrasolar.com`). Used for canonical URLs, Open Graph, sitemap, and robots. |
| `LEADS_WEBHOOK_URL` | Optional / Recommended | Webhook endpoint (Zapier, Make, CRM, Slack, Google Sheets) that receives submitted lead payloads as JSON POST. |

---

## Local Development

### 1. Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Test Locally
```bash
npm run build
npm run start
```

---

## Production Hosting Guide

### Option 1: VPS / Linux Server (PM2 + Nginx + Let's Encrypt) — *Recommended for Persistent Local Leads*

Because the lead API writes to `.data/leads.jsonl`, running on a persistent VPS ensures all leads are stored directly on disk in addition to optional webhooks.

1. **Clone repository on the server**:
   ```bash
   git clone https://github.com/voidssx1/pawanputrasolar.git /var/www/pawanputrasolar
   cd /var/www/pawanputrasolar
   npm install --production=false
   ```

2. **Configure environment variables**:
   Create `/var/www/pawanputrasolar/.env`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   LEADS_WEBHOOK_URL=https://your-crm-or-webhook.com/api/leads
   PORT=3000
   NODE_ENV=production
   ```

3. **Build and start with PM2**:
   ```bash
   npm run build
   npm install -g pm2
   pm2 start npm --name "pawanputra-solar" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx reverse proxy**:
   Create `/etc/nginx/sites-available/pawanputrasolar`:
   ```nginx
   server {
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Enable and reload Nginx:
   ```bash
   ln -s /etc/nginx/sites-available/pawanputrasolar /etc/nginx/sites-enabled/
   nginx -t
   systemctl reload nginx
   ```

5. **SSL Certificate**:
   ```bash
   certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

---

### Option 2: Serverless / Cloud PaaS (Vercel, Railway, Render)

1. Import the repository into your platform (e.g. Vercel or Railway).
2. Set Environment Variables in the project settings:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - `LEADS_WEBHOOK_URL` = `https://hooks.zapier.com/...` (*Crucial*: Serverless filesystems are ephemeral; leads must be forwarded via this webhook).
3. Build command: `npm run build`
4. Output directory: default Next.js output (`.next`)

---

### Option 3: Docker Deployment

Create a `Dockerfile` in the root:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Run container with volume mount for lead persistence:
```bash
docker build -t pawanputra-solar .
docker run -d -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL="https://your-domain.com" \
  -e LEADS_WEBHOOK_URL="https://your-webhook" \
  -v $(pwd)/.data:/app/.data \
  --name pawanputra-app pawanputra-solar
```

---

## Verification & Testing

The repository includes a comprehensive Playwright audit script (`verify_live.py`) checking:
- Desktop & mobile rendering across 24+ routes
- Viewport horizontal overflow prevention
- Metadata, OpenGraph image resolution
- Sticky header positioning on mobile scroll
- Automated end-to-end form submissions for contact & quote flows

Run verification (requires Python 3 and Playwright):
```bash
pip install playwright
playwright install chromium
python verify_live.py
```

---

## 📄 License

Proprietary — All rights reserved by **Pawanputra Solar Solutions Pvt. Ltd.**
