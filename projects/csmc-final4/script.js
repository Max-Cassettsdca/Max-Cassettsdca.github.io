document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  // Dark mode 
  const toggleButton = document.getElementById("modeToggleBtn");
  if (toggleButton) {
    console.log("Toggle button found");

    // so this makes it the starting position in light mode

    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Switch to Light Mode";
    } else {
      toggleButton.textContent = "Switch to Dark Mode";
    }

    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Switch to Light Mode";
      } else {
        toggleButton.textContent = "Switch to Dark Mode";
      }
    });
  } else {
    console.log("Toggle button not found");
  }

  // Its the button, its the choose pill button, so you press it and its like thesumbit button and the get button per se
  const chooseButton = document.getElementById("choose-btn");
  const pillInput = document.getElementById("pill-input");
  const redFacts = document.getElementById("red-facts");
  const blueFacts = document.getElementById("blue-facts");
  const pillForm = document.getElementById("pill-form");

  if (chooseButton && pillInput && redFacts && blueFacts) {
    console.log("Matrix pill selection elements found");

    chooseButton.addEventListener("click", function () {
      const answer = pillInput.value.trim().toLowerCase();
      console.log("Pill choice:", answer);

      if (answer === "blue pill") {
        // this shows blue pill facts and gets rid of red pill facts


        blueFacts.style.display = "block";
        redFacts.style.display = "none";
        console.log("Showing blue pill facts");
      } else if (answer === "red pill") {
        // this shows red pill facts and gets rid of blue pillll facts
        redFacts.style.display = "block";
        blueFacts.style.display = "none";
        console.log("Showing red pill facts");
      } else {
        // so if you try to get smart and but in anyhting else this comes up to set you straight

        alert('Please enter either "red pill" or "blue pill"');
        console.log("Invalid pill choice");
      }
    });

    // form submission
    if (pillForm) {
      pillForm.addEventListener("submit", function (e) {
        e.preventDefault();
        chooseButton.click(); // so you got to click to submit the form. its the act of submitting it.
        console.log("Form submitted");
      });
    }
  } else {

  }
  // color loop for the dividers
  const colorLoop = () => {
    const conanDivs = document.querySelectorAll(".conan");
    const colors = ["#f78104", "#ff4500", "#ff6347", "#ff8c00", "#ffa500"];
    let colorIndex = 0;

    // runs this every two second. took forever to figure out 
    setInterval(() => {
      // Apply the current color to all conan divs
      conanDivs.forEach((div) => {
        div.style.backgroundColor = colors[colorIndex];
      });

      // it cycles the colors
      colorIndex = (colorIndex + 1) % colors.length;
    }, 2000); // color changes every 2 seconds
  };

  // starts the loop
  colorLoop();
});
