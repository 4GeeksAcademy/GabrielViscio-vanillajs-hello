import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const originalPronoun = ["the", "our"];
  const originalAdj = ["great", "big"];
  const originalNoun = ["jogger", "racoon"];

  let pronoun = [...originalPronoun];
  let adj = [...originalAdj];
  let noun = [...originalNoun];
  let extensions = [".com", ".net", ".us", ".io"];

  function createDomains(pronoun, adj, noun, extension) {
    const domains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          let domain = pronoun[i] + adj[j] + noun[k] + extension;
          domains.push(domain);
        }
      }
    }
    return domains;
  }

  function displayDomains(domains, elementId) {
    const domainList = document.getElementById(elementId);
    domainList.innerHTML = ""; // Clear previous domains
    for (let i = 0; i < domains.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = domains[i];
      domainList.appendChild(listItem);
    }
  }

  function updateAndDisplayDomains() {
    for (let i = 0; i < extensions.length; i++) {
      let extension = extensions[i];
      const domains = createDomains(pronoun, adj, noun, extension);
      displayDomains(domains, `domain-list-${extension.substring(1)}`);
    }
  }

  // Initial display of domains
  updateAndDisplayDomains();

  // Handle form submission
  document
    .getElementById("add-word-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      const wordType = document.getElementById("word-type").value;
      const newWord = document.getElementById("new-word").value.trim();

      if (newWord) {
        if (wordType === "pronoun") {
          pronoun.push(newWord);
        } else if (wordType === "adj") {
          adj.push(newWord);
        } else if (wordType === "noun") {
          noun.push(newWord);
        }

        // Clear the input field
        document.getElementById("new-word").value = "";

        // Update and display the new list of domains
        updateAndDisplayDomains();
      }
    });

  // Handle reset button click
  document.getElementById("reset-arrays").addEventListener("click", function() {
    pronoun = [...originalPronoun];
    adj = [...originalAdj];
    noun = [...originalNoun];

    // Update and display the reset list of domains
    updateAndDisplayDomains();
  });
};
