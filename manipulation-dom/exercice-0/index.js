function LoadScript(){
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');

  img1.addEventListener('click', ClickImg);
  
  img2.addEventListener('click', ClickImg);
}

function ClickImg (Event){
  var imgResultat = document.getElementById('imgResultat');

  imgResultat.setAttribute('src', Event.target.getAttribute('src'));
}
