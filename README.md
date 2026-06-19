# Martin Technology LLC — Hugo Site

Self-hosted clone of techmartin.online. Deploys to GitHub Pages automatically on push to `main`.

## Setup

### 1. Create GitHub repo
```
gh repo create techmartin-site --public
git init && git remote add origin https://github.com/YOUR_USERNAME/techmartin-site.git
git add . && git commit -m "init: hugo site"
git push -u origin main
```

### 2. Enable GitHub Pages
- Go to repo Settings → Pages
- Source: **GitHub Actions**
- That's it. The workflow handles the rest.

### 3. Custom domain (when ready to cut over from IONOS)
- In repo Settings → Pages → Custom domain: enter `techmartin.online`
- In IONOS DNS: point `techmartin.online` CNAME → `YOUR_USERNAME.github.io`
- Or use A records pointing to GitHub's IPs:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

### 4. Formspree (contact form)
- Sign up at formspree.io (free tier: 50 submissions/month)
- Create a form, copy the endpoint URL
- Paste it in `hugo.toml` → `params.formspree`

### 5. Stripe payment links
- In Stripe dashboard: Products → Payment Links
- Create one per service (Flat Fee, Hourly, Diagnostic)
- Replace `YOUR_STRIPE_*_LINK` placeholders in `layouts/services/single.html`

### 6. Images
Drop these in `static/images/`:
- `hero-pc.jpg` — gaming PC (the blue RGB one from the original)
- `service-remote.jpg` — remote troubleshooting image
- `service-consulting.jpg` — consulting image
- `service-workstation.jpg` — workstation image
- `service-wifi.jpg` — wifi/network image

## Local preview
```bash
# Install Hugo (if not already)
# https://gohugo.io/installation/linux/

hugo server -D
# Open http://localhost:1313
```

## Structure
```
techmartin-hugo/
├── hugo.toml              # Site config, contact info, params
├── layouts/
│   ├── index.html         # Home page
│   ├── services/single.html  # Services/pricing page
│   ├── contact/single.html   # Contact page
│   └── partials/          # nav, footer, drip SVGs
├── static/
│   ├── css/style.css      # All styles
│   ├── images/            # Drop images here
│   └── CNAME              # techmartin.online
├── content/               # Markdown stubs (Hugo needs these)
└── .github/workflows/deploy.yml  # Auto-deploy on push
```
