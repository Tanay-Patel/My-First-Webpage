const body = document.querySelector('body');
const inputBox = document.querySelectorAll('.txtBox');

body.style.backgroundColor = document.getElementById('background').value;
body.style.color = document.getElementById('foreground').value;;

//Looping through all the textboxes
inputBox.forEach(input => {
    //Getting Color Hex Value & ID
    const colorVal = input.value;
    const boxID = input.id;
    input.nextElementSibling.style.backgroundColor = colorVal;

    //This code updates all the correct ID's colors
    const curElements = document.querySelectorAll(`.${boxID}`);
    curElements.forEach(elem => {
        //Checking for 'background' special-case
        if(boxID != 'background'){
            elem.style.color = colorVal;
        }
    });
    
    //This code updates visuals on input
    input.addEventListener('blur', () => {
        
        //This gets the IDs and updates their color
        const curElements = document.querySelectorAll(`.${boxID}`);
        
        curElements.forEach(elem => {
            
            if(input.id === 'background'){
                document.querySelector('body').style.backgroundColor = input.value;
            }
            else{
                elem.style.color = input.value;
            }
        });

        //Checking for 'foreground' special-case
        if(input.id === 'foreground'){
            document.querySelector('body').style.color = input.value;
        }

        //Updates text input color
        input.nextElementSibling.style.backgroundColor = input.value;
    });
});