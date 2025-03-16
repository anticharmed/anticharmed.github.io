// Custom JavaScript for Anti Charmed

document.addEventListener('DOMContentLoaded', function() {
  // Apply UI element styles to specific elements
  const uiElements = document.querySelectorAll('.site-nav, .site-footer, .page-meta, .entry-meta, .pagination, .breadcrumbs');
  
  uiElements.forEach(element => {
    element.style.fontFamily = '"Inter", sans-serif';
    element.style.fontWeight = '500';
    element.style.fontSize = '16px';
    element.style.color = '#555';
    element.style.letterSpacing = '0.01em';
  });

  // Apply heading styles
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  headings.forEach(heading => {
    heading.style.fontFamily = '"EB Garamond", serif';
    heading.style.fontWeight = '700';
    heading.style.color = '#111';
    heading.style.letterSpacing = '-0.02em';
  });
}); 