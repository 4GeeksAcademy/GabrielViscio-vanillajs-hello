/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  function createDomains(pronoun, adj, noun, extension) {
    const domains = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          domains.push(pronoun[i] + adj[j] + noun[k] + extension);
        }
      }
    }
    return domains;
  }

  function displayDomains(domains, elementId) {
    const domainList = document.getElementById(elementId);
    domains.forEach(domain => {
      const listItem = document.createElement("li");
      listItem.textContent = domain;
      domainList.appendChild(listItem);
    });
  }

  extensions.forEach(extension => {
    const domains = createDomains(pronoun, adj, noun, extension);
    displayDomains(domains, `domain-list-${extension.substring(1)}`);
  });
};
