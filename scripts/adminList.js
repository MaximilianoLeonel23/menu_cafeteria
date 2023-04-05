import { products } from "./products.js";
const adminProductList = document.getElementById("adminProductList");

export const listProducts = () => {
  for (let i = 0; i < products.length; i++) {
    while (adminProductList[i].firstChild) {
      adminProductList[i].removeChild(adminProductList[i].firstChild);
    }
  }
  products.map((el) => {
    const listItem = createListItem(el);
    adminProductList.appendChild(listItem);
  });
};

const createListItem = (item) => {
  const newListItem = document.createElement("li");
  newListItem.classList.add("dropdown-item");
  newListItem.textContent = item.title;
  return newListItem;
};

listProducts();
