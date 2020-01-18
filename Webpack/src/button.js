import './button.scss';

class Button {
    render() {
        const button = document.createElement("button");
        button.innerHTML = "Button";
        button.classList.add('my-button');
        const body = document.querySelector("body");
        body.appendChild(button);
    }
}

export default Button;