document.addEventListener('DOMContentLoaded', function () {
    
    const typingTextElement = document.getElementById('typing-text');

    const buttonElement = document.querySelector('.action-button');

    const textToType = "Halo sayangku, maaf aku gabisa kasih banyak ya di ulang tahun ajang, tapi aku cuma bisa prepare ini. Ini pun dibantu sama my best-friend ChatGPT. Selamat Ulang Tahun sayangku. I love you!"; // Replace with your desired text
    
    const typingSpeed = 80; // Adjust the typing speed (in milliseconds)

    const delayBeforeButton = 1200; // Adjust the delay time as needed

    function typeText() {
        let i = 0;
        const typingInterval = setInterval(function () {
            typingTextElement.textContent += textToType[i];
            i++;
            if (i === textToType.length) {
                clearInterval(typingInterval);
                // Add a delay before showing the button
                setTimeout(showButton, delayBeforeButton);
            }
        }, typingSpeed);
    }

    function showButton() {
        buttonElement.style.display = 'inline-block';
        buttonElement.addEventListener('click', function(){window.location.href = 'message.html';
    });
    }

    
    // Call the function to start typing
    typeText();

});



