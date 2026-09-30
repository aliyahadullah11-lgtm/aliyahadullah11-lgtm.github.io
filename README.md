# Ali & Aliya Digital Portfolio

A complete responsive, dependency-free HTML/CSS/JavaScript portfolio for Muhammad Ali Yahadullah and Aliya Nasir.

## Run locally

1. Extract this entire ZIP file.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.

No installation, npm command, build step, API key, or internet connection is required to view the portfolio. External project, WhatsApp, and email links require the appropriate connection or application.

Optional local server (if Python is installed):

```sh
python -m http.server 8000
```

Run this command in the extracted portfolio folder, then visit http://localhost:8000 . Using port 8000 avoids conflicting with the real-estate demo's port 5173.

## Contents

- index.html — complete page content, project URLs and contact details
- styles.css — responsive theme and reduced-motion support
- script.js — mobile menu, service-strip controls, project browsing, scroll reveals, demo request prefilling and email draft form
- assets/ — both original profile photos, the supplied project screenshots, including the corrected Skinza homepage, favicon

## Portfolio updates

- Gold accent color: `#FFBD39`.
- Hero portraits display names only.
- The service strip includes Shopify Store Development, Web Development, and Software Development alongside the existing services. It scrolls continuously, with a pause/resume button and a static layout for reduced-motion preferences.
- Featured Projects uses a compact gold heading, a View All Projects button, and previous/next arrows. The arrows browse two projects at a time on desktop or one on mobile. View All Projects expands the full grid; Show Fewer Projects returns to browsing.
- Without JavaScript, all projects and services remain visible in a static layout.

## Contact form

This is a static website. The form validates fields and prepares a `mailto:` draft in the visitor's configured email application. The visitor must send the message there. It does not silently submit, store messages, or claim delivery. For direct web submission without an email application, connect a form service or backend before deployment. Phone and WhatsApp links work independently of the form.

The supplied shared email `aliya.nyahoo@gamil.com` is preserved exactly. Confirm the domain spelling before using the portfolio for real inquiries; change all occurrences in index.html and script.js if necessary.

## Project links and image mapping

- Anderson Dental: the supplied ngrok live URL. Availability depends on the owner's tunnel being active.
- Skinza: the main shopping project with links to Arvantas and Tiny Comforts in its expandable section.
- Skinza now uses the supplied Skinza homepage screenshot. Tiny Comforts remains available as an additional e-commerce project link.
- Project cards use simple device frames with varied laptop, tablet, and phone arrangements. The frames display the supplied screenshots; narrow frames show cropped details of those screenshots.
- The project labels and hero eyebrow row requested for removal have been removed. All four project descriptions are revised, and the additional e-commerce heading is slightly bolder.
- Hover or keyboard focus gently zooms the complete device arrangement. Reduced-motion preferences disable the zoom.
- Real Estate Platform and Employee Hub are marked as local demos. Their supplied localhost URLs are preserved in expandable details. They only work when those separate applications are installed and running on the visitor's own device. Request-demo buttons prefill the contact form.
- This ZIP includes the portfolio source and images, not the source code or databases of the four showcased projects.

## Customize or host

Edit content directly in index.html. Change colors in the `:root` variables in styles.css. Upload the entire folder to any static web host, preserving the assets folder and relative paths. All fonts use a system font stack for reliable offline display.

The layout is original, inspired by the requested reference's clear personal introduction and portfolio hierarchy. Profile photos and project screenshots are the user-supplied assets.

## Latest layout updates

- Compact, centered project and team card groups.
- Centered Meet Our Team, Our Capabilities and What We Can Build headings.
- Team portraits use a narrower, less cropped frame with no text overlays.
- Team bios state Ali’s 3+ years and Aliya’s 2+ years of experience.
- All eight services appear as photo cards with titles. Business Website Development is replaced by Shopify Store Development. Original service visuals are expected in assets/services/.
- The yellow Why Work With Us section is removed.
- Checked at desktop, tablet and mobile widths; project carousel and all-projects controls work.

- Aliya’s Our Capabilities list includes AI Chatbot Development alongside API & Webhook Integrations, UI/UX Design, and AI Voice Agent Development.
- Meet Our Team cards use a subtle whole-card hover/focus zoom; reduced-motion preferences disable the motion.


## Quick update

- Team cards now show yellow experience lines directly under each name: Ali 3+ years, Aliya 2+ years.
- Footer tagline removed for a cleaner footer top row.
- Shopify Store Development service image refreshed to better match the service.
