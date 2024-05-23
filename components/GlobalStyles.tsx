import { createGlobalStyle } from 'styled-components';

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }

export const GlobalStyle = createGlobalStyle`
@tailwind base;
@tailwind components;
@tailwind utilities;

.next-light-theme {
  --background: 251,251,253; /* Light grey background */
  --secondBackground: 245,245,245; /* Slightly darker light grey */
  --text: 10,18,30; /* Dark grey text */
  --textSecondary: 255,255,255; /* Light grey text for secondary content */
  --primary: 128,128,128; /* Grey primary color */
  --secondary: 64,64,64; /* Dark grey secondary color */
  --tertiary: 220,220,220; /* Light grey tertiary color */
  --cardBackground: 255,255,255; /* White card background */
  --inputBackground: 245,245,245; /* Light grey input background */
  --navbarBackground: 255,255,255; /* White navbar background */
  --modalBackground: 251,251,253; /* Light grey modal background */
  --errorColor: 207,34,46; /* Red for errors */
  --logoColor: #404040; /* Dark grey for logo */
}

.next-dark-theme {
  --background: 34,34,34; /* Dark grey background */
  --secondBackground: 45,45,45; /* Slightly lighter dark grey */
  --text: 237,237,238; /* Light grey text */
  --textSecondary: 200,200,200; /* Light grey text for secondary content */
  --primary: 128,128,128; /* Grey primary color */
  --secondary: 64,64,64; /* Dark grey secondary color */
  --tertiary: 90,90,90; /* Dark grey tertiary color */
  --cardBackground: 45,45,45; /* Dark grey card background */
  --inputBackground: 45,45,45; /* Dark grey input background */
  --navbarBackground: 45,45,45; /* Dark grey navbar background */
  --modalBackground: 34,34,34; /* Dark grey modal background */
  --errorColor: 207,34,46; /* Red for errors */
  --logoColor: #FFFFFF; /* White for logo */
}


:root {
  --font: 'Poppins', sans-serif;
  
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);
  --shadow-lg: 0 10px 14px 0 rgb(12 0 46 / 6%);

  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font);
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";
}

svg {
  color: rgb(var(--text));
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

}`;
