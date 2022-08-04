//preloader window
    window.onload = function() {
      const preloader = document.querySelector('.preloader');
      const preloaderContainer = document.querySelector('.preloader-container');
      preloader.remove();
    }

//social media ribben-toggler
    const leftArrow = document.querySelector('.ribben-toggler');
    const rightArrow = document.querySelector('.ribben-remover');
    const socialTray = document.querySelector('.social-btn-group');
    var classList = 'classList' in socialTray;
    function toggleSocial() {
    for(i = 2; i< socialTray.children.length; i++){ 
    var childAnchor = socialTray.children[i];
       if (leftArrow) {
          rightArrow.classList.remove('d-none');
          rightArrow.classList.add('d-flex');
          childAnchor.classList.add('hidden-anchors');
          leftArrow.classList.add('d-none');
          leftArrow.classList.remove('d-flex');
       } 
     }
    }
    
    function removeSocial() {
      for(i = 1; i< socialTray.children.length; i++) { 
      var childAnchor = socialTray.children[i];
    if (rightArrow) {
      rightArrow.classList.add('d-none');
      rightArrow.classList.remove('d-flex');
      childAnchor.classList.remove('hidden-anchors');
      leftArrow.classList.remove('d-none');
      leftArrow.classList.add('d-flex');
       } 
     }
    }

//category Modal Trigger on Small Screens
const categoryModal = document.getElementById('categoryModal');
const megaMenu = document.querySelector('.megamenu');
const listModal = document.getElementById('listModal');
var smallMedia = window.matchMedia("(max-width: 575.98px)");
if (smallMedia.matches) {
  console.log(listModal.classList.toString(), '\n Small Media Matched !');
  megaMenu.classList.add('d-none'); //entire "category" is now not visible
  listModal.classList.remove('d-none');
  function catgModal() {
   categoryModal.classList.remove('d-none');
  }
}else{
  categoryModal.remove();
}

//counter javascript
//for total number of customers
let counts=setInterval(updated);
      let upto=0;
      function updated(){
          var count= document.getElementById("purecounter");
          count.innerHTML=++upto + '+';
          if(upto===500)
          {
              clearInterval(counts);
          }
      }

//for support timings
let counts_2=setInterval(updated_2);
let upto_2=0;
function updated_2(){
var count_2= document.getElementById("purecounter_2");
    count_2.innerHTML=++upto_2 + '/7';
    if(upto_2===24)
    {
    clearInterval(counts_2);
    }
}

//for counter team worker
let counts_3=setInterval(updated_3);
let upto_3=0;
function updated_3(){
    var count_3= document.getElementById("purecounter_3");
    count_3.innerHTML=++upto_3 + '+';
    if(upto_3===10)
    {
        clearInterval(counts_3);
    }
}
