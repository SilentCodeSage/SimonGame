var buttonClickedOrder = [];

function handleClick(element,className) {
    console.log(element);
    var currentButton = document.getElementsByClassName(className); 
    // console.log(currentButton);
    buttonClickedOrder.push(className);
    console.log(buttonClickedOrder);

    for(var i = 0; i < buttonClickedOrder.length; i++){

        // element.classList.remove('animate');
        switch (buttonClickedOrder[i]) {
            case "red":
                element.classList.add('animate');
                break;
            case "green":
                element.classList.add('animate');
                break;
            case "blue":
                element.classList.add('animate');
                break;
            case "yellow":
                element.classList.add('animate');
                break;
        }
        
    }
    
    

    
}


function playSound(soundId) {
    var sound = document.getElementById(soundId);
    console.log(sound);
    sound.play();
}