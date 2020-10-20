import hats1 from '../images/hats1.png';
import hats2 from '../images/hats2.png';
import hats3 from '../images/hats3.png';

let product1 = {
  id: 1,
  picture: hats1,
  alt: "Hattu 1",
  desc: "Tredun logo tyylikkäässä hatussa",
  amount: 0,
  price: 10.90,
  total: 0
};

let product2 = {
  id: 2,
  picture: hats2,
  alt: "Hattu 2",
  desc: "Tredun logo muodikkaassa hatussa",
  amount: 0,
  price: 8.95,
  total: 0
};

let product3 = {
  id: 3,
  picture: hats3,
  alt: "Hattu 3",
  desc: "Tredun logo modernissa hatussa",
  amount: 0,
  price: 14.45,
  total: 0
};

let products = [product1, product2, product3];

export default products;