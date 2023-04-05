import { products } from "./products.js";

const weeklyItemsList = document.getElementById("weeklyItemsList");
const coffeeItemsList = document.getElementById("coffeeItemsList");
const specialsItemsList = document.getElementById("specialsItemsList");
const drinksItemsList = document.getElementById("drinksItemsList");
const breakfastItemsList = document.getElementById("breakfastItemsList");
const cakesItemsList = document.getElementById("cakesItemsList");
const veggieItemsList = document.getElementById("veggieItemsList");
const brunchItemsList = document.getElementById("brunchItemsList");

export const sections = [
  weeklyItemsList,
  coffeeItemsList,
  specialsItemsList,
  drinksItemsList,
  breakfastItemsList,
  cakesItemsList,
  veggieItemsList,
  brunchItemsList,
];

export const categories = [
  "weekly",
  "coffee",
  "specials",
  "drinks",
  "breakfast",
  "cakes",
  "veggie",
  "brunch",
];

const createItemTag = (item) => {
  let itemTag = `
        
             <div class="row">
                <div class="col-9">
                    <div class="d-flex align-items-center gap-3">
                        <h5 class="fs-6 title_background">${item.title}</h5>
                        ${
                          item.veggie == true
                            ? `<img  src="img/vegan.png" alt="vegan"/>`
                            : ""
                        }
                        ${
                          item.celiac == true
                            ? `<img  src="img/sin-gluten.png" alt="celiac"/>`
                            : ""
                        }
                       
                    </div>
                    
                    ${
                      item.description
                        ? `<p class="fst-italic fs-6">${item.description}</p>`
                        : ""
                    }
                    
                </div>
                <div class="col-3 fs-6">
                    <p>$ ${item.price}</p>
                </div>
            </div>
        
    `;
  return itemTag;
};

export const createElement = (item) => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("container-fluid");
  newArticle.innerHTML = createItemTag(item);
  return newArticle;
};

export function renderProducts() {
  for (let i = 0; i < sections.length; i++) {
    while (sections[i].firstChild) {
      sections[i].removeChild(sections[i].firstChild);
    }
  }

  for (let i = 0; i < sections.length; i++) {
    const currProduct = products.filter(
      (product) => product.category == categories[i]
    );
    for (let p of currProduct) {
      sections[i]?.appendChild(createElement(p));
    }
  }
}

renderProducts();
// for (let i = 0; i < sections.length; i++) {
//   const currProduct = products.filter(
//     (product) => product.category == categories[i]
//   );
//   for (let p of currProduct) {
//     sections[i]?.appendChild(createElement(p));
//   }
// }
