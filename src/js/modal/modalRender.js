import {backdrop} from './modal-close';

let qwe = document.querySelector('.container');

qwe.addEventListener('click', target)
function target(e){
   e.preventDefault();
   if(e.target.nodeName !== 'IMG'){
    return;
   }
  
   console.log(e.target.getAttribute('data-id'))
   backdrop.classList.remove('is-hidden');
}