# Functional requirements and notes

Hover states of desktop menu items and buttons

Parts of a news homepage?

- Hero?
- articles (grid)
  -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
- main
  -- one per page
  -- should not include headers, footers, or sidebars
  -- Adding an id attribute to the <main> element lets it be a target of a skip navigation link. https://webaim.org/techniques/skipnav/
- nav
  -- sticky navigation on top of the design to give all-time access to the user
  -- Nav should go in <nav> NOT aside

Mobile nav

- Hamburger design and animation
  -- svg images provided for hamburger closed and open (but how to smoothly transition between?)
  -- hamburger: The very minimum touch target is 48 pixels spaced at a minimum of 32 pixels from other touch targets, according to Google
- best way to hide and slide menu on hamburger click
- position: absolute
- transform: translate (-100%, 0)
- #menuToggle input:checked ~ ul
  {
  transform: none;
  }
  -- https://codepen.io/shieldsma91/pen/zLpbLX
- prevent scrolling on and grey out body when mobile nav open
  -- overflow: hidden
