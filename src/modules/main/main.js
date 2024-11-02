

import bannerPhoto from './bannerPhoto.png';

export function loadHome () {
    const content = document.getElementById('content');

    content.innerHTML = '';

    //Hero Photo
    const heroPhoto = document.createElement('img');
    heroPhoto.src = bannerPhoto;
    content.appendChild(heroPhoto);

    //Restaurant Name and About
        //Container
        const aboutMeContainer = document.createElement ('div');
        aboutMeContainer.classList.add('aboutMeContainer');
        content.appendChild(aboutMeContainer);

        //Restaurant Name
        const restaurantName = document.createElement ('p');
        restaurantName.textContent = "ISDA.CO";
        restaurantName.classList.add('restaurantName');
        aboutMeContainer.appendChild(restaurantName);

        //Restaurant About
        const aboutMe = document.createElement ('p');
        aboutMe.textContent = "Catch the Taste of the Philippines – City’s Best Seafood, Freshly Harvested and Served Straight to Your Table!";
        aboutMe.classList.add('aboutMe');
        aboutMeContainer.appendChild(aboutMe);
}