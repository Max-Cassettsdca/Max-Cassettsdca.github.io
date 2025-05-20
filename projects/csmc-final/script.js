// Toggle dark/light mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('modeToggleBtn');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                toggleButton.textContent = 'Switch to Light Mode';
            } else {
                toggleButton.textContent = 'Switch to Dark Mode';
            }
        });
    }

    // Fun Facts toggle logic
    document.getElementById('factQuestionForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const answer = document.getElementById('answerInput').value.trim().toLowerCase();
        const container = document.getElementById('funFactsContainer');

        if (answer === 'blue pill') {
            // Show "Blue Pill" facts
            container.innerHTML = `
          <table class="cool-kid-table">
            <tbody>
              <tr>
                <td>Favorite Battle</td>
                <td>The Battle of Fallujah: This a rabbit hole I've been going down. Like lots of interviews, lots of podcasts. I don't know why I'm so interested in it but I'm learning to accept it</td>
              </tr>
              <tr>
                <td>Dream Travel Destination</td>
                <td>The Gates of the Underworld: I don't mean to get political or anything but I know that cool stuff happens down there and if you go through those gates and come back, you're an insta-legend</td>
              </tr>
              <tr>
                <td>Hobby</td>
                <td>Playing Guitar</td>
              </tr>
              <tr>
                <td>Favorite Animal</td>
                <td>Manatee: Least problematic animal in the world, everything else is a rodent or trying to kill me or both</td>
              </tr>
              <tr>
                <td>Least Favorite Animal</td>
                <td>Dog: Don't trust anything that feigns being happy that much. Like how is a dog gonna be wagging its tail so often? How come a dog gets to be happier than me? It's not! It's faking it!</td>
              </tr>
              <tr>
                <td>Best Skill</td>
                <td>I can bench 225: I got my heart broke, it's a rite of passage</td>
              </tr>
              <tr>
                <td>Most Controversial Political Opinion</td>
                <td>Yeah right man you thought, politics are for suckers, THEY decided the next president like 12 years ago.</td>
              </tr>
            </tbody>
  