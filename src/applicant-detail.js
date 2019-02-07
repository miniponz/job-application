const name = document.getElementById('name');
const nickName = document.getElementById('nickname');
const preferedName = document.getElementById('prefered-name');
const pizzaToppings = document.getElementById('pizza-toppings');
const comPreference = document.getElementById('communication-preference');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume-level');

const jsonString = window.localStorage.getItem('applicants');

let populateApplicant = [];
if(jsonString){
    const applicants = JSON.parse(jsonString);
    populateApplicant = applicants[applicants.length - 1];
}


name.textContent = populateApplicant.applicantName;
nickName.textContent = populateApplicant.nickName;
preferedName.textContent = populateApplicant.namePreference;
pizzaToppings.textContent = populateApplicant.pizzaToppings.join(', ');
comPreference.textContent = populateApplicant.communicationPreference;
dachsund.textContent = populateApplicant.dachsund;
volumeLevel.textContent = populateApplicant.volumeLevel;