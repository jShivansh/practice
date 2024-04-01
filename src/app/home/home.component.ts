import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  @Input() message: string;
  constructor() {
    console.log("Hi, Constructor");
   }

   signupUser: any[] = [];

  ngOnInit(): void {
    console.log('Hi, onInit');
    const localData = localStorage.getItem('signupUser');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }
  }

  ngOnChanges(change: SimpleChanges): void {
    console.log('Hi, onChange');
    console.log(change);
  }

  foodItems = [
    {
      "id": 1,
      "name": "Pizza",
      "description": "A classic Italian dish consisting of a round, flat base of dough topped with tomato sauce, cheese, and various toppings such as meats, vegetables, and herbs.",
      "price": 499,
      "rating": 4.5,
      "preference": "Non-Veg",
      "image": "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png",
      "inStock": true
    },
    {
      "id": 2,
      "name": "Burger",
      "description": "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
      "price": 99,
      "rating": 4.2,
      "preference": "Non-Veg",
      "image": "https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png",
      "inStock": false
    },
    {
      "id": 3,
      "name": "Pasta",
      "description": "A type of Italian dish typically made from durum wheat semolina mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking.",
      "price": 299,
      "rating": 4.4,
      "preference": "Veg",
      "image": "https://img.freepik.com/free-photo/gourmet-italian-bolognese-pasta-with-fresh-parmesan-generated-by-ai_188544-9453.jpg",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png",
      "inStock": true
    },
    {
      "id": 4,
      "name": "Pav Bhaji",
      "description": "A popular Indian street food consisting of a thick vegetable curry, served with a soft bread roll known as pav, typically enjoyed with butter and chopped onions.",
      "price": 199,
      "rating": 4.8,
      "preference": "Veg",
      "image": "https://th.bing.com/th/id/OIG3.gN55KDbb9.gYKNRODCBz?pid=ImgGn",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png",
      "inStock": false
    },
    {
      "id": 5,
      "name": "Tacos",
      "description": "A traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling, typically made with seasoned meat, vegetables, and salsa.",
      "price": 149,
      "rating": 4.3,
      "preference": "Non-Veg",
      "image": "https://th.bing.com/th/id/OIG1.bIRiuMhVZ0oGUYMLQMRE?w=1024&h=1024&rs=1&pid=ImgDetMain",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png",
      "inStock": true
    },
    {
      "id": 6,
      "name": "Ice Cream",
      "description": "A frozen dessert made from dairy products, such as milk and cream, combined with flavors, sweeteners, and sometimes fruits or other ingredients.",
      "price": 99,
      "rating": 4.1,
      "preference": "Veg",
      "image": "https://cdn.pixabay.com/photo/2023/06/24/16/17/ai-generated-8085574_1280.jpg",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png",
      "inStock": true
    },
    {
      "id": 7,
      "name": "Sandwich",
      "description": "A popular dish made by placing a filling, such as vegetables, cheese, or meat, between slices of bread.",
      "price": 399,
      "rating": 4.6,
      "preference": "Veg",
      "image": "https://th.bing.com/th/id/OIG4.MKjZ36R2ed6pLix9jh5v?w=1024&h=1024&rs=1&pid=ImgDetMain",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png",
      "inStock": true
    },
    {
      "id": 8,
      "name": "Fried Rice",
      "description": "A Chinese dish consisting of steamed rice stir-fried in a wok, often mixed with vegetables",
      "price": 199,
      "rating": 4.3,
      "preference": "Veg",
      "image": "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png",
      "inStock": true
    },
    {
      "id": 9,
      "name": "Sushi",
      "description": "A traditional Japanese dish consisting of vinegared rice combined with various ingredients, such as seafood, vegetables, and occasionally tropical fruits.",
      "price": 349,
      "rating": 4.7,
      "preference": "Non-Veg",
      "image": "https://th.bing.com/th/id/OIG4.CkLZubNS4gAfLVgIAUea?w=1024&h=1024&rs=1&pid=ImgDetMain",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png",
      "inStock": false
    },
    {
      "id": 10,
      "name": "Salad",
      "description": "A dish consisting of mixed vegetables, fruits, and other ingredients, typically served cold and dressed with oil, vinegar, or other sauces.",
      "price": 149,
      "rating": 4.4,
      "preference": "Veg",
      "image": "https://www.recipetineats.com/wp-content/uploads/2021/08/Garden-Salad_47-SQ.jpg",
      "vegNonveg": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png",
      "inStock": true
    }
  ]
  

}
