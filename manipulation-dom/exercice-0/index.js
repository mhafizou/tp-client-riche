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

function LoadScriptV2(){
  const images = document.querySelectorAll('#img1, #img2');
  const imgResultat = document.querySelector('#imgResultat');

  for( const image of images){
    image.addEventListener('click', function (Event){
      imgResultat.setAttribute('src', Event.target.getAttribute('src'));
    });  
  }
}
