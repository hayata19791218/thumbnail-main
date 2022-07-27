const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(function(img,index){
  img.onclick = function(){

    const mainImg = document.getElementById('mainImg');
    mainImg.src = this.dataset.image;
    
  }
});