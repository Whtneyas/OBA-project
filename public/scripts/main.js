

import { initializeFAQ } from './faq.js';
import { renderResults } from './renderResults.js';
import { helpFromAssistant } from './helpFromAssistant.js';
import { desktopAssistantImage } from './helpFromAssistant.js';
import { displayChatMessages } from './chatsParagraph.js';
import { fadeOutAfterDelay } from './animation.js';
import { displayMessages } from './animationDetails.js';


desktopAssistantImage();

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('query');
// modal
const dialogButton = document.getElementById('dialog-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');

function handleSearch(query) {
  fetch('/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch search results');
      }
    })
    .then(responseData => {
      renderResults(responseData);
      helpFromAssistant();
    })
    .catch(error => {
      console.error(error);
    });
}
initializeFAQ();
if (searchButton) {
  searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    handleSearch(query);
  });
}

if (searchInput) {
  searchInput.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
      const query = searchInput.value;
      handleSearch(query);
    }
  });
}

displayChatMessages();
fadeOutAfterDelay();

document.addEventListener('DOMContentLoaded', () => {
  displayMessages(); // Call the displayMessages function
});

if (modal) {
  modal.classList.add('hidden');
}

if (dialogButton) {
  dialogButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.showModal();
  });
}

if (closeButton) {
  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.close();
  });
}

