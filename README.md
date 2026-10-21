# Brew & Bloom Café ☕

### Week 4 Task: Enhancing Web Page Performance and Accessibility

## Project Overview

Brew & Bloom Café is a static, responsive webpage designed to showcase a café's menu, opening hours, background information, and contact form.

This project focuses on improving website performance, writing semantic HTML, maintaining clean CSS, and following accessibility best practices. The goal is to make the webpage easy to use across different devices and accessible to a wider range of users.

## Objectives

- Improve webpage loading performance.
- Use semantic HTML elements for a meaningful page structure.
- Improve accessibility for keyboard and screen-reader users.
- Optimize CSS by reducing unnecessary duplication.
- Maintain a responsive layout for desktop, tablet, and mobile devices.
- Learn how to evaluate website performance and accessibility.

## Features

- Responsive café webpage layout.
- Navigation links to different sections.
- Café menu with item descriptions and prices.
- Opening hours displayed in an accessible table.
- Contact form with associated labels.
- Alternative text for meaningful images.
- Skip-to-main-content link for keyboard navigation.
- Visible semantic structure using header, nav, main, section, and footer.
- Accessibility support using appropriate ARIA attributes.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Lighthouse
- WAVE Accessibility Evaluation Tool
- axe DevTools

## Performance Improvements

The webpage includes several techniques intended to improve performance:

- Critical CSS is placed inline to help style the initial visible content.
- Non-critical CSS is configured to load without blocking the initial render.
- Images include width and height attributes to reduce layout shifts.
- Lazy loading is enabled for menu images.
- Asynchronous image decoding is used.
- CSS variables and reusable classes help maintain consistent styling.
- Deferred JavaScript loading helps avoid blocking HTML parsing.

## Accessibility Improvements

- Semantic HTML elements provide a logical page structure.
- Descriptive alt attributes help screen-reader users understand images.
- The skip link allows keyboard users to bypass repeated navigation.
- Form labels are associated with their respective fields.
- Required fields and helpful form instructions are provided.
- ARIA attributes identify navigation landmarks and form status messages.
- Table captions and header scopes help explain the opening-hours table.
- Keyboard focus and color contrast should be checked during accessibility testing.

## Testing and Evaluation

Google Lighthouse can be used to evaluate performance, accessibility, best practices, and SEO. WAVE and axe DevTools can help identify accessibility issues.

The webpage should be tested at desktop and mobile viewport sizes. Keyboard navigation, image descriptions, form labels, heading order, color contrast, and browser-console errors should also be checked.

Record actual test results after running the tools. No performance scores or accessibility results should be claimed without