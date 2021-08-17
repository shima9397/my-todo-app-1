function onAddBtnClick(ev, divElement) {
    if (divElement) {
        divElement.innerText = 'Updated Text'
    } else {
        window.alert('Div Element Not Exist');
    }
}

function createAddBtn() {
    const div = document.getElementsByTagName('div')[0];
    const btn = document.createElement('button');

    btn.classList.add('btn');
    btn.innerText = 'Add TODO';

    btn.addEventListener('click', ev => {
        onAddBtnClick(ev, div);
    });

    return btn;
}

document.body.appendChild(createAddBtn());
