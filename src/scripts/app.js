function component() {
    const element = document.createElement('div');

    element.id = 'container';

    return element;
}

document.body.appendChild(component());
