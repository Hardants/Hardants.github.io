document.addEventListener('DOMContentLoaded', function () {
    const typingTextElement = document.getElementById('typing-text');
    const giftButton = document.getElementById('gift-button');
    const audioElement = document.getElementById('background-music');

    const paragraphs = [
        "As the date changes on this special day, I find myself reflecting on the incredible journey we've shared, and my heart overflows with gratitude for having you as my anchor, my confidante, and my greatest love.",
        "In the tapestry of time, the past year has woven its threads with moments of both joy and challenge. Yet, through it all, your strength and resilience have shone brightly, illuminating the path with a radiance only you possess. Your courage in facing adversity has been nothing short of inspiring, and I'm in awe of the grace with which you navigate life's complexities.",
        "Today, on your birthday, I wish for you a year filled with healing, growth, and boundless joy. May each day bring you closer to the serenity you deserve, and may your heart be a garden of beautiful moments and cherished dreams.",
        "Wishing you a birthday filled with the warmth of sunshine and the brightness of smiles. May the coming year be a chapter of renewed hope, love, and beautiful surprises. May you find peace in your heart, strength in your spirit, and the unwavering support of those who cherish you.",
        "Happy Birthday, my love! May this day be a tapestry woven with the threads of laughter, the hues of love, and the promise of a brighter tomorrow.",
        "With all my love, Tomato",
        "I'm sorry if this is all I got for you in your special day. I hope we can meet sooner. I love you and God loves you more!"
    ];
    const typingSpeed = 60;
    
    
    // Function to start typing each paragraph
    function typeMessage() {
        let paragraphIndex = 0;

        function typeParagraph() {
            let i = 0;
            const typingInterval = setInterval(function () {
                typingTextElement.innerHTML += paragraphs[paragraphIndex][i];
                i++;

                if (i === paragraphs[paragraphIndex].length) {
                    clearInterval(typingInterval);
                    paragraphIndex++;

                    if (paragraphIndex < paragraphs.length) {
                        typingTextElement.innerHTML += '<br><br>';
                        typeParagraph();
                    } else {
                        // Typing is complete, show the button
                        showGiftButton();
                    }
                }
            }, typingSpeed);
        }

        // Start typing the first paragraph
        typeParagraph();
    }

    function showGiftButton() {
        // Set the display property of the button to 'inline-block'
        if (giftButton) {
            giftButton.style.display = 'inline-block';
        }
    }


    // Call the function to start typing the message
    typeMessage();
});
