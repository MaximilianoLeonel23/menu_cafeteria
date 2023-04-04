import MenuItem from "./MenuItem.js";

const weeklyItemsList = document.getElementById("weeklyItemsList");
const coffeeItemsList = document.getElementById("coffeeItemsList");
const specialsItemsList = document.getElementById("specialsItemsList");
const drinksItemsList = document.getElementById("drinksItemsList");
const breakfastItemsList = document.getElementById("breakfastItemsList");
const cakesItemsList = document.getElementById("cakesItemsList");
const veggieItemsList = document.getElementById("veggieItemsList");
const brunchItemsList = document.getElementById("brunchItemsList");

const sections = [
  weeklyItemsList,
  coffeeItemsList,
  specialsItemsList,
  drinksItemsList,
  breakfastItemsList,
  cakesItemsList,
  veggieItemsList,
  brunchItemsList,
];

const categories = [
  "weekly",
  "coffee",
  "specials",
  "drinks",
  "breakfast",
  "cakes",
  "veggie",
  "brunch",
];

const avocado = new MenuItem(
  "Avocado",
  "Tostada con crema de palta, queso blanco, tomates cherrys y huevo poché",
  "2500",
  "true",
  "false",
  "weekly"
);
const huevosRevueltos = new MenuItem(
  "Huevos Revueltos",
  "Con panceta ahumada o jamón natural L'Abratto.",
  "2000",
  "true",
  "false",
  "weekly"
);
const medialunas = new MenuItem(
  "Medialuna con Jamón y Queso",
  "Medialuna tibia con jamón natural L´abratto y queso muzzarella gratinado.",
  "2000",
  "true",
  "false",
  "weekly"
);

const oreoLatte = new MenuItem(
  "Oreo Latte",
  "Café espresso, leche, helado de crema americana granizada, charlotte de chocolate semiamargo, crema chantilly y Cookie",
  "2000",
  "true",
  "false",
  "specials"
);

const ensaladaFrutas = new MenuItem(
  "Ensalada de frutas",
  "Selección de frescas y variadas frutas de estación maceradas en su jugo.",
  "1000",
  "true",
  "false",
  "veggie"
);
const tradicional = new MenuItem(
  "Tradicional",
  "Café con leche o té + 2 medialsunas o tostadas, manteca y mermelada. Jugo de naranja.",
  "2000",
  "true",
  "false",
  "breakfast"
);

const products = [
  avocado,
  huevosRevueltos,
  medialunas,
  oreoLatte,
  tradicional,
  ensaladaFrutas,
];
const createItemTag = (item) => {
  let itemTag = `
        <article class="container-fluid">
             <div class="row">
                <div class="col-9">
                    <div class="d-flex align-items-start">
                        <h5 class="fs-6">${item.title}</h5>
                        ${item.veggie ? "<p>V</p>" : ""}
                        ${item.celiac ? "<p>C</p>" : ""}
                       
                    </div>
                    <p class="fst-italic fs-6">
                       ${item.description}
                    </p>
                </div>
                <div class="col-3 fs-6">
                    <p>$ ${item.price}</p>
                </div>
            </div>
        </article>
    `;
  return itemTag;
};

const createElement = (item) => {
  const newArticle = document.createElement("article");
  newArticle.classList.add("container-fluid");
  newArticle.innerHTML = createItemTag(item);
  return newArticle;
};

for (let i = 0; i < sections.length; i++) {
  const currProduct = products.filter(
    (product) => product.category == categories[i]
  );
  for (let p of currProduct) {
    sections[i]?.appendChild(createElement(p));
  }
  //   sections[i]?.appendChild(createElement(huevosRevueltos));
  //   sections[i]?.appendChild(createElement(huevosRevueltos));
}

// const filterProduct = (product) => {
//   return product.category == "weekly";
// };

const productsFiltered = products.filter(
  (product) => product.category == "weekly"
);
console.log(productsFiltered);
// console.log(products[0].category);

// function esSuficientementeGrande(elemento) {
//     return elemento >= 10;
//   }
//   var filtrados = [12, 5, 8, 130, 44].filter(esSuficientementeGrande);
//   // filtrados es [12, 130, 44]
