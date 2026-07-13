/**
 * Domain course data — 54 courses across 6 categories, matching the
 * Course schema (category/level/price/modules[].lessons[]).
 */

module.exports = [
  {
    "title": "HTML5 and CSS3 Modern Web Foundations",
    "slug": "html5-css3-modern-web-foundations",
    "category": "Frontend Development",
    "level": "Beginner",
    "price": 1,
    "shortDescription": "Semantic HTML, modern CSS layout, and responsive design from first principles.",
    "fullDescription": "Start here if you are new to the web. This course covers semantic markup, the box model, Flexbox, Grid, and building fully responsive layouts without a framework — the foundation every other frontend course builds on.",
    "instructor": "TechForge Faculty",
    "duration": "10 hours",
    "tags": [
      "HTML",
      "CSS",
      "Responsive Design",
      "Flexbox",
      "Grid"
    ],
    "modules": [
      {
        "title": "Module 1: Semantic HTML",
        "lessons": [
          {
            "title": "Document structure & semantic tags",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Document Structure & Semantic Tags\n\nEvery website you've ever visited is built from the same basic skeleton. This lesson teaches you to build that skeleton the right way — using **semantic HTML**, which describes what content *means*, not just how it looks.\n\n## Why \"Just Use a div\" Is a Trap\n\nYou could technically build an entire website using nothing but `<div>` tags with classes:\n\n```html\n<!-- ❌ Technically works, but tells nobody anything about the content -->\n<div class=\"header\">...</div>\n<div class=\"nav\">...</div>\n<div class=\"main-content\">...</div>\n<div class=\"footer\">...</div>\n```\n\nThis renders fine visually, but it's like labeling every box in your house \"box\" instead of \"kitchen,\" \"bedroom,\" \"garage.\" A `<div>` carries zero meaning — browsers, screen readers, and search engines have no idea what role it plays on the page.\n\n**Semantic HTML** replaces generic containers with tags that describe their purpose:\n\n```html\n<!-- ✅ Every tag tells you exactly what it is -->\n<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>\n```\n\n## The Core Semantic Landmarks\n\nThink of these as the \"rooms\" of your page:\n\n```html\n<body>\n  <header>\n    <h1>My Site</h1>\n    <nav>\n      <a href=\"/\">Home</a>\n      <a href=\"/about\">About</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <h2>Blog Post Title</h2>\n      <p>Content goes here...</p>\n    </article>\n\n    <aside>\n      <h3>Related Links</h3>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 My Site</p>\n  </footer>\n</body>\n```\n\n- **`<header>`** — introductory content, usually a logo, title, and navigation. A page can have more than one (e.g., a header inside an `<article>` too).\n- **`<nav>`** — a block of navigation links. Not every group of links needs `<nav>` — reserve it for major navigation blocks (main menu, footer links, breadcrumbs).\n- **`<main>`** — the primary content of the page. **There should only be one `<main>` per page**, and it should not be nested inside `<header>`, `<footer>`, `<article>`, or `<aside>`.\n- **`<article>`** — self-contained content that would make sense on its own if syndicated elsewhere (a blog post, a news story, a forum post).\n- **`<aside>`** — content tangentially related to the main content (a sidebar, a pull quote, related links).\n- **`<footer>`** — closing content, typically copyright, contact info, or site links.\n- **`<section>`** — a thematic grouping of content, generally expected to have its own heading. If a chunk of content doesn't need a heading, it's probably not a `<section>` — reach for `<div>` instead.\n\n## Why This Actually Matters (Not Just \"Best Practice\")\n\n**1. Screen readers use these as navigation landmarks.** A blind user navigating with a screen reader can jump directly to \"`<nav>`\" or \"`<main>`\" via keyboard shortcuts — skipping repetitive header content instead of tabbing through every link one at a time. Divs give them nothing to jump to.\n\n**2. Search engines weight semantic content differently.** Google's crawlers use these tags as signals about content structure and importance — an `<article>`'s content is understood to be the primary subject matter of the page, unlike a random `<div>`.\n\n**3. Future developers (including future you) understand the code instantly.** Six months from now, \"which div was the main content again?\" becomes \"oh, it's obviously the `<main>` tag.\"\n\n**Analogy:** Think of semantic HTML like labeling moving boxes \"Kitchen — Fragile\" instead of just \"Box 7.\" Both hold the same stuff, but one tells everyone handling it — including people who've never seen your house — exactly what to expect and how to treat it.\n\n## `<div>` and `<span>` Still Have a Job\n\nSemantic tags don't replace `<div>`/`<span>` entirely — they're still the right choice when you need a container purely for styling/layout purposes with no inherent meaning:\n\n```html\n<div class=\"card-grid\">\n  <!-- a purely visual wrapper for CSS Grid — no semantic meaning of its own -->\n  <article class=\"card\">...</article>\n  <article class=\"card\">...</article>\n</div>\n```\n\n**Rule of thumb:** reach for a semantic tag first; fall back to `<div>`/`<span>` only when no semantic tag fits the content's actual role.\n\n## A Complete, Realistic Example\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Blog</title>\n</head>\n<body>\n  <header>\n    <h1>Dev Notes</h1>\n    <nav>\n      <a href=\"/\">Home</a>\n      <a href=\"/archive\">Archive</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h2>Why Semantic HTML Matters</h2>\n        <p>Published <time datetime=\"2026-01-15\">January 15, 2026</time></p>\n      </header>\n      <p>Content of the blog post...</p>\n    </article>\n\n    <aside>\n      <h3>Popular Posts</h3>\n      <ul>\n        <li><a href=\"#\">CSS Grid Basics</a></li>\n      </ul>\n    </aside>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Dev Notes. All rights reserved.</p>\n  </footer>\n</body>\n</html>\n```\n\nNotice `<header>` appears twice — once for the whole page, once nested inside the `<article>` for just that post's title/date. This is valid; the meaning is scoped to whichever element it's nested in.\n\n## Key Takeaways\n\n- Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) describe what content *is*, not just how it looks — unlike generic `<div>`s.\n- Use exactly one `<main>` per page, and never nest it inside `<header>`, `<footer>`, or other landmark elements.\n- `<article>` is for standalone, syndication-worthy content; `<section>` is for thematic grouping that has its own heading; when neither fits, a `<div>` is still correct.\n- Semantic HTML isn't just a style preference — it directly improves screen reader navigation and SEO, at zero extra cost over using divs."
          },
          {
            "title": "Forms & accessible inputs",
            "duration": "15 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Forms & Accessible Inputs\n\nForms are how the web collects information — logins, checkouts, search boxes, sign-ups. Getting form HTML right isn't just about making it work visually; it's about making it work for *everyone*, including people using screen readers, keyboards only, or voice control.\n\n## The Anatomy of a Form\n\n```html\n<form action=\"/submit\" method=\"POST\">\n  <label for=\"email\">Email address</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n\n  <button type=\"submit\">Sign up</button>\n</form>\n```\n\nThree critical pieces work together here:\n- **`<form>`** wraps everything and defines where/how data gets submitted\n- **`<label>`** describes what an input is for\n- **`<input>`** (or `<select>`, `<textarea>`) actually collects the data\n\n## The `<label>`/`<input>` Connection Is Not Optional\n\nThis is the single most common accessibility mistake beginners make:\n\n```html\n<!-- ❌ Visually looks fine, but is functionally broken for accessibility -->\n<p>Email address</p>\n<input type=\"email\" name=\"email\">\n\n<!-- ✅ Properly connected via matching for/id -->\n<label for=\"email\">Email address</label>\n<input type=\"email\" id=\"email\" name=\"email\">\n```\n\n**Why the connection matters:**\n1. **Screen readers announce the label** when the input receives focus — without it, a screen reader user hears only \"edit text,\" with no idea what to type.\n2. **Clicking the label focuses the input** — a real usability win, especially for small checkboxes/radio buttons that are hard to click precisely.\n\n**Analogy:** An unlabeled input is like a blank form handed to someone with no idea what any field is for — you might be able to guess from visual placement, but a screen reader user (or someone zoomed in very far) can't see that context at all. The `for`/`id` pairing is the explicit, unambiguous connection that works regardless of how someone perceives the page.\n\n### Alternative: Wrapping the Input Inside the Label\n\n```html\n<label>\n  Email address\n  <input type=\"email\" name=\"email\">\n</label>\n```\n\nThis achieves the same connection implicitly (no `for`/`id` needed) and is a valid, common pattern — especially for checkboxes.\n\n## Choosing the Right Input Type\n\nHTML5 introduced many specialized input types beyond plain text — using the right one gives you free validation and better mobile keyboards, at zero JavaScript cost:\n\n```html\n<input type=\"email\">    <!-- validates email format, shows @-optimized mobile keyboard -->\n<input type=\"tel\">      <!-- shows numeric phone keypad on mobile -->\n<input type=\"number\">   <!-- numeric keypad, with up/down steppers -->\n<input type=\"date\">     <!-- native date picker -->\n<input type=\"password\"> <!-- masks input, offers password managers a hook -->\n<input type=\"url\">      <!-- validates URL format -->\n<input type=\"search\">   <!-- semantic hint that this is a search field -->\n```\n\n```html\n<!-- ❌ Missing out on free validation and better mobile UX -->\n<input type=\"text\" placeholder=\"Enter your email\">\n\n<!-- ✅ Free validation, correct mobile keyboard -->\n<input type=\"email\" placeholder=\"you@example.com\">\n```\n\n## Built-In Validation Attributes\n\n```html\n<input type=\"text\" required minlength=\"3\" maxlength=\"20\">\n<input type=\"number\" min=\"18\" max=\"100\">\n<input type=\"email\" required>\n<input type=\"text\" pattern=\"[A-Za-z]{3,}\" title=\"At least 3 letters\">\n```\n\nThese give you real client-side validation without writing a single line of JavaScript — the browser will refuse to submit the form and show a native error message if these constraints aren't met.\n\n## Placeholder Is Not a Replacement for a Label\n\n```html\n<!-- ❌ Common mistake — placeholder disappears once you start typing, and\n     many screen readers don't announce it the same way as a real label -->\n<input type=\"text\" placeholder=\"Full name\">\n\n<!-- ✅ Real label + optional placeholder as supplementary hint text -->\n<label for=\"name\">Full name</label>\n<input type=\"text\" id=\"name\" placeholder=\"e.g. Jane Smith\">\n```\n\nPlaceholders are meant for *format hints* (\"e.g. Jane Smith\"), not for replacing the field's actual name — once a user starts typing, the placeholder vanishes, and they've lost any reminder of what the field was for.\n\n## Grouping Related Fields with fieldset and legend\n\n```html\n<fieldset>\n  <legend>Shipping Address</legend>\n\n  <label for=\"street\">Street</label>\n  <input type=\"text\" id=\"street\" name=\"street\">\n\n  <label for=\"city\">City</label>\n  <input type=\"text\" id=\"city\" name=\"city\">\n</fieldset>\n```\n\n`<fieldset>` groups related inputs, and `<legend>` labels the group as a whole — announced by screen readers before diving into the individual fields, giving context (\"you are now in the Shipping Address section\").\n\n## Radio Buttons and Checkboxes: Getting the Grouping Right\n\n```html\n<fieldset>\n  <legend>Preferred contact method</legend>\n\n  <label><input type=\"radio\" name=\"contact\" value=\"email\"> Email</label>\n  <label><input type=\"radio\" name=\"contact\" value=\"phone\"> Phone</label>\n</fieldset>\n```\n\nThe shared `name=\"contact\"` attribute is what makes these radio buttons mutually exclusive — the browser only allows one to be selected within the same `name` group.\n\n## Key Takeaways\n\n- Every `<input>` needs a real `<label>`, connected via matching `for`/`id` attributes (or by wrapping the input inside the label) — this isn't optional polish, it's a functional requirement for screen reader users.\n- Use specific input types (`email`, `tel`, `date`, `number`) instead of generic `text` — you get free validation and better mobile keyboards.\n- Placeholders are for format hints, not label replacements — they disappear the moment someone starts typing.\n- `<fieldset>` + `<legend>` group related fields with an announced heading, and shared `name` attributes are what make radio button groups mutually exclusive."
          },
          {
            "title": "HTML5 media & embeds",
            "duration": "10 min",
            "type": "video",
            "isPreview": false,
            "content": "# HTML5 Media & Embeds\n\nBefore HTML5, embedding video or audio required third-party plugins like Flash — a security nightmare that's now completely extinct. This lesson covers native, plugin-free media embedding.\n\n*(This lesson pairs with the accompanying video walkthrough — the notes below stand alone as a complete reference.)*\n\n## The `<video>` Element\n\n```html\n<video controls width=\"640\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.webm\" type=\"video/webm\">\n  Your browser doesn't support HTML5 video.\n</video>\n```\n\nKey attributes:\n- **`controls`** — shows the browser's native play/pause/volume UI. Without it, the video is invisible controls-wise (useful for background videos you control via JavaScript).\n- **Multiple `<source>` tags** — the browser picks the first format it supports, letting you offer fallbacks across formats (MP4 is universally supported; WebM is often smaller but not supported everywhere).\n- **Fallback text** — anything inside `<video>` after the `<source>` tags only shows if the browser can't play video at all (extremely rare today, but good practice).\n\n### Common Video Attributes\n\n```html\n<video controls autoplay muted loop poster=\"thumbnail.jpg\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>\n```\n\n- **`autoplay`** — starts playing immediately. **Browsers block this unless `muted` is also present** — this is a deliberate anti-annoyance policy, not a bug.\n- **`muted`** — starts with no sound (required to pair with `autoplay` in modern browsers).\n- **`loop`** — restarts automatically when it ends.\n- **`poster`** — an image shown before the video plays (the \"thumbnail\").\n\n**Analogy:** `autoplay` without `muted` is like a stranger blasting music from their phone in a quiet room — browsers now require you to \"ask permission\" (mute first) before making noise automatically, because it's such a common source of user annoyance.\n\n## The `<audio>` Element\n\nWorks almost identically to `<video>`, just without a visual frame:\n\n```html\n<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  <source src=\"podcast.ogg\" type=\"audio/ogg\">\n  Your browser doesn't support HTML5 audio.\n</audio>\n```\n\n## Responsive Media: Making Video Scale With the Page\n\nBy default, a video's dimensions are fixed by its `width`/`height` attributes or its native resolution. To make it responsive:\n\n```html\n<style>\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n</style>\n\n<video controls width=\"640\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>\n```\n\n`max-width: 100%` ensures the video never overflows its container on small screens, while `height: auto` preserves the correct aspect ratio as it scales down.\n\n## Embedding External Content With `<iframe>`\n\nFor content hosted elsewhere (YouTube, Vimeo, Google Maps, CodePen demos), you use `<iframe>` — essentially a \"window\" into another webpage embedded inside yours:\n\n```html\n<iframe\n  width=\"560\"\n  height=\"315\"\n  src=\"https://www.youtube.com/embed/VIDEO_ID\"\n  title=\"YouTube video player\"\n  frameborder=\"0\"\n  allowfullscreen>\n</iframe>\n```\n\n**Always include a meaningful `title` attribute** on iframes — screen readers announce it to describe what the embedded content is, since they can't \"see\" inside the iframe's contents directly.\n\n### Making Iframes Responsive\n\nUnlike `<video>`, iframes don't automatically preserve aspect ratio when scaled. A common technique uses a wrapper with padding based on aspect ratio:\n\n```html\n<style>\n  .video-wrapper {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 aspect ratio */\n    height: 0;\n    overflow: hidden;\n  }\n  .video-wrapper iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n</style>\n\n<div class=\"video-wrapper\">\n  <iframe src=\"https://www.youtube.com/embed/VIDEO_ID\" title=\"Demo video\"></iframe>\n</div>\n```\n\nThe `56.25%` comes from the math of a 16:9 ratio (9 ÷ 16 = 0.5625) — this \"padding trick\" forces the wrapper to maintain that ratio at any width, which the iframe then fills completely.\n\n## Accessibility Considerations for Media\n\n- **Captions/subtitles:** use the `<track>` element for accessible captions:\n```html\n<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <track src=\"captions-en.vtt\" kind=\"captions\" srclang=\"en\" label=\"English\">\n</video>\n```\n- **Never rely on autoplay video/audio to convey essential information** — some users have autoplay disabled entirely, and screen reader users may not perceive video content at all without captions or a transcript.\n\n## Key Takeaways\n\n- `<video>` and `<audio>` are native, plugin-free HTML5 elements — no Flash or third-party players required for basic playback.\n- `autoplay` requires `muted` in modern browsers — this is intentional anti-annoyance behavior, not something to work around.\n- `<iframe>` embeds external content (YouTube, maps); always give it a descriptive `title` for screen reader users.\n- Iframes don't auto-preserve aspect ratio on resize — use the padding-percentage wrapper trick for responsive embeds.\n- Add `<track kind=\"captions\">` for accessible video content whenever captions are available."
          },
          {
            "title": "Accessibility (a11y) basics",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Accessibility (a11y) Basics\n\n\"a11y\" is shorthand for \"accessibility\" (a, 11 letters, y). This lesson isn't a side topic — it's a foundational skill that separates hobbyist HTML from professional, production-ready HTML. Roughly 1 in 6 people worldwide live with some form of disability that affects how they use the web.\n\n## Why This Matters Beyond \"Being Nice\"\n\n- **It's often legally required.** Many countries (including the US via the ADA, and the EU via the European Accessibility Act) have legal requirements for web accessibility, especially for government and large commercial sites.\n- **It improves the experience for everyone**, not just people with disabilities — captions help in noisy environments, good color contrast helps in bright sunlight, keyboard navigation helps power users move faster than a mouse ever could.\n- **Semantic HTML (from Lesson 1) already gets you most of the way there** — accessibility isn't a separate skill bolted on afterward; it's largely a byproduct of writing correct, meaningful HTML in the first place.\n\n## The Four Pillars of Web Accessibility (POUR)\n\nA widely-used framework from the Web Content Accessibility Guidelines (WCAG):\n\n1. **Perceivable** — can users perceive the content, regardless of sense (sight, hearing)?\n2. **Operable** — can users operate the interface, regardless of input method (mouse, keyboard, voice, switch device)?\n3. **Understandable** — is the content and interface predictable and clear?\n4. **Robust** — does it work reliably across different browsers and assistive technologies?\n\n## Keyboard Navigation: The Universal Test\n\n**A genuinely useful habit:** try navigating your own website using only the **Tab** key (and Enter/Space to activate things), with your mouse unplugged (or just not touching it). This single test reveals an enormous number of accessibility problems instantly.\n\n```html\n<!-- ❌ Not keyboard accessible — a div has no built-in focus/keyboard behavior -->\n<div onclick=\"submitForm()\">Submit</div>\n\n<!-- ✅ A real button gets keyboard focus, Enter/Space activation, and\n     screen reader \"button\" role automatically, for free -->\n<button onclick=\"submitForm()\">Submit</button>\n```\n\n**Analogy:** Building an interactive element out of a `<div>` instead of a `<button>` is like building a light switch that only responds to being touched with a very specific finger, in a very specific spot — it might work for you, testing with a mouse, but it silently fails for anyone using a different \"input device\" (keyboard, switch control, voice command).\n\n## Focus Indicators: Never Remove Them\n\n```css\n/* ❌ A shockingly common mistake that breaks keyboard navigation entirely */\n*:focus {\n  outline: none;\n}\n\n/* ✅ Customize the focus style if the default doesn't fit your design,\n   but never remove it */\nbutton:focus {\n  outline: 2px solid #4F46E5;\n  outline-offset: 2px;\n}\n```\n\nWithout a visible focus indicator, a keyboard user tabbing through your page has no idea which element is currently \"selected\" — they're navigating blind.\n\n## Alt Text for Images\n\n```html\n<!-- Decorative image, no meaningful content -->\n<img src=\"divider.png\" alt=\"\">\n\n<!-- Meaningful image, describe what it conveys -->\n<img src=\"chart.png\" alt=\"Bar chart showing revenue growth from $10k to $50k over 2025\">\n\n<!-- ❌ Common mistake: alt text that just repeats \"image of\" or is left generic -->\n<img src=\"chart.png\" alt=\"chart\">\n```\n\n**The test for good alt text:** if you read the alt text aloud with your eyes closed, would you understand what the image conveys in context? An empty `alt=\"\"` is actually the *correct* choice for purely decorative images — it tells screen readers to skip the image entirely rather than announcing an unhelpful \"image\" with no description.\n\n## Color Contrast\n\nText needs sufficient contrast against its background to be readable, especially for users with low vision or color blindness. WCAG defines minimum contrast ratios (4.5:1 for normal text, 3:1 for large text, in the standard \"AA\" level).\n\n```css\n/* ❌ Low contrast — light gray on white is hard to read for many users */\np {\n  color: #cccccc;\n  background: #ffffff;\n}\n\n/* ✅ Sufficient contrast */\np {\n  color: #374151; /* dark slate gray */\n  background: #ffffff;\n}\n```\n\nNever rely on color *alone* to convey information either — a red vs. green form validation state should also include an icon or text, since roughly 1 in 12 men have some form of color vision deficiency.\n\n## ARIA: The Escape Hatch, Not the First Tool\n\nARIA (Accessible Rich Internet Applications) attributes let you add accessibility information to elements. But there's a well-known guiding principle:\n\n> **The first rule of ARIA is: don't use ARIA if a native HTML element already does the job.**\n\n```html\n<!-- ❌ Reinventing a button with ARIA, badly -->\n<div role=\"button\" tabindex=\"0\" onclick=\"submit()\">Submit</div>\n\n<!-- ✅ Just use the real button — it already has role, keyboard support, and focus built in -->\n<button onclick=\"submit()\">Submit</button>\n```\n\nARIA is genuinely necessary for complex custom widgets (a custom dropdown, a tab interface) that have no native HTML equivalent — but reaching for it before exhausting native HTML options usually creates more bugs than it fixes.\n\n## Skip Links\n\nFor sites with long navigation menus, a \"skip to main content\" link lets keyboard users bypass repetitive nav on every single page load:\n\n```html\n<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n\n<nav>...</nav>\n\n<main id=\"main-content\">...</main>\n```\n\n```css\n.skip-link {\n  position: absolute;\n  top: -40px; /* hidden above the viewport by default */\n  left: 0;\n}\n.skip-link:focus {\n  top: 0; /* becomes visible only when tabbed to */\n}\n```\n\n## Key Takeaways\n\n- Accessibility largely falls out of writing correct semantic HTML — using real `<button>`s and `<label>`s solves most problems before ARIA is even needed.\n- Test keyboard navigation regularly (unplug your mouse) — it's the single fastest way to catch real accessibility gaps.\n- Never remove focus outlines with `outline: none` — customize them instead, but always keep some visible indicator.\n- Write alt text that describes meaning, not just \"image of X\" — and use `alt=\"\"` intentionally for purely decorative images.\n- ARIA is a powerful but secondary tool — reach for native HTML elements first; they come with accessibility built in for free."
          }
        ]
      },
      {
        "title": "Module 2: CSS Fundamentals",
        "lessons": [
          {
            "title": "The box model, in depth",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# The Box Model, In Depth\n\nEvery single element on a webpage is a rectangular box, whether it looks like one or not. Understanding exactly how that box is sized — and where the \"extra\" space comes from — resolves what is probably the single most common source of CSS confusion for beginners.\n\n## The Four Layers of Every Box\n\nFrom the inside out, every element consists of:\n\n1. **Content** — the actual text/image/whatever is inside\n2. **Padding** — transparent space *inside* the border, between content and border\n3. **Border** — a visible (or invisible) line around the padding\n4. **Margin** — transparent space *outside* the border, separating this element from its neighbors\n\n```css\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n  margin: 10px;\n}\n```\n\n**Analogy:** Think of a framed photograph on a wall. The photo itself is the **content**. The mat board around the photo, inside the frame, is the **padding**. The physical wooden frame is the **border**. And the empty wall space you deliberately leave between this frame and the next one is the **margin**.\n\n## The Trap: What \"width: 200px\" Actually Means\n\nThis is the single biggest box-model gotcha in CSS. By default, `width` and `height` only apply to the **content** — padding and border get *added on top*, making the element's actual rendered size bigger than what you specified.\n\n```css\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}\n/* Actual rendered width = 200 (content) + 20+20 (padding) + 5+5 (border) = 250px !! */\n```\n\nThis surprises nearly every beginner at least once — you set `width: 200px`, add some padding for breathing room, and suddenly your layout is broken because the element is wider than you expected.\n\n## The Fix: box-sizing: border-box\n\n```css\n.box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}\n/* Now the TOTAL rendered width is exactly 200px — padding and border\n   are subtracted from the content area automatically, not added on top */\n```\n\nWith `border-box`, `width`/`height` describe the **total** size including padding and border — the content area simply shrinks to make room. This matches how most designers and developers intuitively expect sizing to work.\n\n### The Universal Fix Almost Every Project Uses\n\n```css\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n```\n\nThis single rule at the top of your stylesheet applies `border-box` sizing to literally everything on the page, eliminating an entire category of layout surprises. This is so universally recommended that you'll see it at the top of nearly every professional CSS codebase and framework (Tailwind includes it automatically, for instance).\n\n## Margin Collapsing: A Quirk Worth Knowing\n\nVertical margins between adjacent block-level elements don't simply add together — they **collapse** to the larger of the two values.\n\n```css\n.box-a { margin-bottom: 30px; }\n.box-b { margin-top: 20px; }\n/* The actual gap between box-a and box-b is 30px (the larger value),\n   NOT 50px (the sum) — this trips up nearly everyone at least once */\n```\n\nThis only happens with vertical margins on normal block-level elements in normal document flow — it doesn't apply to padding, to horizontal margins, or to elements using Flexbox/Grid (which we'll cover in Module 3, and which sidesteps this quirk entirely).\n\n## Shorthand Syntax for Padding and Margin\n\n```css\n/* One value: all four sides */\npadding: 10px;\n\n/* Two values: vertical | horizontal */\npadding: 10px 20px;\n\n/* Three values: top | horizontal | bottom */\npadding: 10px 20px 15px;\n\n/* Four values: top | right | bottom | left (clockwise) */\npadding: 10px 20px 15px 5px;\n```\n\nThe same shorthand pattern applies identically to `margin` and `border-width`.\n\n## Negative Margins: A Real, Intentional Technique\n\nUnlike padding (which can't be negative), margins *can* be negative — and this is a legitimate technique, not a mistake, used to intentionally pull elements closer together or create overlap effects:\n\n```css\n.overlapping-badge {\n  margin-top: -10px; /* pulls the element upward, overlapping its sibling above */\n}\n```\n\n## Inspecting the Box Model in DevTools\n\nEvery modern browser's DevTools includes a visual box model diagram (in Chrome/Edge: right-click an element → Inspect → look at the \"Computed\" or \"Layout\" panel). This shows you the exact content/padding/border/margin values currently applied — an essential debugging habit whenever a layout looks \"off\" and you're not sure why.\n\n## Key Takeaways\n\n- Every element is a box made of content, padding, border, and margin, from the inside out.\n- By default, `width`/`height` apply only to content — padding and border add on top of that, making the visual size bigger than the declared value.\n- `box-sizing: border-box` makes `width`/`height` describe the total size including padding and border — apply it universally with `*, *::before, *::after { box-sizing: border-box; }`.\n- Vertical margins between block elements collapse to the larger value rather than summing — this doesn't apply to Flexbox/Grid layouts.\n- Use browser DevTools' box model diagram to debug unexpected sizing — it's faster than guessing."
          },
          {
            "title": "Selectors, specificity & the cascade",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Selectors, Specificity & the Cascade\n\n\"Why isn't my CSS applying?\" is one of the most common frustrations for beginners — and it almost always comes down to misunderstanding **specificity** and **the cascade**. This lesson demystifies both completely.\n\n## Selector Types, From Broad to Specific\n\n```css\n/* Element selector — targets ALL <p> tags */\np { color: black; }\n\n/* Class selector — targets elements with class=\"highlight\" */\n.highlight { color: yellow; }\n\n/* ID selector — targets the ONE element with id=\"header\" */\n#header { color: blue; }\n\n/* Attribute selector — targets elements with a specific attribute/value */\ninput[type=\"email\"] { border-color: green; }\n\n/* Pseudo-class — targets elements in a particular state */\nbutton:hover { background: gray; }\n\n/* Descendant combinator — targets <a> tags anywhere inside <nav> */\nnav a { text-decoration: none; }\n\n/* Direct child combinator — targets <li> tags that are DIRECT children of <ul> */\nul > li { list-style: none; }\n```\n\n## The Cascade: How Conflicting Rules Get Resolved\n\n\"Cascade\" refers to the process CSS uses when multiple rules target the same element with conflicting properties. The browser resolves conflicts using three factors, checked **in this order**:\n\n1. **Importance** — `!important` declarations win (almost) no matter what\n2. **Specificity** — more specific selectors win over less specific ones\n3. **Source order** — if specificity is tied, whichever rule comes *later* in the stylesheet wins\n\n## Specificity: The Scoring System\n\nEvery selector gets a specificity \"score\" calculated from how many of each selector type it contains:\n\n| Selector type | Points |\n|---|---|\n| Inline style (`style=\"...\"`) | 1000 |\n| ID selector (`#id`) | 100 |\n| Class, attribute, pseudo-class (`.class`, `[type]`, `:hover`) | 10 |\n| Element, pseudo-element (`p`, `::before`) | 1 |\n\n```css\np { color: black; }                  /* specificity: 0-0-1 → 1 point */\n.text { color: blue; }               /* specificity: 0-1-0 → 10 points */\n#main .text { color: green; }        /* specificity: 1-1-0 → 110 points */\n#main p.text { color: red; }         /* specificity: 1-1-1 → 111 points, WINS */\n```\n\nHigher total score wins, **regardless of the order the rules appear in the file** — this is the part that trips people up. A single ID selector (100 points) will beat ten class selectors combined... actually no, ten classes (10 points each = 100) would tie an ID, and specificity is calculated per-category, not just summed as a flat number — but the practical takeaway holds: ID selectors are dramatically more powerful than class selectors, which is one major reason experienced developers avoid styling with IDs.\n\n**Analogy:** Think of specificity like a court hierarchy. A ruling from a Supreme Court (ID selector) overrides a ruling from a local court (class selector), regardless of which ruling happened first chronologically. Only when two rulings come from courts of *equal* rank does \"who ruled more recently\" (source order) become the tiebreaker.\n\n## Why Experienced Developers Avoid ID Selectors and !important\n\n```css\n/* ❌ Once you style with an ID, only another ID (or !important) can override it */\n#submit-button { background: blue; }\n\n/* Now this class-based override is powerless, no matter where it's placed */\n.submit-button--danger { background: red; } /* loses — 10 points vs 100 */\n```\n\nThis is why most modern CSS methodologies (BEM, utility-first frameworks like Tailwind) rely almost entirely on class selectors — keeping every rule at roughly the same specificity level makes the cascade predictable, and later overrides just require being later in source order rather than fighting a specificity war.\n\n`!important` is even more extreme — it overrides normal specificity rules almost entirely, and once you reach for it, the only way to override *that* rule later is with another `!important` (creating a genuinely difficult-to-maintain arms race). Reserve it for rare, deliberate exceptions — never as a default habit for \"making styles stick.\"\n\n## Inheritance: Some Properties Pass Down Automatically\n\nCertain CSS properties (mostly text-related: `color`, `font-family`, `font-size`, `line-height`) automatically inherit from parent to child, unless explicitly overridden:\n\n```css\nbody {\n  font-family: sans-serif;\n  color: #333;\n}\n/* Every element inside <body> inherits this font and color automatically,\n   unless a more specific rule overrides it for that element */\n```\n\nOther properties (like `border`, `margin`, `padding`, `background`) do **not** inherit — they'd cause chaos if every nested element automatically got the same border as its parent.\n\nYou can force inheritance explicitly when needed:\n\n```css\n.child {\n  border: inherit; /* explicitly copy the parent's border, even though it normally wouldn't */\n}\n```\n\n## Pseudo-classes and Pseudo-elements: What's the Difference?\n\n```css\n/* Pseudo-CLASS — targets an element in a certain STATE (single colon) */\na:hover { color: red; }\ninput:focus { border-color: blue; }\nli:first-child { font-weight: bold; }\n\n/* Pseudo-ELEMENT — targets a sub-part of an element that doesn't exist\n   in the HTML itself (double colon, by modern convention) */\np::first-line { font-weight: bold; }\n.quote::before { content: \"\"\"; }\n```\n\nPseudo-classes select an *existing* element based on its state or position; pseudo-elements let you style (or even generate) a *part* of an element that has no dedicated HTML tag of its own.\n\n## Key Takeaways\n\n- The cascade resolves conflicting rules using importance, then specificity, then source order — in that exact priority.\n- Specificity is calculated from inline styles (1000) > IDs (100) > classes/attributes/pseudo-classes (10) > elements (1) — higher wins regardless of file position.\n- Avoid styling with ID selectors and `!important` as defaults — they make later overrides difficult and break the predictable cascade that class-based styling relies on.\n- Text-related properties (`color`, `font-family`) inherit from parent to child automatically; box-related properties (`border`, `margin`, `padding`) do not."
          },
          {
            "title": "Typography & spacing systems",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Typography & Spacing Systems\n\nGood typography is one of the highest-leverage things you can learn in CSS — it's the difference between a design that looks amateur and one that looks professionally crafted, often without touching color or layout at all.\n\n## The Building Blocks of Typography\n\n```css\np {\n  font-family: \"Inter\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  letter-spacing: 0;\n}\n```\n\n- **`font-family`** — always provide a fallback stack, since a custom font might fail to load\n- **`font-size`** — the base size of the text\n- **`font-weight`** — how bold the text is (400 = normal, 700 = bold; many fonts support values like 300, 500, 600, 900)\n- **`line-height`** — vertical spacing between lines of text (covered in depth below)\n- **`letter-spacing`** — horizontal spacing between individual characters\n\n## Line Height: The Most Underrated Property in CSS\n\n`line-height` controls the vertical space each line of text occupies — and getting it wrong is one of the most common reasons body text \"feels\" cramped or hard to read, even when the font size itself is fine.\n\n```css\n/* ❌ Too tight — lines feel cramped, hard to track while reading */\np { line-height: 1; }\n\n/* ✅ Comfortable reading rhythm for body text */\np { line-height: 1.5; }\n\n/* Headings can be tighter, since they're short and don't need as much\n   breathing room between lines */\nh1 { line-height: 1.1; }\n```\n\n**Analogy:** Line height is like the spacing between rows of seats in a movie theater. Too tight, and people feel cramped and it's hard to distinguish one row from the next. Too loose, and the rows feel disconnected from each other. Body text generally wants 1.4–1.6x its font size for comfortable reading.\n\n## Unitless Line Height (Best Practice)\n\n```css\n/* ❌ Fixed pixel line-height doesn't scale properly if font-size changes\n   on a child element — the line-height stays locked at 24px regardless */\np { font-size: 16px; line-height: 24px; }\n\n/* ✅ Unitless value — always relative to that element's own font-size,\n   even if a nested element has a different font-size */\np { font-size: 16px; line-height: 1.5; } /* computes to 24px here, but\n   correctly recalculates for any nested element with a different size */\n```\n\nThis is a genuinely important best practice — unitless `line-height` is one of those small habits that prevents subtle bugs down the line as your CSS grows more complex.\n\n## Font Size Units: px vs rem vs em\n\n```css\n/* px — absolute, fixed size, ignores user's browser font preference */\np { font-size: 16px; }\n\n/* em — relative to the PARENT element's font-size (compounds when nested!) */\np { font-size: 1.2em; }\n\n/* rem — relative to the ROOT (<html>) element's font-size — the modern default */\np { font-size: 1rem; }\n```\n\n**The critical difference between `em` and `rem`:** `em` is relative to its *immediate parent*, which means nested elements can compound unexpectedly:\n\n```css\n/* ❌ em compounding trap */\n.parent { font-size: 1.2em; }       /* 1.2 × 16px = 19.2px */\n.parent .child { font-size: 1.2em; } /* 1.2 × 19.2px = 23px, not 19.2px! */\n```\n\n`rem` avoids this entirely — it's always relative to the root `<html>` font-size (typically 16px by default), regardless of nesting depth. **Modern best practice: use `rem` for font sizes and most spacing, reserving `em` for cases where you specifically want a value to scale with its local parent (like padding that should scale proportionally with a button's own font-size).**\n\n## Respecting User Font Size Preferences\n\nUsing `rem`/`em` (rather than fixed `px`) means your entire layout respects a user's browser-level font size preference (Settings → Accessibility → larger text) — an important accessibility consideration for users with low vision.\n\n## Building a Type Scale\n\nRather than picking font sizes arbitrarily, professional designs use a consistent **type scale** — a set of sizes related by a consistent ratio:\n\n```css\n:root {\n  --text-xs: 0.75rem;   /* 12px */\n  --text-sm: 0.875rem;  /* 14px */\n  --text-base: 1rem;    /* 16px */\n  --text-lg: 1.125rem;  /* 18px */\n  --text-xl: 1.25rem;   /* 20px */\n  --text-2xl: 1.5rem;   /* 24px */\n  --text-3xl: 1.875rem; /* 30px */\n  --text-4xl: 2.25rem;  /* 36px */\n}\n\nh1 { font-size: var(--text-4xl); }\nh2 { font-size: var(--text-3xl); }\np { font-size: var(--text-base); }\n```\n\nUsing CSS custom properties (variables) for your type scale means the entire design stays consistent, and adjusting the whole system later (e.g., slightly increasing all sizes) means changing values in one place.\n\n## Building a Spacing System (Same Principle, Applied to Layout)\n\n```css\n:root {\n  --space-1: 0.25rem;  /* 4px */\n  --space-2: 0.5rem;   /* 8px */\n  --space-3: 0.75rem;  /* 12px */\n  --space-4: 1rem;     /* 16px */\n  --space-6: 1.5rem;   /* 24px */\n  --space-8: 2rem;     /* 32px */\n}\n\n.card {\n  padding: var(--space-4);\n  margin-bottom: var(--space-6);\n}\n```\n\nRandom, one-off spacing values (`margin: 13px`, `padding: 22px` scattered throughout a codebase) are one of the biggest tells of an inexperienced design system — a constrained spacing scale keeps everything visually consistent and dramatically speeds up decision-making as a project grows (\"is this a space-4 gap or a space-6 gap?\" is a much faster question than inventing a new pixel value every time).\n\n## Key Takeaways\n\n- Unitless `line-height` (like `1.5`) scales correctly with any nested font-size; fixed pixel line-heights don't.\n- Body text generally reads best around 1.4–1.6x line-height; headings can be tighter since they're short.\n- Prefer `rem` over `px` for font sizes — it respects user accessibility preferences and avoids the `em` nesting-compounding trap.\n- Build a consistent type scale and spacing scale using CSS custom properties, rather than picking arbitrary pixel values project-wide."
          },
          {
            "title": "Colors, gradients & modern CSS units",
            "duration": "13 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Colors, Gradients & Modern CSS Units\n\nCSS gives you several ways to define colors and sizes — this lesson covers the full toolkit, and specifically the *modern* approaches that have become standard in professional CSS over the past few years.\n\n## Color Formats\n\n```css\n/* Hex — most common, compact */\n.box { color: #4F46E5; }\n\n/* rgb() — useful when you need to reason in red/green/blue values */\n.box { color: rgb(79, 70, 229); }\n\n/* rgb() with alpha (transparency) */\n.box { color: rgb(79 70 229 / 0.5); } /* modern space-separated syntax */\n\n/* hsl() — Hue, Saturation, Lightness — often the most INTUITIVE for\n   designers, since adjusting \"lightness\" to make a color lighter/darker\n   is more predictable than guessing hex values */\n.box { color: hsl(243, 75%, 59%); }\n```\n\n**Why HSL is worth learning even if hex is more common:** if you want a slightly darker version of a brand color, with hex you're essentially guessing new digits. With HSL, you just decrease the lightness percentage — `hsl(243, 75%, 59%)` → `hsl(243, 75%, 45%)` is a predictable, understandable change.\n\n## Modern Alpha Transparency Syntax\n\n```css\n/* Older syntax — still works, but comma-separated */\n.overlay { background: rgba(0, 0, 0, 0.5); }\n\n/* Modern syntax — space-separated, slash before alpha */\n.overlay { background: rgb(0 0 0 / 0.5); }\n```\n\nBoth work identically; the modern space-separated syntax is what you'll increasingly see in newer codebases and is worth being comfortable reading even if you still write the older style out of habit.\n\n## Gradients\n\n```css\n/* Linear gradient — color transition along a straight line */\n.hero {\n  background: linear-gradient(to right, #4F46E5, #10B981);\n}\n\n/* Angle-based direction */\n.hero {\n  background: linear-gradient(135deg, #4F46E5, #10B981);\n}\n\n/* Multiple color stops */\n.rainbow {\n  background: linear-gradient(to right, red, orange, yellow, green, blue);\n}\n\n/* Radial gradient — radiates outward from a center point */\n.spotlight {\n  background: radial-gradient(circle, white, black);\n}\n```\n\n**Analogy:** A linear gradient is like a sunset — colors smoothly blending in one direction across the sky. A radial gradient is like a spotlight or a ripple in water — colors radiating outward from a central point.\n\n### Gradient Text (A Popular Modern Effect)\n\n```css\n.gradient-text {\n  background: linear-gradient(to right, #4F46E5, #10B981);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n```\n\nThis clips the gradient background to the exact shape of the text characters, then makes the actual text color transparent so the gradient shows through — a technique you've likely seen on countless modern marketing sites.\n\n## Modern CSS Length Units\n\nBeyond `px`, `em`, and `rem` (covered in the previous lesson), CSS offers units tied to the viewport itself:\n\n```css\n.hero {\n  height: 100vh;  /* 100% of the VIEWPORT height */\n  width: 100vw;   /* 100% of the viewport width */\n}\n\n.responsive-text {\n  font-size: 5vw; /* scales directly with viewport width — can feel jumpy at extremes */\n}\n```\n\n- **`vh`** — 1% of the viewport's height\n- **`vw`** — 1% of the viewport's width\n- **`vmin`/`vmax`** — 1% of whichever viewport dimension is smaller/larger — useful for sizing things consistently regardless of orientation\n\n### The Modern Sweet Spot: clamp()\n\n```css\nh1 {\n  /* clamp(minimum, preferred, maximum) */\n  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);\n}\n```\n\n`clamp()` lets a value scale fluidly with the viewport (like `vw`) while never going below a minimum or above a maximum — solving `vw`'s biggest weakness (text becoming unreadably tiny on small screens, or absurdly huge on large ones) without needing multiple media queries.\n\n**How to read this:** the font-size will be `4vw + 1rem`, UNLESS that computed value is smaller than `1.5rem` (in which case it uses `1.5rem`) or larger than `3rem` (in which case it uses `3rem`). This single line replaces what used to require several separate media query breakpoints.\n\n## Percentage Units: Relative to What, Exactly?\n\nPercentages are relative to different things depending on the property:\n\n```css\n.box {\n  width: 50%;   /* 50% of the PARENT's width */\n  height: 50%;  /* 50% of the PARENT's height (only works if parent has a defined height) */\n  padding: 10%; /* 10% of the PARENT's WIDTH — yes, even for top/bottom padding! */\n}\n```\n\nThat last one surprises people — vertical padding/margin percentages are calculated from the parent's *width*, not height, due to a quirk in how the CSS specification was originally written. This is actually leveraged intentionally in some aspect-ratio techniques (like the iframe wrapper trick from an earlier lesson).\n\n## CSS Custom Properties (Variables) for Colors\n\n```css\n:root {\n  --color-primary: #4F46E5;\n  --color-primary-dark: #4338CA;\n  --color-success: #10B981;\n}\n\n.button {\n  background: var(--color-primary);\n}\n.button:hover {\n  background: var(--color-primary-dark);\n}\n```\n\nDefining your color palette as custom properties on `:root` means every use of that color references a single source of truth — rebrand your primary color, and you change it in exactly one place instead of hunting through every file.\n\n## Key Takeaways\n\n- HSL colors are often more intuitive to adjust than hex, since changing lightness/saturation predictably lightens or darkens a color.\n- Linear gradients transition along a line; radial gradients radiate outward from a point — both accept multiple color stops.\n- Viewport units (`vh`, `vw`) size relative to the browser window; `clamp(min, preferred, max)` gives you fluid, responsive sizing without needing multiple media queries.\n- Vertical padding/margin percentages are calculated from the *parent's width*, not height — a genuine CSS quirk worth remembering.\n- Define your color palette as CSS custom properties on `:root` for a single source of truth across your whole stylesheet."
          }
        ]
      },
      {
        "title": "Module 3: Modern Layout",
        "lessons": [
          {
            "title": "Flexbox from scratch",
            "duration": "20 min",
            "type": "video",
            "isPreview": false,
            "content": "# Flexbox From Scratch\n\nFlexbox is the layout tool that finally made \"vertically center this\" stop being a running joke in web development. This lesson builds your understanding from the ground up — by the end, you'll understand not just the properties, but the actual *model* Flexbox uses to think about layout.\n\n*(This lesson pairs with the accompanying video walkthrough — the notes below stand alone as a complete reference.)*\n\n## The Core Idea: One-Dimensional Layout Along an Axis\n\nFlexbox arranges items along a single axis — either a row or a column — and gives you powerful tools to control alignment, spacing, and sizing along that axis. (For layouts needing control in *two* dimensions simultaneously, that's what CSS Grid, our next lesson, is for.)\n\n```css\n.container {\n  display: flex;\n}\n```\n\nThat one line transforms every direct child of `.container` into a \"flex item,\" automatically laid out in a row, left to right, all matching the height of the tallest item — instantly solving several classic CSS headaches for free.\n\n## The Two Axes: Main and Cross\n\nThis is the single most important mental model in Flexbox. Every flex container has:\n\n- **The main axis** — the direction items flow (row = horizontal, column = vertical)\n- **The cross axis** — perpendicular to the main axis\n\n```css\n.container {\n  display: flex;\n  flex-direction: row; /* main axis = horizontal (the default) */\n}\n/* main axis = →   cross axis = ↓ */\n\n.container {\n  display: flex;\n  flex-direction: column; /* main axis = vertical */\n}\n/* main axis = ↓   cross axis = → */\n```\n\n**Analogy:** Think of the main axis like the direction a line of people forms at a checkout counter, and the cross axis like how tall or short each person happens to stand relative to that line. `justify-content` controls spacing *along the line* (main axis); `align-items` controls positioning *across the line's width* (cross axis).\n\nEvery alignment property in Flexbox refers to one of these two axes — once this clicks, the rest of Flexbox becomes memorizable rather than mysterious.\n\n## justify-content: Alignment Along the Main Axis\n\n```css\n.container {\n  display: flex;\n  justify-content: flex-start;    /* default — items packed at the start */\n  justify-content: flex-end;      /* items packed at the end */\n  justify-content: center;        /* items centered */\n  justify-content: space-between; /* equal gaps BETWEEN items, none at the edges */\n  justify-content: space-around;  /* equal gaps around each item (edges get half-gaps) */\n  justify-content: space-evenly;  /* perfectly equal gaps everywhere, including edges */\n}\n```\n\n## align-items: Alignment Along the Cross Axis\n\n```css\n.container {\n  display: flex;\n  align-items: stretch;     /* default — items stretch to fill the cross axis */\n  align-items: flex-start;  /* items align to the top (in a row layout) */\n  align-items: flex-end;    /* items align to the bottom */\n  align-items: center;      /* items vertically centered — THE classic \"center a div\" fix */\n}\n```\n\n## The Legendary \"Center Anything\" Combo\n\n```css\n.container {\n  display: flex;\n  justify-content: center; /* centers along the main axis */\n  align-items: center;     /* centers along the cross axis */\n  height: 100vh;\n}\n```\n\nThis three-line combo solves the historically infamous \"how do I vertically center a div\" problem that plagued CSS for over a decade before Flexbox existed.\n\n## Flex Item Properties: Controlling Individual Items\n\nWhile the properties above go on the *container*, these go on individual *items* to control how they grow, shrink, and size themselves:\n\n```css\n.item {\n  flex-grow: 0;   /* how much this item grows to fill extra space (0 = don't grow) */\n  flex-shrink: 1; /* how much this item shrinks if space is tight (1 = shrink normally) */\n  flex-basis: auto; /* the item's initial size before growing/shrinking is calculated */\n}\n\n/* Shorthand — this is what you'll actually write in practice */\n.item {\n  flex: 1; /* shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0 */\n}\n```\n\n### The Extremely Common \"Equal Width Columns\" Pattern\n\n```css\n.container { display: flex; }\n.item { flex: 1; } /* every item grows equally to fill available space */\n```\n\n### A Sidebar That Doesn't Grow, With a Main Area That Fills the Rest\n\n```css\n.layout { display: flex; }\n.sidebar { flex: 0 0 250px; } /* don't grow, don't shrink, fixed at 250px */\n.main { flex: 1; }            /* grow to fill all remaining space */\n```\n\n## flex-wrap: Handling Overflow\n\nBy default, flex items try to squeeze onto one line, shrinking as needed. `flex-wrap` lets items flow onto multiple lines instead:\n\n```css\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px; /* modern, clean way to add spacing BETWEEN items — no margin hacks needed */\n}\n```\n\n## A Complete, Realistic Example: A Navbar\n\n```html\n<nav class=\"navbar\">\n  <div class=\"logo\">Brand</div>\n  <ul class=\"nav-links\">\n    <li><a href=\"#\">Home</a></li>\n    <li><a href=\"#\">About</a></li>\n    <li><a href=\"#\">Contact</a></li>\n  </ul>\n</nav>\n```\n\n```css\n.navbar {\n  display: flex;\n  justify-content: space-between; /* logo on the left, links pushed to the right */\n  align-items: center;            /* vertically centers everything */\n  padding: 16px 24px;\n}\n\n.nav-links {\n  display: flex;\n  gap: 24px;\n  list-style: none;\n}\n```\n\nThis one pattern — `justify-content: space-between` + `align-items: center` — is the backbone of an enormous percentage of real-world navbars across the web.\n\n## Key Takeaways\n\n- Flexbox lays items out along a single main axis (row or column), with a perpendicular cross axis for the other dimension.\n- `justify-content` controls spacing along the main axis; `align-items` controls alignment along the cross axis — memorize which is which, and Flexbox stops feeling arbitrary.\n- `justify-content: center; align-items: center;` on a container is the modern, simple fix for the classic \"vertically center a div\" problem.\n- `flex: 1` on items makes them grow equally to fill available space; combine fixed-size items (`flex: 0 0 250px`) with flexible ones (`flex: 1`) for sidebar-plus-main layouts.\n- Use `gap` for spacing between flex items instead of manual margin hacks on individual items."
          },
          {
            "title": "CSS Grid for two-dimensional layouts",
            "duration": "20 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# CSS Grid for Two-Dimensional Layouts\n\nIf Flexbox is for arranging items along one axis, CSS Grid is for arranging items along **two axes simultaneously** — rows and columns at once. This is the tool you reach for whenever you're thinking in terms of an actual grid: a photo gallery, a dashboard layout, a magazine-style page.\n\n## Flexbox vs. Grid: When to Use Which\n\n**Rule of thumb:** if you're laying things out in a single row or column, use Flexbox. If you're laying things out in both rows *and* columns simultaneously — especially when items need to align across both dimensions — use Grid. Real projects use both together constantly: Grid for overall page layout, Flexbox for aligning content within individual Grid cells.\n\n## Basic Grid Setup\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: 200px 200px 200px; /* three fixed-width columns */\n  gap: 16px;\n}\n```\n\n## The fr Unit: Grid's Superpower\n\n`fr` stands for \"fraction\" — it represents a fraction of the *remaining available space* in the grid container, after any fixed-size tracks are accounted for.\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; /* three EQUAL-width columns, fully flexible */\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr; /* middle column is twice as wide as the outer two */\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 250px 1fr; /* fixed sidebar + flexible main area — sound familiar? */\n}\n```\n\n**Analogy:** Think of `fr` like slicing a pizza. `1fr 1fr 1fr` means \"cut whatever's left into three equal slices.\" `1fr 2fr 1fr` means \"cut it into slices where the middle one is twice as big as the others\" — the ratio is what matters, not any specific pixel measurement.\n\n## The repeat() Function: Avoiding Repetition\n\n```css\n/* Instead of writing this manually... */\n.container {\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n}\n\n/* ...use repeat() */\n.container {\n  grid-template-columns: repeat(4, 1fr);\n}\n```\n\n## The Game-Changer: auto-fit and minmax()\n\nThis combination is arguably the single most powerful pattern in modern responsive CSS — a fully responsive grid **with zero media queries**:\n\n```css\n.gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n```\n\n**How to read this:** \"Fit as many columns as possible, where each column is at least 200px wide, but let them grow to fill any remaining space equally.\" As the container shrinks (a smaller browser window, a mobile device), columns automatically wrap onto new rows — no breakpoints needed at all.\n\nThis single line replaces what used to require several manually-written media queries specifying exact column counts at exact breakpoints.\n\n## Defining Rows\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: 100px 200px; /* explicit heights for the first two rows */\n  gap: 16px;\n}\n```\n\nIf you don't define enough rows for your content, Grid automatically creates additional rows sized by `grid-auto-rows` (default: sized to fit their content).\n\n## Placing Items Explicitly with Grid Lines\n\nGrid lines are the numbered dividers between columns/rows (there are always one more line than the number of tracks — a 3-column grid has 4 vertical lines).\n\n```css\n.featured-item {\n  grid-column: 1 / 3; /* span from line 1 to line 3 — spans 2 columns */\n  grid-row: 1 / 3;    /* span from line 1 to line 3 — spans 2 rows */\n}\n\n/* Shorthand for spanning a specific number of tracks */\n.featured-item {\n  grid-column: span 2; /* span 2 columns, starting wherever it naturally falls */\n}\n```\n\n## Named Grid Areas: The Most Readable Approach\n\nFor complex page layouts, named areas let you visually \"draw\" your layout directly in CSS:\n\n```css\n.page {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  min-height: 100vh;\n  gap: 16px;\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }\n```\n\nThis is remarkably readable — you can literally see the shape of your page layout in the `grid-template-areas` declaration itself, which is a huge win for maintainability compared to reasoning about numbered grid lines.\n\n## A Complete, Realistic Dashboard Layout\n\n```css\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 24px;\n}\n\n.dashboard .stat-card {\n  display: flex; /* Grid for the overall layout, Flexbox for aligning content WITHIN each card */\n  flex-direction: column;\n  gap: 8px;\n  padding: 20px;\n  border-radius: 12px;\n  background: white;\n}\n```\n\nThis demonstrates the classic Grid + Flexbox combination: Grid handles the responsive card layout, while Flexbox handles vertical stacking and spacing inside each individual card.\n\n## Key Takeaways\n\n- Use Grid when you need control over both rows and columns simultaneously; use Flexbox for single-axis layouts — real projects combine both constantly.\n- The `fr` unit represents a fraction of remaining space, making flexible, proportional column/row sizing simple (`1fr 2fr 1fr`).\n- `repeat(auto-fit, minmax(200px, 1fr))` creates a fully responsive grid with zero media queries — genuinely one of the most useful patterns in modern CSS.\n- Named grid areas (`grid-template-areas`) let you visually sketch your page layout directly in CSS, which is far more readable than reasoning about numbered grid lines for complex layouts."
          },
          {
            "title": "Responsive design with media queries",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Responsive Design With Media Queries\n\nYour website needs to work on a phone, a tablet, and a widescreen monitor — often all viewed by the same person throughout their day. This lesson covers the traditional tool for adapting layouts across screen sizes: media queries, plus the mobile-first philosophy that makes them maintainable.\n\n## The Viewport Meta Tag: A Prerequisite You Must Not Forget\n\nBefore any responsive CSS will work correctly on mobile devices, this tag must be in your HTML `<head>`:\n\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\n\nWithout it, mobile browsers assume your page was designed for a desktop-width viewport and zoom out to fit it — making all your carefully-crafted responsive CSS pointless. This single line tells the browser \"render this at the device's actual width, don't zoom out.\"\n\n## Basic Media Query Syntax\n\n```css\n/* Base styles apply to ALL screen sizes by default */\n.container {\n  padding: 16px;\n}\n\n/* This block ONLY applies when the viewport is 768px wide or LESS */\n@media (max-width: 768px) {\n  .container {\n    padding: 8px;\n  }\n}\n```\n\n## Mobile-First: The Modern Standard Approach\n\nThere are two philosophies for writing media queries, and which one you choose changes your entire mental model:\n\n**Desktop-first** (older approach): write styles for desktop first, then use `max-width` queries to override for smaller screens.\n\n**Mobile-first** (modern standard): write base styles for mobile first, then use `min-width` queries to *add* enhancements as the screen grows.\n\n```css\n/* ✅ Mobile-first — base styles are for the SMALLEST screens */\n.grid {\n  display: grid;\n  grid-template-columns: 1fr; /* single column by default (mobile) */\n}\n\n/* Enhance for tablets and up */\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n/* Enhance further for desktop */\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n```\n\n**Why mobile-first won:** mobile traffic dominates the modern web, so your *default* (unqueried) styles should target the majority case. It also tends to produce simpler CSS overall — you're progressively *adding* complexity as screens grow, rather than writing a complex desktop layout and then fighting to strip it down for mobile.\n\n**Analogy:** Mobile-first is like packing a suitcase by starting with only the absolute essentials, then adding optional extras as you confirm you have more room (a bigger screen). Desktop-first is like packing everything you own first, then frantically removing items to make it fit a smaller bag (a smaller screen) — much harder to do gracefully.\n\n## Common Breakpoints (Guidelines, Not Rigid Rules)\n\n```css\n/* Small devices (phones) — no query needed, this is your default/base */\n\n/* Tablets */\n@media (min-width: 768px) { }\n\n/* Small laptops/desktops */\n@media (min-width: 1024px) { }\n\n/* Large desktops */\n@media (min-width: 1280px) { }\n```\n\n**Important nuance:** don't choose breakpoints based on specific device dimensions (like \"iPhone 14 width\"). Choose them based on where *your specific content* starts to look cramped or awkward — resize your own browser window slowly and note where things break, rather than targeting a list of device names that changes every year.\n\n## Responsive Typography\n\n```css\nh1 {\n  font-size: 1.75rem;\n}\n\n@media (min-width: 768px) {\n  h1 {\n    font-size: 2.5rem;\n  }\n}\n```\n\nOr, using the `clamp()` technique from an earlier lesson to avoid needing a breakpoint at all:\n\n```css\nh1 {\n  font-size: clamp(1.75rem, 4vw + 1rem, 2.5rem); /* scales fluidly, no media query needed */\n}\n```\n\n## Combining Media Query Conditions\n\n```css\n/* AND — both conditions must be true */\n@media (min-width: 768px) and (max-width: 1023px) {\n  /* only applies in this specific tablet range */\n}\n\n/* Multiple queries, comma-separated = OR */\n@media (max-width: 480px), (orientation: landscape) {\n  /* applies if EITHER condition is true */\n}\n```\n\n## Responsive Images\n\n```css\nimg {\n  max-width: 100%;\n  height: auto;\n}\n```\n\nThis one universal rule prevents images from ever overflowing their container on smaller screens, while preserving their aspect ratio correctly as they scale down.\n\n## Hiding/Showing Content Responsively\n\n```css\n.mobile-menu-toggle {\n  display: block;\n}\n.desktop-nav {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  .mobile-menu-toggle {\n    display: none;\n  }\n  .desktop-nav {\n    display: flex;\n  }\n}\n```\n\nA common pattern: a hamburger menu icon on mobile, a full horizontal nav on desktop — swapped entirely via media queries rather than trying to cram one component into both contexts.\n\n## A Complete, Realistic Responsive Card Grid\n\n```css\n.card-grid {\n  display: grid;\n  grid-template-columns: 1fr; /* mobile: single column */\n  gap: 16px;\n  padding: 16px;\n}\n\n@media (min-width: 768px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 24px;\n    padding: 24px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n```\n\nNotice spacing itself also scales up at larger breakpoints (`gap` and `padding` increase) — good responsive design adjusts more than just column counts; whitespace and typography scale too.\n\n## Key Takeaways\n\n- Always include the viewport meta tag — without it, no responsive CSS works correctly on real mobile devices.\n- Mobile-first (`min-width` queries, base styles target mobile) is the modern standard — it matches majority mobile traffic and produces simpler, progressively-enhanced CSS.\n- Choose breakpoints based on where your own content starts looking awkward, not based on specific device dimensions.\n- `clamp()` can eliminate the need for typography breakpoints entirely by scaling fluidly between a min and max size.\n- `img { max-width: 100%; height: auto; }` is a near-universal rule that prevents images from breaking responsive layouts."
          },
          {
            "title": "Capstone: responsive landing page",
            "duration": "45 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone Project: Responsive Landing Page\n\nTime to combine everything from this course into one complete, real, portfolio-worthy page. You'll build a fully responsive marketing landing page using semantic HTML, proper accessibility, the CSS box model, Flexbox, Grid, and mobile-first media queries — no frameworks, no shortcuts, just the fundamentals you've built up module by module.\n\n## What You're Building\n\nA landing page with:\n1. A sticky **header** with a logo and navigation (hamburger menu on mobile)\n2. A **hero section** with a headline, description, and call-to-action button\n3. A **features section** using a responsive grid (1 column on mobile, 3 on desktop)\n4. A **footer** with links\n\n## Step 1: Semantic HTML Skeleton\n\n```html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Landing Page</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header class=\"site-header\">\n    <div class=\"logo\">Brand</div>\n    <button class=\"menu-toggle\" aria-label=\"Toggle menu\">☰</button>\n    <nav class=\"site-nav\">\n      <a href=\"#features\">Features</a>\n      <a href=\"#pricing\">Pricing</a>\n      <a href=\"#contact\">Contact</a>\n    </nav>\n  </header>\n\n  <main>\n    <section class=\"hero\">\n      <h1>Build faster, ship sooner.</h1>\n      <p>The tool that helps you get from idea to production in record time.</p>\n      <a href=\"#\" class=\"button\">Get Started</a>\n    </section>\n\n    <section id=\"features\" class=\"features\">\n      <h2>Why choose us</h2>\n      <div class=\"features-grid\">\n        <article class=\"feature-card\">\n          <h3>Fast</h3>\n          <p>Blazing performance out of the box.</p>\n        </article>\n        <article class=\"feature-card\">\n          <h3>Secure</h3>\n          <p>Enterprise-grade security by default.</p>\n        </article>\n        <article class=\"feature-card\">\n          <h3>Flexible</h3>\n          <p>Adapts to your workflow, not the other way around.</p>\n        </article>\n      </div>\n    </section>\n  </main>\n\n  <footer>\n    <p>&copy; 2026 Brand. All rights reserved.</p>\n  </footer>\n</body>\n</html>\n```\n\nNotice the semantic choices from Module 1 are all here: `<header>`, `<nav>`, `<main>`, `<section>` (with headings), `<article>` for each self-contained feature card, and `<footer>`.\n\n## Step 2: Base Styles (Mobile-First Foundation)\n\n```css\n*, *::before, *::after {\n  box-sizing: border-box; /* from Module 2 — prevents padding/border sizing surprises */\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6; /* comfortable reading rhythm, from Module 2 */\n  color: #1e293b;\n}\n\n.button {\n  display: inline-block;\n  padding: 12px 24px;\n  background: #4F46E5;\n  color: white;\n  text-decoration: none;\n  border-radius: 8px;\n  font-weight: 600;\n}\n.button:hover {\n  background: #4338CA;\n}\n.button:focus-visible {\n  outline: 2px solid #4F46E5;\n  outline-offset: 2px; /* never remove focus indicators — from Module 1's accessibility lesson */\n}\n```\n\n## Step 3: Header With Flexbox\n\n```css\n.site-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 24px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.logo {\n  font-weight: 700;\n  font-size: 1.25rem;\n}\n\n.menu-toggle {\n  display: block; /* visible on mobile */\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n}\n\n.site-nav {\n  display: none; /* hidden on mobile by default */\n  gap: 24px;\n}\n.site-nav a {\n  text-decoration: none;\n  color: inherit;\n}\n\n@media (min-width: 768px) {\n  .menu-toggle {\n    display: none; /* hide the hamburger on desktop */\n  }\n  .site-nav {\n    display: flex; /* show the full nav on desktop */\n  }\n}\n```\n\n## Step 4: Hero Section\n\n```css\n.hero {\n  text-align: center;\n  padding: 64px 24px;\n}\n\n.hero h1 {\n  font-size: clamp(1.75rem, 5vw, 3rem); /* fluid typography from Module 2 */\n  margin-bottom: 16px;\n}\n\n.hero p {\n  font-size: 1.125rem;\n  color: #64748b;\n  max-width: 600px;\n  margin: 0 auto 24px;\n}\n```\n\n## Step 5: Features Grid (Responsive, Zero Media Queries)\n\n```css\n.features {\n  padding: 48px 24px;\n}\n\n.features h2 {\n  text-align: center;\n  margin-bottom: 32px;\n}\n\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); /* the auto-fit/minmax trick from Module 3 */\n  gap: 24px;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\n.feature-card {\n  padding: 24px;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n}\n\n.feature-card h3 {\n  margin-bottom: 8px;\n}\n```\n\nThis grid automatically goes from 1 column on mobile to 3 columns on desktop, with zero explicit breakpoints — a direct application of what you learned in the Grid lesson.\n\n## Step 6: Footer\n\n```css\nfooter {\n  text-align: center;\n  padding: 24px;\n  color: #64748b;\n  border-top: 1px solid #e2e8f0;\n}\n```\n\n## Step 7: Making the Mobile Menu Actually Toggle\n\nThe CSS above hides/shows the nav based on screen size, but a real mobile menu also needs a tiny bit of JavaScript to toggle visibility on click:\n\n```html\n<script>\n  const toggle = document.querySelector('.menu-toggle');\n  const nav = document.querySelector('.site-nav');\n  toggle.addEventListener('click', () => {\n    nav.classList.toggle('open');\n  });\n</script>\n```\n\n```css\n@media (max-width: 767px) {\n  .site-nav.open {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    background: white;\n    padding: 16px 24px;\n    border-bottom: 1px solid #e2e8f0;\n  }\n}\n```\n\n## Extension Challenges\n\nOnce your base version works, push further:\n\n1. **Add a dark mode toggle** using CSS custom properties (`:root` variables that swap based on a `.dark` class).\n2. **Add a pricing section** below Features, using the same `auto-fit`/`minmax` grid pattern you already know.\n3. **Run a real accessibility check** — tab through your entire page using only the keyboard, and verify every interactive element has a visible focus state.\n4. **Test on an actual phone**, not just by resizing your browser — real touch targets and real viewport behavior sometimes reveal issues DevTools' responsive mode doesn't catch.\n\n## What You've Demonstrated\n\nThis capstone proves genuine command of everything in this course: semantic structure, accessible forms and navigation, the box model, the cascade and specificity, a proper typography and spacing system, Flexbox for one-dimensional alignment, Grid for responsive two-dimensional layout, and mobile-first media queries tying it all together. This is real, deployable, portfolio-ready work — push it to GitHub Pages or Netlify and you have a live link to share."
          }
        ]
      }
    ]
  },
  {
    "title": "Advanced JavaScript ES2025",
    "slug": "advanced-javascript-es2025",
    "category": "Frontend Development",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Modern JavaScript features, async patterns, and the language internals every framework relies on.",
    "fullDescription": "Go beyond the basics: closures, the event loop, the latest ES2025 syntax, and the DOM APIs you use daily whether you work in React, Vue, or vanilla JS.",
    "instructor": "TechForge Faculty",
    "duration": "14 hours",
    "tags": [
      "JavaScript",
      "ES2025",
      "Async/Await",
      "DOM"
    ],
    "modules": [
      {
        "title": "Module 1: Language Internals",
        "lessons": [
          {
            "title": "Closures & lexical scope",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Closures & lexical scope\n\nA closure is a function that remembers the variables from where it was defined, not where it is called.\n\n```js\nfunction makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = makeCounter();\ncounter(); // 1\ncounter(); // 2\n```\n\n`count` is not global, not passed as an argument — the returned function simply keeps a reference to the scope it was created in.\n\n## Key takeaways\n- Every function carries its creation scope with it.\n- Closures are how private state works in JavaScript without classes."
          },
          {
            "title": "The event loop, visually",
            "duration": "18 min",
            "type": "video",
            "isPreview": true,
            "content": "# The event loop, visually\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Prototypes & the class syntax",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Prototypes & the class syntax\n\n_Full lesson content coming soon._"
          },
          {
            "title": "New in ES2025: records, tuples & pattern matching",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# New in ES2025: records, tuples & pattern matching\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Async Patterns",
        "lessons": [
          {
            "title": "Promises: then, catch, all, race",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Promises: then, catch, all, race\n\n_Full lesson content coming soon._"
          },
          {
            "title": "async/await & error handling",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# async/await & error handling\n\n_Full lesson content coming soon._"
          },
          {
            "title": "AbortController & cancellation",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# AbortController & cancellation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Generators & async iterators",
            "duration": "15 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Generators & async iterators\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Working With the Platform",
        "lessons": [
          {
            "title": "Modules: import/export deep dive",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Modules: import/export deep dive\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Array & object methods you should know",
            "duration": "18 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Array & object methods you should know\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Web APIs: fetch, storage, observers",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Web APIs: fetch, storage, observers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a small async task runner",
            "duration": "50 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a small async task runner\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "React 19 Essentials and Hooks",
    "slug": "react-19-essentials-and-hooks",
    "category": "Frontend Development",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Components, the full hooks API, and the mental model behind every React 19 app.",
    "fullDescription": "A complete React 19 course: JSX, component composition, hooks (including the new use() hook and Actions), context, and the performance patterns used in production apps.",
    "instructor": "TechForge Faculty",
    "duration": "18 hours",
    "tags": [
      "React",
      "React 19",
      "Hooks",
      "JSX"
    ],
    "modules": [
      {
        "title": "Module 1: React Fundamentals",
        "lessons": [
          {
            "title": "JSX and how React renders",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# JSX and How React Renders\n\nWelcome to your first real React lesson. Before we write a single hook or manage any state, we need to understand what's actually happening when you write JSX — because almost every confusing React bug traces back to a shaky mental model here.\n\n## What JSX Actually Is\n\nJSX looks like HTML living inside JavaScript, and that's exactly why it feels magical the first time you see it:\n\n```jsx\nconst element = <h1 className=\"title\">Hello, world!</h1>;\n```\n\nBut JSX isn't HTML, and it isn't magic. It's **syntax sugar** — a shorthand that gets compiled (by Babel or your bundler) into plain JavaScript function calls. The line above literally becomes:\n\n```js\nconst element = React.createElement(\n  \"h1\",\n  { className: \"title\" },\n  \"Hello, world!\"\n);\n```\n\n**Analogy:** Think of JSX like a recipe written in friendly shorthand (\"add a pinch of salt\") versus the precise scientific version a chemist would write (\"add 0.5g NaCl\"). Both describe the same action — JSX is just the version humans enjoy reading and writing.\n\nThis matters because once you know JSX is \"just function calls,\" a lot of \"weird\" rules stop being weird:\n\n- **Why you need one root element** — because `React.createElement()` returns a single value, and a JavaScript function can only return one thing.\n- **Why `class` becomes `className`** — because JSX attributes become JavaScript object keys, and `class` is a reserved word in JavaScript.\n- **Why you can drop JavaScript expressions inside `{ }`** — because you're literally inside a JavaScript function call; `{ }` just marks \"insert a JavaScript value here.\"\n\n```jsx\nconst name = \"Ada\";\nconst element = <h1>Hello, {name}!</h1>;\n// compiles to: React.createElement(\"h1\", null, \"Hello, \", name, \"!\")\n```\n\n## The Virtual DOM: React's Blueprint System\n\nHere's the part that makes React fast and predictable. Every time your component runs, it doesn't touch the real browser DOM directly. Instead, it builds a lightweight JavaScript object tree describing *what the UI should look like* — this is the **virtual DOM**.\n\n**Analogy:** Imagine an architect who, instead of physically rebuilding a house every time the client wants a change, draws a new blueprint each time. Then a builder compares the new blueprint to the old one and only rebuilds the walls that actually changed — not the whole house.\n\nThat \"compare and only change what's different\" step is called **reconciliation** (often nicknamed \"diffing\"). React:\n\n1. Renders your component → produces a new virtual DOM tree\n2. Compares it to the *previous* virtual DOM tree\n3. Calculates the minimal set of real DOM changes needed\n4. Applies only those changes to the actual browser DOM\n\nThis is why manipulating the real DOM directly (like old-school jQuery) feels slow by comparison — every direct DOM write forces the browser to recalculate layout and repaint. React batches and minimizes that work for you.\n\n## Rendering in Practice\n\nLet's see the full lifecycle with a real, runnable example:\n\n```jsx\nimport { createRoot } from \"react-dom/client\";\n\nfunction Greeting() {\n  return <h1>Hello, React 19!</h1>;\n}\n\nconst root = createRoot(document.getElementById(\"root\"));\nroot.render(<Greeting />);\n```\n\nWhat happens step by step:\n\n1. `<Greeting />` compiles to `React.createElement(Greeting, null)`\n2. React calls the `Greeting` function, which returns its own JSX tree\n3. That tree compiles down further until it's all plain HTML tags\n4. React hands the final tree to the DOM\n\n## Common Beginner Mistakes (and Why They Happen)\n\n**Mistake 1: Returning multiple elements without a wrapper**\n\n```jsx\n// ❌ This will throw a syntax error\nfunction Broken() {\n  return (\n    <h1>Title</h1>\n    <p>Paragraph</p>\n  );\n}\n```\n\nFix it with a **Fragment** — an invisible wrapper that doesn't add an extra DOM node:\n\n```jsx\n// ✅ Works, and doesn't pollute your HTML with a useless <div>\nfunction Fixed() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Paragraph</p>\n    </>\n  );\n}\n```\n\n**Mistake 2: Forgetting that JSX expressions must be single values**\n\n```jsx\n// ❌ if statements are not expressions — this breaks\n<div>{if (isLoggedIn) { \"Welcome\" }}</div>\n\n// ✅ Use a ternary or a variable computed beforehand\n<div>{isLoggedIn ? \"Welcome\" : \"Please log in\"}</div>\n```\n\n## Key Takeaways\n\n- JSX is not HTML — it's sugar for `React.createElement()` calls, which is why it follows JavaScript's rules, not HTML's.\n- React builds a virtual DOM tree on every render and only patches the real DOM where things actually changed (reconciliation).\n- Because JSX compiles to a single function call, every component must return exactly one root node — use a Fragment (`<>...</>`) when you don't want an extra wrapper `<div>`.\n- Curly braces `{ }` in JSX mean \"evaluate this as a JavaScript expression,\" not \"run any JavaScript statement\" — so `if`/`for` don't work inline, but ternaries and function calls do.\n\nYou now understand *why* React behaves the way it does at the most fundamental level — everything else in this course builds on this mental model."
          },
          {
            "title": "Props, composition & children",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Props, Composition & Children\n\nIf JSX is React's vocabulary, **props** are how components talk to each other. This lesson is about building UIs the way you'd build with LEGO bricks — small, reusable pieces that combine into something bigger.\n\n## What Are Props?\n\nProps (short for \"properties\") are how a parent component passes data down to a child component. They work exactly like function arguments — because that's literally what they are.\n\n```jsx\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n\nfunction App() {\n  return <Greeting name=\"Ada\" />;\n}\n```\n\n**Analogy:** Think of a component like a form letter template, and props like the fields you fill in — \"Dear ___, thank you for your order of ___.\" The template (component) stays the same; the props change what gets printed.\n\nA critical rule: **props flow in one direction — parent to child.** A child component can never directly modify the props it receives. This is called **one-way data flow**, and it's what makes React apps predictable — you can always trace where a piece of data came from by looking upward in the component tree.\n\n```jsx\n// ❌ Never do this — props are read-only\nfunction Broken({ name }) {\n  name = \"Changed\"; // React will warn you, and it won't work as expected\n  return <h1>{name}</h1>;\n}\n```\n\n## Composition: Building Big Things From Small Things\n\nInstead of building one giant component that does everything, React encourages **composition** — combining small, focused components together.\n\n```jsx\nfunction Avatar({ src, alt }) {\n  return <img className=\"avatar\" src={src} alt={alt} />;\n}\n\nfunction UserCard({ user }) {\n  return (\n    <div className=\"card\">\n      <Avatar src={user.avatarUrl} alt={user.name} />\n      <h2>{user.name}</h2>\n      <p>{user.bio}</p>\n    </div>\n  );\n}\n```\n\n`UserCard` doesn't know or care *how* `Avatar` renders an image — it just uses it, the same way you'd use a `<button>` HTML tag without knowing how the browser implements buttons internally. This separation is what makes large React codebases maintainable: each component has one clear job.\n\n## The `children` Prop: React's Secret Superpower\n\nEvery component automatically receives a special prop called `children` — it represents whatever JSX was nested *between* that component's opening and closing tags.\n\n```jsx\nfunction Card({ children }) {\n  return <div className=\"card\">{children}</div>;\n}\n\nfunction App() {\n  return (\n    <Card>\n      <h2>Any content goes here</h2>\n      <p>Card doesn't need to know what this is.</p>\n    </Card>\n  );\n}\n```\n\n**Analogy:** Think of `Card` as a picture frame. The frame (the component) defines the border and styling, but it doesn't care whether you put a photo, a painting, or a certificate inside it — that's the `children`.\n\nThis pattern is enormously powerful because it lets you build generic, reusable \"wrapper\" components — modals, layout containers, tooltips — without hardcoding what goes inside them.\n\n## Destructuring Props (The Idiomatic Way)\n\nYou'll almost always see props destructured directly in the function signature rather than accessed via a `props` object:\n\n```jsx\n// Works, but verbose\nfunction Button(props) {\n  return <button>{props.label}</button>;\n}\n\n// Idiomatic — destructure right in the parameter list\nfunction Button({ label, onClick, variant = \"primary\" }) {\n  return (\n    <button className={variant} onClick={onClick}>\n      {label}\n    </button>\n  );\n}\n```\n\nNotice `variant = \"primary\"` — that's a **default prop value**, used automatically whenever the parent doesn't pass a `variant`.\n\n## Prop Types and Why They Matter (Even Without TypeScript)\n\nEven in plain JavaScript React, it's worth mentally documenting what shape your props should take. A well-designed component's props read almost like a contract:\n\n```jsx\n/**\n * @param {string} label - Button text\n * @param {() => void} onClick - Click handler\n * @param {'primary' | 'secondary'} [variant] - Visual style, defaults to 'primary'\n */\nfunction Button({ label, onClick, variant = \"primary\" }) {\n  /* ... */\n}\n```\n\nLater in this course, when we cover TypeScript-adjacent patterns, you'll see how to enforce this contract at compile time instead of just documenting it in comments.\n\n## Key Takeaways\n\n- Props are read-only data passed from parent to child — never mutate them directly.\n- Composition (small components combined together) beats building one giant do-everything component.\n- `children` is a special prop representing nested JSX — it's how you build flexible \"wrapper\" components like cards, modals, and layouts.\n- Destructure props in the function signature and use default values (`variant = \"primary\"`) to keep components self-documenting and predictable."
          },
          {
            "title": "Conditional rendering & lists",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Conditional Rendering & Lists\n\nReal UIs aren't static — they show different things based on data. A logged-in user sees a dashboard; a logged-out user sees a login form. A shopping cart shows items only if there are items to show. This lesson covers the two techniques you'll use in nearly every component you ever write: **conditionals** and **lists**.\n\n## Conditional Rendering: Showing Different UI Based on State\n\nSince JSX is just JavaScript, you don't need a special \"if\" syntax — you use the JavaScript you already know, just inside `{ }`.\n\n### Ternary Operator (most common for simple either/or cases)\n\n```jsx\nfunction LoginStatus({ isLoggedIn }) {\n  return (\n    <p>{isLoggedIn ? \"Welcome back!\" : \"Please log in.\"}</p>\n  );\n}\n```\n\n### Logical AND (`&&`) — for \"render this, or render nothing\"\n\n```jsx\nfunction Notification({ hasUnread, count }) {\n  return (\n    <div>\n      {hasUnread && <span className=\"badge\">{count} new</span>}\n    </div>\n  );\n}\n```\n\n**How this works:** In JavaScript, `&&` returns the second value if the first is truthy, or the first value if it's falsy. React renders `null`, `false`, and `undefined` as nothing at all — so `hasUnread && <span>...` either shows the badge or renders nothing.\n\n⚠️ **The classic `&&` trap:** if the left side is the number `0`, React will render the literal `0` on the page, since `0` is falsy but still a value React tries to display:\n\n```jsx\n// ❌ If count is 0, this renders the text \"0\" on the page!\n{count && <span>{count} items</span>}\n\n// ✅ Force a real boolean\n{count > 0 && <span>{count} items</span>}\n```\n\n### Early Returns — for \"render something completely different\"\n\n```jsx\nfunction Profile({ user }) {\n  if (!user) {\n    return <p>No user found.</p>;\n  }\n\n  return (\n    <div>\n      <h2>{user.name}</h2>\n      <p>{user.email}</p>\n    </div>\n  );\n}\n```\n\n**Analogy:** Early returns are like a bouncer at a club checking ID at the door — if you don't meet the condition, you don't even get to the \"real\" content. This keeps your main JSX clean instead of nesting deep conditional trees.\n\n## Rendering Lists\n\nTo turn an array of data into a list of components, you use JavaScript's `.map()` — the same method you already know from working with arrays.\n\n```jsx\nfunction TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map((todo) => (\n        <li key={todo.id}>{todo.text}</li>\n      ))}\n    </ul>\n  );\n}\n```\n\n## Why the `key` Prop Is Not Optional\n\nThat `key={todo.id}` isn't decoration — it's how React's reconciliation algorithm identifies *which* list item is which across re-renders.\n\n**Analogy:** Imagine a classroom where students get reseated every day. Without name tags (keys), the teacher can't tell if \"the student in seat 3\" is the same person as yesterday or a completely different one who happens to be sitting there now. Keys are the name tags that let React track identity, not just position.\n\nWithout stable keys, React can:\n- Lose form input state when reordering a list\n- Re-render items unnecessarily (hurting performance)\n- Cause visually jarring bugs when items are added, removed, or reordered\n\n### The #1 Rule: Never Use Array Index as a Key (Usually)\n\n```jsx\n// ⚠️ Dangerous if the list can be reordered, filtered, or items removed\n{todos.map((todo, index) => (\n  <li key={index}>{todo.text}</li>\n))}\n\n// ✅ Use a stable, unique identifier from your data\n{todos.map((todo) => (\n  <li key={todo.id}>{todo.text}</li>\n))}\n```\n\nUsing the index *is* acceptable if the list is fully static and never reorders, filters, or has items inserted/removed in the middle — but that's rare enough that defaulting to a real unique ID is the safer habit.\n\n## Combining Conditionals and Lists\n\nThese two techniques compose naturally:\n\n```jsx\nfunction TaskList({ tasks }) {\n  if (tasks.length === 0) {\n    return <p className=\"empty-state\">No tasks yet — add one to get started!</p>;\n  }\n\n  return (\n    <ul>\n      {tasks.map((task) => (\n        <li key={task.id} className={task.done ? \"done\" : \"\"}>\n          {task.title}\n        </li>\n      ))}\n    </ul>\n  );\n}\n```\n\nThis pattern — early return for the empty state, `.map()` for the populated state — is something you'll write dozens of times across real applications.\n\n## Key Takeaways\n\n- Use ternaries for either/or rendering, `&&` for show-or-nothing rendering, and early returns for entirely different UI branches.\n- Watch out for the `0 && <Component />` trap — coerce to a real boolean with a comparison like `count > 0`.\n- `.map()` turns arrays into lists of JSX elements — it's just standard JavaScript, nothing React-specific.\n- Every item in a list needs a stable, unique `key` so React can correctly track identity across re-renders — prefer a real ID over the array index whenever the list can change."
          },
          {
            "title": "Forms in React",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Forms in React\n\nForms are where React's declarative philosophy meets one of the most stateful, interactive parts of any application. This lesson covers the two fundamental approaches to handling form inputs — and why one of them is almost always the better default.\n\n## Controlled vs. Uncontrolled Components\n\nIn plain HTML, form elements manage their own internal state — the browser remembers what you typed in an `<input>` without any JavaScript involvement. React offers two ways to work with this:\n\n- **Controlled components** — React state is the \"single source of truth\"; the input's value is always driven by state, and every keystroke updates that state.\n- **Uncontrolled components** — the DOM itself holds the value, and you reach into it (via a ref) only when you need it, like on submit.\n\n**Analogy:** A controlled input is like a translator who repeats everything you say back to you in real time before it's officially recorded — nothing happens without passing through that layer. An uncontrolled input is like a diary you can read from whenever you want, but nobody's actively watching what gets written into it moment to moment.\n\n### Controlled Components (the React-idiomatic default)\n\n```jsx\nimport { useState } from \"react\";\n\nfunction NameForm() {\n  const [name, setName] = useState(\"\");\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Submitted: ${name}`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"text\"\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```\n\nNotice the loop: `value={name}` tells the input what to display, and `onChange` updates `name` whenever the user types. This round trip happens on *every single keystroke* — which sounds wasteful, but React is fast enough that it's imperceptible, and the payoff is huge: your component always knows exactly what's in the form.\n\n**Why controlled is usually better:**\n- You can validate as the user types (e.g., disable submit until a field is valid)\n- You can transform input live (e.g., auto-format a phone number)\n- You can conditionally show/hide other fields based on this one's value\n- The form's state lives in one predictable place, not scattered across the DOM\n\n### Uncontrolled Components (using refs)\n\n```jsx\nimport { useRef } from \"react\";\n\nfunction NameForm() {\n  const nameRef = useRef(null);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert(`Submitted: ${nameRef.current.value}`);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type=\"text\" ref={nameRef} defaultValue=\"\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n```\n\nHere, React never touches the input's value on every keystroke — it just grabs the current value from the DOM once, at submit time. This is faster for very large forms with many fields where you don't need live validation, but you lose the ability to react to changes as they happen.\n\n## Handling Multiple Inputs Without Repeating Yourself\n\nA common beginner pattern is one `useState` per field, which gets repetitive fast:\n\n```jsx\n// Works, but doesn't scale well past 2-3 fields\nconst [name, setName] = useState(\"\");\nconst [email, setEmail] = useState(\"\");\nconst [age, setAge] = useState(\"\");\n```\n\nA cleaner pattern uses a single state object and a generic change handler:\n\n```jsx\nfunction SignupForm() {\n  const [form, setForm] = useState({ name: \"\", email: \"\", age: \"\" });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setForm((prev) => ({ ...prev, [name]: value }));\n  };\n\n  return (\n    <form>\n      <input name=\"name\" value={form.name} onChange={handleChange} />\n      <input name=\"email\" value={form.email} onChange={handleChange} />\n      <input name=\"age\" value={form.age} onChange={handleChange} />\n    </form>\n  );\n}\n```\n\nThe key trick is `[name]: value` — a **computed property name** that uses the input's `name` attribute to update the matching key in state, so one handler works for every field.\n\n## Basic Validation\n\n```jsx\nfunction SignupForm() {\n  const [email, setEmail] = useState(\"\");\n  const isValidEmail = /\\S+@\\S+\\.\\S+/.test(email);\n\n  return (\n    <form>\n      <input value={email} onChange={(e) => setEmail(e.target.value)} />\n      {email && !isValidEmail && (\n        <p className=\"error\">Please enter a valid email address.</p>\n      )}\n      <button disabled={!isValidEmail}>Sign up</button>\n    </form>\n  );\n}\n```\n\nThis is only possible because we're in \"controlled\" mode — the component always knows the current value and can react to it instantly.\n\n## Key Takeaways\n\n- Controlled components keep React state as the single source of truth for form values; uncontrolled components let the DOM hold the value and you read it only when needed (via refs).\n- Default to controlled components — you get live validation, formatting, and conditional logic almost for free.\n- For forms with many fields, use one state object with a generic `handleChange` keyed by the input's `name` attribute, instead of one `useState` per field.\n- Always call `e.preventDefault()` in your submit handler, or the browser will do a full page reload — the classic \"why did my form just refresh the page\" bug."
          }
        ]
      },
      {
        "title": "Module 2: The Hooks API",
        "lessons": [
          {
            "title": "useState & the rules of hooks",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# useState & the Rules of Hooks\n\nThis is the lesson where React starts to feel truly interactive. `useState` is almost certainly the first hook you'll ever use, and understanding it deeply — not just \"how to call it,\" but *why it works the way it does* — will save you from 80% of common React bugs.\n\n## What Problem Does useState Solve?\n\nA regular JavaScript variable inside a function component doesn't survive between renders — every time the component re-renders, the function runs again from scratch, and local variables reset.\n\n```jsx\n// ❌ This will NEVER update the screen, and count resets every render\nfunction Counter() {\n  let count = 0;\n  return <button onClick={() => count++}>{count}</button>;\n}\n```\n\n`useState` gives you a variable that **persists across renders** and, critically, **triggers a re-render whenever it changes** — so the UI actually updates.\n\n```jsx\nimport { useState } from \"react\";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```\n\n**Analogy:** Think of a component's local variables as a whiteboard that gets erased and rewritten from scratch every time someone glances at it (every render). `useState` is like taking a photo of the whiteboard before it's erased and handing that photo to React to remember for next time — plus, React promises to re-draw the whiteboard whenever that photo changes.\n\n## Anatomy of useState\n\n```jsx\nconst [state, setState] = useState(initialValue);\n```\n\n- `state` — the current value, available during this render\n- `setState` — a function that updates the value **and schedules a re-render**\n- `initialValue` — used only on the very first render; ignored on every render after that\n\n## The State Updater: Two Ways to Call It\n\n**Direct value:**\n```jsx\nsetCount(count + 1);\n```\n\n**Updater function (safer when the new value depends on the old one):**\n```jsx\nsetCount((prevCount) => prevCount + 1);\n```\n\nWhy does this distinction matter? Because state updates in React are **asynchronous and can be batched**. If you call `setCount(count + 1)` multiple times in a row within the same event handler, React might batch them and use the *same* stale `count` value each time:\n\n```jsx\n// ❌ Only increments by 1, not 3 — all three calls see the same \"count\"\nconst handleTripleClick = () => {\n  setCount(count + 1);\n  setCount(count + 1);\n  setCount(count + 1);\n};\n\n// ✅ Increments by 3 — each call gets the freshest value\nconst handleTripleClick = () => {\n  setCount((prev) => prev + 1);\n  setCount((prev) => prev + 1);\n  setCount((prev) => prev + 1);\n};\n```\n\n**Rule of thumb:** if your new state depends on the previous state, always use the updater function form.\n\n## State With Objects and Arrays: The Immutability Rule\n\nReact detects changes by comparing references, not deep values. This means you must always create a *new* object or array rather than mutating the existing one.\n\n```jsx\nconst [user, setUser] = useState({ name: \"Ada\", age: 30 });\n\n// ❌ Mutating directly — React won't detect this as a change\nuser.age = 31;\nsetUser(user);\n\n// ✅ Create a new object with the spread operator\nsetUser((prev) => ({ ...prev, age: 31 }));\n```\n\nSame idea for arrays:\n\n```jsx\nconst [todos, setTodos] = useState([]);\n\n// ❌ Mutating with push\ntodos.push(newTodo);\nsetTodos(todos);\n\n// ✅ Create a new array\nsetTodos((prev) => [...prev, newTodo]);\n```\n\n**Analogy:** Think of state like a legal document that requires a brand-new signed copy for every change — you can't just scribble an edit onto the original and expect it to count. React only \"notices\" a new signed copy (a new object/array reference).\n\n## The Rules of Hooks\n\nThis is where hooks become non-negotiable rather than just a suggestion. There are exactly two rules, and React enforces them (often via a linter plugin):\n\n### Rule 1: Only call hooks at the top level\n\n```jsx\n// ❌ Never call hooks inside conditions, loops, or nested functions\nfunction Broken({ shouldTrack }) {\n  if (shouldTrack) {\n    const [count, setCount] = useState(0); // breaks React's internal bookkeeping\n  }\n}\n\n// ✅ Always call the hook unconditionally, use the condition inside\nfunction Fixed({ shouldTrack }) {\n  const [count, setCount] = useState(0);\n  if (!shouldTrack) return null;\n  // ...\n}\n```\n\n**Why this rule exists:** React tracks hooks by the *order* they're called in, not by name. Internally, it's like a numbered list — \"the 1st hook call is this piece of state, the 2nd is that effect,\" and so on. If a hook call is skipped on some renders (because it was inside an `if`), the numbering shifts and React attaches the wrong state to the wrong hook.\n\n### Rule 2: Only call hooks from React functions\n\nHooks work inside:\n- React function components\n- Custom hooks (functions starting with `use`, which we'll cover in a later lesson)\n\nHooks do **not** work inside:\n- Regular JavaScript functions\n- Class components\n- Event handlers themselves (though you can *call* state setters from inside event handlers — that's different from calling `useState` itself there)\n\n## A Complete, Realistic Example\n\n```jsx\nfunction LikeButton() {\n  const [liked, setLiked] = useState(false);\n  const [likeCount, setLikeCount] = useState(42);\n\n  const handleClick = () => {\n    setLiked((prev) => !prev);\n    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));\n  };\n\n  return (\n    <button onClick={handleClick}>\n      {liked ? \"❤️\" : \"🤍\"} {likeCount}\n    </button>\n  );\n}\n```\n\n## Key Takeaways\n\n- Regular variables reset every render; `useState` persists a value across renders and re-renders the component whenever it changes.\n- Use the updater function form (`setCount(prev => prev + 1)`) whenever new state depends on old state — direct values can read stale data due to batching.\n- Never mutate state objects/arrays directly — always create a new reference (spread operator) so React can detect the change.\n- Hooks must be called unconditionally, at the top level of a component, in the same order every render — never inside `if`, loops, or nested functions."
          },
          {
            "title": "useEffect & the dependency array",
            "duration": "20 min",
            "type": "video",
            "isPreview": false,
            "content": "# useEffect & the Dependency Array\n\nThis lesson covers the hook developers find most confusing at first — and most powerful once it clicks. `useEffect` is React's answer to a fundamental question: **how do you synchronize your component with something outside of React** — an API, the browser's DOM, a subscription, a timer?\n\n*(This lesson pairs with the accompanying video walkthrough — the notes below stand alone as a complete reference.)*\n\n## The Core Mental Model: Synchronization, Not Lifecycle\n\nA lot of tutorials describe `useEffect` using class-component lifecycle language (\"this runs like `componentDidMount`\"). That framing causes bugs. The more accurate mental model:\n\n> `useEffect` lets you **synchronize** your component with an external system, based on the values it depends on.\n\n**Analogy:** Think of `useEffect` like a thermostat, not a light switch. A light switch is flipped once and stays that way (lifecycle thinking). A thermostat *continuously* checks the current temperature (dependencies) and adjusts the heater (the effect) to match — it's declarative, not a one-time trigger.\n\n## Basic Syntax\n\n```jsx\nimport { useEffect, useState } from \"react\";\n\nfunction DocumentTitleUpdater({ title }) {\n  useEffect(() => {\n    document.title = title;\n  }, [title]);\n\n  return <h1>Check the browser tab!</h1>;\n}\n```\n\nThree parts:\n1. **The effect function** — the code that syncs with the outside world\n2. **The dependency array** (`[title]`) — tells React *when* to re-run the effect\n3. **An optional cleanup function** (we'll cover this shortly) — undoes the effect before it runs again or the component unmounts\n\n## The Dependency Array: Three Modes\n\n```jsx\n// Mode 1: No array — runs after EVERY render (rarely what you want)\nuseEffect(() => {\n  console.log(\"Runs after every single render\");\n});\n\n// Mode 2: Empty array — runs ONCE, after the first render only\nuseEffect(() => {\n  console.log(\"Runs once, on mount\");\n}, []);\n\n// Mode 3: Array with values — runs on mount, then again whenever any listed value changes\nuseEffect(() => {\n  console.log(\"Runs on mount, and again whenever userId changes\");\n}, [userId]);\n```\n\n**The rule that prevents 90% of useEffect bugs:** the dependency array must include every reactive value (props, state, or anything derived from them) that your effect function actually reads. React's ESLint plugin (`eslint-plugin-react-hooks`) will warn you if you forget one — don't silence that warning without a very good, well-understood reason.\n\n## A Real Example: Fetching Data\n\n```jsx\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    setLoading(true);\n    fetch(`/api/users/${userId}`)\n      .then((res) => res.json())\n      .then((data) => {\n        setUser(data);\n        setLoading(false);\n      });\n  }, [userId]); // re-fetch whenever userId changes\n\n  if (loading) return <p>Loading...</p>;\n  return <h2>{user.name}</h2>;\n}\n```\n\nEvery time `userId` changes (say, the user navigates to a different profile), React re-runs the effect and fetches fresh data — you didn't need to write any manual \"did this prop change?\" comparison logic yourself.\n\n## Cleanup Functions: Preventing Memory Leaks\n\nSome effects set something up that needs to be torn down — a subscription, an event listener, a timer. You handle this by **returning a function** from your effect:\n\n```jsx\nfunction WindowWidthTracker() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", handleResize);\n\n    // Cleanup: runs before the effect re-runs, and when the component unmounts\n    return () => {\n      window.removeEventListener(\"resize\", handleResize);\n    };\n  }, []);\n\n  return <p>Window width: {width}px</p>;\n}\n```\n\n**Analogy:** Think of the cleanup function like returning a rental car before picking up a new one. If you don't \"return\" the old event listener (unsubscribe), you end up with dozens of duplicate listeners piling up every time the effect re-runs — a classic memory leak.\n\n**When does cleanup run?**\n- Right before the effect runs again (if dependencies changed)\n- When the component unmounts entirely\n\n## The Classic Race Condition Bug (and the Fix)\n\n```jsx\n// ❌ If userId changes quickly, an old, slow request can \"win\" and\n// overwrite newer data with stale data\nuseEffect(() => {\n  fetch(`/api/users/${userId}`)\n    .then((res) => res.json())\n    .then((data) => setUser(data));\n}, [userId]);\n\n// ✅ Use a cleanup flag to ignore outdated responses\nuseEffect(() => {\n  let ignore = false;\n\n  fetch(`/api/users/${userId}`)\n    .then((res) => res.json())\n    .then((data) => {\n      if (!ignore) setUser(data);\n    });\n\n  return () => {\n    ignore = true;\n  };\n}, [userId]);\n```\n\nThis is a real bug that shows up constantly in production apps with fast navigation or search-as-you-type features — worth internalizing early.\n\n## What useEffect Is NOT For\n\nA very common anti-pattern is using `useEffect` to compute a value derived from existing state/props:\n\n```jsx\n// ❌ Unnecessary effect — causes an extra render for no reason\nfunction Cart({ items }) {\n  const [total, setTotal] = useState(0);\n  useEffect(() => {\n    setTotal(items.reduce((sum, item) => sum + item.price, 0));\n  }, [items]);\n  return <p>Total: ${total}</p>;\n}\n\n// ✅ Just calculate it directly during render — no effect needed\nfunction Cart({ items }) {\n  const total = items.reduce((sum, item) => sum + item.price, 0);\n  return <p>Total: ${total}</p>;\n}\n```\n\nIf you can calculate a value directly from props/state during render, you almost never need `useEffect` for it. Reach for `useEffect` specifically when synchronizing with something *outside* React's rendering — the DOM, network, timers, subscriptions.\n\n## Key Takeaways\n\n- Think of `useEffect` as synchronization with an external system, not a lifecycle event — this framing prevents most misuse.\n- The dependency array controls *when* the effect re-runs: omit it (every render), pass `[]` (once, on mount), or list specific values (on mount + whenever those change).\n- Always include every reactive value your effect reads in the dependency array — trust the ESLint plugin's warnings here.\n- Return a cleanup function for anything that needs tearing down (listeners, subscriptions, timers) to avoid memory leaks and duplicate side effects.\n- Don't use `useEffect` to compute derived values you could calculate directly during render — that's an unnecessary extra render."
          },
          {
            "title": "useMemo, useCallback & useRef",
            "duration": "18 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# useMemo, useCallback & useRef\n\nThese three hooks solve three genuinely different problems, but beginners often lump them together as \"the performance hooks.\" Let's separate them clearly, because reaching for the wrong one is a very common source of both bugs and wasted optimization effort.\n\n## useRef: A Box That Persists Without Causing Re-renders\n\n`useRef` gives you a mutable container that survives across renders — but, unlike `useState`, **changing it does not trigger a re-render.**\n\n```jsx\nimport { useRef } from \"react\";\n\nfunction Stopwatch() {\n  const intervalRef = useRef(null);\n  const [seconds, setSeconds] = useState(0);\n\n  const start = () => {\n    intervalRef.current = setInterval(() => {\n      setSeconds((s) => s + 1);\n    }, 1000);\n  };\n\n  const stop = () => {\n    clearInterval(intervalRef.current);\n  };\n\n  return (\n    <div>\n      <p>{seconds}s</p>\n      <button onClick={start}>Start</button>\n      <button onClick={stop}>Stop</button>\n    </div>\n  );\n}\n```\n\n**Analogy:** If `useState` is a whiteboard React actively watches and redraws the room for whenever it changes, `useRef` is a sticky note in your pocket — you can read and write it freely, but nobody else (including React) is watching it or reacting to changes.\n\n### The Most Common Use Case: Accessing DOM Elements\n\n```jsx\nfunction TextInputWithFocus() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <>\n      <input ref={inputRef} type=\"text\" />\n      <button onClick={focusInput}>Focus the input</button>\n    </>\n  );\n}\n```\n\nWhen you pass a ref to a JSX element's `ref` attribute, React automatically sets `ref.current` to the actual underlying DOM node — giving you an escape hatch to imperatively call browser APIs (`.focus()`, `.scrollIntoView()`, measuring dimensions, etc.) that don't have a declarative React equivalent.\n\n**When to use `useRef`:** storing a value that needs to persist between renders but should *never* trigger a re-render when it changes — timer IDs, DOM node references, \"previous value\" tracking, or any mutable value that's an implementation detail rather than something the UI displays.\n\n## useMemo: Caching an Expensive Calculation\n\n`useMemo` re-runs a calculation only when its dependencies change, caching (\"memoizing\") the result in between.\n\n```jsx\nimport { useMemo } from \"react\";\n\nfunction ProductList({ products, searchTerm }) {\n  const filteredProducts = useMemo(() => {\n    console.log(\"Filtering...\"); // only logs when products or searchTerm actually change\n    return products.filter((p) =>\n      p.name.toLowerCase().includes(searchTerm.toLowerCase())\n    );\n  }, [products, searchTerm]);\n\n  return (\n    <ul>\n      {filteredProducts.map((p) => <li key={p.id}>{p.name}</li>)}\n    </ul>\n  );\n}\n```\n\nWithout `useMemo`, that `.filter()` call would re-run on *every single render* of `ProductList` — even if the parent re-rendered for a completely unrelated reason (like an unrelated piece of state changing elsewhere in the tree).\n\n**Analogy:** `useMemo` is like a chef who pre-chops vegetables and stores them, only re-chopping when the recipe (dependencies) actually changes — instead of re-chopping from scratch for every single dish that walks by the kitchen.\n\n### The Overuse Trap\n\n`useMemo` isn't free — it costs memory to cache the result and a comparison check on every render. For cheap calculations, the overhead of `useMemo` can exceed the cost of just recalculating:\n\n```jsx\n// ❌ Unnecessary — this addition is essentially free; useMemo adds overhead for no benefit\nconst total = useMemo(() => a + b, [a, b]);\n\n// ✅ Just calculate it directly\nconst total = a + b;\n```\n\n**Rule of thumb:** reach for `useMemo` when the calculation is genuinely expensive (filtering/sorting large arrays, complex math, heavy transformations) — not as a reflexive habit on every derived value.\n\n## useCallback: Caching a Function Reference\n\nThis is the one that confuses people most, because the *problem it solves* is subtle. In JavaScript, every time a component re-renders, any function defined inside it is a **brand new function** — even if the code looks identical.\n\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  // ❌ handleClick is a NEW function on every render of Parent\n  const handleClick = () => console.log(\"clicked\");\n\n  return <ExpensiveChild onClick={handleClick} />;\n}\n```\n\nIf `ExpensiveChild` is wrapped in `React.memo` (which we'll cover in the next lesson) to skip re-rendering when props haven't changed, this \"new function every time\" breaks that optimization — `React.memo` sees a *different* `onClick` reference every render and re-renders anyway.\n\n`useCallback` fixes this by returning the *same* function reference across renders, as long as its dependencies haven't changed:\n\n```jsx\nconst handleClick = useCallback(() => {\n  console.log(\"clicked\");\n}, []); // same function reference forever, since there are no dependencies\n```\n\n**Analogy:** Without `useCallback`, it's like handing someone a brand-new business card every time you meet, even though the information printed on it is identical — they can never tell \"is this the same card as last time?\" just by comparing references. `useCallback` hands out the *same physical card* until the information actually changes.\n\n### useCallback Is Specifically for the React.memo Pairing\n\n`useCallback` on its own does nothing useful unless the function is:\n- Passed as a prop to a child wrapped in `React.memo`, or\n- Used as a dependency in another hook's dependency array (like `useEffect`)\n\n```jsx\nconst MemoizedChild = React.memo(function Child({ onClick }) {\n  console.log(\"Child rendered\");\n  return <button onClick={onClick}>Click me</button>;\n});\n\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  const handleClick = useCallback(() => console.log(\"clicked\"), []);\n\n  return (\n    <>\n      <p>{count}</p>\n      <button onClick={() => setCount((c) => c + 1)}>Increment</button>\n      <MemoizedChild onClick={handleClick} />\n      {/* MemoizedChild will NOT re-render when count changes, because\n          both its props (onClick) are stable references */}\n    </>\n  );\n}\n```\n\n## Quick Comparison Table\n\n| Hook | Returns | Re-triggers render on change? | Use for |\n|---|---|---|---|\n| `useState` | A value | Yes | Data the UI displays and reacts to |\n| `useRef` | A mutable box (`.current`) | No | DOM references, timer IDs, values you don't want to trigger renders |\n| `useMemo` | A cached **value** | No (it just avoids recalculating) | Expensive calculations |\n| `useCallback` | A cached **function** | No | Stable function references, usually paired with `React.memo` |\n\n## Key Takeaways\n\n- `useRef` persists a mutable value across renders without causing re-renders — perfect for DOM access and \"invisible\" bookkeeping values.\n- `useMemo` caches a computed *value*; only reach for it when the calculation is genuinely expensive, not reflexively on every derived value.\n- `useCallback` caches a *function reference*; it's mainly useful when paired with `React.memo` or as a stable dependency for another hook.\n- All three are optimization tools with real overhead — measure before optimizing, and default to simple code first."
          },
          {
            "title": "The new use() hook & Actions",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# The new use() Hook & Actions\n\nReact 19 introduced changes that meaningfully simplify two of the most common pain points in React apps: reading async data inside components, and handling form submissions with pending/error states. This lesson covers both.\n\n## The Problem `use()` Solves\n\nBefore React 19, consuming a Promise or Context inside a component required workarounds — `useEffect` plus `useState` for data fetching, or being careful about *where* you could call `useContext`. The `use()` API generalizes reading async values and context into a single, more flexible primitive.\n\n```jsx\nimport { use, Suspense } from \"react\";\n\nfunction UserProfile({ userPromise }) {\n  const user = use(userPromise); // suspends until the promise resolves\n  return <h2>{user.name}</h2>;\n}\n\nfunction App({ userPromise }) {\n  return (\n    <Suspense fallback={<p>Loading user...</p>}>\n      <UserProfile userPromise={userPromise} />\n    </Suspense>\n  );\n}\n```\n\n**Analogy:** Think of `use()` like ordering food at a restaurant with a buzzer system. Instead of standing at the counter blocking everything else (a synchronous wait), you get a buzzer (Suspense boundary) and go sit down — the rest of the app keeps working, and `use()` \"unblocks\" your specific component the moment the data (the food) is ready.\n\n### The Critical Difference From Other Hooks: use() Can Be Conditional\n\nUnlike every other hook you've learned, `use()` is allowed to be called inside conditionals and loops:\n\n```jsx\nfunction Message({ show, messagePromise }) {\n  if (!show) return null;\n  const message = use(messagePromise); // ✅ totally fine — use() breaks the usual hook rules\n  return <p>{message}</p>;\n}\n```\n\nThis works because `use()` isn't tracked by call-order the way `useState`/`useEffect` are internally — it's designed specifically to be flexible about *where* it's called.\n\n## use() for Context (A Cleaner useContext)\n\n`use()` can also read Context, and — unlike `useContext` — it's allowed inside conditionals:\n\n```jsx\nimport { use } from \"react\";\n\nfunction ThemedButton({ show }) {\n  if (!show) return null;\n  const theme = use(ThemeContext); // conditional context read — not possible with useContext\n  return <button className={theme}>Click me</button>;\n}\n```\n\n## Actions: Simplifying Form Submission State\n\nBefore React 19, handling a form submission's pending state, errors, and success feedback meant manually wiring up several `useState` calls:\n\n```jsx\n// The \"old way\" — verbose, error-prone boilerplate\nfunction OldForm() {\n  const [pending, setPending] = useState(false);\n  const [error, setError] = useState(null);\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    setPending(true);\n    setError(null);\n    try {\n      await submitToServer(new FormData(e.target));\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setPending(false);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"email\" />\n      <button disabled={pending}>{pending ? \"Submitting...\" : \"Submit\"}</button>\n      {error && <p className=\"error\">{error}</p>}\n    </form>\n  );\n}\n```\n\nReact 19's **Actions** let you pass an async function directly to a `<form>`'s `action` prop, and React manages the pending/error state for you via the `useActionState` hook:\n\n```jsx\nimport { useActionState } from \"react\";\n\nasync function submitForm(previousState, formData) {\n  const email = formData.get(\"email\");\n  try {\n    await submitToServer({ email });\n    return { success: true, error: null };\n  } catch (err) {\n    return { success: false, error: err.message };\n  }\n}\n\nfunction NewForm() {\n  const [state, formAction, isPending] = useActionState(submitForm, {\n    success: false,\n    error: null,\n  });\n\n  return (\n    <form action={formAction}>\n      <input name=\"email\" />\n      <button disabled={isPending}>\n        {isPending ? \"Submitting...\" : \"Submit\"}\n      </button>\n      {state.error && <p className=\"error\">{state.error}</p>}\n    </form>\n  );\n}\n```\n\n**Analogy:** Actions are like switching from manually directing traffic at every intersection (tracking pending/error state yourself) to installing smart traffic lights that handle the coordination automatically — you describe the *outcome* you want, and React manages the state transitions.\n\n## useOptimistic: Instant UI Feedback\n\nA companion hook, `useOptimistic`, lets you show an \"optimistic\" UI update immediately — before the server confirms — then automatically reconciles once the real response comes back:\n\n```jsx\nimport { useOptimistic } from \"react\";\n\nfunction LikeButton({ initialLikes, addLike }) {\n  const [optimisticLikes, setOptimisticLikes] = useOptimistic(\n    initialLikes,\n    (current, increment) => current + increment\n  );\n\n  const handleClick = async () => {\n    setOptimisticLikes(1); // shows the +1 immediately\n    await addLike(); // the real server call happens in the background\n  };\n\n  return <button onClick={handleClick}>❤️ {optimisticLikes}</button>;\n}\n```\n\nThis gives users the instant, snappy feedback of a \"liked!\" state without waiting for a network round trip — while still reconciling to the real server value once it arrives.\n\n## When to Use What\n\n| Situation | Tool |\n|---|---|\n| Reading a Promise or Context value, possibly conditionally | `use()` |\n| Managing form submission pending/error state | `useActionState` + form `action` |\n| Showing instant feedback before server confirmation | `useOptimistic` |\n| Simple synchronous state that doesn't involve forms or async | Regular `useState` |\n\n## Key Takeaways\n\n- `use()` reads Promises and Context, and — uniquely among hooks — can be called conditionally or inside loops.\n- `use()` pairs with `<Suspense>` to show fallback UI while async data resolves, without manual `useEffect`/`useState` fetching boilerplate.\n- Actions (`useActionState` + a form's `action` prop) eliminate the manual pending/error `useState` boilerplate that used to surround every form submission.\n- `useOptimistic` shows instant UI feedback before a server response arrives, then reconciles automatically — great for likes, votes, and similar low-stakes instant-feel interactions."
          }
        ]
      },
      {
        "title": "Module 3: State, Context & Performance",
        "lessons": [
          {
            "title": "Lifting state up & the Context API",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Lifting State Up & the Context API\n\nAs components grow beyond a handful, a natural question emerges: **where should shared state actually live?** This lesson covers the two main answers React gives you — lifting state to a common ancestor, and, when that gets unwieldy, using Context.\n\n## The Problem: Sibling Components Need to Share Data\n\nImagine two sibling components — a search input and a results list — that both need access to the same search term. Since props only flow one direction (parent to child), siblings can't directly talk to each other.\n\n```jsx\n// ❌ SearchInput and ResultsList can't share state directly — they're siblings\nfunction App() {\n  return (\n    <div>\n      <SearchInput />\n      <ResultsList />\n    </div>\n  );\n}\n```\n\n## The Solution: Lift State to the Nearest Common Ancestor\n\n**Lifting state up** means moving the shared state to the closest parent that both components share, then passing it down as props.\n\n```jsx\nfunction App() {\n  const [searchTerm, setSearchTerm] = useState(\"\");\n\n  return (\n    <div>\n      <SearchInput value={searchTerm} onChange={setSearchTerm} />\n      <ResultsList searchTerm={searchTerm} />\n    </div>\n  );\n}\n\nfunction SearchInput({ value, onChange }) {\n  return (\n    <input value={value} onChange={(e) => onChange(e.target.value)} />\n  );\n}\n\nfunction ResultsList({ searchTerm }) {\n  const filtered = allItems.filter((item) => item.name.includes(searchTerm));\n  return <ul>{filtered.map((item) => <li key={item.id}>{item.name}</li>)}</ul>;\n}\n```\n\n**Analogy:** Think of state living in a family tree. If two cousins need to share a toy, the simplest solution isn't inventing a direct cousin-to-cousin phone line — it's giving the toy to their nearest shared relative (a grandparent), who hands it to whichever cousin needs it. That \"shared relative\" is the nearest common ancestor component.\n\nThis pattern — \"state lives as high as necessary, but no higher\" — is the default, idiomatic way to share state in React, and it should be your first instinct before reaching for anything more complex.\n\n## The Problem With Lifting State Too Far: Prop Drilling\n\nLifting state works great for nearby components. But what happens when the component that *needs* the data is 5 levels deep, and none of the components in between actually care about it?\n\n```jsx\n// ❌ theme has to be manually threaded through every layer, even ones\n// that don't use it themselves — this is \"prop drilling\"\nfunction App() {\n  const [theme, setTheme] = useState(\"dark\");\n  return <Layout theme={theme} />;\n}\nfunction Layout({ theme }) {\n  return <Sidebar theme={theme} />;\n}\nfunction Sidebar({ theme }) {\n  return <UserMenu theme={theme} />;\n}\nfunction UserMenu({ theme }) {\n  return <button className={theme}>Menu</button>;\n}\n```\n\n`Layout` and `Sidebar` don't use `theme` at all — they're just forced to accept and pass it along because `UserMenu`, buried deep inside, needs it. This is called **prop drilling**, and it's tedious and fragile (rename the prop, and you have to update every intermediate layer).\n\n## The Context API: Skipping the Middlemen\n\nContext lets a component provide a value that *any* descendant can read directly — no matter how deeply nested — without threading it through every layer manually.\n\n### Step 1: Create the Context\n\n```jsx\nimport { createContext } from \"react\";\n\nconst ThemeContext = createContext(\"light\"); // \"light\" is the default value\n```\n\n### Step 2: Provide the Value\n\n```jsx\nfunction App() {\n  const [theme, setTheme] = useState(\"dark\");\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <Layout />\n    </ThemeContext.Provider>\n  );\n}\n```\n\n### Step 3: Consume the Value, Anywhere Below\n\n```jsx\nimport { useContext } from \"react\";\n\nfunction UserMenu() {\n  const theme = useContext(ThemeContext); // reads directly — no prop drilling\n  return <button className={theme}>Menu</button>;\n}\n```\n\nNow `Layout` and `Sidebar` don't need to know or care about `theme` at all — they've been fully decoupled from data they never used.\n\n**Analogy:** If prop drilling is passing a note by hand through every person in a long line, Context is like a radio broadcast — anyone tuned to the right channel (wrapped in the right Provider) can pick up the signal directly, regardless of how far away they are from the broadcaster.\n\n## Common Context Use Cases\n\nContext works best for genuinely \"global-ish\" data that many distant components need:\n\n- **Theme** (light/dark mode)\n- **Authenticated user** info\n- **Locale/language** preferences\n- **Feature flags**\n\n## The Overuse Trap: Context Is Not a Replacement for All State Management\n\nA common beginner mistake is reaching for Context for *everything*, including state that's only shared between two or three nearby components — where lifting state up would be simpler and more explicit.\n\n```jsx\n// ❌ Overkill — a search term shared between two siblings doesn't need Context\nconst SearchContext = createContext();\n\n// ✅ Simple lifted state is enough here\nfunction App() {\n  const [searchTerm, setSearchTerm] = useState(\"\");\n  return (\n    <>\n      <SearchInput value={searchTerm} onChange={setSearchTerm} />\n      <ResultsList searchTerm={searchTerm} />\n    </>\n  );\n}\n```\n\n**Rule of thumb:** try lifting state up first. Reach for Context only when prop drilling genuinely becomes painful — typically 3+ levels deep, with intermediate components that don't use the data themselves.\n\n## A Performance Note\n\nEvery component consuming a Context re-renders whenever that Context's value changes — even if the specific piece of data it cares about didn't change. For large apps, this is why dedicated state management libraries (or splitting Context into smaller, more focused providers) sometimes become worthwhile — a topic for later, more advanced material.\n\n## Key Takeaways\n\n- Lifting state up (moving shared state to the nearest common ancestor) is the default, simplest way to share state between components — try this first.\n- Prop drilling — manually threading a prop through layers that don't use it — is the sign you might need Context instead.\n- Context has three steps: `createContext()`, wrap descendants in a `<Provider value={...}>`, and read it anywhere below with `useContext()`.\n- Don't reach for Context reflexively — it adds indirection, and simple lifted state is often clearer for data shared between just a few nearby components."
          },
          {
            "title": "Custom hooks",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Custom Hooks\n\nYou've now learned `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, and more. This lesson teaches you how to combine them into your **own** reusable hooks — arguably the single most powerful pattern in modern React for eliminating duplicated logic.\n\n## What Is a Custom Hook, Really?\n\nA custom hook is just a regular JavaScript function that:\n1. Has a name starting with `use` (this isn't just convention — React's linter relies on it to apply the Rules of Hooks correctly)\n2. Calls one or more other hooks inside it\n\nThat's the entire definition. There's no special syntax, no new API to learn — you're just extracting reusable logic into a function, the same way you'd extract any repeated code.\n\n## The Problem: Duplicated Stateful Logic\n\nImagine you need to track a browser window's width in three different components:\n\n```jsx\n// Component A\nfunction Header() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", handleResize);\n    return () => window.removeEventListener(\"resize\", handleResize);\n  }, []);\n  return <header>{width > 768 ? \"Desktop nav\" : \"Mobile nav\"}</header>;\n}\n\n// Component B — the SAME logic, copy-pasted\nfunction Sidebar() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", handleResize);\n    return () => window.removeEventListener(\"resize\", handleResize);\n  }, []);\n  return width > 768 ? <aside>Full sidebar</aside> : null;\n}\n```\n\nThis is a maintenance nightmare — fix a bug in one copy, and you have to remember to fix it in every other copy too.\n\n## The Solution: Extract It Into a Custom Hook\n\n```jsx\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener(\"resize\", handleResize);\n    return () => window.removeEventListener(\"resize\", handleResize);\n  }, []);\n\n  return width;\n}\n```\n\nNow every component that needs this logic just calls the hook:\n\n```jsx\nfunction Header() {\n  const width = useWindowWidth();\n  return <header>{width > 768 ? \"Desktop nav\" : \"Mobile nav\"}</header>;\n}\n\nfunction Sidebar() {\n  const width = useWindowWidth();\n  return width > 768 ? <aside>Full sidebar</aside> : null;\n}\n```\n\n**Analogy:** Think of a custom hook like a kitchen appliance you build once — a bread machine that combines \"measure flour,\" \"add yeast,\" \"knead,\" and \"bake\" into one reusable button press. You don't re-explain the whole recipe every time you want bread; you just press the button (call the hook).\n\n## Custom Hooks Don't Share State — They Share Logic\n\nA subtle but crucial point: each component that calls `useWindowWidth()` gets its **own independent** state. Calling the same custom hook in two components doesn't link them together — it just gives each one the same *behavior*, with completely separate internal state.\n\n```jsx\nfunction ComponentA() {\n  const [count, setCount] = useCounter(); // A's own count\n}\nfunction ComponentB() {\n  const [count, setCount] = useCounter(); // B's own count, totally separate\n}\n```\n\n## A More Practical Example: useFetch\n\n```jsx\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let ignore = false;\n    setLoading(true);\n\n    fetch(url)\n      .then((res) => res.json())\n      .then((data) => {\n        if (!ignore) {\n          setData(data);\n          setLoading(false);\n        }\n      })\n      .catch((err) => {\n        if (!ignore) {\n          setError(err);\n          setLoading(false);\n        }\n      });\n\n    return () => {\n      ignore = true;\n    };\n  }, [url]);\n\n  return { data, loading, error };\n}\n```\n\nUsage becomes remarkably clean:\n\n```jsx\nfunction UserProfile({ userId }) {\n  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Something went wrong.</p>;\n  return <h2>{user.name}</h2>;\n}\n```\n\nAll the fetching complexity — loading states, error handling, race condition prevention — is packaged away, and any component can reuse it with one line.\n\n## Composing Custom Hooks From Other Custom Hooks\n\nCustom hooks can call other custom hooks, letting you build up layers of abstraction:\n\n```jsx\nfunction useUser(userId) {\n  return useFetch(`/api/users/${userId}`);\n}\n\nfunction usePosts(userId) {\n  return useFetch(`/api/users/${userId}/posts`);\n}\n\nfunction useUserProfile(userId) {\n  const { data: user, loading: userLoading } = useUser(userId);\n  const { data: posts, loading: postsLoading } = usePosts(userId);\n\n  return {\n    user,\n    posts,\n    loading: userLoading || postsLoading,\n  };\n}\n```\n\n## Naming and Return Value Conventions\n\n- Always prefix with `use` — this isn't optional, it's how React's linter identifies your function as a hook and applies the Rules of Hooks to it\n- Return whatever shape makes sense for your use case: an array (like `useState` does) for a small, ordered pair of values, or an object (like our `useFetch` example) when there are three or more related values, since named object properties are easier to work with than remembering array positions\n\n## Key Takeaways\n\n- A custom hook is just a function starting with `use` that calls other hooks internally — there's no special syntax beyond that naming convention.\n- Custom hooks let you extract and reuse *stateful logic* across components without duplicating code.\n- Each component calling a custom hook gets its own independent state — custom hooks share behavior, not state, between components.\n- Custom hooks can compose other custom hooks, letting you build layered, reusable abstractions (like `useUserProfile` combining `useUser` and `usePosts`)."
          },
          {
            "title": "Why components re-render (and React.memo)",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Why Components Re-render (and React.memo)\n\nThis is your capstone concept for understanding React performance. Every optimization technique you'll ever apply in React — `useMemo`, `useCallback`, `React.memo`, code splitting — exists to answer one question: **why did this component just re-render, and did it need to?**\n\n## The Three Reasons a Component Re-renders\n\nA component re-renders when exactly one of these happens:\n\n1. **Its own state changes** (via a `useState` or `useReducer` setter)\n2. **Its parent re-renders** (by default, every child re-renders when its parent does — regardless of whether the child's own props actually changed)\n3. **A Context value it consumes changes**\n\nThat second point surprises almost everyone the first time they learn it: **by default, React re-renders a component's entire subtree whenever the parent re-renders — even if the child's props are identical to last time.**\n\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>Count: {count}</button>\n      <ExpensiveChild /> {/* re-renders every time count changes, even though it takes no props! */}\n    </div>\n  );\n}\n\nfunction ExpensiveChild() {\n  console.log(\"ExpensiveChild rendered\");\n  return <p>I don't even use any props, but I still re-render.</p>;\n}\n```\n\n**Analogy:** Think of a company org chart. When the CEO (parent) makes an announcement (re-renders), by default *everyone* below them in the chart re-reads the memo (re-renders) — even employees whose job is completely unaffected by the announcement. React's default behavior is \"when in doubt, re-render everything below\" because it's simpler and, for most apps, fast enough not to matter.\n\n## Why This Is Usually Fine (and When It Isn't)\n\nReact's reconciliation is fast — re-rendering a component doesn't necessarily mean the real DOM gets touched; React still diffs the virtual DOM output and only patches what's actually different. For the vast majority of components, \"re-render, then diff\" is cheap enough that you should never think about this.\n\nIt becomes a real problem when:\n- A component's render function does genuinely expensive work (heavy calculations, large list rendering)\n- A component re-renders very frequently (e.g., on every keystroke of an unrelated input)\n- You have deeply nested trees where the \"wasted\" re-renders add up\n\n## React.memo: Skipping Re-renders When Props Haven't Changed\n\n`React.memo` wraps a component and tells React: \"only re-render this if its props actually changed\" (using a shallow comparison).\n\n```jsx\nconst ExpensiveChild = React.memo(function ExpensiveChild({ data }) {\n  console.log(\"ExpensiveChild rendered\");\n  return <p>{data.label}</p>;\n});\n```\n\nNow, if `Parent` re-renders but passes the *same* `data` reference to `ExpensiveChild`, React skips re-rendering it entirely.\n\n## The Trap: React.memo Only Does a Shallow Comparison\n\nThis is where `React.memo` commonly \"fails\" to help, and it connects directly back to what you learned about `useCallback` and `useMemo`.\n\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  // ❌ This object is a NEW reference every render, even though its contents\n  // look identical — React.memo's shallow comparison sees it as \"different\"\n  const config = { label: \"Hello\" };\n\n  return (\n    <>\n      <button onClick={() => setCount(count + 1)}>{count}</button>\n      <MemoizedChild config={config} /> {/* still re-renders every time! */}\n    </>\n  );\n}\n```\n\nThe fix connects everything you've learned in this module:\n\n```jsx\nfunction Parent() {\n  const [count, setCount] = useState(0);\n\n  // ✅ Same object reference across renders, since dependencies are empty\n  const config = useMemo(() => ({ label: \"Hello\" }), []);\n\n  return (\n    <>\n      <button onClick={() => setCount(count + 1)}>{count}</button>\n      <MemoizedChild config={config} /> {/* now correctly skips re-rendering */}\n    </>\n  );\n}\n```\n\nThis is exactly why `useMemo`, `useCallback`, and `React.memo` are described as a trio — `React.memo` alone often accomplishes nothing unless the props being passed down are *also* kept referentially stable with `useMemo`/`useCallback`.\n\n## Should You Wrap Everything in React.memo?\n\nNo. Like `useMemo` and `useCallback`, `React.memo` has its own overhead (the shallow comparison itself costs something), and for cheap-to-render components, that comparison cost can exceed the cost of just re-rendering normally.\n\n**A practical checklist before reaching for React.memo:**\n1. Have you actually measured a performance problem (e.g., with React DevTools Profiler)? Don't optimize blind.\n2. Is the component's render work genuinely expensive, or does it re-render very frequently?\n3. Can you pass simple primitive props (strings, numbers, booleans) instead of objects/arrays/functions? Primitives compare by value, so they don't need `useMemo`/`useCallback` gymnastics to stay \"stable.\"\n\n## Composition as an Alternative to Memoization\n\nSometimes, a cleverer structure avoids the whole problem without any memoization at all:\n\n```jsx\n// Instead of this (Sidebar re-renders whenever count changes, even memoized...)\nfunction Parent() {\n  const [count, setCount] = useState(0);\n  return (\n    <>\n      <button onClick={() => setCount(count + 1)}>{count}</button>\n      <Sidebar />\n    </>\n  );\n}\n\n// ...move the state down, so only the button's own subtree re-renders\nfunction Parent() {\n  return (\n    <>\n      <CounterButton />\n      <Sidebar /> {/* never re-renders due to counter clicks — it's not even in the same tree branch */}\n    </>\n  );\n}\nfunction CounterButton() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```\n\nThis — moving state as close as possible to where it's actually used — often solves performance problems more elegantly than memoization, and it's usually the first thing worth trying.\n\n## Key Takeaways\n\n- Components re-render for three reasons: their own state changed, their parent re-rendered (the default, regardless of prop changes), or a consumed Context value changed.\n- `React.memo` skips a re-render when props are shallowly equal to last time — but objects, arrays, and functions are new references every render unless stabilized with `useMemo`/`useCallback`.\n- Don't reach for `React.memo` reflexively — measure first with the DevTools Profiler, and prefer simple primitive props when possible.\n- Moving state down to the smallest component that actually needs it often eliminates unnecessary re-renders more cleanly than adding memoization on top of a suboptimal structure."
          },
          {
            "title": "Capstone: paginated data table",
            "duration": "50 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone Project: Paginated Data Table\n\nTime to put everything from this course together into one real, portfolio-worthy component. You'll build a searchable, sortable, paginated data table — a UI pattern you'll encounter constantly in real-world dashboards, admin panels, and internal tools.\n\n## What You're Building\n\nA table component that:\n1. Displays a list of records (we'll use sample user data)\n2. Supports **live search** across name/email\n3. Supports **column sorting** (click a header to sort ascending/descending)\n4. Supports **pagination** (a configurable number of rows per page)\n5. Shows a clean **empty state** when a search returns no results\n\nThis project deliberately combines almost every concept from this course: `useState` for multiple pieces of UI state, `useMemo` for expensive filtering/sorting, conditional rendering, list rendering with keys, controlled form inputs, and component composition.\n\n## Step 1: Set Up Your Data and Component Shell\n\n```jsx\nconst sampleUsers = [\n  { id: 1, name: \"Ada Lovelace\", email: \"ada@example.com\", role: \"Engineer\" },\n  { id: 2, name: \"Grace Hopper\", email: \"grace@example.com\", role: \"Admiral\" },\n  { id: 3, name: \"Alan Turing\", email: \"alan@example.com\", role: \"Mathematician\" },\n  // ...imagine 50+ more rows for a realistic dataset\n];\n\nfunction DataTable({ data = sampleUsers, rowsPerPage = 5 }) {\n  return (\n    <div className=\"data-table\">\n      {/* We'll build this out piece by piece */}\n    </div>\n  );\n}\n```\n\n## Step 2: Add Search State (Controlled Input)\n\n```jsx\nfunction DataTable({ data = sampleUsers, rowsPerPage = 5 }) {\n  const [searchTerm, setSearchTerm] = useState(\"\");\n\n  return (\n    <div className=\"data-table\">\n      <input\n        type=\"text\"\n        placeholder=\"Search by name or email...\"\n        value={searchTerm}\n        onChange={(e) => setSearchTerm(e.target.value)}\n      />\n      {/* table goes here */}\n    </div>\n  );\n}\n```\n\n## Step 3: Filter With useMemo\n\nFiltering runs on every render if you don't memoize it — with a real dataset, this is exactly the kind of \"genuinely expensive enough to matter\" calculation `useMemo` is designed for.\n\n```jsx\nconst filteredData = useMemo(() => {\n  const term = searchTerm.toLowerCase();\n  return data.filter(\n    (row) =>\n      row.name.toLowerCase().includes(term) ||\n      row.email.toLowerCase().includes(term)\n  );\n}, [data, searchTerm]);\n```\n\n## Step 4: Add Sorting State\n\n```jsx\nconst [sortConfig, setSortConfig] = useState({ key: \"name\", direction: \"asc\" });\n\nconst handleSort = (key) => {\n  setSortConfig((prev) => ({\n    key,\n    direction: prev.key === key && prev.direction === \"asc\" ? \"desc\" : \"asc\",\n  }));\n};\n\nconst sortedData = useMemo(() => {\n  const sorted = [...filteredData].sort((a, b) => {\n    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === \"asc\" ? -1 : 1;\n    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === \"asc\" ? 1 : -1;\n    return 0;\n  });\n  return sorted;\n}, [filteredData, sortConfig]);\n```\n\nNotice `[...filteredData]` — we spread into a new array before sorting, because `.sort()` mutates in place, and mutating state (even indirectly, through a memoized value derived from it) breaks React's change-detection assumptions.\n\n## Step 5: Add Pagination State\n\n```jsx\nconst [currentPage, setCurrentPage] = useState(1);\nconst totalPages = Math.ceil(sortedData.length / rowsPerPage);\n\nconst paginatedData = useMemo(() => {\n  const start = (currentPage - 1) * rowsPerPage;\n  return sortedData.slice(start, start + rowsPerPage);\n}, [sortedData, currentPage, rowsPerPage]);\n```\n\n**Important edge case:** what happens if the user searches for something that results in fewer pages than `currentPage`? We need to reset the page whenever the search term changes:\n\n```jsx\nuseEffect(() => {\n  setCurrentPage(1);\n}, [searchTerm]);\n```\n\n## Step 6: Assemble the Full Component\n\n```jsx\nfunction DataTable({ data = sampleUsers, rowsPerPage = 5 }) {\n  const [searchTerm, setSearchTerm] = useState(\"\");\n  const [sortConfig, setSortConfig] = useState({ key: \"name\", direction: \"asc\" });\n  const [currentPage, setCurrentPage] = useState(1);\n\n  useEffect(() => {\n    setCurrentPage(1);\n  }, [searchTerm]);\n\n  const filteredData = useMemo(() => {\n    const term = searchTerm.toLowerCase();\n    return data.filter(\n      (row) =>\n        row.name.toLowerCase().includes(term) ||\n        row.email.toLowerCase().includes(term)\n    );\n  }, [data, searchTerm]);\n\n  const sortedData = useMemo(() => {\n    return [...filteredData].sort((a, b) => {\n      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === \"asc\" ? -1 : 1;\n      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === \"asc\" ? 1 : -1;\n      return 0;\n    });\n  }, [filteredData, sortConfig]);\n\n  const totalPages = Math.max(1, Math.ceil(sortedData.length / rowsPerPage));\n\n  const paginatedData = useMemo(() => {\n    const start = (currentPage - 1) * rowsPerPage;\n    return sortedData.slice(start, start + rowsPerPage);\n  }, [sortedData, currentPage, rowsPerPage]);\n\n  const handleSort = (key) => {\n    setSortConfig((prev) => ({\n      key,\n      direction: prev.key === key && prev.direction === \"asc\" ? \"desc\" : \"asc\",\n    }));\n  };\n\n  const columns = [\n    { key: \"name\", label: \"Name\" },\n    { key: \"email\", label: \"Email\" },\n    { key: \"role\", label: \"Role\" },\n  ];\n\n  return (\n    <div className=\"data-table\">\n      <input\n        type=\"text\"\n        placeholder=\"Search by name or email...\"\n        value={searchTerm}\n        onChange={(e) => setSearchTerm(e.target.value)}\n      />\n\n      {paginatedData.length === 0 ? (\n        <p className=\"empty-state\">No results found for \"{searchTerm}\".</p>\n      ) : (\n        <table>\n          <thead>\n            <tr>\n              {columns.map((col) => (\n                <th key={col.key} onClick={() => handleSort(col.key)}>\n                  {col.label}\n                  {sortConfig.key === col.key && (sortConfig.direction === \"asc\" ? \" ▲\" : \" ▼\")}\n                </th>\n              ))}\n            </tr>\n          </thead>\n          <tbody>\n            {paginatedData.map((row) => (\n              <tr key={row.id}>\n                <td>{row.name}</td>\n                <td>{row.email}</td>\n                <td>{row.role}</td>\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      )}\n\n      <div className=\"pagination\">\n        <button\n          disabled={currentPage === 1}\n          onClick={() => setCurrentPage((p) => p - 1)}\n        >\n          Previous\n        </button>\n        <span>Page {currentPage} of {totalPages}</span>\n        <button\n          disabled={currentPage === totalPages}\n          onClick={() => setCurrentPage((p) => p + 1)}\n        >\n          Next\n        </button>\n      </div>\n    </div>\n  );\n}\n```\n\n## Extension Challenges (Push Yourself Further)\n\nOnce your base version works, try these on your own — they'll deepen everything you've learned:\n\n1. **Extract a custom hook** — pull all the search/sort/pagination logic into a `useDataTable(data, rowsPerPage)` hook, so `DataTable` becomes purely presentational.\n2. **Add a \"rows per page\" selector** — let the user choose 5, 10, or 25 rows, and make sure the current page resets sensibly when it changes.\n3. **Persist state in the URL** — sync `searchTerm`, `sortConfig`, and `currentPage` to query parameters so a reload (or a shared link) preserves the exact view.\n4. **Optimize with React.memo** — wrap the table rows in a memoized subcomponent and verify with React DevTools Profiler that unrelated re-renders (like typing in an unrelated field elsewhere on the page) don't cascade into the table.\n\n## What You've Demonstrated\n\nBy finishing this capstone, you've shown real, practical command of: controlled inputs, derived state via `useMemo`, careful immutable array operations, `useEffect` for state synchronization (resetting the page), and composing multiple pieces of interacting state into one cohesive, real-world UI pattern. This is genuinely portfolio-ready work — consider adding it to a GitHub repo with a short README explaining your design decisions."
          }
        ]
      }
    ]
  },
  {
    "title": "Tailwind CSS Masterclass",
    "slug": "tailwind-css-masterclass",
    "category": "Frontend Development",
    "level": "Beginner",
    "price": 1,
    "shortDescription": "Utility-first styling, design tokens, and building a real component library with Tailwind.",
    "fullDescription": "Learn to build fast, consistent, themeable UI with Tailwind — from utility fundamentals to extracting a reusable design system your whole team can share.",
    "instructor": "TechForge Faculty",
    "duration": "8 hours",
    "tags": [
      "Tailwind CSS",
      "Design Systems",
      "UI Engineering"
    ],
    "modules": [
      {
        "title": "Module 1: Utility-First Fundamentals",
        "lessons": [
          {
            "title": "Why utility-first CSS",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Why utility-first CSS\n\nInstead of writing `.card { padding: 1rem; border-radius: 0.5rem; }` in a stylesheet, Tailwind lets you compose the same result directly in markup: `p-4 rounded-lg`.\n\n## The trade-off\n- You stop naming things (no more `.card`, `.card--featured`, `.card__title`).\n- Styles live next to the markup they affect, so nothing goes stale.\n- The generated CSS stays small because classes are reused everywhere.\n\nThis course teaches you to think in utilities without losing design consistency."
          },
          {
            "title": "Spacing, sizing & the design scale",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Spacing, sizing & the design scale\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Typography utilities",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Typography utilities\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Flexbox & Grid utilities",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Flexbox & Grid utilities\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Responsive & Stateful Styling",
        "lessons": [
          {
            "title": "Responsive prefixes & mobile-first design",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Responsive prefixes & mobile-first design\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Dark mode & state variants",
            "duration": "14 min",
            "type": "video",
            "isPreview": false,
            "content": "# Dark mode & state variants\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Animations & transitions",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Animations & transitions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Arbitrary values & the theme() function",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Arbitrary values & the theme() function\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Theming & Design Systems",
        "lessons": [
          {
            "title": "Customizing tailwind.config",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Customizing tailwind.config\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Extracting reusable components",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Extracting reusable components\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working with @apply responsibly",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working with @apply responsibly\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: themeable component library",
            "duration": "40 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: themeable component library\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "TypeScript for Production Apps",
    "slug": "typescript-for-production-apps",
    "category": "Frontend Development",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Type systems, generics, and typing real React components with confidence.",
    "fullDescription": "Go from \"TypeScript is annoying\" to \"I can't code without it.\" Covers the type system fundamentals through advanced generics and typing React props, hooks, and events.",
    "instructor": "TechForge Faculty",
    "duration": "12 hours",
    "tags": [
      "TypeScript",
      "React",
      "Generics",
      "Type Safety"
    ],
    "modules": [
      {
        "title": "Module 1: Type System Basics",
        "lessons": [
          {
            "title": "Basic types & type inference",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Basic types & type inference\n\nTypeScript infers types automatically in most cases.\n\n```ts\nlet count = 5; // inferred as number\nfunction add(a: number, b: number): number {\n  return a + b;\n}\n```\n\n## Key takeaways\n- Let inference do the work; only annotate when it improves readability.\n- `interface` and `type` both describe object shapes."
          },
          {
            "title": "Interfaces vs type aliases",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Interfaces vs type aliases\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Union & intersection types",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Union & intersection types\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Narrowing & type guards",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Narrowing & type guards\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Generics",
        "lessons": [
          {
            "title": "Generic functions",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Generic functions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Generic constraints & utility types",
            "duration": "18 min",
            "type": "video",
            "isPreview": false,
            "content": "# Generic constraints & utility types\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Conditional & mapped types",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Conditional & mapped types\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Typing async code",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Typing async code\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: TypeScript + React",
        "lessons": [
          {
            "title": "Typing component props & children",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Typing component props & children\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Typing useState, useReducer & events",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Typing useState, useReducer & events\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Typing custom hooks & context",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Typing custom hooks & context\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: strictly-typed form library",
            "duration": "45 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: strictly-typed form library\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Next.js App Router and SSR",
    "slug": "nextjs-app-router-and-ssr",
    "category": "Frontend Development",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "App Router, server components, and shipping production Next.js apps.",
    "fullDescription": "Learn the App Router, Server vs Client Components, data fetching & caching, route handlers, server actions, and deployment on a modern Next.js codebase.",
    "instructor": "TechForge Faculty",
    "duration": "16 hours",
    "tags": [
      "Next.js",
      "React",
      "SSR",
      "App Router"
    ],
    "modules": [
      {
        "title": "Module 1: App Router Fundamentals",
        "lessons": [
          {
            "title": "File-based routing & layouts",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# File-based routing & layouts\n\nIn the App Router, a folder inside `/app` is a route segment. A `page.jsx` inside it makes that segment navigable; a `layout.jsx` wraps every page beneath it and persists across navigations.\n\n```\napp/\n  layout.jsx      <- root layout\n  page.jsx        <- \"/\"\n  courses/\n    page.jsx      <- \"/courses\"\n    [slug]/\n      page.jsx    <- \"/courses/:slug\"\n```\n\n## Key takeaways\n- Layouts persist state and don't re-render on navigation within them.\n- `[slug]` folders create dynamic routes automatically."
          },
          {
            "title": "Dynamic routes & route groups",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Dynamic routes & route groups\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Loading & error UI conventions",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Loading & error UI conventions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Metadata & SEO basics",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Metadata & SEO basics\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Server & Client Components",
        "lessons": [
          {
            "title": "Server Components mental model",
            "duration": "18 min",
            "type": "video",
            "isPreview": false,
            "content": "# Server Components mental model\n\n_Full lesson content coming soon._"
          },
          {
            "title": "When to reach for \"use client\"",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# When to reach for \"use client\"\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Composing server & client components",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Composing server & client components\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Streaming with Suspense",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Streaming with Suspense\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Data & Production",
        "lessons": [
          {
            "title": "Data fetching & caching in the App Router",
            "duration": "18 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Data fetching & caching in the App Router\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Route handlers & server actions",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Route handlers & server actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Image, font & performance optimization",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Image, font & performance optimization\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: full-stack blog with Next.js",
            "duration": "60 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: full-stack blog with Next.js\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Vue.js Modern Development",
    "slug": "vuejs-modern-development",
    "category": "Frontend Development",
    "level": "Beginner",
    "price": 1,
    "shortDescription": "Composition API, reactivity, and building real apps with Vue 3.",
    "fullDescription": "A friendly, thorough introduction to Vue 3: the Composition API, reactivity system, single-file components, and Vue Router — everything you need to build a real app.",
    "instructor": "TechForge Faculty",
    "duration": "11 hours",
    "tags": [
      "Vue",
      "Vue 3",
      "Composition API"
    ],
    "modules": [
      {
        "title": "Module 1: Vue Fundamentals",
        "lessons": [
          {
            "title": "Single-file components & templates",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Single-file components & templates\n\nA Vue `.vue` file bundles template, script, and style together:\n\n```vue\n<template>\n  <h1>{{ title }}</h1>\n</template>\n<script setup>\nconst title = \"Hello Vue\";\n</script>\n<style scoped>\nh1 { color: teal; }\n</style>\n```\n\n## Key takeaways\n- `{{ }}` interpolates reactive values into the template.\n- `scoped` styles never leak outside the component."
          },
          {
            "title": "The Composition API vs Options API",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# The Composition API vs Options API\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Reactivity: ref & reactive",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Reactivity: ref & reactive\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Computed properties & watchers",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Computed properties & watchers\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Components & Routing",
        "lessons": [
          {
            "title": "Props, emits & slots",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Props, emits & slots\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Vue Router basics",
            "duration": "14 min",
            "type": "video",
            "isPreview": false,
            "content": "# Vue Router basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Composables (custom hooks)",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Composables (custom hooks)\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Forms & v-model",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Forms & v-model\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Building a Real App",
        "lessons": [
          {
            "title": "State management with Pinia",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# State management with Pinia\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Fetching & displaying API data",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Fetching & displaying API data\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Transitions & animations",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Transitions & animations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a Vue task manager",
            "duration": "45 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a Vue task manager\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Angular Complete Guide",
    "slug": "angular-complete-guide",
    "category": "Frontend Development",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Components, dependency injection, RxJS, and building enterprise-grade Angular apps.",
    "fullDescription": "A structured tour of Angular's opinionated architecture: components, services, dependency injection, RxJS observables, and the router — the patterns large teams rely on.",
    "instructor": "TechForge Faculty",
    "duration": "15 hours",
    "tags": [
      "Angular",
      "RxJS",
      "TypeScript"
    ],
    "modules": [
      {
        "title": "Module 1: Angular Fundamentals",
        "lessons": [
          {
            "title": "Components, templates & data binding",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Components, templates & data binding\n\nAngular components pair a TypeScript class with an HTML template. Data binding syncs them:\n\n```html\n<h1>{{ title }}</h1>\n<input [(ngModel)]=\"title\" />\n```\n\n`{{ }}` is one-way interpolation; `[(ngModel)]` is two-way binding, keeping the input and the class property in sync automatically.\n\n## Key takeaways\n- Angular components are classes decorated with `@Component`.\n- Two-way binding needs the `FormsModule`."
          },
          {
            "title": "Directives: *ngIf, *ngFor, and custom directives",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Directives: *ngIf, *ngFor, and custom directives\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Dependency injection & services",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Dependency injection & services\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Angular modules (NgModules) & standalone components",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Angular modules (NgModules) & standalone components\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Reactive Programming",
        "lessons": [
          {
            "title": "RxJS observables from scratch",
            "duration": "18 min",
            "type": "video",
            "isPreview": false,
            "content": "# RxJS observables from scratch\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Reactive forms",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Reactive forms\n\n_Full lesson content coming soon._"
          },
          {
            "title": "HTTP client & interceptors",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# HTTP client & interceptors\n\n_Full lesson content coming soon._"
          },
          {
            "title": "The Angular router",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# The Angular router\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Production Angular",
        "lessons": [
          {
            "title": "State management patterns",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# State management patterns\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Testing components & services",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Testing components & services\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Performance & change detection",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Performance & change detection\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: an admin dashboard",
            "duration": "55 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: an admin dashboard\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Astro Static Site Development",
    "slug": "astro-static-site-development",
    "category": "Frontend Development",
    "level": "Beginner",
    "price": 1,
    "shortDescription": "Build blazing-fast content sites with Astro's islands architecture.",
    "fullDescription": "Learn Astro's zero-JS-by-default philosophy, islands architecture, content collections, and how to ship content-heavy sites that load instantly.",
    "instructor": "TechForge Faculty",
    "duration": "7 hours",
    "tags": [
      "Astro",
      "Static Sites",
      "Performance"
    ],
    "modules": [
      {
        "title": "Module 1: Astro Fundamentals",
        "lessons": [
          {
            "title": "Islands architecture explained",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Islands architecture explained\n\nAstro renders everything to static HTML by default and ships zero JavaScript unless you explicitly opt a component into interactivity — an \"island.\"\n\n```astro\n<Counter client:load />\n```\n\nOnly `<Counter />` hydrates; the rest of the page stays static HTML.\n\n## Key takeaways\n- Static-first means faster pages by default.\n- `client:load`, `client:idle`, and `client:visible` control *when* an island hydrates."
          },
          {
            "title": ".astro components & templating",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# .astro components & templating\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Layouts & slots",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Layouts & slots\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Using React/Vue/Svelte components inside Astro",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Using React/Vue/Svelte components inside Astro\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Content & Data",
        "lessons": [
          {
            "title": "Content collections & Markdown/MDX",
            "duration": "16 min",
            "type": "video",
            "isPreview": false,
            "content": "# Content collections & Markdown/MDX\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Fetching data at build time",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Fetching data at build time\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Dynamic routes for content",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Dynamic routes for content\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Image optimization",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Image optimization\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Shipping",
        "lessons": [
          {
            "title": "SEO & sitemaps",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# SEO & sitemaps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Deploying an Astro site",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Deploying an Astro site\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Adding a CMS backend",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Adding a CMS backend\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a content-driven blog",
            "duration": "40 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a content-driven blog\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Remix Full-Stack Web Apps",
    "slug": "remix-full-stack-web-apps",
    "category": "Frontend Development",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Nested routing, loaders/actions, and building full-stack apps that work without JS.",
    "fullDescription": "Remix embraces web fundamentals — forms, HTTP, and progressive enhancement — to build full-stack apps that are fast and resilient by default.",
    "instructor": "TechForge Faculty",
    "duration": "13 hours",
    "tags": [
      "Remix",
      "React",
      "Full-Stack"
    ],
    "modules": [
      {
        "title": "Module 1: Remix Fundamentals",
        "lessons": [
          {
            "title": "Nested routing & route conventions",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Nested routing & route conventions\n\nRemix routes are files, and nested folders create nested UI — a parent route's `<Outlet />` renders the matched child route.\n\n```\nroutes/\n  courses.jsx        <- layout for all /courses/* routes\n  courses._index.jsx <- \"/courses\"\n  courses.$slug.jsx  <- \"/courses/:slug\"\n```\n\n## Key takeaways\n- Nested routes mean nested loading states and error boundaries too.\n- `$slug` is Remix's dynamic segment syntax."
          },
          {
            "title": "Loaders: fetching data on the server",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Loaders: fetching data on the server\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Actions: handling form submissions",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Actions: handling form submissions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Error boundaries & catch boundaries",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Error boundaries & catch boundaries\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Progressive Enhancement",
        "lessons": [
          {
            "title": "Forms that work without JavaScript",
            "duration": "14 min",
            "type": "video",
            "isPreview": false,
            "content": "# Forms that work without JavaScript\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Optimistic UI",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Optimistic UI\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Sessions & cookies",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Sessions & cookies\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Authentication patterns",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Authentication patterns\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Shipping Remix",
        "lessons": [
          {
            "title": "Data mutations & revalidation",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Data mutations & revalidation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Deploying Remix apps",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Deploying Remix apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Testing loaders & actions",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Testing loaders & actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a full-stack bookmarking app",
            "duration": "55 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a full-stack bookmarking app\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Node.js and Express Backend Engineering",
    "slug": "nodejs-express-backend-engineering",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Build production-grade REST APIs with Node.js, Express, and MongoDB.",
    "fullDescription": "Everything you need to build real backend services: routing, middleware, authentication, error handling, and connecting to MongoDB the right way.",
    "instructor": "TechForge Faculty",
    "duration": "15 hours",
    "tags": [
      "Node.js",
      "Express",
      "MongoDB",
      "REST API"
    ],
    "modules": [
      {
        "title": "Module 1: Express Fundamentals",
        "lessons": [
          {
            "title": "Routing & middleware",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Routing & middleware\n\nExpress middleware are functions that run in order for a request: `(req, res, next) => {}`. Calling `next()` passes control to the next one.\n\n```js\napp.use(express.json());\napp.get(\"/api/courses\", getCourses);\n```\n\n## Key takeaways\n- Middleware order matters — `express.json()` must run before routes that read `req.body`.\n- A route handler is just middleware that doesn't call `next()`."
          },
          {
            "title": "Request/response lifecycle",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Request/response lifecycle\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Environment config & project structure",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Environment config & project structure\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Error handling middleware",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Error handling middleware\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Data & Auth",
        "lessons": [
          {
            "title": "Connecting to MongoDB with Mongoose",
            "duration": "16 min",
            "type": "video",
            "isPreview": false,
            "content": "# Connecting to MongoDB with Mongoose\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Schema design & validation",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Schema design & validation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "JWT authentication",
            "duration": "18 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# JWT authentication\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Role-based access control",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Role-based access control\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Production Practices",
        "lessons": [
          {
            "title": "Testing Express APIs",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Testing Express APIs\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Rate limiting & security headers",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Rate limiting & security headers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Logging & monitoring",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Logging & monitoring\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a full REST API",
            "duration": "60 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a full REST API\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Django and FastAPI Masterclass",
    "slug": "django-and-fastapi-masterclass",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Two of Python's best backend frameworks, side by side — batteries-included vs async-first.",
    "fullDescription": "Learn Django's batteries-included approach (ORM, admin, auth) alongside FastAPI's async-first, type-hinted style — and know when to reach for each.",
    "instructor": "TechForge Faculty",
    "duration": "16 hours",
    "tags": [
      "Python",
      "Django",
      "FastAPI"
    ],
    "modules": [
      {
        "title": "Module 1: Django Foundations",
        "lessons": [
          {
            "title": "Django project structure & the ORM",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Django project structure & the ORM\n\nDjango models map directly to database tables:\n\n```python\nclass Course(models.Model):\n    title = models.CharField(max_length=200)\n    price = models.DecimalField(max_digits=5, decimal_places=2, default=1.00)\n```\n\nRunning `python manage.py makemigrations` and `migrate` turns that class into real SQL schema changes.\n\n## Key takeaways\n- The ORM means you rarely write raw SQL.\n- Django's admin panel is generated from your models for free."
          },
          {
            "title": "Views, templates & URL routing",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Views, templates & URL routing\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Django admin & forms",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Django admin & forms\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Authentication with Django",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Authentication with Django\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: FastAPI Foundations",
        "lessons": [
          {
            "title": "Path operations & type-hinted request bodies",
            "duration": "16 min",
            "type": "video",
            "isPreview": false,
            "content": "# Path operations & type-hinted request bodies\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Pydantic models & validation",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Pydantic models & validation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Dependency injection in FastAPI",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Dependency injection in FastAPI\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Async endpoints & background tasks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Async endpoints & background tasks\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Choosing & Shipping",
        "lessons": [
          {
            "title": "Django REST Framework basics",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Django REST Framework basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Auto-generated docs with FastAPI (OpenAPI)",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Auto-generated docs with FastAPI (OpenAPI)\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Django vs FastAPI: when to use which",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Django vs FastAPI: when to use which\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: an API in both frameworks",
            "duration": "60 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: an API in both frameworks\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Go for Backend Systems",
    "slug": "go-for-backend-systems",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Goroutines, channels, and building fast, concurrent backend services in Go.",
    "fullDescription": "Learn Go from a backend engineer's perspective: the type system, goroutines and channels for concurrency, and building HTTP services that scale.",
    "instructor": "TechForge Faculty",
    "duration": "13 hours",
    "tags": [
      "Go",
      "Golang",
      "Concurrency"
    ],
    "modules": [
      {
        "title": "Module 1: Go Fundamentals",
        "lessons": [
          {
            "title": "Types, structs & interfaces",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Types, structs & interfaces\n\nGo interfaces are satisfied implicitly — no `implements` keyword required.\n\n```go\ntype Course struct {\n    Title string\n    Price float64\n}\n\ntype Priced interface {\n    GetPrice() float64\n}\n\nfunc (c Course) GetPrice() float64 { return c.Price }\n```\n\n`Course` now satisfies `Priced` automatically, just by having a matching method.\n\n## Key takeaways\n- Structs + methods are Go's answer to classes.\n- Implicit interfaces keep packages decoupled."
          },
          {
            "title": "Error handling the Go way",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Error handling the Go way\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Packages & modules",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Packages & modules\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Slices, maps & pointers",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Slices, maps & pointers\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Concurrency",
        "lessons": [
          {
            "title": "Goroutines from scratch",
            "duration": "16 min",
            "type": "video",
            "isPreview": false,
            "content": "# Goroutines from scratch\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Channels & select",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Channels & select\n\n_Full lesson content coming soon._"
          },
          {
            "title": "sync.WaitGroup & sync.Mutex",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# sync.WaitGroup & sync.Mutex\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common concurrency pitfalls",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common concurrency pitfalls\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Building Services",
        "lessons": [
          {
            "title": "HTTP servers with net/http",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# HTTP servers with net/http\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Connecting to a database",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Connecting to a database\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Testing Go code",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Testing Go code\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a concurrent job queue API",
            "duration": "55 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a concurrent job queue API\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "Java Spring Boot Architecture",
    "slug": "java-spring-boot-architecture",
    "category": "Backend & Databases",
    "level": "Advanced",
    "price": 1,
    "shortDescription": "Enterprise-grade Java backends: dependency injection, JPA, and layered architecture.",
    "fullDescription": "A deep dive into Spring Boot's conventions: dependency injection, Spring Data JPA, REST controllers, and the layered architecture patterns used at scale.",
    "instructor": "TechForge Faculty",
    "duration": "17 hours",
    "tags": [
      "Java",
      "Spring Boot",
      "JPA"
    ],
    "modules": [
      {
        "title": "Module 1: Spring Boot Foundations",
        "lessons": [
          {
            "title": "Dependency injection & the IoC container",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Dependency injection & the IoC container\n\nSpring manages object creation for you. Annotate a class `@Service` and inject it anywhere with `@Autowired`:\n\n```java\n@Service\npublic class CourseService {\n    public List<Course> findAll() { ... }\n}\n\n@RestController\npublic class CourseController {\n    private final CourseService courseService;\n    public CourseController(CourseService courseService) {\n        this.courseService = courseService;\n    }\n}\n```\n\n## Key takeaways\n- Spring wires dependencies for you based on type.\n- Constructor injection (as above) is preferred over field injection."
          },
          {
            "title": "Project structure & annotations",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Project structure & annotations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "REST controllers & request mapping",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# REST controllers & request mapping\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Configuration & profiles",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Configuration & profiles\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Data Layer",
        "lessons": [
          {
            "title": "Spring Data JPA & repositories",
            "duration": "18 min",
            "type": "video",
            "isPreview": false,
            "content": "# Spring Data JPA & repositories\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Entity relationships",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Entity relationships\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Transactions",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Transactions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Validation & DTOs",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Validation & DTOs\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Production Spring",
        "lessons": [
          {
            "title": "Spring Security basics",
            "duration": "18 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Spring Security basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Exception handling patterns",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Exception handling patterns\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Testing with Spring Boot Test",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Testing with Spring Boot Test\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: a layered REST service",
            "duration": "60 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: a layered REST service\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "title": "MongoDB Schema Design and Aggregations",
    "slug": "mongodb-schema-design-and-aggregations",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "price": 1,
    "shortDescription": "Document modeling, indexing strategy, and the aggregation pipeline in depth.",
    "fullDescription": "Move past basic CRUD: learn how to model documents for real access patterns, when to embed vs reference, indexing strategy, and the aggregation pipeline.",
    "instructor": "TechForge Faculty",
    "duration": "10 hours",
    "tags": [
      "MongoDB",
      "Mongoose",
      "Database Design"
    ],
    "modules": [
      {
        "title": "Module 1: Document Modeling",
        "lessons": [
          {
            "title": "Embedding vs referencing",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Embedding vs referencing\n\nMongoDB lets you nest related data directly in a document (embedding) or store an ID and look it up separately (referencing) — this course's own `Course` schema embeds `modules` and `lessons` because they're always read together.\n\n```js\n// Embedded — one query gets everything\n{ title: \"React\", modules: [{ title: \"...\", lessons: [...] }] }\n\n// Referenced — separate collections, joined with $lookup\n{ title: \"React\", authorId: ObjectId(\"...\") }\n```\n\n## Key takeaways\n- Embed data that's always read together and doesn't grow unbounded.\n- Reference data that's shared across many documents or grows large."
          },
          {
            "title": "Schema design for real access patterns",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Schema design for real access patterns\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Mongoose schemas & validation",
            "duration": "12 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Mongoose schemas & validation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working with subdocuments & arrays",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working with subdocuments & arrays\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Indexing & Performance",
        "lessons": [
          {
            "title": "How indexes actually work",
            "duration": "16 min",
            "type": "video",
            "isPreview": false,
            "content": "# How indexes actually work\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Compound & text indexes",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Compound & text indexes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Explain plans & query optimization",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Explain plans & query optimization\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common anti-patterns",
            "duration": "10 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common anti-patterns\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: The Aggregation Pipeline",
        "lessons": [
          {
            "title": "$match, $group & $project",
            "duration": "16 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# $match, $group & $project\n\n_Full lesson content coming soon._"
          },
          {
            "title": "$lookup for joins across collections",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# $lookup for joins across collections\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Building analytics queries",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building analytics queries\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Capstone: an analytics dashboard query set",
            "duration": "45 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Capstone: an analytics dashboard query set\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ]
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Relational modeling, joins, indexing, and query optimization in PostgreSQL.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to PostgreSQL Mastery",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of PostgreSQL Mastery",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your PostgreSQL Mastery",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in PostgreSQL Mastery",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with PostgreSQL Mastery",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with PostgreSQL Mastery",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in PostgreSQL Mastery",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for PostgreSQL Mastery",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for PostgreSQL Mastery",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing PostgreSQL Mastery",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using PostgreSQL Mastery",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with PostgreSQL Mastery",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with PostgreSQL Mastery\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "PostgreSQL Mastery",
    "slug": "postgresql-mastery",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "shortDescription": "Relational modeling, joins, indexing, and query optimization in PostgreSQL.",
    "tags": [
      "PostgreSQL",
      "SQL",
      "Database Design"
    ],
    "duration": "12 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Caching strategies, pub/sub, and using Redis to make backends dramatically faster.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Redis Caching and Performance",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Redis Caching and Performance",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Redis Caching and Performance",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Redis Caching and Performance",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Redis Caching and Performance\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Redis Caching and Performance",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Redis Caching and Performance",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Redis Caching and Performance",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Redis Caching and Performance",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Redis Caching and Performance\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Redis Caching and Performance",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Redis Caching and Performance",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Redis Caching and Performance",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Redis Caching and Performance\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Redis Caching and Performance",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Redis Caching and Performance\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Redis Caching and Performance",
    "slug": "redis-caching-and-performance",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "shortDescription": "Caching strategies, pub/sub, and using Redis to make backends dramatically faster.",
    "tags": [
      "Redis",
      "Caching",
      "Performance"
    ],
    "duration": "8 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Schemas, resolvers, and building a real GraphQL API from scratch.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to GraphQL API Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of GraphQL API Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your GraphQL API Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in GraphQL API Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in GraphQL API Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with GraphQL API Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with GraphQL API Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in GraphQL API Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for GraphQL API Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for GraphQL API Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for GraphQL API Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing GraphQL API Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using GraphQL API Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using GraphQL API Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with GraphQL API Development",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with GraphQL API Development\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "GraphQL API Development",
    "slug": "graphql-api-development",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "shortDescription": "Schemas, resolvers, and building a real GraphQL API from scratch.",
    "tags": [
      "GraphQL",
      "API Design"
    ],
    "duration": "11 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Designing resource-oriented APIs and hardening them against common attacks.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to REST API Design and Security",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of REST API Design and Security",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your REST API Design and Security",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in REST API Design and Security",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in REST API Design and Security\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with REST API Design and Security",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with REST API Design and Security",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in REST API Design and Security",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for REST API Design and Security",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for REST API Design and Security\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for REST API Design and Security",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing REST API Design and Security",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using REST API Design and Security",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using REST API Design and Security\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with REST API Design and Security",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with REST API Design and Security\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "REST API Design and Security",
    "slug": "rest-api-design-and-security",
    "category": "Backend & Databases",
    "level": "Intermediate",
    "shortDescription": "Designing resource-oriented APIs and hardening them against common attacks.",
    "tags": [
      "REST",
      "API Security"
    ],
    "duration": "10 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Scalability, load balancing, caching layers, and designing systems that survive traffic spikes.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to System Design Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of System Design Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your System Design Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in System Design Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in System Design Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with System Design Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with System Design Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in System Design Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for System Design Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for System Design Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for System Design Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing System Design Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using System Design Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using System Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with System Design Fundamentals",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with System Design Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "System Design Fundamentals",
    "slug": "system-design-fundamentals",
    "category": "Backend & Databases",
    "level": "Advanced",
    "shortDescription": "Scalability, load balancing, caching layers, and designing systems that survive traffic spikes.",
    "tags": [
      "System Design",
      "Scalability",
      "Interview Prep"
    ],
    "duration": "14 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Build cross-platform iOS and Android apps with React Native.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to React Native Mobile Apps",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of React Native Mobile Apps",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your React Native Mobile Apps",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in React Native Mobile Apps",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in React Native Mobile Apps\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with React Native Mobile Apps",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with React Native Mobile Apps",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in React Native Mobile Apps",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for React Native Mobile Apps",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for React Native Mobile Apps\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for React Native Mobile Apps",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing React Native Mobile Apps",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using React Native Mobile Apps",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using React Native Mobile Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with React Native Mobile Apps",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with React Native Mobile Apps\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "React Native Mobile Apps",
    "slug": "react-native-mobile-apps",
    "category": "Mobile Development",
    "level": "Intermediate",
    "shortDescription": "Build cross-platform iOS and Android apps with React Native.",
    "tags": [
      "React Native",
      "Mobile",
      "Cross-Platform"
    ],
    "duration": "15 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Dart, widgets, and building beautiful native-feeling apps with Flutter.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Flutter Cross-Platform Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Flutter Cross-Platform Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Flutter Cross-Platform Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Flutter Cross-Platform Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Flutter Cross-Platform Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Flutter Cross-Platform Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Flutter Cross-Platform Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Flutter Cross-Platform Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Flutter Cross-Platform Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Flutter Cross-Platform Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Flutter Cross-Platform Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Flutter Cross-Platform Development",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Flutter Cross-Platform Development\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Flutter Cross-Platform Development",
    "slug": "flutter-cross-platform-development",
    "category": "Mobile Development",
    "level": "Intermediate",
    "shortDescription": "Dart, widgets, and building beautiful native-feeling apps with Flutter.",
    "tags": [
      "Flutter",
      "Dart",
      "Mobile"
    ],
    "duration": "15 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "SwiftUI, iOS app architecture, and shipping to the App Store.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Swift and iOS Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Swift and iOS Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Swift and iOS Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Swift and iOS Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Swift and iOS Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Swift and iOS Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Swift and iOS Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Swift and iOS Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Swift and iOS Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Swift and iOS Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Swift and iOS Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Swift and iOS Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Swift and iOS Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Swift and iOS Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Swift and iOS Development",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Swift and iOS Development\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Swift and iOS Development",
    "slug": "swift-and-ios-development",
    "category": "Mobile Development",
    "level": "Intermediate",
    "shortDescription": "SwiftUI, iOS app architecture, and shipping to the App Store.",
    "tags": [
      "Swift",
      "SwiftUI",
      "iOS"
    ],
    "duration": "16 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Jetpack Compose, Android architecture, and shipping to Google Play.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Kotlin Android Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Kotlin Android Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Kotlin Android Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Kotlin Android Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Kotlin Android Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Kotlin Android Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Kotlin Android Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Kotlin Android Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Kotlin Android Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Kotlin Android Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Kotlin Android Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Kotlin Android Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Kotlin Android Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Kotlin Android Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Kotlin Android Development",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Kotlin Android Development\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Kotlin Android Development",
    "slug": "kotlin-android-development",
    "category": "Mobile Development",
    "level": "Intermediate",
    "shortDescription": "Jetpack Compose, Android architecture, and shipping to Google Play.",
    "tags": [
      "Kotlin",
      "Android",
      "Jetpack Compose"
    ],
    "duration": "16 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Service workers, offline support, and making web apps installable.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Progressive Web Apps",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Progressive Web Apps",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Progressive Web Apps",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Progressive Web Apps",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Progressive Web Apps\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Progressive Web Apps",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Progressive Web Apps",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Progressive Web Apps",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Progressive Web Apps",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Progressive Web Apps\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Progressive Web Apps",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Progressive Web Apps",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Progressive Web Apps",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Progressive Web Apps\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Progressive Web Apps",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Progressive Web Apps\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Progressive Web Apps",
    "slug": "progressive-web-apps",
    "category": "Mobile Development",
    "level": "Beginner",
    "shortDescription": "Service workers, offline support, and making web apps installable.",
    "tags": [
      "PWA",
      "Service Workers",
      "Web"
    ],
    "duration": "8 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Core data structures and algorithmic problem-solving, implemented in C++.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Data Structures and Algorithms with C++",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Data Structures and Algorithms with C++",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Data Structures and Algorithms with C++",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Data Structures and Algorithms with C++",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Data Structures and Algorithms with C++",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Data Structures and Algorithms with C++",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Data Structures and Algorithms with C++",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Data Structures and Algorithms with C++",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Data Structures and Algorithms with C++",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Data Structures and Algorithms with C++",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Data Structures and Algorithms with C++",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Data Structures and Algorithms with C++",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Data Structures and Algorithms with C++\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Data Structures and Algorithms with C++",
    "slug": "dsa-with-cpp",
    "category": "CS Core & DSA",
    "level": "Intermediate",
    "shortDescription": "Core data structures and algorithmic problem-solving, implemented in C++.",
    "tags": [
      "DSA",
      "C++",
      "Algorithms"
    ],
    "duration": "20 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Core data structures and algorithmic problem-solving, implemented in Python.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Data Structures and Algorithms with Python",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Data Structures and Algorithms with Python",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Data Structures and Algorithms with Python",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Data Structures and Algorithms with Python",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Data Structures and Algorithms with Python",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Data Structures and Algorithms with Python",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Data Structures and Algorithms with Python",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Data Structures and Algorithms with Python",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Data Structures and Algorithms with Python",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Data Structures and Algorithms with Python",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Data Structures and Algorithms with Python",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Data Structures and Algorithms with Python",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Data Structures and Algorithms with Python\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Data Structures and Algorithms with Python",
    "slug": "dsa-with-python",
    "category": "CS Core & DSA",
    "level": "Beginner",
    "shortDescription": "Core data structures and algorithmic problem-solving, implemented in Python.",
    "tags": [
      "DSA",
      "Python",
      "Algorithms"
    ],
    "duration": "20 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Core data structures and algorithmic problem-solving, implemented in Java.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Data Structures and Algorithms with Java",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Data Structures and Algorithms with Java",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Data Structures and Algorithms with Java",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Data Structures and Algorithms with Java",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Data Structures and Algorithms with Java",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Data Structures and Algorithms with Java",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Data Structures and Algorithms with Java",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Data Structures and Algorithms with Java",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Data Structures and Algorithms with Java",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Data Structures and Algorithms with Java",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Data Structures and Algorithms with Java",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Data Structures and Algorithms with Java",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Data Structures and Algorithms with Java\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Data Structures and Algorithms with Java",
    "slug": "dsa-with-java",
    "category": "CS Core & DSA",
    "level": "Intermediate",
    "shortDescription": "Core data structures and algorithmic problem-solving, implemented in Java.",
    "tags": [
      "DSA",
      "Java",
      "Algorithms"
    ],
    "duration": "20 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Processes, threads, memory management, and scheduling — explained clearly.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Operating Systems Made Simple",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Operating Systems Made Simple",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Operating Systems Made Simple",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Operating Systems Made Simple",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Operating Systems Made Simple",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Operating Systems Made Simple",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Operating Systems Made Simple",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Operating Systems Made Simple",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Operating Systems Made Simple",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Operating Systems Made Simple",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Operating Systems Made Simple",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Operating Systems Made Simple",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Operating Systems Made Simple\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Operating Systems Made Simple",
    "slug": "operating-systems-made-simple",
    "category": "CS Core & DSA",
    "level": "Beginner",
    "shortDescription": "Processes, threads, memory management, and scheduling — explained clearly.",
    "tags": [
      "Operating Systems",
      "CS Fundamentals"
    ],
    "duration": "13 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Relational theory, normalization, transactions, and ACID guarantees.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Database Management Systems",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Database Management Systems",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Database Management Systems",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Database Management Systems",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Database Management Systems\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Database Management Systems",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Database Management Systems",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Database Management Systems",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Database Management Systems",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Database Management Systems\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Database Management Systems",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Database Management Systems",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Database Management Systems",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Database Management Systems\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Database Management Systems",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Database Management Systems\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Database Management Systems",
    "slug": "database-management-systems",
    "category": "CS Core & DSA",
    "level": "Intermediate",
    "shortDescription": "Relational theory, normalization, transactions, and ACID guarantees.",
    "tags": [
      "DBMS",
      "SQL",
      "CS Fundamentals"
    ],
    "duration": "12 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "The OSI model, TCP/IP, routing, and how data actually moves across the internet.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Computer Networks",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Computer Networks",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Computer Networks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Computer Networks",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Computer Networks\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Computer Networks",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Computer Networks",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Computer Networks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Computer Networks",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Computer Networks\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Computer Networks",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Computer Networks",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Computer Networks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Computer Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Computer Networks",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Computer Networks\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Computer Networks",
    "slug": "computer-networks",
    "category": "CS Core & DSA",
    "level": "Intermediate",
    "shortDescription": "The OSI model, TCP/IP, routing, and how data actually moves across the internet.",
    "tags": [
      "Networks",
      "TCP/IP",
      "CS Fundamentals"
    ],
    "duration": "12 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Encapsulation, inheritance, polymorphism, and designing with objects well.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Object-Oriented Programming",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Object-Oriented Programming",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Object-Oriented Programming",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Object-Oriented Programming",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Object-Oriented Programming\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Object-Oriented Programming",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Object-Oriented Programming",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Object-Oriented Programming",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Object-Oriented Programming",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Object-Oriented Programming\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Object-Oriented Programming",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Object-Oriented Programming",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Object-Oriented Programming",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Object-Oriented Programming\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Object-Oriented Programming",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Object-Oriented Programming\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Object-Oriented Programming",
    "slug": "object-oriented-programming",
    "category": "CS Core & DSA",
    "level": "Beginner",
    "shortDescription": "Encapsulation, inheritance, polymorphism, and designing with objects well.",
    "tags": [
      "OOP",
      "Design Principles"
    ],
    "duration": "9 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Logic, set theory, combinatorics, and graph theory for working engineers.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Discrete Mathematics for Developers",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Discrete Mathematics for Developers",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Discrete Mathematics for Developers",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Discrete Mathematics for Developers",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Discrete Mathematics for Developers",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Discrete Mathematics for Developers",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Discrete Mathematics for Developers",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Discrete Mathematics for Developers",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Discrete Mathematics for Developers",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Discrete Mathematics for Developers",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Discrete Mathematics for Developers",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Discrete Mathematics for Developers",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Discrete Mathematics for Developers\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Discrete Mathematics for Developers",
    "slug": "discrete-mathematics-for-developers",
    "category": "CS Core & DSA",
    "level": "Beginner",
    "shortDescription": "Logic, set theory, combinatorics, and graph theory for working engineers.",
    "tags": [
      "Discrete Math",
      "CS Fundamentals"
    ],
    "duration": "10 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Lexing, parsing, ASTs, and how source code becomes an executable.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Compiler Design Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Compiler Design Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Compiler Design Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Compiler Design Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Compiler Design Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Compiler Design Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Compiler Design Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Compiler Design Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Compiler Design Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Compiler Design Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Compiler Design Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Compiler Design Fundamentals",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Compiler Design Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Compiler Design Fundamentals",
    "slug": "compiler-design-fundamentals",
    "category": "CS Core & DSA",
    "level": "Advanced",
    "shortDescription": "Lexing, parsing, ASTs, and how source code becomes an executable.",
    "tags": [
      "Compilers",
      "CS Fundamentals"
    ],
    "duration": "14 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "SOLID, design patterns, testing strategy, and writing software that survives change.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Software Engineering Principles",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Software Engineering Principles",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Software Engineering Principles",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Software Engineering Principles",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Software Engineering Principles\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Software Engineering Principles",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Software Engineering Principles",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Software Engineering Principles",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Software Engineering Principles",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Software Engineering Principles\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Software Engineering Principles",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Software Engineering Principles",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Software Engineering Principles",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Software Engineering Principles\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Software Engineering Principles",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Software Engineering Principles\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Software Engineering Principles",
    "slug": "software-engineering-principles",
    "category": "CS Core & DSA",
    "level": "Intermediate",
    "shortDescription": "SOLID, design patterns, testing strategy, and writing software that survives change.",
    "tags": [
      "Software Engineering",
      "Design Patterns"
    ],
    "duration": "11 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "EC2, S3, IAM, and the core AWS services every developer should know.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to AWS Cloud Essentials",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of AWS Cloud Essentials",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your AWS Cloud Essentials",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in AWS Cloud Essentials",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with AWS Cloud Essentials",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with AWS Cloud Essentials",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in AWS Cloud Essentials",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for AWS Cloud Essentials",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for AWS Cloud Essentials",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing AWS Cloud Essentials",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using AWS Cloud Essentials",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with AWS Cloud Essentials",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with AWS Cloud Essentials\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "AWS Cloud Essentials",
    "slug": "aws-cloud-essentials",
    "category": "Cloud, DevOps & Security",
    "level": "Beginner",
    "shortDescription": "EC2, S3, IAM, and the core AWS services every developer should know.",
    "tags": [
      "AWS",
      "Cloud Computing"
    ],
    "duration": "12 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Containerizing apps with Docker and orchestrating them with Kubernetes.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Docker and Kubernetes",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Docker and Kubernetes",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Docker and Kubernetes",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Docker and Kubernetes",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Docker and Kubernetes\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Docker and Kubernetes",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Docker and Kubernetes",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Docker and Kubernetes",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Docker and Kubernetes",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Docker and Kubernetes\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Docker and Kubernetes",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Docker and Kubernetes",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Docker and Kubernetes",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Docker and Kubernetes\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Docker and Kubernetes",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Docker and Kubernetes\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Docker and Kubernetes",
    "slug": "docker-and-kubernetes",
    "category": "Cloud, DevOps & Security",
    "level": "Intermediate",
    "shortDescription": "Containerizing apps with Docker and orchestrating them with Kubernetes.",
    "tags": [
      "Docker",
      "Kubernetes",
      "DevOps"
    ],
    "duration": "15 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Automated testing, builds, and deployments with GitHub Actions workflows.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to CI/CD with GitHub Actions",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of CI/CD with GitHub Actions",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your CI/CD with GitHub Actions",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in CI/CD with GitHub Actions",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with CI/CD with GitHub Actions",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with CI/CD with GitHub Actions",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in CI/CD with GitHub Actions",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for CI/CD with GitHub Actions",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for CI/CD with GitHub Actions",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing CI/CD with GitHub Actions",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using CI/CD with GitHub Actions",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with CI/CD with GitHub Actions",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with CI/CD with GitHub Actions\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "CI/CD with GitHub Actions",
    "slug": "cicd-with-github-actions",
    "category": "Cloud, DevOps & Security",
    "level": "Intermediate",
    "shortDescription": "Automated testing, builds, and deployments with GitHub Actions workflows.",
    "tags": [
      "CI/CD",
      "GitHub Actions",
      "DevOps"
    ],
    "duration": "8 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "The command line, file permissions, and automating tasks with Bash.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Linux and Shell Scripting",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Linux and Shell Scripting",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Linux and Shell Scripting",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Linux and Shell Scripting",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Linux and Shell Scripting",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Linux and Shell Scripting",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Linux and Shell Scripting",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Linux and Shell Scripting",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Linux and Shell Scripting",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Linux and Shell Scripting",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Linux and Shell Scripting",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Linux and Shell Scripting",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Linux and Shell Scripting\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Linux and Shell Scripting",
    "slug": "linux-and-shell-scripting",
    "category": "Cloud, DevOps & Security",
    "level": "Beginner",
    "shortDescription": "The command line, file permissions, and automating tasks with Bash.",
    "tags": [
      "Linux",
      "Bash",
      "Shell Scripting"
    ],
    "duration": "10 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Branching strategies, rebasing, and collaborating on real codebases.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Advanced Git and GitHub",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Advanced Git and GitHub",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Advanced Git and GitHub",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Advanced Git and GitHub",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Advanced Git and GitHub",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Advanced Git and GitHub",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Advanced Git and GitHub",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Advanced Git and GitHub",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Advanced Git and GitHub",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Advanced Git and GitHub",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Advanced Git and GitHub",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Advanced Git and GitHub",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Advanced Git and GitHub\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Advanced Git and GitHub",
    "slug": "advanced-git-and-github",
    "category": "Cloud, DevOps & Security",
    "level": "Beginner",
    "shortDescription": "Branching strategies, rebasing, and collaborating on real codebases.",
    "tags": [
      "Git",
      "GitHub",
      "Version Control"
    ],
    "duration": "6 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Common vulnerabilities, secure coding practices, and thinking like an attacker.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Cybersecurity Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Cybersecurity Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Cybersecurity Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Cybersecurity Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Cybersecurity Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Cybersecurity Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Cybersecurity Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Cybersecurity Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Cybersecurity Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Cybersecurity Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Cybersecurity Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Cybersecurity Fundamentals",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Cybersecurity Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Cybersecurity Fundamentals",
    "slug": "cybersecurity-fundamentals",
    "category": "Cloud, DevOps & Security",
    "level": "Beginner",
    "shortDescription": "Common vulnerabilities, secure coding practices, and thinking like an attacker.",
    "tags": [
      "Cybersecurity",
      "Security"
    ],
    "duration": "11 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Smart contracts, the EVM, and writing your first Solidity contracts.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Solidity and Web3 Basics",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Solidity and Web3 Basics",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Solidity and Web3 Basics",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Solidity and Web3 Basics",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Solidity and Web3 Basics",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Solidity and Web3 Basics",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Solidity and Web3 Basics",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Solidity and Web3 Basics",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Solidity and Web3 Basics",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Solidity and Web3 Basics",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Solidity and Web3 Basics",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Solidity and Web3 Basics",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Solidity and Web3 Basics\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Solidity and Web3 Basics",
    "slug": "solidity-and-web3-basics",
    "category": "Cloud, DevOps & Security",
    "level": "Intermediate",
    "shortDescription": "Smart contracts, the EVM, and writing your first Solidity contracts.",
    "tags": [
      "Solidity",
      "Web3",
      "Blockchain"
    ],
    "duration": "10 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Connecting frontends to smart contracts and building real dApps.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Decentralized Applications",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Decentralized Applications",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Decentralized Applications",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Decentralized Applications",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Decentralized Applications\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Decentralized Applications",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Decentralized Applications",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Decentralized Applications",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Decentralized Applications",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Decentralized Applications\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Decentralized Applications",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Decentralized Applications",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Decentralized Applications",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Decentralized Applications\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Decentralized Applications",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Decentralized Applications\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Decentralized Applications",
    "slug": "decentralized-applications",
    "category": "Cloud, DevOps & Security",
    "level": "Advanced",
    "shortDescription": "Connecting frontends to smart contracts and building real dApps.",
    "tags": [
      "Web3",
      "dApps",
      "Ethereum"
    ],
    "duration": "13 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "NumPy, data wrangling, and the Python toolkit every data scientist starts with.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Python for Data Science",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Python for Data Science",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Python for Data Science",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Python for Data Science",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Python for Data Science\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Python for Data Science",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Python for Data Science",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Python for Data Science",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Python for Data Science",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Python for Data Science\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Python for Data Science",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Python for Data Science",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Python for Data Science",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Python for Data Science\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Python for Data Science",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Python for Data Science\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Python for Data Science",
    "slug": "python-for-data-science",
    "category": "AI & Data Science",
    "level": "Beginner",
    "shortDescription": "NumPy, data wrangling, and the Python toolkit every data scientist starts with.",
    "tags": [
      "Python",
      "Data Science",
      "NumPy"
    ],
    "duration": "11 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Supervised & unsupervised learning, model evaluation, and scikit-learn in practice.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Machine Learning Foundations",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Machine Learning Foundations",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Machine Learning Foundations",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Machine Learning Foundations",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Machine Learning Foundations\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Machine Learning Foundations",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Machine Learning Foundations",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Machine Learning Foundations",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Machine Learning Foundations",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Machine Learning Foundations\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Machine Learning Foundations",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Machine Learning Foundations",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Machine Learning Foundations",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Machine Learning Foundations\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Machine Learning Foundations",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Machine Learning Foundations\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Machine Learning Foundations",
    "slug": "machine-learning-foundations",
    "category": "AI & Data Science",
    "level": "Intermediate",
    "shortDescription": "Supervised & unsupervised learning, model evaluation, and scikit-learn in practice.",
    "tags": [
      "Machine Learning",
      "scikit-learn"
    ],
    "duration": "15 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Neural network fundamentals, backpropagation, and building models with PyTorch.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Deep Learning and Neural Networks",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Deep Learning and Neural Networks",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Deep Learning and Neural Networks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Deep Learning and Neural Networks",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Deep Learning and Neural Networks",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Deep Learning and Neural Networks",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Deep Learning and Neural Networks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Deep Learning and Neural Networks",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Deep Learning and Neural Networks",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Deep Learning and Neural Networks",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Deep Learning and Neural Networks",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Deep Learning and Neural Networks",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Deep Learning and Neural Networks\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Deep Learning and Neural Networks",
    "slug": "deep-learning-and-neural-networks",
    "category": "AI & Data Science",
    "level": "Advanced",
    "shortDescription": "Neural network fundamentals, backpropagation, and building models with PyTorch.",
    "tags": [
      "Deep Learning",
      "PyTorch",
      "Neural Networks"
    ],
    "duration": "16 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Structuring prompts for reliable, high-quality outputs from LLMs.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Prompt Engineering",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Prompt Engineering",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Prompt Engineering",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Prompt Engineering",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Prompt Engineering\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Prompt Engineering",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Prompt Engineering",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Prompt Engineering",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Prompt Engineering",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Prompt Engineering\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Prompt Engineering",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Prompt Engineering",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Prompt Engineering",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Prompt Engineering\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Prompt Engineering",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Prompt Engineering\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Prompt Engineering",
    "slug": "prompt-engineering",
    "category": "AI & Data Science",
    "level": "Beginner",
    "shortDescription": "Structuring prompts for reliable, high-quality outputs from LLMs.",
    "tags": [
      "Prompt Engineering",
      "LLMs"
    ],
    "duration": "6 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Calling LLM APIs from real applications: streaming, tool use, and error handling.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to LLM API Integration",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of LLM API Integration",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your LLM API Integration",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in LLM API Integration",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in LLM API Integration\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with LLM API Integration",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with LLM API Integration",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in LLM API Integration",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for LLM API Integration",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for LLM API Integration\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for LLM API Integration",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing LLM API Integration",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using LLM API Integration",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using LLM API Integration\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with LLM API Integration",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with LLM API Integration\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "LLM API Integration",
    "slug": "llm-api-integration",
    "category": "AI & Data Science",
    "level": "Intermediate",
    "shortDescription": "Calling LLM APIs from real applications: streaming, tool use, and error handling.",
    "tags": [
      "LLM APIs",
      "AI Engineering"
    ],
    "duration": "9 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Embeddings, vector search, and building retrieval-augmented generation pipelines.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Vector Databases and RAG",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Vector Databases and RAG",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Vector Databases and RAG",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Vector Databases and RAG",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Vector Databases and RAG\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Vector Databases and RAG",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Vector Databases and RAG",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Vector Databases and RAG",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Vector Databases and RAG",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Vector Databases and RAG\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Vector Databases and RAG",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Vector Databases and RAG",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Vector Databases and RAG",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Vector Databases and RAG\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Vector Databases and RAG",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Vector Databases and RAG\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Vector Databases and RAG",
    "slug": "vector-databases-and-rag",
    "category": "AI & Data Science",
    "level": "Intermediate",
    "shortDescription": "Embeddings, vector search, and building retrieval-augmented generation pipelines.",
    "tags": [
      "RAG",
      "Vector Databases",
      "Embeddings"
    ],
    "duration": "10 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Designing autonomous agents that plan, use tools, and complete multi-step tasks.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to AI Agents and Automation",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of AI Agents and Automation",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your AI Agents and Automation",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in AI Agents and Automation",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in AI Agents and Automation\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with AI Agents and Automation",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with AI Agents and Automation",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in AI Agents and Automation",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for AI Agents and Automation",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for AI Agents and Automation\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for AI Agents and Automation",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing AI Agents and Automation",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using AI Agents and Automation",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using AI Agents and Automation\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with AI Agents and Automation",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with AI Agents and Automation\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "AI Agents and Automation",
    "slug": "ai-agents-and-automation",
    "category": "AI & Data Science",
    "level": "Advanced",
    "shortDescription": "Designing autonomous agents that plan, use tools, and complete multi-step tasks.",
    "tags": [
      "AI Agents",
      "Automation"
    ],
    "duration": "12 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Chains, memory, and orchestrating complex LLM workflows with LangChain.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to LangChain and AI Workflows",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of LangChain and AI Workflows",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your LangChain and AI Workflows",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in LangChain and AI Workflows",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with LangChain and AI Workflows",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with LangChain and AI Workflows",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in LangChain and AI Workflows",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for LangChain and AI Workflows",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for LangChain and AI Workflows",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing LangChain and AI Workflows",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using LangChain and AI Workflows",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with LangChain and AI Workflows",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with LangChain and AI Workflows\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "LangChain and AI Workflows",
    "slug": "langchain-and-ai-workflows",
    "category": "AI & Data Science",
    "level": "Intermediate",
    "shortDescription": "Chains, memory, and orchestrating complex LLM workflows with LangChain.",
    "tags": [
      "LangChain",
      "AI Workflows"
    ],
    "duration": "10 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Model versioning, deployment, and monitoring ML systems in production.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to MLOps Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of MLOps Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your MLOps Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in MLOps Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in MLOps Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with MLOps Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with MLOps Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in MLOps Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for MLOps Fundamentals",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for MLOps Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for MLOps Fundamentals",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing MLOps Fundamentals",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using MLOps Fundamentals",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using MLOps Fundamentals\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with MLOps Fundamentals",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with MLOps Fundamentals\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "MLOps Fundamentals",
    "slug": "mlops-fundamentals",
    "category": "AI & Data Science",
    "level": "Advanced",
    "shortDescription": "Model versioning, deployment, and monitoring ML systems in production.",
    "tags": [
      "MLOps",
      "Model Deployment"
    ],
    "duration": "12 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Cleaning, transforming, and analyzing real datasets with pandas.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Data Analytics with Pandas",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Data Analytics with Pandas",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Data Analytics with Pandas",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Data Analytics with Pandas",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Data Analytics with Pandas",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Data Analytics with Pandas",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Data Analytics with Pandas",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Data Analytics with Pandas",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Data Analytics with Pandas",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Data Analytics with Pandas",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Data Analytics with Pandas",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Data Analytics with Pandas",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Data Analytics with Pandas\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Data Analytics with Pandas",
    "slug": "data-analytics-with-pandas",
    "category": "AI & Data Science",
    "level": "Beginner",
    "shortDescription": "Cleaning, transforming, and analyzing real datasets with pandas.",
    "tags": [
      "Pandas",
      "Data Analytics"
    ],
    "duration": "9 hours"
  },
  {
    "price": 1,
    "instructor": "TechForge Faculty",
    "fullDescription": "Building real products on top of image, text, and multimodal generative models.",
    "modules": [
      {
        "title": "Module 1: Foundations",
        "lessons": [
          {
            "title": "Introduction to Generative AI Application Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": true,
            "content": "# Introduction to Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Core concepts of Generative AI Application Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Core concepts of Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Setting up your Generative AI Application Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Setting up your Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Key terminology in Generative AI Application Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Key terminology in Generative AI Application Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 2: Core Skills",
        "lessons": [
          {
            "title": "Building with Generative AI Application Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Building with Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Working hands-on with Generative AI Application Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Working hands-on with Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Practical patterns in Generative AI Application Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Practical patterns in Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Common workflows for Generative AI Application Development",
            "duration": "17 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Common workflows for Generative AI Application Development\n\n_Full lesson content coming soon._"
          }
        ]
      },
      {
        "title": "Module 3: Real-World Application",
        "lessons": [
          {
            "title": "Production practices for Generative AI Application Development",
            "duration": "8 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Production practices for Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Debugging & optimizing Generative AI Application Development",
            "duration": "11 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# Debugging & optimizing Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "A capstone project using Generative AI Application Development",
            "duration": "14 min",
            "type": "markdown",
            "isPreview": false,
            "content": "# A capstone project using Generative AI Application Development\n\n_Full lesson content coming soon._"
          },
          {
            "title": "Where to go next with Generative AI Application Development",
            "duration": "17 min",
            "type": "assignment",
            "isPreview": false,
            "content": "# Where to go next with Generative AI Application Development\n\n_Full lesson content coming soon._"
          }
        ]
      }
    ],
    "title": "Generative AI Application Development",
    "slug": "generative-ai-application-development",
    "category": "AI & Data Science",
    "level": "Intermediate",
    "shortDescription": "Building real products on top of image, text, and multimodal generative models.",
    "tags": [
      "Generative AI",
      "AI Products"
    ],
    "duration": "12 hours"
  }
];