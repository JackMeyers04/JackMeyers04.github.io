const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-label', 'Expanded image');
lightbox.hidden = true;

const expandedImage = document.createElement('img');
lightbox.appendChild(expandedImage);
document.body.appendChild(lightbox);

document.querySelectorAll('.photo-container img').forEach((image) => {
    image.addEventListener('click', () => {
        expandedImage.src = image.src;
        expandedImage.alt = image.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
    });
});

const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
};

lightbox.addEventListener('click', closeLightbox);
expandedImage.addEventListener('click', (event) => event.stopPropagation());
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
        closeLightbox();
    }
});