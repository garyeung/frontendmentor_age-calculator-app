# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Desktop & Error state](./Frontend%20Mentor%20Age%20calculator%20app%20desktop&error.png)
![Mobile & Result](./Frontend%20Mentor%20Age%20calculator%20app%20mobile&result.png.png)


### Links

- Solution URL: [Solution](https://github.com/garyeung/frontendmentor_age-calculator-app)
- Live Site URL: [Live](https://frontendmentor-age-calculator-app-2.vercel.app/)


## My process

### Built with
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/)  - For development and building 
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Luxon](https://moment.github.io/luxon/#/) - A library for working with dates and times in JS 



### What I learned

Learn more about using props and states in React and what atomic CSS is. 


### Continued development
TailwindCSS is good, it decouples CSS from HTML and makes CSS resuable and more generic. It's a good design, but not good enough.  
Because I don't think writing a brunch of long class names is a good way to code. It is a maximum of writing inline CSS and using pre-designed CSS components. And it requires a learning curve.  
On the other hand, I have been using BEM + less before. BEM is simple and out of the box. If you rea a few lines of the BEM document, you already know how to use it. It is useful, you don't need to write nested CSS and know the relationship and the effect by the class names, but when I reuse components and combine them, I have to adjust the css style some thime for their relationship or the class names or something subtel changes. I don't know which one is better, BEM or Tailwind. I'll need to use them both a few more times before I know which one is better for me.  


### Useful resources

## Author


## Acknowledgments

