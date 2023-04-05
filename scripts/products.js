import MenuItem from "./MenuItem.js";

// Weekly
const avocado = new MenuItem(
  "Avocado",
  "Tostada con crema de palta, queso blanco, tomates cherrys y huevo poché",
  "2500",
  true,
  true,
  "weekly"
);
const huevosRevueltos = new MenuItem(
  "Huevos Revueltos",
  "Con panceta ahumada o jamón natural L'Abratto.",
  "2000",
  false,
  true,
  "weekly"
);
const medialunas = new MenuItem(
  "Medialuna con Jamón y Queso",
  "Medialuna tibia con jamón natural L´abratto y queso muzzarella gratinado.",
  "2000",
  true,
  false,
  "weekly"
);
// Coffee

const cafe = new MenuItem(
  "Café / Café cortado",
  "",
  "400",
  "false",
  "false",
  "coffee"
);

const cafeDoble = new MenuItem("Café doble", "", "450", false, false, "coffee");
const capuccino = new MenuItem("Capuccino", "", "500", false, false, "coffee");
const cafeLeche = new MenuItem(
  "Café con leche",
  "",
  "420",
  false,
  false,
  "coffee"
);
// Specials
const oreoLatte = new MenuItem(
  "Oreo Latte",
  "Café espresso, leche, helado de crema americana granizada, charlotte de chocolate semiamargo, crema chantilly y Cookie",
  "2000",
  false,
  false,
  "specials"
);

const americaNutella = new MenuItem(
  "American Nutella",
  "Café espresso, leche, salsa , helado de dulce de leche, charlotte  de chocolate semiamargo, crema chantilly y american cookies",
  "800",
  false,
  false,
  "specials"
);

const caramelMacchiato = new MenuItem(
  "Caramel Macchiato",
  "Café espresso, leche, syrup de vainilla, salsa caramelo y crema chantilly",
  "850",
  false,
  false,
  "specials"
);

// Veggie
const ensaladaFrutas = new MenuItem(
  "Ensalada de frutas",
  "Selección de frescas y variadas frutas de estación maceradas en su jugo.",
  "1000",
  true,
  false,
  "veggie"
);

// Breakfast
const tradicional = new MenuItem(
  "Tradicional",
  "Café con leche o té + 2 medialsunas o tostadas, manteca y mermelada. Jugo de naranja.",
  "2000",
  false,
  false,
  "breakfast"
);

// Brunch

const smoothie = new MenuItem(
  "Smoothie de fresa, aguacate y fresa",
  "Smoothie de aguacate, frutillas, yogur natural, queso crema, miel y leche",
  "1500",
  false,
  false,
  "brunch"
);
// Cakes

const cheesecake = new MenuItem(
  "American Cheesecake",
  "Cheesecake estilo americano con crema batida y salsa de frutos rojos. Opción: con salsa de maracuyá.",
  "2100",
  false,
  false,
  "cakes"
);

// Drinks
const gaseosa = new MenuItem(
  "Gaseosas",
  "Cola Cola, Coca Cola sin azúcar, Sprite sin azúcar, Fanta sin azúcar, Schweppes Pomelo y Schweppes Tónica",
  "500",
  false,
  false,
  "drinks"
);

export const products = [
  avocado,
  huevosRevueltos,
  medialunas,
  oreoLatte,
  americaNutella,
  caramelMacchiato,
  tradicional,
  ensaladaFrutas,
  cafe,
  cafeDoble,
  capuccino,
  cafeLeche,
  cheesecake,
  smoothie,
  gaseosa,
];
