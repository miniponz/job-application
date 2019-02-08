const sortForm = document.getElementById('sort-applicants');
const jsonString = window.localStorage.getItem('applicants');

let applicants = [];

if(jsonString){
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('club-applicants');

for(let i = 0; i < applicants.length; i++) {
    const clubApplicant = applicants[i];
    const order = [i];

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const tdName = document.createElement('td');
    tr.appendChild(tdName);
    const link = document.createElement('a');
    tdName.appendChild(link);
    link.textContent = clubApplicant.applicantName;
    link.href = 'applicant-detail.html?applicantName=' + encodeURIComponent(clubApplicant.applicantName) + '?number=' + encodeURIComponent(order);

    const tdNickName = document.createElement('td');
    tdNickName.textContent = clubApplicant.nickName;
    tr.appendChild(tdNickName);

    const tdNamePreference = document.createElement('td');
    tdNamePreference.textContent = clubApplicant.namePreference;
    tr.appendChild(tdNamePreference);

    const tdPizzaToppings = document.createElement('td');
    tdPizzaToppings.textContent = clubApplicant.pizzaToppings.join(', ');
    tr.appendChild(tdPizzaToppings);

    const tdComPreference = document.createElement('td');
    tdComPreference.textContent = clubApplicant.communicationPreference;
    tr.appendChild(tdComPreference);

    const tdDachsund = document.createElement('td');
    tdDachsund.textContent = clubApplicant.dachsund;
    tr.appendChild(tdDachsund);

    const tdVolumeLevel = document.createElement('td');
    tdVolumeLevel.textContent = clubApplicant.volumeLevel;
    tr.appendChild(tdVolumeLevel);

}

sortForm.addEventListener('submit', function(event){
    event.preventDefault();
    applicants.sort();
    console.log(applicants);
});

//function to sort Data in review-applicants table:


/*applicants.sort(function(name1, name2)) {
    console.log(name1);
    console.log(name2)
}*/

//https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
