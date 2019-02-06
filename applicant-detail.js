const name = document.getElementById('name');
const nickName = document.getElementById('nickname');
const preferedName = document.getElementById('prefered-name');
const pizzaToppings = document.getElementById('pizza-toppings');
const comPreference = document.getElementById('communication-preference');
const dachsund = document.getElementById('dachsund');
const volumeLevel = document.getElementById('volume-level');

const json = window.localStorage.getItem('applicant');
const populateApplicant = JSON.parse(json);

console.log(json);

name.textContent = populateApplicant.applicantName;
nickName.textContent = populateApplicant.nickName;
preferedName.textContent = populateApplicant.preferedName;
pizzaToppings.textContent = populateApplicant.pizzaToppings.join(' ');
comPreference.textContent = populateApplicant.communicationPreference;
dachsund.textContent = populateApplicant.dachsund;
volumeLevel.textContent = populateApplicant.volumeLevel;