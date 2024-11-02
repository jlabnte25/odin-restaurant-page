import { loadHome } from './modules/main/main.js';
import { loadMenu } from './modules/menu/menu.js';
import { loadAbout } from './modules/about/about.js';

import './index.css';

loadHome();

const homeBtn = document.getElementById('homeButton');
const menuBtn = document.getElementById('menuButton');
const aboutBtn = document.getElementById('aboutButton');

homeBtn.addEventListener('click', () => loadHome());
menuBtn.addEventListener('click', () => loadMenu());
aboutBtn.addEventListener('click', () => loadAbout());