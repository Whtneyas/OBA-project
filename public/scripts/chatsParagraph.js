export function displayChatMessages() {
    const chatContainer = document.getElementById("paragraph-container");
    const chatParagraph = document.createElement("p");
    chatParagraph.className = "chat-paragraph";
    chatContainer.appendChild(chatParagraph);

    const chatMessages = [
      "Halloo! Welkom bij de oba ",
      "Wat zoek je in de bieb?",
      "Je kan je vraag hieronder typen in de zoekbalk",
      "Wat zoek je in de bieb?",
      "Je kan je vraag hieronder typen in de zoekbalk"

    ];

    let currentIndex = 0;

    function displayNextMessage() {
      if (currentIndex >= chatMessages.length) {
        chatContainer.style.opacity = "0"; // Hide the container when all paragraphs are displayed
        return;
      }

      chatParagraph.style.opacity = "0"; // Gradually hide the paragraph
      setTimeout(() => {
        chatParagraph.textContent = chatMessages[currentIndex]; // Update the content
        chatParagraph.style.opacity = "1"; // Gradually show the paragraph
        setTimeout(() => {
          chatParagraph.style.opacity = "0"; // Gradually hide the paragraph
          setTimeout(() => {
            if (currentIndex === chatMessages.length - 2) {
              chatContainer.style.opacity = "0"; // Hide the container after the last paragraph fades out
            }
          }, 1000); // Remove paragraph after it fades out
        }, 3000); // Show paragraph for 3 seconds
      }, 1000); // Wait for 1 second before showing the next message

      currentIndex++;
      setTimeout(displayNextMessage, 4000); // Wait for 4 seconds before showing the next message
    }

    displayNextMessage();
  }



