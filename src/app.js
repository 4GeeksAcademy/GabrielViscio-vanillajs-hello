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

  // Función para crear combinaciones de dominios
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

  // Función para mostrar los dominios en el HTML
  function displayDomains(domains, elementId) {
    const domainList = document.getElementById(elementId);
    for (let i = 0; i < domains.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = domains[i];
      domainList.appendChild(listItem);
    }
  }

  let extension = ".com";
  let domains = createDomains(pronoun, adj, noun, extension);
  displayDomains(domains, "domain-list-com");

  extension = ".net";
  domains = createDomains(pronoun, adj, noun, extension);
  displayDomains(domains, "domain-list-net");

  extension = ".us";
  domains = createDomains(pronoun, adj, noun, extension);
  displayDomains(domains, "domain-list-us");

  extension = ".io";
  domains = createDomains(pronoun, adj, noun, extension);
  displayDomains(domains, "domain-list-io");
};
