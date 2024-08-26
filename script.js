const cardsAttribute = [
  {
    id: 1,
    img: "./images/icon-online.svg",
    Title: "Online Banking",
    description:
      "Manage your finances anytime, anywhere with secure and convenient online banking services.",
  },
  {
    id: 2,
    img: "./images/icon-budgeting.svg",
    Title: "Simple Budgeting",
    description:
      "Effortlessly track your expenses and plan your budget with easy-to-use tools designed for financial clarity.",
  },
  {
    id: 3,
    img: "./images/icon-onboarding.svg",
    Title: "Fast Onboarding",
    description:
      "Get started quickly with our streamlined onboarding process, making it simple to access our banking services.",
  },
  {
    id: 4,
    img: "./images/icon-api.svg",
    Title: "Open API",
    description:
      "Integrate seamlessly with our open API, allowing developers to build innovative financial solutions tailored to your needs.",
  },
];

function createCard(card) {
  return `
        <div class="card">
          <img src="${card.img}" alt="${card.Title}">
          <h2>${card.Title}</h2>
          <p>${card.description}</p>
        </div>
    `;
}

function loadCards() {
  const container = document.querySelector(".cards-container");
  container.innerHTML = cardsAttribute.map(createCard).join("");
}

document.addEventListener("DOMContentLoaded", loadCards);

// article script
const artCard = [
  {
    id: 1,
    imgs: "./images/image-currency.jpg",
    short: "By Claire Ribinson",
    heading: "Receive money in any currency with no fees",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur obcaecati!",
  },
  {
    id: 2,
    imgs: "./images/image-restaurant.jpg",
    short: "By Wilson Hutton",
    heading: "Treat yourself without worrying about money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur obcaecati!",
  },
  {
    id: 3,
    imgs: "./images/image-plane.jpg",
    short: "By Wilson Hutton",
    heading: "Take your Easybank card wherever yo go",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur obcaecati!",
  },
  {
    id: 4,
    imgs: "./images/image-confetti.jpg",
    short: "By Claire Ribinson",
    heading: "our invite-only Beta accounts are now live!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consectetur obcaecati!",
  },
];

function artcards(cartart) {
  return `
          <div class="cartart">
            <div class="artimg">
              <img src="${cartart.imgs}" alt="${cartart.heading}" />
              </div>
            <div class="artcontent">
              <h6>"${cartart.short}"</h6>
              <h4>"${cartart.heading}"</h4>
              <p>
                "${cartart.description}"
              </p>
            </div>
          </div>
      `;
}

function artload() {
  const container = document.querySelector(".article-container");
  container.innerHTML = artCard.map(artcards).join("");
}

document.addEventListener("DOMContentLoaded", artload);
