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
  selectedProduct = {};
  cart = [];
  constructor() {
    this.newProducts = [
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        25000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "new",
        ["image2.jpg"],
        "description",
        22000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        24000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "new",
        ["image2.jpg"],
        "description",
        23000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        22000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "new",
        ["image2.jpg"],
        "description",
        21000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        23000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "new",
        ["image2.jpg"],
        "description",
        25000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        26000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "new",
        ["image2.jpg"],
        "description",
        27000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        27000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "new",
        ["image2.jpg"],
        "description",
        26000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "new",
        ["image1.jpg"],
        "description",
        25000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "star",
        ["image2.jpg"],
        "description",
        24000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "star",
        ["image1.jpg"],
        "description",
        23000,
        "piggy.png"
      ),
      new Product(
        "calavera gris",
        "nestarw",
        "image2.jpg",
        "description",
        22000,
        "piggy.png"
      ),
      new Product(
        "calavera negra",
        "star",
        "image1.jpg",
        "description",
        23000,
        "piggy.png"
      )
    ];
  }
  changeSelected = function(product) {
    this.selectedProduct = product;
  };
  addToCart = function(product) {
    this.cart.push(product);
    console.log(this.cart);
  };
  terminarCompra = function() {
    console.log("terminando compra");
  };
  ngOnInit() {}
}
