const db = require("../util/database");

const Cart = require("./cart.js");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products(title, price, imageUrl, description) VALUES(?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    // getProductsFromFile((products) => {
    //   const product = products.find((prod) => prod.id === id);
    //   const updatedProducts = products.filter((prod) => prod.id !== id);
    //   fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
    //     if (!err) {
    //       Cart.deleteProduct(id, product.price);
    //     }
    //   });
    // });
  }

  static fetchAll(cb) {
    return db.execute("SELECT * FROM products");
  }

  static findById(id, cb) {
    // getProductsFromFile((products) => {
    //   // console.log(typeof id);
    //   // console.log(products);
    //   const product = products.find((prod) => prod.id === id);
    //   // console.log(product);
    //   cb(product);
    // });
  }
};
