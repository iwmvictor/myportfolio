
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

// Function to validate the form
function validateForm() {
    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (fullName === "" || email === "" || subject === "" || message === "") {
        alert("All fields are required.");
        return false; // Prevent form submission
    }

    // Additional email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}


// Function to show/hide the back to top button
window.addEventListener("scroll", function() {
    var btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Function to scroll back to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// Function to add/remove the active class based on scroll position
function updateHeaderSticky() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

// Listen for scroll event
window.addEventListener("scroll", updateHeaderSticky);

// Initial check in case the page is loaded with scroll position
updateHeaderSticky();


// JavaScript to toggle navigation menu
document.getElementById("menuButton").addEventListener("click", function () {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
});


