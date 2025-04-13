
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.nav-links a, .about-buttons a').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            const target = document.querySelector(targetSelector);

            if (target) {
                e.preventDefault();
                document.querySelectorAll('section').forEach(section => {
                    section.style.display = 'none';
                });
                target.style.display = 'block';
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    const greeting = document.createElement('h3');
    const hour = new Date().getHours();
    let message = 'Welcome to my portfolio!';
    if (hour < 12) message = 'Good morning! Thanks for visiting.';
    else if (hour < 18) message = 'Good afternoon! Glad you’re here.';
    else message = 'Good evening! Take a look around.';
    greeting.textContent = message;
    greeting.style.color = '#333';
    greeting.style.marginBottom = '15px';
    const heroText = document.querySelector('.hero-text');
    if (heroText) heroText.prepend(greeting);
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for reaching out! I’ll get back to you soon.');
            this.reset();
        });
    }
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑ Top';
    Object.assign(backToTopBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
        cursor: 'pointer',
        display: 'none',
        zIndex: '1000',
    });
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
function sendMail() {
    let parms = {
        user_name: document.getElementById("Name").value,
        user_email: document.getElementById("Email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_gvdcobl", "template_hu9v2db", parms)
        .then(function (response) {
            alert("Email sent successfully! Anakshie!! 💌");
            console.log("SUCCESS!", response.status, response.text);
        }, function (error) {
            alert("Failed to send email. Try again later.");
            console.error("FAILED...", error);
        });
}
