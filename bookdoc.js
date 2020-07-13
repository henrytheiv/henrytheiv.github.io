
var topButton = document.getElementById("backToTop");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var coll = document.getElementsByClassName("faqquestion");
        var i;

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("faqactive");
            var faqanswer = this.nextElementSibling;
            if (faqanswer.style.maxHeight){
              faqanswer.style.maxHeight = null;
            } else {
              faqanswer.style.maxHeight = faqanswer.scrollHeight + "px";
            } 
  });
}
