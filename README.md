<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# 🧑‍💻 Zanark Domain — Portfolio

A dark, editorial-style personal portfolio for a web designer & developer. Built with pure HTML, CSS, and JavaScript. No frameworks, no installs — just open and impress.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

* 🎨 **Modern Editorial Design** — Dark aesthetic with bold accent colors and anime-inspired visuals
* 📱 **Fully Responsive** — Adapts cleanly from desktop down to mobile
* ✨ **Scroll Reveal Animations** — Every section fades and slides in via `IntersectionObserver` at 30% visibility
* 📊 **Animated Skill Bars** — Progress bars animate into view when scrolled to
* 🖱️ **Custom Scrollbar** — Styled scrollbar for a polished, consistent look
* 🧭 **Smooth Navigation** — Anchor links with smooth scroll behavior
* 📂 **Well-Structured Code** — Clean, maintainable separation of HTML, CSS, and JavaScript

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/Zeddy-Forreal/zanark-portfolio-website.git
cd zanark-portfolio-website
```

**2. Open in browser**

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**3. Make it yours**

Swap out the name, bio text, skill values, and images. Everything is clearly labeled in the HTML.

---

## 🌐 Live Demo

Try it here 👇
[https://zeddy-forreal.github.io/zanark-portfolio-website](https://zeddy-forreal.github.io/zanark-portfolio-website)

---

## 📁 File Structure

```
zanark-portfolio-website/
├── index.html            App markup and structure
├── style/
│   └── main.css          All styles — layout, animations, responsive
├── javascript/
│   └── main.js           Scroll reveal and skill bar animation
└── media/
    ├── pfp.png           Profile image
    └── wallpaper.png     Hero background image
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of `main.css`. Edit these to retheme the whole site:

```css
:root {
    --bg-dark: #070a13;
    --bg-card: #111827;
    --bg-card-hover: #1f2937;
    --accent: #00ff88;
    --accent-glow: rgba(0, 255, 136, 0.3);
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: rgba(255, 255, 255, 0.08);
    --font-heading: font1, sans-serif;
    --font-body: font2, sans-serif;
    --transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
