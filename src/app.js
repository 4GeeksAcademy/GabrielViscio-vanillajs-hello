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
  let hacks = ["es", "it", "co"];

  function generateDomains(pronoun, adj, noun, extensions, hacks) {
    let domains = [];

    // Generate standard domains
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensions) {
            domains.push(`${p}${a}${n}${ext}`);
          }
        }
      }
    }

    // Generate domain hacks
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let hack of hacks) {
            let hackDomain = `${p}${a}${n}`;
            if (hackDomain.endsWith(hack)) {
              domains.push(`${hackDomain.slice(0, -hack.length)}.${hack}`);
            }
          }
        }
      }
    }

    return domains;
  }

  function displayDomains(domains) {
    let domainList = document.getElementById("domainList");
    domainList.innerHTML = "";
    domains.forEach(domain => {
      let p = document.createElement("p");
      p.textContent = domain;
      domainList.appendChild(p);
    });
  }

  let domains = generateDomains(pronoun, adj, noun, extensions, hacks);
  displayDomains(domains);

  console.log("Hello Rigo from the console!");
};
