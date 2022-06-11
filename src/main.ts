const generatedName = document.querySelector<HTMLParagraphElement>('.name');
const generatedLastName = document.querySelector<HTMLParagraphElement>('.last-name');
const generatedEmail = document.querySelector<HTMLParagraphElement>('.email');
const genratedLocation = document.querySelector<HTMLParagraphElement>('.location');
const generatedPhone = document.querySelector<HTMLParagraphElement>('.number-phone');

const url : string = 'https://randomuser.me/api/';

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
})

