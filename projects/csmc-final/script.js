document.addEventListener('DOMContentLoaded', () => 
  const toggleButton = document.getElementById('modeToggleBtn') {};
  // Set initial button text based on current mode
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = 'Switch to Light Mode';
    } else {
      toggleButton.textContent = 'Switch to Dark Mode';
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const chooseButton = document.getElementById('choose-btn');
    const pillInput = document.getElementById('pill-input');
    const redFacts = document.getElementById('red-facts');
    const blueFacts = document.getElementById('blue-facts');

    // Button click handler
    chooseButton.addEventListener('click', function () {
      const answer = pillInput.value.trim().toLowerCase();

      if (answer === 'blue pill') {
        // Show blue pill facts, hide red pill facts
        blueFacts.style.display = 'block';
        redFacts.style.display = 'none';
      } else if (answer === 'red pill') {
        // Show red pill facts, hide blue pill facts
        redFacts.style.display = 'block';
        blueFacts.style.display = 'none';
      } else {
        // Invalid input
        alert('Please enter either "red pill" or "blue pill"');
      }
    });

    // Also handle form submission
    document.getElementById('pill-form').addEventListener('submit', function (e) {
      e.preventDefault();
      chooseButton.click(); // Trigger the button click
    });
  });

//   // Fun Facts toggle logic
//   document.getElementById('factQuestionForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const answer = document.getElementById('answerInput').value.trim().toLowerCase();
//     const container = document.getElementById('funFactsContainer');

//     if (answer === 'blue pill') {
//       container.innerHTML = `
//         <table class="cool-kid-table blue-pill-table">
//           <tbody>
//             <tr>
//               <td>Favorite Battle</td>
//               <td>The Battle of Fallujah: This a rabbit hole I've been going down. Like lots of interviews, lots of podcasts. I don't know why I'm so interested in it but I'm learning to accept it</td>
//             </tr>
//             <tr>
//               <td>Dream Travel Destination</td>
//               <td>The Gates of the Underworld: I don't mean to get political or anything but I know that cool stuff happens down there and if you go through those gates and come back, you're an insta-legend</td>
//             </tr>
//             <tr>
//               <td>Hobby</td>
//               <td>Playing Guitar</td>
//             </tr>
//             <tr>
//               <td>Favorite Animal</td>
//               <td>Manatee: Least problematic animal in the world, everything else is a rodent or trying to kill me or both</td>
//             </tr>
//             <tr>
//               <td>Least Favorite Animal</td>
//               <td>Dog: Don't trust anything that feigns being happy that much. Like how is a dog gonna be wagging its tail so often? How come a dog gets to be happier than me? It's not! It's faking it!</td>
//             </tr>
//             <tr>
//               <td>Best Skill</td>
//               <td>I can bench 225: I got my heart broke, it's a rite of passage</td>
//             </tr>
//             <tr>
//               <td>Most Controversial Political Opinion</td>
//               <td>Yeah right man you thought, politics are for suckers, THEY decided the next president like 12 years ago.</td>
//             </tr>
//           </tbody>
//         </table>
//       `;
//     } else if (answer === 'red pill') {
//       container.innerHTML = `
//         <table class="cool-kid-table red-pill-table">
//           <tbody>
//             <tr>
//               <td>Favorite Color</td>
//               <td>Blue: its the only right answer other than red</td>
//             </tr>
//             <tr>
//               <td>Favorite Song</td>
//               <td>Sister Golden Hair by America: Killer song, I love classic rock</td>
//             </tr>
//             <tr>
//               <td>Favorite Movie</td>
//               <td>
//                 <a href="https://www.amazon.com/Rocky-Sylvester-Stallone/dp/B0017VT5E8" target="_blank">Rocky</a>:
//                 The Italian Stallion is the man. I know it's kind of sacrilegious to be a Sylvester Stalone and an Arnold Schwarzenegger fan but I mean why choose, am I right?
//               </td>
//             </tr>
//             <tr>
//               <td>Favorite Class</td>
//               <td>CMSC 122: Obviously I was going to say that man, c'mon It's a lay-up</td>
//             </tr>
//             <tr>
//               <td>Favorite TV Show</td>
//               <td>The Umbrella Academy: This show is so tough. I didn't even know it was a comic but this show is just hilarious</td>
//             </tr>
//             <tr>
//               <td>Favorite State</td>
//               <td>California: I mean I really don't need to explain this one</td>
//             </tr>
//             <tr>
//               <td>Favorite Bible Verse</td>
//               <td>Proverbs 3:3: I'll just quote it. "Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart"</td>
//             </tr>
//             <tr>
//               <td>Favorite Food</td>
//               <td>Jersey Mikes Philly Cheesesteak: If you disagree with me then you are just plain wrong. That rule applies in most circumstances but especially this one</td>
//             </tr>
//           </tbody>
//         </table>
//       `;
//     } else {
//       container.innerHTML = `<div style="color:red;">Please type "Red Pill" or "Blue Pill".</div>`;
//     }
//   });
// });{}}
