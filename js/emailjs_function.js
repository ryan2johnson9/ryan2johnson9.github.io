window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const btn = document.getElementById('submit-btn');
        const emResult = document.getElementById('email-result');
        emResult.innerHTML = "";
        btn.disabled = true;
        btn.value = "Sending...";
        event.preventDefault();
        
        emailjs.sendForm('ryans_emailjs_27', 'template_q8eutxm', this)
            .then(() => {
                btn.disabled = false;
                btn.value = "Send";
                emResult.innerHTML = "<br><p class='contact-success'>Message sent! I'll get back to you soon.</p>";
                emResult.scrollIntoView({ behavior: "smooth", block: "center" });
                console.log('SUCCESS!');
            }, (error) => {
                btn.disabled = false;
                btn.value = "Send";
                emResult.innerHTML = "<br><p class='contact-fail'>Failed to send :( Please email me at ryan2johnson9@gmail.com.</p>";
                emResult.scrollIntoView({ behavior: "smooth", block: "center" });
                console.log('FAILED...', error);
            });
    });

    // Toggle About Me section
    document.getElementById('about-toggle').addEventListener('click', function() {
        const aboutSection = document.getElementById('about-content');
        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
            this.textContent = "About Me";
        } else {
            aboutSection.style.display = "none";
            this.textContent = "About Me...";
        }
    });
};