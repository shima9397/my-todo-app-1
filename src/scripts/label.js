const container = document.getElementById('container');

function createLabel() {
    const label = document.createElement('label');

    label.id = 'my-label';
    label.innerText = 'Hello World';

    container.appendChild(label);
}

export default createLabel
