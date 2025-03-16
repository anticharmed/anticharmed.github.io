// Custom JavaScript for Anti Charmed

document.addEventListener('DOMContentLoaded', function() {
  // Apply UI element styles to specific elements (excluding site-nav)
  const uiElements = document.querySelectorAll('.site-footer, .page-meta, .entry-meta, .pagination, .breadcrumbs, .page-taxonomies, .page-taxonomies-title');
  
  uiElements.forEach(element => {
    element.style.fontFamily = '"Inter", sans-serif';
    element.style.fontWeight = '500';
    element.style.fontSize = '13px';
    element.style.color = '#555';
    element.style.letterSpacing = '0.01em';
  });
  
  // Apply white text to top navigation
  const navElements = document.querySelectorAll('.site-nav, .site-nav li');
  navElements.forEach(element => {
    element.style.fontFamily = '"Inter", sans-serif';
    element.style.fontWeight = '500';
    element.style.fontSize = '12px';
    element.style.color = '#fff';
    element.style.letterSpacing = '0.01em';
  });
  
  // Ensure navigation links are white
  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(link => {
    link.style.fontFamily = '"Inter", sans-serif';
    link.style.fontWeight = '500';
    link.style.fontSize = '12px';
    link.style.color = '#fff';
  });

  // Apply heading styles
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  headings.forEach(heading => {
    heading.style.fontFamily = '"EB Garamond", serif';
    heading.style.fontWeight = '700';
    heading.style.color = '#111';
    heading.style.letterSpacing = '-0.02em';
  });
  
  // Adjust page and entry titles
  const titles = document.querySelectorAll('.page-title, .entry-title');
  titles.forEach(title => {
    title.style.fontSize = '34px';
  });
  
  // Style taxonomy index items (category/tag pages)
  const taxonomyIndexLinks = document.querySelectorAll('.taxonomy-index a');
  taxonomyIndexLinks.forEach(link => {
    link.style.fontSize = '18px';
    link.style.fontFamily = '"EB Garamond", serif';
    link.style.fontWeight = '500';
  });
  
  // Style previous/next navigation
  const paginationLabels = document.querySelectorAll('.page-pagination-label');
  paginationLabels.forEach(label => {
    label.style.fontFamily = '"Inter", sans-serif';
    label.style.fontWeight = '500';
    label.style.fontSize = '13px';
    label.style.color = '#555';
  });
  
  const paginationTitles = document.querySelectorAll('.page-pagination-title');
  paginationTitles.forEach(title => {
    title.style.fontFamily = '"EB Garamond", serif';
    title.style.fontStyle = 'italic';
    title.style.fontWeight = '700';
    title.style.fontSize = '16px';
  });
  
  // Reduce whitespace between site header and content
  const masthead = document.querySelector('.masthead');
  if (masthead) {
    masthead.style.marginBottom = '1.5em';
  }
  
  // Reduce paragraph spacing
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.style.marginBottom = '1.2em';
  });
  
  // Style menu toggle button
  const menuToggle = document.querySelector('#menu-toggle');
  if (menuToggle) {
    menuToggle.style.fontFamily = '"Inter", sans-serif';
    menuToggle.style.fontWeight = '500';
    menuToggle.style.fontSize = '12px';
    menuToggle.style.color = '#fff';
  }
  
  // Style taxonomy elements
  const taxonomyElements = document.querySelectorAll('.page-taxonomy, .page-taxonomies-title');
  taxonomyElements.forEach(element => {
    element.style.fontFamily = '"Inter", sans-serif';
    element.style.fontWeight = '500';
  });
}); 