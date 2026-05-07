<img width="1600" height="900" alt="Image" src="https://github.com/user-attachments/assets/7adf86ae-2327-4c3e-881d-e9813058a83a" />

# Distilled Partner Hub

Static partner-facing tool hub for Distilled Funding. This repo contains a small Vercel-deployable HTML/JS site that showcases and embeds white-labeled funding, recruiting, and outreach tools for partners.

## What is in this repo

- `index.html` - landing page that links to the tool library
- `quiz.html` - "Am I Fundable?" 4-step pre-screener with affiliate routing
- `reality-check.html` - DAC conversation quota calculator
- `script-generator.html` - audience/platform-based outreach script generator
- `burn-rate-runway.html` - wrapper page for the hosted burn-rate widget
- `embed.js` - drop-in embed loader for partner sites

## How it works

The project is fully static:

- Each tool is a standalone `.html` page with inline CSS and JavaScript
- Partner white-labeling is handled through URL params and `data-*` attributes
- Embedded mode hides the nav and embed-code panel with `?embedded=true`
- Affiliate routing is driven by `agentID` in the query string

## White-label / embed contract

### Script embed

`embed.js` creates an iframe pointed at:

```text
https://distilled-partner-hub.vercel.app/{tool}.html?agentID={agentId}&embedded=true
```

Example:

```html
<script
  src="https://distilled-partner-hub.vercel.app/embed.js"
  data-tool="quiz"
  data-agent-id="102345"
></script>
```

### Supported `data-tool` values in this repo

- `quiz`
- `reality-check`
- `script-generator`

`burn-rate-runway.html` uses a direct iframe pattern instead of `embed.js`.

### Query parameters used by the pages

- `agentID` - injects the partner ID into funding links
- `embedded=true` - hides site chrome and the embed-code section
- `partner` - used by the burn-rate iframe embed snippet

## Local preview

Because this is a static site, use any simple local server from the repo root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/index.html
```

You can also open individual tools directly:

- `http://localhost:8000/quiz.html`
- `http://localhost:8000/reality-check.html`
- `http://localhost:8000/script-generator.html`
- `http://localhost:8000/burn-rate-runway.html`

## Deployment

This project is structured for static hosting on Vercel:

- No build step required
- No framework or package manager required
- Deploy the repo as a static site

The embed script currently points to:

```text
https://distilled-partner-hub.vercel.app
```

If the production domain changes, update `embed.js` and any hardcoded embed snippets in the HTML pages.

## External dependencies

- Google Fonts: `Archivo Black`, `Space Mono`
- Hosted burn-rate widget: `https://burn-rate-runway-widget.vercel.app/`
- Affiliate destinations:
  - `https://bankbreezy.com/{agentID}`
  - `https://davidallencapital.com/micro/{agentID}`

## Known gap in the current repo snapshot

`index.html` links to these pages, but they are not present in this checkout:

- `launchpad.html`
- `payout-engine.html`
- `override-matrix.html`

If those tools are intended to ship, they need to be added or the hub links should be removed.
