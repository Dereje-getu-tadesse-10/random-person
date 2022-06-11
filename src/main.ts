const generatedName = document.querySelector<HTMLParagraphElement>('.name');
const generatedLastName = document.querySelector<HTMLParagraphElement>('.last-name');
const generatedEmail = document.querySelector<HTMLParagraphElement>('.email');
const genratedLocation = document.querySelector<HTMLParagraphElement>('.location');
const generatedPhone = document.querySelector<HTMLParagraphElement>('.number-phone');
const generatedImage = document.querySelector<HTMLImageElement>('.avatar');
const generatePerson = document.querySelector<HTMLButtonElement>('.btn-generate');


// get avantar human from api
function getAvatar(url : string) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const avatar : string = data.avatar;
        console.log(avatar);
        document.querySelector<HTMLImageElement>('.avatar').src = avatar;
    })
}

// random person api
const url : string = 'https://randomuser.me/api/';

function getRandomPerson(url : string) {
    fetch(url)
    .then(response => response.json())
    .then(data => {

        // destructuring data
        const {picture, name, email, location, phone} = data.results[0];

        generatedName.textContent = `First name : ${name.first}`;
        generatedLastName.textContent = `Last name : ${name.last}`;
        generatedEmail.textContent = `Email : ${email}`;
        genratedLocation.textContent = `Location : ${location.city}`;
        generatedPhone.textContent = `Phone : ${phone}`;
        generatedImage.src = picture.large;
    })
}

// get new person
generatePerson.addEventListener("click", ()=>{
    getRandomPerson(url);
});

// call by default
getRandomPerson(url);