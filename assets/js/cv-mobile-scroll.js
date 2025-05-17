// JavaScript for improved mobile CV scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the CV page
  if (document.body.classList.contains('cv-page')) {
    const iframeContainer = document.querySelector('.cv-container');
    const iframe = document.querySelector('.cv-container iframe');
    
    if (iframeContainer && iframe) {
      // Handle touch events for better scrolling on iOS devices
      iframeContainer.addEventListener('touchstart', function(e) {
        // Allow default behavior for touch events inside the container
      }, { passive: true });
      
      // Fix for iOS Safari issues with iframes
      if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        // iOS specific adjustments
        iframeContainer.style.webkitOverflowScrolling = 'touch';
        iframe.style.width = '100%';
        
        // Add scroll indicator for better UX
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '<span>Scroll down</span>';
        scrollIndicator.style.position = 'absolute';
        scrollIndicator.style.bottom = '20px';
        scrollIndicator.style.left = '50%';
        scrollIndicator.style.transform = 'translateX(-50%)';
        scrollIndicator.style.backgroundColor = 'rgba(0,0,0,0.5)';
        scrollIndicator.style.color = 'white';
        scrollIndicator.style.padding = '8px 12px';
        scrollIndicator.style.borderRadius = '20px';
        scrollIndicator.style.fontSize = '14px';
        scrollIndicator.style.opacity = '0.8';
        scrollIndicator.style.zIndex = '999';
        iframeContainer.appendChild(scrollIndicator);
        
        // Hide indicator after scrolling
        iframeContainer.addEventListener('scroll', function() {
          if (scrollIndicator.style.opacity !== '0') {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease-out';
          }
        });
      }
    }
  }
}); 