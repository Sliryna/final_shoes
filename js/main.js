document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 50px';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '20px 50px';
            header.style.background = 'var(--glass-bg)';
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (to be added to HTML)
    // Add simple animation for elements with .animate-on-scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .section-title, .banner').forEach((el) => {
        observer.observe(el);
    });

    // Size Selector Logic
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Cart interaction demo
    const cartBtns = document.querySelectorAll('.add-to-cart-btn, .btn-primary');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.innerText.toUpperCase() === 'SHOP NOW' || btn.innerText.toUpperCase() === 'EXPLORE') return;
            e.preventDefault();
            const originalText = btn.innerText;
            btn.innerText = 'ADDED!';
            btn.style.background = '#4CAF50';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
            }, 2000);
        });
    });
});
