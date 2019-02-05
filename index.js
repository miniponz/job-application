
const personalInfo = document.getElementById('personal-info');
const name = document.getElementById('name');
const nickName = document.getElementById('nick-name');
const preferedName = document.getElementByI('name-preference');
const pizzaToppings = document.getElementById('pizza-toppings');
const communicationPreference = document.getElementById('communication');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume');
const volumeDisplay = document.getElementById('volume-display');



volumeLevel.addEventListener('change', function() {
    volumeDisplay.textContent = volumeLevel.value;
    console.log('cheese');
});



personalInfo.addEventListener('submit', function() {
    console.log('submitted');
});

  //create for loop to check boxes thare are checked in fieldsets

  //console log info from form

  //create the application object doodad.