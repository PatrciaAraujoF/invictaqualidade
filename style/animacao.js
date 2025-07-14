// SESSAO1 
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.sessao1 h1');
    const h3 = document.querySelector('.sessao1 h3');

    h1.style.position = 'relative';
    h1.style.left = '0px'; 
    h3.style.position = 'relative';

    let positionH3 = window.innerWidth;
    const stopPositionH3 = 0;

    const interval = setInterval(() => {
        positionH3 -= 2; 
        h3.style.left = positionH3 + 'px';
        
      
        if (positionH3 <= stopPositionH3) {
            h3.style.left = stopPositionH3 + 'px';
            clearInterval(interval);
        }
    }, 10); 
});




// SESSAO4 - CARDS
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.sessao1 h1');
    const h3 = document.querySelector('.sessao1 h3');

    h1.style.position = 'relative';
    h1.style.left = '0px';
    h3.style.position = 'relative';
    let positionH3 = window.innerWidth;
    const stopPositionH3 = 0;
    
    const h3Interval = setInterval(() => {
        positionH3 -= 2;
        h3.style.left = positionH3 + 'px';
        if (positionH3 <= stopPositionH3) {
            h3.style.left = stopPositionH3 + 'px';
            clearInterval(h3Interval);
        }
    }, 10);

  
    function animateCards() {
        const sessao4 = document.querySelector('.sessao4');
        if (sessao4) {
            const cards = sessao4.querySelectorAll('.card');

            cards.forEach((card, index) => {
                card.style.position = 'relative';
                card.style.left = window.innerWidth + 'px'; 

                setTimeout(() => {
                    let cardPosition = parseInt(card.style.left, 10);
                    const stopCardPosition = 0;
                    const cardInterval = setInterval(() => {
                        cardPosition -= 3; // Movimento mais lento
                        card.style.left = cardPosition + 'px';

                        if (cardPosition <= stopCardPosition) {
                            card.style.left = stopCardPosition + 'px';
                            clearInterval(cardInterval);
                        }
                    }, 3);
                }, index * 500);
            });
        }
    }

  
    const observerOptions = {
        root: null, 
        threshold: 0.1 
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sessao4 = document.querySelector('.sessao4');
    if (sessao4) {
        observer.observe(sessao4);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn-custom');
    
    setInterval(() => {
        button.classList.toggle('shake-animation');
    }, 800); // Tempo em milissegundos (0.5 segundo)
});



// ESCRITA

document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll("h1.titulo-sublinhado[data-animate='true']");

    titles.forEach(function(title) {
        const originalPosition = title.getBoundingClientRect().left;
        let position = window.innerWidth;
        const speed = 10;

        function animate() {
            position -= speed;
            if (position <= originalPosition) {
                title.style.transform = `translateX(0px)`; 
                return;
            }
            title.style.transform = `translateX(${position - originalPosition}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    });
});