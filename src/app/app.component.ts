import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'garabato regalos';
  skulls = [
    {
      text: 'calavera hugo',
      category: 'new',
      image: './assets/img/image1.jpg',
      description:
        'Calavera en ceramica pintada a mano con pinturas acrlicas, todas als calaveras son unicas, ',
      price: '25.000'
    },
    {
      text: 'calavera hugo',
      category: 'new',
      image: './assets/img/image2.jpg',
      description:
        'Calavera en ceramica pintada a mano con pinturas acrlicas, todas als calaveras son unicas, ',
      price: '25.000'
    }
  ];

  //const skulls = this;

  /*skulls.cart = [];
  skulls.selectedSkull = { text: 'calavera negra', done: true, image: './img/image1.jpg' };


  skulls.changeSelected = function (product) {
      skulls.selectedSkull = product;
  };
  skulls.addToCart = function () {

      skulls.cart.push(skulls.selectedSkull);

  };
  skulls.cantidadPorProducto = function (product) {
      console.log(skulls.cart.length)
      return skulls.cart.length;
  };
  skulls.finishPurchase = function () {
      $('#modalCompras').modal('show');
  };
  skulls.finalPurchase = function () {
      console.log('final purchase');

  };

  */
}
