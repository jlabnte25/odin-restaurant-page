
import './menu.css';

import menu1 from './menu1.png';
import menu2 from './menu2.png';


export function loadMenu () {
    const content = document.getElementById('content');

    content.innerHTML = '';

    //Menu One
        // Menu One Container
        const menuOneContainer = document.createElement('div');
        menuOneContainer.classList.add('menuContainer');
        content.appendChild(menuOneContainer);

        //Menu One Photo
        const menuOnePhoto = document.createElement('img');
        menuOnePhoto.src = menu1;
        menuOnePhoto.classList.add('menuPhoto');
        menuOneContainer.appendChild(menuOnePhoto);

        //Menu One Header and Description Container
        const menuOneAboutContainer = document.createElement('div');
        menuOneAboutContainer.classList.add('menuAboutContainer');
        menuOneContainer.appendChild(menuOneAboutContainer);

        //Menu One Header
        const menuOneHeader = document.createElement('h1');
        menuOneHeader.textContent = "3-4 pax"
        menuOneAboutContainer.appendChild(menuOneHeader);

        //Menu One Description
        const menuOneDescription = document.createElement('p');
        menuOneDescription.textContent = "Perfect for sharing, our selection includes something for everyone, from tender fish fillets and succulent prawns to savory shellfish. ";
        menuOneAboutContainer.appendChild(menuOneDescription);

    //Menu Two
        // Menu Two Container
        const menuTwoContainer = document.createElement('div');
        menuTwoContainer.classList.add('menuContainer');
        content.appendChild(menuTwoContainer);

        //Menu Two Photo
        const menuTwoPhoto = document.createElement('img');
        menuTwoPhoto.src = menu2;
        menuTwoPhoto.classList.add('menuPhoto');
        menuTwoContainer.appendChild(menuTwoPhoto);

        //Menu Two Header and Description Container
        const menuTwoAboutContainer = document.createElement('div');
        menuTwoAboutContainer.classList.add('menuAboutContainer');
        menuTwoContainer.appendChild(menuTwoAboutContainer);

        //Menu Two Header
        const menuTwoHeader = document.createElement('h1');
        menuTwoHeader.textContent = "6-8 pax"
        menuTwoAboutContainer.appendChild(menuTwoHeader);

        //Menu Two Description
        const menuTwoDescription = document.createElement('p');
        menuTwoDescription.textContent = "Perfect for sharing, our selection includes something for everyone, from tender fish fillets and succulent prawns to savory shellfish. ";
        menuTwoAboutContainer.appendChild(menuTwoDescription);


}