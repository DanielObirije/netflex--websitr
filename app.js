// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     console.log(this)
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     console.log(this)
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       console.log(content.scrollHeight)
//     } 
//   });
// }

const coll = document.querySelectorAll(".click")
coll.forEach((e)=>{
  e.addEventListener('click',(coll)=>{
    const value = coll.target
    value.classList.toggle("active")
     let content = value.nextElementSibling
      if (content.style.maxHeight) {
          content.style.maxHeight = null;
      } else {
          content.style.maxHeight = content.scrollHeight + "px";
          
      }
})

})

