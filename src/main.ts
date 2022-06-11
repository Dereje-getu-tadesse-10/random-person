const generatedName = document.querySelector<HTMLParagraphElement>('.name');
const generatedLastName = document.querySelector<HTMLParagraphElement>('.last-name');
const generatedEmail = document.querySelector<HTMLParagraphElement>('.email');
const genratedLocation = document.querySelector<HTMLParagraphElement>('.location');
const generatedPhone = document.querySelector<HTMLParagraphElement>('.number-phone');

// random person api
const url : string = 'https://randomuser.me/api/';

function getRandomPerson(url : string) {
    fetch(url)
    .then(response => response.json())
    .then(data => {

        // destructuring data
        const {name, lastname, email, location, phone} = data.results[0];
        console.log(data.results[0]);
        
        generatedName.textContent = `First name : ${name.first}`;
        generatedLastName.textContent = `Last name : ${name.last}`;
        generatedEmail.textContent = `Email : ${email}`;
        genratedLocation.textContent = `Location : ${location.city}`;
        generatedPhone.textContent = `Phone : ${phone}`;

    })
}

getRandomPerson(url);
