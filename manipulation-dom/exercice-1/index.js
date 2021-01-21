function showModal(){
  const modalBackground = document.querySelector('#modal_background');
  const modalContent = document.querySelector('#modal_content');
  
  modalBackground.classList.remove('displayNone');
  modalBackground.classList.add('displayBlock');
  
  modalBackground.addEventListener('click',closeModal);
}

function closeModal(Event){
  const modalBackground = document.querySelector('#modal_background');
  const modalContent = document.querySelector('#modal_content');
  
  if ((!Event) || (Event.target ==  modalBackground)) {
    modalBackground.classList.remove('displayBlock');
    modalBackground.classList.add('displayNone');

    modalBackground.removeEventListener('click',closeModal);
  }
}