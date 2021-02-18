
   var i = 0;
var imgArr = ["image/cert-1014-6724654.jpg", "image/cert-1023-6724654.jpg" ,"image/F-cover.png", "image/cert-1024-6724654.jpg", "image/Screenshot (1).png", "image/Screenshot (11).png"];

 
  
// let preBtn = document.querySelector('.preBtn');
// let nextBtn = document.querySelector('.next');

// preBtn.addEventListener("click", pre());
// nxtBtn.addEventListener("click", nxt());

function nxt(){
 var imgSrc = document.querySelector('.gImg');
 var j = document.querySelector('.slidenum');
    if(i != imgArr.length-1){
       i++
    }
   else{
      i = 0
   }
   imgSrc.src = imgArr[i]
   j.innerHTML = `${i+1}/${imgArr.length}`
}

function pre(){
 var imgSrc = document.querySelector('.gImg');
 var j = document.querySelector('.slidenum');
    if(i != 0 ){
       i--
    }
   else{
      i = imgArr.length-1
   }
   imgSrc.src = imgArr[i];
   j.innerHTML = `${i+1}/${imgArr.length}`
}
  imgArr.push("image/Screenshot (14).png")
  
 

// heading.appendChild(anchorHead);

//    let anchorHead = document.createElement('a');
// let anchorText = document.createTextNode('A COD');
// anchorHead.appendChild(anchorText);

// var toggleBtn = document.querySelector('.togglenav,h1')
// toggleBtn.addEventListener('click', toggle)
function toggle(){
       var toggleNav = document.querySelector('.nav')
       var toggleBtn = document.querySelector('h1')
     
   if(toggleNav.style.height != 'auto'){
      toggleNav.style.height = 'auto';
      toggleBtn.innerText = 'x';
   }else{
      toggleNav.style.height = '0'
      toggleBtn.innerHTML = '=';
   }
}
