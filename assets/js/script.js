
/* script for typing text */

  const typingElement = document.querySelector('.typing');
  
  function resetTypingAnimation() {
    typingElement.style.width = '0';
    setTimeout(() => {
      typingElement.style.width = '100%';
    }, 50);
  }
  
  typingElement.addEventListener('animationiteration', resetTypingAnimation);

/* scroll horizotally useig ico */

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".owl-carousel");
    const scrollLeftIcon = document.getElementById("scroll-left");
    const scrollRightIcon = document.getElementById("scroll-right");

    scrollLeftIcon.addEventListener("click", function () {
        carousel.scrollBy({
            left: -300, // Adjust the scroll value as needed
            behavior: "smooth",
        });
    });

    scrollRightIcon.addEventListener("click", function () {
        carousel.scrollBy({
            left: 300, // Adjust the scroll value as needed
            behavior: "smooth",
        });
    });
});


/* Fancybox library to create a lightbox effect for project images */

$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        loop: true,
        smallBtn: true,
        afterShow: function () {
            $('.fancybox-slide').on('click', function () {
                $.fancybox.close();
            });
        }
    });
});



