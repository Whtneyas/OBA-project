


export function helpFromAssistant() {
    var resultsChatContainer = document.createElement('div');
    resultsChatContainer.id = 'results-container';

    var resultsMessagesContainer = document.createElement('div');
    resultsMessagesContainer.id = 'results-message';
    resultsChatContainer.appendChild(resultsMessagesContainer);

    var imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    var digitalAssistantImg = document.createElement('img');
    digitalAssistantImg.src = '/images/character/animation/frame3.png';
    digitalAssistantImg.classList.add('digital-assistant');

    imageContainer.appendChild(digitalAssistantImg);
    resultsChatContainer.appendChild(imageContainer);

    var helpMessage = document.createElement('p');
    helpMessage.textContent = 'Heb je hulp nodig op deze pagina?';
    helpMessage.classList.add('message-text');
    resultsMessagesContainer.appendChild(helpMessage);

    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    var yesButton = document.createElement('button');
    yesButton.id = 'yesButton';
    yesButton.textContent = 'Ja';

    var noButton = document.createElement('button');
    noButton.id = 'noButton';
    noButton.textContent = 'Nee';

    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(noButton);

    resultsChatContainer.appendChild(buttonContainer);

    yesButton.addEventListener('click', displayResultsMessages);
    noButton.addEventListener('click', displayLaterMessage);

    function displayResultsMessages() {
        resultsMessagesContainer.innerHTML = '';

        var resultsMessages = [
            'Dit zijn je zoek resultaten.',
            'Als je op een van deze klikt, vind je meer informatie.',
            'Heb je een medewerker nodig?',
            'Druk dan op de vraagteken knop.',
        ];

        var index = 0;

        function displayNextMessage() {
            var message = resultsMessages[index];

            var messageItem = document.createElement('p');
            messageItem.textContent = message;
            messageItem.classList.add('message-texts');

            resultsMessagesContainer.innerHTML = '';
            resultsMessagesContainer.appendChild(messageItem);

            index++;

            if (index < resultsMessages.length) {
                setTimeout(displayNextMessage, 2000);
            } else {
                setTimeout(removeResultsContainer, 2000); // Delay before removing the container
            }
        }

        displayNextMessage();
    }

    function displayLaterMessage() {
        resultsMessagesContainer.innerHTML = '';

        var message = document.createElement('p');
        message.textContent = 'Je kan altijd een medewerker spreken.';
        resultsMessagesContainer.appendChild(message);
        message.classList.add('message-text2');

        setTimeout(removeResultsContainer, 2000); // Delay before removing the container
    }

    function removeResultsContainer() {
        var resultsContainer = document.getElementById('results-container');
        if (resultsContainer) {
            resultsContainer.remove();
        }
    }

    document.body.appendChild(resultsChatContainer);
}