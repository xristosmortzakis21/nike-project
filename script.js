document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('main-nav');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Αλλαγή εικονιδίου
        menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // 2. Form Validation
    const form = document.getElementById('nikeForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Ακύρωση αποστολής
        const email = emailInput.value.trim();

        if(email && email.includes('@')) {
            alert('Ευχαριστούμε για την εγγραφή!');
            form.reset();
        } else {
            alert('Παρακαλώ εισάγετε έγκυρο email.');
        }
    });

    // 3. Interaction στα κουμπιά "Προσθήκη"
    const buttons = document.querySelectorAll('.add-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Προστέθηκε ✓';
            this.style.background = 'green';
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '#111';
            }, 2000);
        });
    });
});