// CyberCore Terminal Main JavaScript
// Initializing Connection...

document.addEventListener('DOMContentLoaded', () => {
    console.log('[SYSTEM_MSG] Client_Interface Initialized. Standby for data stream.');

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
    if (footerStatus && footerStatus.textContent.includes('SYSTEM_STATUS')) {
        // Could update this with dynamic info, e.g., time
        // For now, it's mostly static from HTML
    }

    console.log('[SYSTEM_MSG] DOM traversal complete. All systems nominal.');
});

// Further client-side enhancements can be added here.
// Example: Light cursor trail, text animation on hover, etc.
// Keep it lightweight for a template.

console.log('[SYSTEM_MSG] Mainframe connection stable. Listening for directives...');
