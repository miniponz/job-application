
const personalInfo = document.getElementById('personal-info');
const applicantName = document.getElementById('name');
const nickName = document.getElementById('nickname');
const preferedName = document.getElementById('name-preference');
const communicationPreference = document.getElementById('communication');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume');
const volumeDisplay = document.getElementById('volume-display');


volumeLevel.addEventListener('change', function() {
    volumeDisplay.textContent = volumeLevel.value;
});


personalInfo.addEventListener('submit', function() {
    event.preventDefault();
    const pizzaToppings = [];

    for(let i = 0; i < personalInfo.topping.length; i++) {
        const name = personalInfo.topping[i];
        if(name.checked){
            pizzaToppings[i] = name.value;
            //console.log(pizzaToppings[i]);
        }
    }

    const applicant = {
        applicantName: applicantName.value,
        nickName: nickName.value,
        preferedName: preferedName.value,
        pizzaToppings: pizzaToppings.value,
        communicationPreference: communicationPreference.value,
        dachsund: dachsund.value,
        volumeLevel: volumeLevel.nodeValue,
        volumeDisplay: volumeDisplay.value,
    };

    console.log(applicant);
});

  //create for loop to check boxes thare are checked in fieldsets

  //console log info from form

  //create the application object doodad.