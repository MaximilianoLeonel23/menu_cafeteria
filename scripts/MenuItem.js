class MenuItem {
  constructor(title, description, price, veggie, celiac, category) {
    (this._title = title),
      (this._description = description),
      (this._price = price),
      (this._veggie = veggie),
      (this._celiac = celiac),
      (this._category = category);
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    this._title = newTitle;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get veggie() {
    return this._veggie;
  }

  set veggie(newVeggie) {
    this._veggie = newVeggie;
  }

  get celiac() {
    return this._celiac;
  }

  set celiac(newCeliac) {
    this._celiac = newCeliac;
  }

  get category() {
    return this._category;
  }

  set category(newCategory) {
    this._category = newCategory;
  }
}

export default MenuItem;
