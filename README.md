# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

[Deployed site](https://news-homepage-demo.pages.dev/)

[Solution posted on Frontend Mentor](https://www.frontendmentor.io/solutions/news-homepage-built-with-html-scss-and-js-using-flexbox-MGHuni2yJK)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

### Screenshot

Mobile layout, nav with overlay, and hover states:

- ![](./assets/videos/Newshomepage.gif)

Desktop layout and hover states:

- ![](./assets/videos/Newshomepagemobile.gif)

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- JavaScript
- Gulp

### What I learned

Naming the elements using BEM also took longer than I expected - coming up with names continues to prove more difficult than I think it will be. Similarly, deciding which elements to nest in others and which to create a component scss file for took some time. I learned that sometimes it's best to make a decision and move forward, as I can always go back and change things later, then to deliberate too long over (what will be seen later as small) details.

Deciding how to add the overlay to the page while the nav bar is visible on mobile was the most tedious. At first I did not like the idea of adding an element as the overlay, so I was trying to figure how to implement with the semantic elements I'd already created (i.e., body, main). However that prove difficult as the nav was nested inside. Ultimately I did end up creating a div that was a sibling of the header and main tags inside the body to create the overlay affect.

I created an overlay component and used a "data-visible" attribute:

```html
<div class="overlay" data-visible="false"></div>
```

### Continued development

Areas that I'd like to continue focusing on in this project:

- functionality so that if a user widens the screen while the mobile nav bar and overlay are visible they will both transition to hide and the desktop nav will appear instead
- sticky header/nav bar
- adding utility classes for flexbox

Techniques I'd like to refine for future projects:

- Transitioning elements on and off screen using positioning
- Using BEM
- Organizing SCSS files and folders
- Creating reusable components

### Useful resources

- [Mobile Nav by Mel Shields on Codepen](https://codepen.io/shieldsma91/pen/zLpbLX) - This codepen helped me with the functionality of the mobile nav hamburger - specifically the hamburger animation and using a checkbox to trigger the nav to open and close.
- [Responsive navbar tutorial using HTML CSS & JS video by Kevin Powell on YouTube](https://www.youtube.com/watch?v=HbBMp6yUXO0&t=2482s) - This navbar tutorial video helped me with the logic of adding the overlay functionality when the mobile nav bar was open.
- [ChatGPT](https://chat.openai.com/c/4bff9774-b740-46d1-b9d0-f17637513221) - To get inspiration on how to add the overlay element to my HTML and write the css.

## Author

- Website - [Austen P. Turner](https://austenpturner.github.io/portfolio/)
- Frontend Mentor - [@austenpturner](https://www.frontendmentor.io/profile/austenpturner)
- Github - [@austenpturner](https://github.com/austenpturner)
