const images = document.querySelectorAll("img");
images.forEach(image => {image.setAttribute("draggable", "false");});

// const form = document.getElementById("contact-form");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault(); // Stop page from reloading

//   const formData = new FormData(form);

//   try {
//     const response = await fetch("https://formsubmit.co/c967010a33dadfa9ba960000aa37a4d0", {
//       method: "POST",
//       headers: {
//         "Accept": "application/json"
//       },
//       body: formData
//     });

//     if (response.ok) {
//       form.reset(); // Clear form fields silently
//     }
//   } catch (error) {
//     // Only log to console, no alerts or GUI messages
//     console.error("Submission failed:", error);
//   }
// });