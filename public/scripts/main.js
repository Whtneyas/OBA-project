// import {
//   initializeFAQ
// } from './faq.js';
// import {
//   renderResults
// } from './renderResults.js';
// import {
//   helpFromAssistant
// } from './helpFromAssistant.js';
// import {
//   desktopAssistantImage
// } from './helpFromAssistant.js';
// import {
//   displayChatMessages
// } from './chatsParagraph.js';
// import {
//   fadeOutAfterDelay
// } from './animation.js';
// import {
//   displayMessages
// } from './animationDetails.js';


// desktopAssistantImage();

// const searchButton = document.getElementById('searchButton');
// const searchInput = document.getElementById('query');
// // modal
// const dialogButton = document.getElementById('dialog-button');
// const modal = document.getElementById('modal');
// const closeButton = document.getElementById('close-button');
// const shareButton = document.querySelector('.share-btn');


// function handleSearch(query) {
//   fetch('/api/search', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         query: query,
//       }),
//     })
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('Failed to fetch search results');
//       }
//     })
//     .then(responseData => {
//       renderResults(responseData);
//       helpFromAssistant();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// initializeFAQ();

// if (searchButton) {
//   searchButton.addEventListener('click', () => {
//     const query = searchInput.value;
//     handleSearch(query);
//   });
// }

// if (searchInput) {
//   searchInput.addEventListener('keypress', event => {
//     if (event.keyCode === 13) {
//       const query = searchInput.value;
//       handleSearch(query);
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', () => {
//   displayChatMessages();
//   fadeOutAfterDelay();
//   displayMessages();

// });

// if (modal) {
//   modal.classList.add('hidden');
// }

// if (dialogButton) {
//   dialogButton.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     modal.showModal();
//   });
// }

// if (closeButton) {
//   closeButton.addEventListener('click', () => {
//     modal.classList.add('hidden');
//     modal.close();
//   });
// }

// document.addEventListener('keydown', (event) => {
//   if (event.keyCode === 27) {
//     modal.classList.add('hidden');
//     modal.close();
//   }
// });


// if (shareButton) {
//   shareButton.addEventListener('click', () => {
//     const content = document.querySelector('.detail-pagina_informatie').textContent;
//     shareContent(content);
//   });
// }

// function shareContent(content) {
//   if (navigator.share) {
//     navigator.share({
//         text: content,


//       })
//       .then(() => console.log('Content shared successfully.'))
//       .catch(error => console.error('Error sharing content:', error));
//   } else {
//     console.warn('Web Share API is not supported in this browser.');
//     // Implement fallback behavior for browsers that do not support the Web Share API
//     // For example, you can open a share dialog using a sharing service or perform an AJAX request to share the content
//     // You can also display a message to inform the user that sharing is not supported in their browser
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const likeButton = document.getElementById('likeButton');
//   if (likeButton) {
//     likeButton.addEventListener('click', () => {
//       // Get the content you want to save
//       const content = document.querySelector('.detail-pagina_informatie').textContent;

//       // Send the favoriteContent to the server
//       fetch('/api/favorite/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             favoriteContent: content,
//           }),
//         })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Failed to save favorite content');
//           }
//           // Redirect to the favorites page
//           window.location.href = '/favorite';
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     });
//   }
// });



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

document.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    modal.classList.add('hidden');
    modal.close();
  }
});

if (shareButton) {
  shareButton.addEventListener('click', () => {
    const contentElement = document.querySelector('.detail-pagina_informatie');
    const content = contentElement.textContent;
    const imageElement = document.querySelector('.detail-pagina_image_cover');
    const imageUrl = imageElement.src;
    shareContent(content, imageUrl);
  });
}

function shareContent(content, imageUrl) {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: content,
      url: window.location.href,
    
    })
      .then(() => console.log('Content shared successfully.'))
      .catch(error => console.error('Error sharing content:', error));
  } else {
    console.warn('Web Share API is not supported in this browser.');
    // Implement fallback behavior for browsers that do not support the Web Share API
    // For example, you can open a share dialog using a sharing service or perform an AJAX request to share the content
    // You can also display a message to inform the user that sharing is not supported in their browser
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const likeButton = document.getElementById('likeButton');
  if (likeButton) {
    likeButton.addEventListener('click', () => {
      // Get the content you want to save
      const content = document.querySelector('.detail-pagina_informatie').textContent;

      // Send the favoriteContent to the server
      fetch('/api/favorite/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favoriteContent: content,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to save favorite content');
          }
          // Redirect to the favorites page
          window.location.href = '/favorite';
        })
        .catch(error => {
          console.error(error);
        });
    });
  }
});
