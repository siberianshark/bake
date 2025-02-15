import { bakeCardsGrid, bakeCardTemplate } from "../main.js";
import bake from "../data/bake.js"

const renderBakeCards = () => {
  // Render a card for each park in the `bake` array:
  bake.forEach((bake) => {
    // Get a copy of the HTML document fragment inside the `template` tag:
    const cardDocumentFragment = bakeCardTemplate.content.cloneNode(true);
    // Get the `parks__card` element from the HTML document fragment:
    const card = cardDocumentFragment.querySelector(".bake__card");
    // Modify the content of the template card:
    card.querySelector(".bake__card-image").setAttribute("src", bake.imageSource);
    card.querySelector(".bake__card-image").setAttribute("alt", bake.altText);
    card.querySelector(".bake__card-title").textContent = bake.title;
    card.querySelector(".bake__card-info-city").textContent = `${bake.city}, ${bake.country}`;
    card.querySelector(".bake__card-info-area").innerHTML = `${bake.area} m<sup>2</sup>`;
    card.querySelector(".bake__card-info-description").innerHTML = `<b>Opis: </b>${bake.description}`;
    card.querySelector(".bake__card-link").setAttribute("href", bake.linkURL);
    // Append card to the container:
    bakeCardsGrid.appendChild(card);
  });
}

export default renderBakeCards;