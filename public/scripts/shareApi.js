// // share.js

// export function shareContent() {
//     if (navigator.share) {
//       // Make the API call to fetch the content
//       fetchContentFromAPI()
//         .then(content => {
//           // Extract the necessary information from the fetched content
//           const title = content.title;
//           const text = content.text;
//           const url = content.url;
  
//           // Share the content using the Share API
//           navigator.share({ title, text, url })
//             .then(() => {
//               console.log('Content shared successfully.');
//             })
//             .catch((error) => {
//               console.error('Error sharing content:', error);
//             });
//         })
//         .catch(error => {
//           console.error('Error fetching content from API:', error);
//         });
//     } else {
//       console.log('Sharing not supported in this browser.');
//     }
//   }
  
//   export function fetchContentFromAPI() {
//     // Replace 'your-api-endpoint' with the actual endpoint for fetching content from your server
//     return fetch('https://zoeken.oba.nl/api/v1')
//       .then(response => response.json());
//   }



import {
    initializeFAQ
  } from './faq.js';
  import {
    renderResults
  } from './renderResults.js';
  import {
    helpFromAssistant
  } from './helpFromAssistant.js';
  import {
    desktopAssistantImage
  } from './helpFromAssistant.js';
  import {
    displayChatMessages
  } from './chatsParagraph.js';
  import {
    fadeOutAfterDelay
  } from './animation.js';
  import {
    displayMessages
  } from './animationDetails.js';
 
  
  desktopAssistantImage();
  
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('query');
  // modal
  const dialogButton = document.getElementById('dialog-button');
  const modal = document.getElementById('modal');
  const closeButton = document.getElementById('close-button');
  const shareButton = document.querySelector('.share-btn');
  
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
  
  document.addEventListener('DOMContentLoaded', () => {
    displayChatMessages();
    fadeOutAfterDelay();
    displayMessages();
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
  
  if (shareButton) {
    shareButton.addEventListener('click', () => {
      const content = document.querySelector('.detail-pagina_informatie').textContent;
      shareContent(content);
    });
  }
  