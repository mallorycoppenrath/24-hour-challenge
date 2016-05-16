$(document).ready(function(){
  var d = document,
  accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
  setAria,
  setAccordionAria,
  switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

    setAriaAttr = function(el, ariaType, newProperty){
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded){
    switch(expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
//function
switchAccordion = function(e) {
  console.log("triggered");
  e.preventDefault();
  var thisAnswer = e.target.parentNode.nextElementSibling;
  var thisQuestion = e.target;
  if(thisAnswer.classList.contains('is-collapsed')) {
    setAccordionAria(thisQuestion, thisAnswer, 'true');
  } else {
    setAccordionAria(thisQuestion, thisAnswer, 'false');
  }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');
  
    thisAnswer.classList.toggle('animateIn');
  };
  for (var i=0,len=accordionToggles.length; i<len; i++) {
    if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})
// ()

var imagesArray = ["http://66.media.tumblr.com/2472e96c479052464ea3a24e2ca34e12/tumblr_o5uz0jwxP11rt84fvo1_1280.jpg", "http://66.media.tumblr.com/5d3d27aa056eb3114aece64b13d8e219/tumblr_o6if53Qr7O1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/893e73dfbad2f1fd52649bd3c27a3278/tumblr_nzgkvqGEUx1rt84fvo1_1280.jpg", "http://67.media.tumblr.com/596e6d6727e4b10604fe8e6aa4775c1a/tumblr_ntx1f66PQU1rt84fvo1_1280.jpg", "http://65.media.tumblr.com/51230480f95032201b38ea08a7b376cb/tumblr_nr6frp4YwF1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/f68dde8825bc502c23ea6448e4e9a4e4/tumblr_nj4nu2KGJj1rt84fvo1_1280.jpg", "http://67.media.tumblr.com/eedf7c59a42937cde7e8d0ad45bfe10e/tumblr_nitfmz5f1Z1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/77ae6eacb27759916a901cafa1d9df5b/tumblr_niwxjtXiWm1rt84fvo1_1280.jpg", "http://67.media.tumblr.com/aff431e4fab06f68d0289500c284f565/tumblr_nasl4fIvff1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/4f13e01f8a98614649b5691012330871/tumblr_n7xufnJIE31rt84fvo1_1280.jpg", "http://66.media.tumblr.com/tumblr_m1zmv3EIKs1rt84fvo1_1280.jpg", "http://67.media.tumblr.com/tumblr_mcq9x7jLmG1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/0cd30ea1cf05cb5736d7138f09d3331e/tumblr_n2pb6boCYH1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/tumblr_m6m206As1D1rt84fvo1_1280.jpg", "http://66.media.tumblr.com/tumblr_m1zqj18ra81rt84fvo1_1280.jpg", "http://66.media.tumblr.com/847bdf1f56fa129c3111071f45937779/tumblr_o36n1a5jnU1rt84fvo1_1280.jpg"] 
function displayImage(){
  var rnd = Math.floor(Math.random() * (imagesArray.length));
  document.getElementById("image").innerHTML = "<center><img src='" + imagesArray[rnd] + "' alt='image' width='50%' height='50%'></img></center>";
};
