import { products } from "./products.js";
import { renderProducts } from "./scripting.js";

const adminProductList = document.getElementById("adminProductList");

// Función para listar elementos en el menú aside
export const listProducts = () => {
  // Si hay un elemento en la lista lo borra en un ciclo
  while (adminProductList.firstChild) {
    adminProductList.removeChild(adminProductList.firstChild);
  }

  // Función que crea un li y lo agrega a la lista
  products.map((el, i) => {
    const listItem = createListItem(el, i);
    adminProductList.appendChild(listItem);
  });
};

const createListItem = (item, i) => {
  const newListItem = document.createElement("li");

  const listItemId = `listItem-${i}`;
  newListItem.setAttribute("id", listItemId);

  newListItem.classList.add("dropdown-item");
  newListItem.classList.add("d-flex");
  newListItem.classList.add("align-items-start");
  newListItem.classList.add("justify-content-between");
  const text = document.createElement("p");
  const cross = document.createElement("img");
  text.textContent = item.title;
  cross.src = "img/icons/trash.svg";
  cross.classList.add("delete-item");
  newListItem.appendChild(text);
  newListItem.appendChild(cross);
  return newListItem;
};

listProducts();

// Función para borrar elementos
adminProductList.addEventListener("click", (e) => {
  e.preventDefault();
  let target = e.target;

  if (target.classList.contains("delete-item")) {
    console.log(target);
    let parent = target.parentNode;
    let parentIndex = parent.id.match(/-(\d+)/)[1];
    console.log(parentIndex);
    products.splice(parentIndex, 1);
    parent.remove();
  } else {
    return;
  }
  renderProducts();
  listProducts();
});
