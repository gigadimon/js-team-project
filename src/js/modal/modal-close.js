export {backdrop};
let backdrop = document.querySelector('.backdrop');
let modalIconClose = document.querySelector('.modal__btn-close');


backdrop.addEventListener('click', target);
document.addEventListener('keyup', onModalKeyEsc);
modalIconClose.addEventListener('click', onModalForBtnClose);

function target (e) {
    e.preventDefault();
    let onBackdprop = e.target === backdrop;
    if(onBackdprop === false){
        return;
    } 
        backdrop.classList.add('is-hidden');
}


function onModalKeyEsc(e){
    e.preventDefault();
    if(backdrop.classList.contains('is-hidden')){
        document.removeEventListener('keyup', onModalKeyEsc);
    }
    else if(e.code === 'Escape'){
       backdrop.classList.add('is-hidden');  
    }
}
function onModalForBtnClose(e){
    e.preventDefault();
    backdrop.classList.add('is-hidden');
}

