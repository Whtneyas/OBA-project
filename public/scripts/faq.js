export function initializeFAQ() {
    const searchInput = document.getElementById('query');
    const faqList = document.querySelector('.faq-list');
    const cancelBtn = document.querySelector('.faq-wrapper .heading-faq button');
  
    if (searchInput && faqList) {
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
  
        if (searchTerm.length > 0) {
          faqList.style.display = 'block';
        } else {
          faqList.style.display = 'none';
        }
  
        const faqItems = faqList.getElementsByTagName('li');
  
        for (const faqItem of faqItems) {
          const summary = faqItem.querySelector('summary');
          const question = summary.textContent.trim().toLowerCase();
  
          if (question.includes(searchTerm)) {
            faqItem.style.display = 'block';
          } else {
            faqItem.style.display = 'none';
          }
        }
      });
    }
  
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        const faqWrapper = document.querySelector('.faq-wrapper');
        faqWrapper.style.display = 'none';
      });
    }
  }
  