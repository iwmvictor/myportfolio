# portfolio
Welcome to my GitHub repository where I showcase my journey as a computer engineering student with a passion for development, programming, and graphic design. Feel free to explore my projects and get in touch for collaborations or to learn more about my work.

## About

This portfolio website is designed to showcase my skills, projects, and experience. It provides an interactive and visually appealing way for visitors to learn more about me and my work.

## Features

- Responsive design for various screen sizes.
- Sections for displaying projects, skills, experience, and contact information.
- Interactive animations and scroll effects.
- Back-to-top button for easy navigation.
- Contact form for users to reach out.

## Technologies Used

- HTML5
- CSS3 (including Flexbox and CSS Grid)
- JavaScript (for interactivity)
- Font Awesome (for icons)
- Owl Carousel (for project carousel)
- Google Fonts (for typography)

##codes used

1. contact form to google sheet:
   
    <script>
        const scriptURL = '[url here]'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
    </script>
