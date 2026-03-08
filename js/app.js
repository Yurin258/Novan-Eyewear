/**
 * JS interactions and WhatsApp Link Generator
 */

document.addEventListener('DOMContentLoaded', () => {
    // ---- WhatsApp URL Setup ----
    // You can replace this phone number with the actual WhatsApp number.
    // Format: Country code (258 for Moz) followed by number. Ex: 25884xxxxxxx
    const PHONE_NUMBER = "258859025329";

    // Make buy buttons scroll to form
    const buyButtons = document.querySelectorAll('.js-buy-btn');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const formContainer = document.getElementById('fazer-pedido');
            if (formContainer) {
                formContainer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submission handler
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const quantitySelect = document.getElementById('quantity');
            const quantity = quantitySelect.options[quantitySelect.selectedIndex].text;
            const color = document.getElementById('color').value;

            const rawMessage = `Olá Novan! Gostaria de fazer um pedido:\n\n*Quantidade:* ${quantity}\n*Cor da Armação:* ${color}\n*Número de Chamada:* ${phone}\n*Endereço de Entrega:* ${address}\n\nAguardo confirmação.`;

            const message = encodeURIComponent(rawMessage);

            const finalUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
            window.open(finalUrl, '_blank');
        });
    }

    // ---- Minimal Gallery Logic Setup ----
    // Simple placeholder logic for when multiple images are available.
    const thumbs = document.querySelectorAll('.thumb');
    const mainImage = document.getElementById('mainImage');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove active class from all
            thumbs.forEach(t => t.classList.remove('active'));
            // Add active to clicked
            thumb.classList.add('active');

            // In a real scenario we swap the exact image src
            mainImage.src = thumb.src;

            // Add simple fade animation
            mainImage.style.opacity = '0.5';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 150);
        });
    });
});
