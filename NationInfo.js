//Written By Tanay Patel

//Gets the main div contain via ID
const webpage = document.getElementById('main');

//Creating div for holding nation information
const informationContainer = document.createElement('div');
informationContainer.setAttribute('class', 'infoCon');

//Adding information container to the 'main' div as a child
webpage.appendChild(informationContainer);

