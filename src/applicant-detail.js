const name = document.getElementById('name');
const nickName = document.getElementById('nickname');
const preferedName = document.getElementById('prefered-name');
const pizzaToppings = document.getElementById('pizza-toppings');
const comPreference = document.getElementById('communication-preference');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume-level');

const jsonString = window.localStorage.getItem('applicants');

let populateApplicant = null;
let applicants = [];
if(jsonString){
    applicants = JSON.parse(jsonString);
}
else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('applicantName');
const numberToFind = searchParam.get('number');
console.log(nameToFind);
console.log(numberToFind);

if(nameToFind){
    for(let i = 0; i < applicants.length; i++){
        let currentApplicant = applicants[i];
        console.log(currentApplicant);
        if(currentApplicant.applicantName === nameToFind){
            populateApplicant = currentApplicant;
            console.log('match');
            break;
        }
    }
}
else {
    populateApplicant = applicants[applicants.length - 1];
                    
}


name.textContent = populateApplicant.applicantName;
nickName.textContent = populateApplicant.nickName;
preferedName.textContent = populateApplicant.namePreference;
pizzaToppings.textContent = populateApplicant.pizzaToppings;
comPreference.textContent = populateApplicant.communicationPreference;
dachsund.textContent = populateApplicant.dachsund;
volumeLevel.textContent = populateApplicant.volumeLevel;