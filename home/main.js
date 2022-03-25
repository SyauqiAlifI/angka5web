// This will be used if i only use a translation

// Remove the transition class
/* const square = document.querySelector('.square');
square.classList.remove('square-transition');

    // Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper')); */

// This will be used if i have an animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        // It's visible. Add the animation class here!
        square.classList.add('square-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('square-animation');
    });
  });
  
  // Tell the observer which elements to track
  observer.observe(document.querySelector('.square-wrapper'));