const faqButtons = document.querySelectorAll(".faq-accordion");

    faqButtons.forEach(button => {
        button.addEventListener("click", function(){
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });