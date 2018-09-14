import { Component, OnInit } from "@angular/core";
import { Product } from "../../classes/product";
import { $ } from "protractor";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  newProducts = [];
  total: number;
  selectedProduct = {};
  cart = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.newProducts.push(
        new Product(
          "calavera negra",
          "new",
          ["image1.jpg"],
          "description",
          25000,
          "piggy.png"
        )
      );
    }
  }
  changeSelected = function(product) {
    this.selectedProduct = product;
  };
  addToCart = function(product) {
    this.cart.push(product);
    this.total = this.total + product.price;
    console.log(this.cart);
  };
  terminarCompra = function() {
    console.log("terminando compra");
  };
  ngOnInit() {}
}
