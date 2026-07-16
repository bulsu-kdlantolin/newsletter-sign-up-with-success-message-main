# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/newsletter-signup-form-with-custom-validation-and-success-toggle-h4f2](https://www.frontendmentor.io/solutions/newsletter-signup-form-with-custom-validation-and-success-toggle-h4f2)
- Live Site URL: [https://bulsu-kdlantolin.github.io/newsletter-signup-form/](https://bulsu-kdlantolin.github.io/newsletter-signup-form/)

## My process

### Built with

- Semantic HTML5 markup (including responsive `<picture>` tags)
- Custom CSS properties (Variables)
- Flexbox for alignment and vertical layout centering
- Mobile-first responsive workflow
- Vanilla JavaScript for custom input validation and state management
- Accessible ARIA attributes (`aria-describedby` and `aria-live`)

### What I learned

This project provided an excellent opportunity to manage interactive form state transitions and client-side validation. I learned how to use a `novalidate` attribute on the `<form>` to bypass default browser bubbles and implement clean, accessible error tracking using JavaScript alongside assistive technologies:

```html
<div class="label-row">
  <label for="email">Email address</label>
  <span class="error-message hidden" id="error-message" aria-live="polite">Valid email required</span>
</div>
<input type="email" id="email" class="email-input" name="email" placeholder="email@company.com" aria-describedby="error-message" required>
```
```javascript
formContainer.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!emailInput.value || !emailInput.value.includes('@')) {
        errorMessage.classList.remove('hidden');
        emailInput.classList.add('error-input');
        return;
    }

    errorMessage.classList.add('hidden');
    emailInput.classList.remove('error-input');

    emailPlaceholder.textContent = emailInput.value;
    formContainer.classList.add('hidden');
    successMessage.classList.remove('hidden');
});
```

On the styling side, I used the margin-top: auto property inside a min-height: 100vh flex container on mobile viewports to cleanly pin the dismiss button to the bottom of the viewport without relying on absolute positioning or hardcoded values.

## Continued development
In future projects, I plan to continue utilizing CSS custom properties and relative units (rem/em) over absolute units (px) to keep my forms perfectly fluid and scale-resilient. I also want to explore integration of modular regular expressions (regex) to handle robust validation of diverse top-level domains.

## AI Collaboration
Tools Used: Gemini

Usage Strategy: Assisted in refining layout margins for mobile success screens, validating HTML attributes inside <picture> elements, converting absolute text scaling limits to accessible relative formats, and streamlining element class structures.

### Author
Frontend Mentor - @kiandavey