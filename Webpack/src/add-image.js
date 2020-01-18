import avatar from './avatar.jpg';

function addImage() {
    const img = document.createElement("img");
    img.alt = 'avatar';
    img.src = avatar;

    const body = document.querySelector("body");
    body.appendChild(img);
}

export default addImage;