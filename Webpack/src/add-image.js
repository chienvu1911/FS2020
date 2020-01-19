import avatar from './avatar.jpg';

function addImage() {
    const img = document.createElement("img");
    img.alt = 'avatar';
    img.src = avatar;

    const body = $("body");
    body.append(img);
}

export default addImage;