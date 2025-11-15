let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Frontend developer', 'Canva Designer', 'Video Editor'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Contact form submission
// Define API base URL
const API_BASE = 'http://localhost:3001';

const contactForm = document.getElementById('contact-form');
const messageElement = document.getElementById('msg');

if(contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);

        try {
            // Show loading message
            messageElement.innerHTML = "Sending message...";
            messageElement.style.color = "#0ef";
            
            const API_BASE = 'http://localhost:3001';
            const response = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject)
            });
            const contentType = response.headers.get('content-type') || '';
            let result;
            if (contentType.includes('application/json')) {
                result = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Unexpected response (${response.status}). ${text}`);
            }

            if (!response.ok || !result.success) {
                throw new Error(result?.message || `Request failed (${response.status})`);
            }

            messageElement.innerHTML = result.message;
            messageElement.style.color = "#0ef";
            
            // Reset form after successful submission
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                messageElement.innerHTML = "";
            }, 5000);
        } catch (error) {
            messageElement.innerHTML = (error && error.message) ? error.message : "An error occurred. Please try again.";
            messageElement.style.color = "#ff0000";
            console.error('Error sending contact form:', error);
        }
    });
}