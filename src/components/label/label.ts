const container = document.getElementById('container');

export function createLabel() {
    const label = document.createElement('label');

    label.id = 'my-label';
    label.innerText = 'Hello World';

    if (container)
        container.appendChild(label);
}
