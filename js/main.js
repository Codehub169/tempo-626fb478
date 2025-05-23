// Elderwood Chronicle Main JavaScript
// Initializing page elements...

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Chronicle_Note] Page scripts initialized. Welcome, reader.');

    // Smooth scroll for anchor links (optional enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is just a placeholder or for actual scrolling
            if (this.getAttribute('href') !== '#' && document.querySelector(this.getAttribute('href'))) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add a subtle interactive effect to post previews
    const postPreviews = document.querySelectorAll('.post-preview');
    postPreviews.forEach(preview => {
        preview.addEventListener('mouseenter', () => {
            // Example: could add a class for a more complex effect
            // For now, relying on CSS :hover effects
        });
        preview.addEventListener('mouseleave', () => {
            // Remove class if added
        });
    });

    // Dynamic text for footer status (example)
    const footerStatus = document.querySelector('footer p:last-child');
    if (footerStatus && footerStatus.textContent.includes('Hearth & Home')) {
        // Could update this with dynamic info, e.g., time or a random quote
        // For now, it's mostly static from HTML
    }
    // Update copyright year dynamically
    const copyrightYear = document.querySelector('footer p:first-child');
    if (copyrightYear && copyrightYear.textContent.includes('Current Year')) {
        copyrightYear.textContent = copyrightYear.textContent.replace('Current Year', new Date().getFullYear());
    }


    console.log('[Chronicle_Note] Page loaded successfully. All elements appear to be in order.');
});

// Further client-side enhancements can be added here.
// Example: Lazy loading images, simple animations on scroll, etc.
// Keep it relatively simple for a rustic feel.

console.log('[Chronicle_Note] Scripts standing by. Enjoy your reading.');
