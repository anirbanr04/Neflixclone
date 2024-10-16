console.log("js");

let que=document.querySelector(".que");
let que1=document.querySelector(".que1");
let ans=document.querySelector(".ans");
let h=ans.querySelector(".h3");
let an=document.querySelector(".an");

let t=an.querySelector(".h3");
let faq=document.querySelector(".faqq");
let info=document.querySelector(".info");

let plus=document.querySelector(".fa-plus");
let plus1=document.querySelector(".plus");


que.addEventListener("click",()=>{
    console.log("clicking...");
    ans.classList.toggle("ans1");
    h.classList.toggle("texts");
  faq.classList.toggle("faqs");                   
  info.classList.toggle("infos");  
  an.classList.remove("an1");
  t.classList.remove("texts");  
  plus.classList.toggle("fa-xmark"); 
  plus1.classList.remove("fa-xmark"); 

  
});

plus.addEventListener("click",()=>{
    console.log(" plus clicking...");
    ans.classList.toggle("ans1");
    h.classList.toggle("texts");
  faq.classList.toggle("faqs");                   
  info.classList.toggle("infos");  
  an.classList.remove("an1");
  t.classList.remove("texts"); 
  plus.classList.toggle("fa-xmark");
  

});

plus1.addEventListener("click",()=>{
    console.log(" plus1 clicking...");
    plus1.classList.toggle("fa-xmark");
    an.classList.toggle("an1");
    t.classList.toggle("texts");
    faq.classList.toggle("faqss");                   
    info.classList.toggle("infoss"); 
    ans.classList.remove("ans1");
    h.classList.remove("texts");

});


que1.addEventListener("click",()=>{
    plus1.classList.toggle("fa-xmark");
    an.classList.toggle("an1");
    t.classList.toggle("texts");
    faq.classList.toggle("faqss");                   
    info.classList.toggle("infoss"); 
    ans.classList.remove("ans1");
    h.classList.remove("texts");
    plus.classList.remove("fa-xmark"); 

});