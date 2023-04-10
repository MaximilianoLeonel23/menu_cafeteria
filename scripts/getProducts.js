// En esta función se almacena el array de productos en el local

export let setLocalStorage = (name, arr) => {
  let arrJSON = JSON.stringify(arr);
  // Antes de almacenarlos los pasa a formato JSON
  localStorage.setItem(name, arrJSON);
};

// En esta función se obtiene del local los productos

export let getLocalStorage = (name) => {
  let arrJSON = localStorage.getItem(name);

  if (!arrJSON) {
    return [];
  }
  // Antes de devolverlos los pasa a array como objetos
  return JSON.parse(arrJSON);
};
