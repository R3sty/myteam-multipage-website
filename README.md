# Frontend Mentor - myteam website solution

This is a solution to the [myteam website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for each team member on the About page when the `+` icon is clicked
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

Mobile:

![](./starter-code/assets/screenshots/MScreenshot%202026-02-28%20133540.png)
![](./starter-code/assets/screenshots/MScreenshot%202026-02-28%20133555.png)
![](./starter-code/assets/screenshots/MScreenshot%202026-02-28%20133613.png)

Tablet:

![](./starter-code/assets/screenshots/TScreenshot%202026-02-28%20133714.png)
![](./starter-code/assets/screenshots/TScreenshot%202026-02-28%20133736.png)

Desktop:

![](./starter-code/assets/screenshots/DScreenshot%202026-02-28%20132810.png)
![](./starter-code/assets/screenshots/DScreenshot%202026-02-28%20132818.png)
![](./starter-code/assets/screenshots/DScreenshot%202026-02-28%20133510.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live URL](https://ryansuda-code.github.io/Minimalist-Portfolio/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

With this project, I learned how to template headers and footers with Custom Elements to create reusable components for an organized, clean, and readable code. 

Writing organized code not only benefits me, but also other developers who would contribute to or collaborate on the same project, making it easier to understand the codebase.

Sample snippets below:

```html
<site-header></site-header>
<site-footer></site-footer>
```
The snippet above is the Custom Elements I used to create a reusable components to have an organized and clean code. This Custom Element was built with JavaScript.

```js
class SiteHeader extends HTMLElement
```
With this snippet I created a new class named "SiteHeader" that would behave like a normal HTML eleement.

```js
customElements.define("site-header", SiteHeader);
```
"customElements" is where we register the custom elements created. With define we register or associate the Custome element "site-header" with the class we created named "SiteHeader".

With this Project I learned the difference between these two method below:

```js
.querySelector()
.querySelectorAll()
```
with "querySelector()" it searches the entire document, returns only the frist match, and then stops once it finds the first match. But with "querySelectorAll()" it searches the entire document, returns all the matching elements and returns a NodeList.


### Continued development

I would like to focus on learning JavaScript on a deeper level to provide a better user experience and interaction in my future projects.


## Author

- Website - [Ryan Suda](https://github.com/RyanSuda-Code)

