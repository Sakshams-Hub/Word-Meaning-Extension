// document.getElementById("searchBtn").addEventListener("click", () => {
//   const word = document.getElementById("wordInput").value.trim();
//   const meaningEl = document.getElementById("meaning");
//   const phoneticEl = document.getElementById("phonetic");
//   const exampleEl = document.getElementById("example");

//   meaningEl.textContent = "";
//   phoneticEl.textContent = "";
//   exampleEl.textContent = "";

//   if (!word) {
//     meaningEl.textContent = "Please enter a word.";
//     return;
//   }

//   meaningEl.textContent = "Loading...";

//   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Word not found");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const meaning = data[0].meanings[0].definitions[0].definition;
//       const phonetic = data[0].phonetic || "";
//       const example = data[0].meanings[0].definitions[0].example || "";

//       meaningEl.textContent = `Meaning: ${meaning}`;
//       phoneticEl.textContent = phonetic ? `Phonetic: ${phonetic}` : "";
//       exampleEl.textContent = example ? `Example: "${example}"` : "";
//     })
//     .catch((err) => {
//       meaningEl.textContent = "Word not found or error fetching data.";
//     });
// });

document.getElementById("searchBtn").addEventListener("click", () => {
  const wordInput = document.getElementById("wordInput").value.trim();
  const wordDisplay = document.getElementById("word");
  const meaningEl = document.getElementById("meaning");
  const phoneticEl = document.getElementById("phonetic");
  const exampleEl = document.getElementById("example");

  meaningEl.textContent = "";
  phoneticEl.textContent = "";
  exampleEl.textContent = "";

  if (!wordInput) {
    wordDisplay.textContent = "Please enter a word.";
    return;
  }

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Word not found");
      }
      return response.json();
    })
    .then((data) => {
      const meaning = data[0].meanings[0].definitions[0].definition;
      const phonetic = data[0].phonetic || "";
      const example = data[0].meanings[0].definitions[0].example || "";

      wordDisplay.textContent =
        wordInput.charAt(0).toUpperCase() + wordInput.slice(1);
      meaningEl.textContent = `Meaning: ${meaning}`;
      phoneticEl.textContent = phonetic ? `Phonetic: ${phonetic}` : "";
      exampleEl.textContent = example ? `Example: "${example}"` : "";
    })
    .catch((err) => {
      meaningEl.textContent = "Word not found or error fetching data.";
    });
});

document.getElementById("closeBtn").addEventListener("click", () => {
  window.close();
});
