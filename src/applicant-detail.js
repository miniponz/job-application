const name = document.getElementById('name');
const nickName = document.getElementById('nickname');
const preferedName = document.getElementById('prefered-name');
const pizzaToppings = document.getElementById('pizza-toppings');
const comPreference = document.getElementById('communication-preference');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume-level');

const jsonString = window.localStorage.getItem('applicants');

let populateApplicant = [];
let applicants = [];
if(jsonString){
    applicants = JSON.parse(jsonString);
}
else {
    window.location = '/';
}

const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('applicantName');

if(nameToFind){
    for(let i = 0; i < applicants.length; i++){
        let currentApplicant = applicants[i];
        
        if(currentApplicant.applicantName === nameToFind){
            populateApplicant = currentApplicant;
            break;
        }
        else {
            populateApplicant = applicants[applicants.length - 1];
            
        }
    }
}

name.textContent = populateApplicant.applicantName;
nickName.textContent = populateApplicant.nickName;
preferedName.textContent = populateApplicant.namePreference;
pizzaToppings.textContent = populateApplicant.pizzaToppings.join(', ');
comPreference.textContent = populateApplicant.communicationPreference;
dachsund.textContent = populateApplicant.dachsund;
volumeLevel.textContent = populateApplicant.volumeLevel;