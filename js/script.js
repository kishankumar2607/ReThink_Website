
document.addEventListener("DOMContentLoaded", function() {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(function(item) {
      // Add click event listener to the question element
      const question = item.querySelector('.question');
      question.addEventListener('click', function() {
        // Toggle the active class on the FAQ item
        item.classList.toggle('active');
      });
    });
  });
  