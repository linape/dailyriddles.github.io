document.addEventListener('DOMContentLoaded', () => {
 
    // --- RIDDLE DATABASE ---
    const riddles = [
        { date: '2025-07-01', riddle: 'I have keys but no locks. I have space but no room. You can enter, but can’t go outside.', hint: 'You might be typing on it right now.', answer: 'keyboard' },
        { date: '2025-07-02', riddle: 'The more of me you take, the more you leave behind.', hint: 'You leave them on sand.', answer: 'footsteps' },
        { date: '2025-07-03', riddle: 'I’m always in front of you but can never be seen.', hint: 'You can’t touch me.', answer: 'the future' },
        { date: '2025-07-04', riddle: 'What has a head, a tail, is brown, and has no legs?', hint: 'You might keep me in your pocket.', answer: 'penny' },
        { date: '2025-07-05', riddle: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind.', hint: 'Think about sound.', answer: 'echo' },
        { date: '2025-07-06', riddle: 'The more you take from me, the bigger I get.', hint: 'It’s a hole-y situation.', answer: 'hole' },
        { date: '2025-07-07', riddle: 'I’m tall when I’m young, and short when I’m old.', hint: 'I melt over time.', answer: 'candle' },
        { date: '2025-07-08', riddle: 'I have cities, but no houses. Mountains, but no trees. Water, but no fish.', hint: 'You can fold me.', answer: 'map' },
        { date: '2025-07-09', riddle: 'I’m not alive, but I can grow. I don’t have lungs, but I need air. What am I?', hint: 'You cook with me sometimes.', answer: 'fire' },
        { date: '2025-07-10', riddle: 'What comes down but never goes up?', hint: 'Think about weather.', answer: 'rain' },
        { date: '2025-07-11', riddle: 'What has many teeth but can’t bite?', hint: 'You probably own one.', answer: 'comb' },
        { date: '2025-07-12', riddle: 'The more you share me, the less I become. What am I?', hint: 'You might whisper me.', answer: 'secret' },
        { date: '2025-07-13', riddle: 'What has hands but can’t clap?', hint: 'Hangs on the wall.', answer: 'clock' },
        { date: '2025-07-14', riddle: 'I’m full of holes, yet I hold water.', hint: 'Found in kitchens.', answer: 'sponge' },
        { date: '2025-07-15', riddle: 'What can travel around the world while staying in a corner?', hint: 'Found on letters.', answer: 'stamp' },
        { date: '2025-07-16', riddle: 'I’m always moving but have no legs.', hint: 'Found in rivers.', answer: 'water' },
        { date: '2025-07-17', riddle: 'The more you take of me, the more you leave behind.', hint: 'You leave them on the ground.', answer: 'footsteps' },
        { date: '2025-07-18', riddle: 'I fly without wings. I cry without eyes.', hint: 'Felt on your skin.', answer: 'cloud' },
        { date: '2025-07-19', riddle: 'What runs, but never walks; has a mouth, but never talks?', hint: 'Found in nature.', answer: 'river' },
        { date: '2025-07-20', riddle: 'I am invisible, yet I make things visible.', hint: 'You need me to see.', answer: 'light' },
        { date: '2025-07-21', riddle: 'I can be cracked, made, told, and played.', hint: 'People laugh at me.', answer: 'joke' },
        { date: '2025-07-22', riddle: 'The more you use me, the duller I become.', hint: 'Found in pencil cases.', answer: 'pencil' },
        { date: '2025-07-23', riddle: 'What belongs to you, but other people use it more than you?', hint: 'They call you by it.', answer: 'your name' },
        { date: '2025-07-24', riddle: 'I have no beginning, middle, or end.', hint: 'A geometric shape.', answer: 'circle' },
        { date: '2025-07-25', riddle: 'I can be long or short; I can be grown or bought; I can be painted or left bare.', hint: 'Part of your body.', answer: 'fingernails' },
        { date: '2025-07-26', riddle: 'I can be cracked, cooked, and eaten.', hint: 'Found in breakfast.', answer: 'egg' },
        { date: '2025-07-27', riddle: 'What has one eye but can’t see?', hint: 'Often found in storms.', answer: 'needle' },
        { date: '2025-07-28', riddle: 'I get wetter the more I dry.', hint: 'Used after a bath.', answer: 'towel' },
        { date: '2025-07-29', riddle: 'I have four fingers and a thumb, but I’m not alive.', hint: 'Found in winter.', answer: 'glove' },
        { date: '2025-07-30', riddle: 'I have no legs, but I can run.', hint: 'Kitchen or bathroom.', answer: 'tap' },
        { date: '2025-07-31', riddle: 'I have a neck but no head.', hint: 'Found on tables.', answer: 'bottle' },
        { date: '2025-08-01', riddle: 'I’m always hungry and must be fed, but if you give me water, I die.', hint: 'Careful around me.', answer: 'fire' },
        { date: '2025-08-02', riddle: 'I go up but never come down.', hint: 'Happens to everyone.', answer: 'your age' },
        { date: '2025-08-03', riddle: 'I’m lighter than a feather, yet the strongest person can’t hold me for long.', hint: 'You breathe it.', answer: 'your breath' },
        { date: '2025-08-04', riddle: 'I shave every day, but my beard stays the same.', hint: 'A profession.', answer: 'barber' },
        { date: '2025-08-05', riddle: 'I have branches, but no fruit, trunk, or leaves.', hint: 'Found in cities.', answer: 'bank' },

    ];
    
   // --- UTILITY FUNCTIONS ---
    const attachRiddleLogic = (riddleElement, riddleData) => {
        const input = riddleElement.querySelector('.answer-input');
        const button = riddleElement.querySelector('.submit-button');
        const feedback = riddleElement.querySelector('.feedback-message');
        const correctAnswerDisplay = riddleElement.querySelector('.correct-answer-display');

        button.addEventListener('click', () => {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = riddleData.answer.toLowerCase();

            feedback.classList.remove('correct', 'incorrect'); // Reset

            if (userAnswer === correctAnswer) {
                feedback.textContent = 'Correct! 🎉';
                feedback.classList.add('correct');
                correctAnswerDisplay.style.display = 'block';
                input.disabled = true;
                button.disabled = true;
            } else {
                feedback.textContent = 'Not quite, try again!';
                feedback.classList.add('incorrect');
                input.focus();
            }
        });
    };

    const createRiddleHTML = (riddleData, isArchived = false) => {
        const { date, riddle, hint, answer } = riddleData;
        const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });

        const riddleContentHTML = `
            ${isArchived ? '' : `<p class="riddle-date">${formattedDate}</p>`}
            <p class="riddle-text">${riddle}</p>
            <details>
                <summary>Need a hint?</summary>
                <p>${hint}</p>
            </details>
            <div class="answer-section">
                <input type="text" class="answer-input" placeholder="Your answer...">
                <button class="submit-button">Check</button>
            </div>
            <p class="feedback-message"></p>
            <div class="correct-answer-display">
                <strong>The answer is:</strong> ${answer}
            </div>
        `;

        const riddleElement = document.createElement('div');
        if (isArchived) riddleElement.classList.add('riddle-content');
        riddleElement.innerHTML = riddleContentHTML;
        attachRiddleLogic(riddleElement, riddleData);

        return riddleElement;
    };

    // --- PAGE INITIALIZATION ---
    const init = () => {
        const riddleContainer = document.getElementById('riddle-container');
        const archiveContainer = document.getElementById('archive-container');

        // Get last riddle as today's riddle
        const todaysRiddleData = riddles[riddles.length - 1];

        // All except last go to archive
        const pastRiddles = riddles.slice(0, riddles.length - 1).reverse();

        // Display Today's Riddle
        riddleContainer.innerHTML = '';
        const todayRiddleElement = createRiddleHTML(todaysRiddleData, false);
        riddleContainer.appendChild(todayRiddleElement);

        // Populate the Archive
        archiveContainer.innerHTML = '';
        if (pastRiddles.length > 0) {
            pastRiddles.forEach(riddleData => {
                const formattedDate = new Date(riddleData.date + 'T00:00:00').toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                });

                const archiveItem = document.createElement('details');
                archiveItem.classList.add('archive-item');

                const summary = document.createElement('summary');
                summary.textContent = formattedDate;

                const riddleElement = createRiddleHTML(riddleData, true);

                archiveItem.appendChild(summary);
                archiveItem.appendChild(riddleElement);
                archiveContainer.appendChild(archiveItem);
            });
        } else {
            archiveContainer.innerHTML = '<p>The archive is just getting started. Check back soon!</p>';
        }
    };

    init();
});
