import './input.scss';

function enterTitle() {
    const input = document.createElement('input');

    input.classList.add('input');
    input.setAttribute('type','text');
    input.setAttribute('placeholder','Enter Title');

    return input;
}

//document.body.appendChild(enterTitle();
//document.addnewItem.appendChild(enterTitle();