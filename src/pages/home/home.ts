import './container.scss';

export function homePage() {
    const element = document.createElement('div');

    element.id = 'container';

    return element;
}

document.body.appendChild(homePage());
