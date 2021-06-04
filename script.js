const bodyColor = document.getElementById('background').value;
const foregroundColor = document.getElementById('foreground').value;
const body = document.querySelector('body');
const inputBox = document.querySelectorAll('.txtBox');

body.style.backgroundColor = bodyColor;
body.style.color = foregroundColor;

//Looping through all the textboxes
inputBox.forEach(input => {
    //Getting Color Hex Value & ID
    const colorVal = input.value;
    const boxID = input.id;

    console.log(input.id);

    //Updating Value of textfeild to color
    input.style.color = colorVal;

    //This code updates all the correct ID's colors
    const curElements = document.querySelectorAll(`.${boxID}`);
    curElements.forEach(elem => {
        //console.log(elem);
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
        input.style.color = input.value;
    });
});
