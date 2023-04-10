import { products } from "./products.js";
import MenuItem from "./MenuItem.js";
import { renderProducts } from "./scripting.js";
import { listProducts } from "./adminList.js";
import { setLocalStorage } from "./getProducts.js";

const addProduct = document.getElementById("addProduct");

addProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  const price = e.target.price.value;
  const veggie = e.target.veggie.checked;
  const celiac = e.target.celiac.checked;
  const category = e.target.category.value;

  const newProduct = new MenuItem(
    title,
    description,
    price,
    veggie,
    celiac,
    category
  );

  pushProduct(newProduct);
  renderProducts();
  listProducts();
  setLocalStorage("productos", products);
});

const pushProduct = (product) => {
  products.push(product);
};
