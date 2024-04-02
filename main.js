(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shiva\Documents\Coding\Practice\Trial\src\main.ts */"zUnb");


/***/ }),

/***/ "163E":
/*!*******************************!*\
  !*** ./src/app/Model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, gender, subType, userStatus) {
        this.name = name;
        this.gender = gender;
        this.subType = subType;
        this.userStatus = userStatus;
    }
}


/***/ }),

/***/ "2WT3":
/*!*******************************************!*\
  !*** ./src/app/Services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _Model_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/User */ "163E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminService {
    constructor() {
        this.users = [
            new _Model_User__WEBPACK_IMPORTED_MODULE_0__["User"]('Shivansh', 'male', 'yearly', 'active'),
            new _Model_User__WEBPACK_IMPORTED_MODULE_0__["User"]('Aman', 'male', 'quaterly', 'inactive'),
            new _Model_User__WEBPACK_IMPORTED_MODULE_0__["User"]('Ankita', 'female', 'monthly', 'active'),
        ];
    }
    getAllUser() {
        return this.users;
    }
    createUser(name, gender, subType, userStatus) {
        let user = new _Model_User__WEBPACK_IMPORTED_MODULE_0__["User"](name, gender, subType, userStatus);
        this.users.push(user);
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Custom_Directives_setBackground_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Custom Directives/setBackground.directive */ "M/nn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Custom_Directives_disable_prod_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Custom Directives/disable-prod.directive */ "k/ol");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





function HomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r2.userName, "\n");
} }
function HomeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Rating: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Available: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "More Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableProd", !item_r3.inStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, item_r3.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disableProd", !item_r3.inStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 10, item_r3.price, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.inStock ? "Yes" : "No");
} }
class HomeComponent {
    constructor() {
        this.signupUser = [];
        this.foodItems = [
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
        ];
        console.log("Hi, Constructor");
    }
    ngOnInit() {
        console.log('Hi, onInit');
        const localData = localStorage.getItem('signupUser');
        if (localData != null) {
            this.signupUser = JSON.parse(localData);
        }
    }
    ngOnChanges(change) {
        console.log('Hi, onChange');
        console.log(change);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], inputs: { message: "message" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 7, consts: [["setBackground", "", 3, "backColor", "textColor"], [4, "ngFor", "ngForOf"], [1, "cards"], ["class", "item-card", 3, "disableProd", 4, "ngFor", "ngForOf"], [1, "item-card", 3, "disableProd"], [3, "src", "alt"], [1, "cardContent"], [1, "priceRating", 3, "disableProd"], ["id", "price"], ["id", "rating"], ["id", "inStock"], [1, "card-button"], ["mat-raised-button", "", "color", "warn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "From Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 24, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backColor", "#36363b")("textColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Message: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.message), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.signupUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foodItems);
    } }, directives: [_Custom_Directives_setBackground_directive__WEBPACK_IMPORTED_MODULE_1__["setBackground"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _Custom_Directives_disable_prod_directive__WEBPACK_IMPORTED_MODULE_3__["DisableProdDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%] {\r\n    margin: 2em;\r\n    \r\n    border-radius: 10%;\r\n    \r\n        \r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 4px 8px 0 #f8b3a7, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 25em;\r\n    height: 15em;\r\n    \r\n    border-radius: 10%;\r\n}\r\n\r\n.cardContent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-left: 1em;\r\n}\r\n\r\n.cardContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin-left: 3em;\r\n    width: 100%;\r\n    font-weight: bold;\r\n    text-align: left;\r\n    \r\n}\r\n\r\n.priceRating[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#rating[_ngcontent-%COMP%] {\r\n    margin-right: 3em;\r\n}\r\n\r\n#price[_ngcontent-%COMP%] {\r\n    margin-left: 3em;\r\n}\r\n\r\n.item-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n.card-button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.disableCard[_ngcontent-%COMP%]{\r\n    background-color: #28282b;\r\n    opacity: 0.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGlFQUFpRTtBQUNyRTs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFJQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLWNhcmQge1xyXG4gICAgbWFyZ2luOiAyZW07XHJcbiAgICAvKiBwYWRkaW5nOiAwLjVlbTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gICAgICAgIFxyXG59XHJcblxyXG4uaXRlbS1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICNmOGIzYTcsIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uaXRlbS1jYXJkIGltZ3tcclxuICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgaGVpZ2h0OiAxNWVtO1xyXG4gICAgLyogbWFyZ2luOiAxZW07ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmRDb250ZW50IHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuLmNhcmRDb250ZW50IHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLml0ZW0tY2FyZCBoMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBcclxufVxyXG5cclxuLnByaWNlUmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNyYXRpbmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XHJcbn1cclxuXHJcbiNwcmljZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG59XHJcblxyXG4uaXRlbS1jYXJkIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxufVxyXG5cclxuLmNhcmQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmRpc2FibGVDYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyYjtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ETPP":
/*!************************************************!*\
  !*** ./src/app/practice/practice.component.ts ***!
  \************************************************/
/*! exports provided: PracticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeComponent", function() { return PracticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { appHighLight: a0, appContainer: true }; };
class PracticeComponent {
    constructor() { }
    ngOnInit() {
    }
}
PracticeComponent.ɵfac = function PracticeComponent_Factory(t) { return new (t || PracticeComponent)(); };
PracticeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PracticeComponent, selectors: [["app-practice"]], decls: 5, vars: 3, consts: [[3, "ngClass"]], template: function PracticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Custom classs & Style Directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In veniam sit porro odit quis omnis illo voluptatem expedita praesentium suscipit quam magni maxime unde nostrum earum beatae, repellendus, aspernatur dignissimos. Dicta illo quidem excepturi. Eligendi optio excepturi temporibus, distinctio quae ipsum porro numquam, est assumenda sed quod quidem eius labore placeat harum neque. Rem amet eveniet similique cumque doloribus iste. Odit perspiciatis assumenda dolores quas magni cupiditate modi esse voluptatem amet error, ab, nihil voluptatibus sunt distinctio quisquam corporis recusandae omnis, vel voluptatum non. Porro quas enim doloribus fuga minus. Illum dolorum, enim illo, fugit laboriosam cupiditate ea saepe numquam architecto quasi quisquam, excepturi aliquam maiores blanditiis eos. Soluta consequatur pariatur eum quam, ipsum voluptate tempore. Magnam commodi quidem at. Deleniti ab nesciunt veritatis magnam, dolore labore. Dignissimos doloremque natus tempore quam. Eos repellat iste id, repudiandae quasi culpa illo ducimus. Accusantium doloremque doloribus ullam facere debitis excepturi, iusto fugit? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, 10 > 7));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    margin: 20px 50px;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    color: #28282b;\r\n}\r\n\r\n.appContainer[_ngcontent-%COMP%]{\r\n    margin: 20px 50px;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.appHighLight[_ngcontent-%COMP%]{\r\n    border: #28282b 3px solid;\r\n    background-color: gold;\r\n}\r\n\r\n.appFont[_ngcontent-%COMP%]{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByYWN0aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsc0hBQXNIO0lBQ3RILGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNIQUFzSDtJQUN0SCxlQUFlO0FBQ25CIiwiZmlsZSI6InByYWN0aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMjgyODJiO1xyXG59XHJcblxyXG4uYXBwQ29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5hcHBIaWdoTGlnaHR7XHJcbiAgICBib3JkZXI6ICMyODI4MmIgM3B4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxufVxyXG5cclxuLmFwcEZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "M/nn":
/*!**************************************************************!*\
  !*** ./src/app/Custom Directives/setBackground.directive.ts ***!
  \**************************************************************/
/*! exports provided: setBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackground", function() { return setBackground; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class setBackground {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.backColor = '#36454f';
        this.textColor = 'white';
    }
    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = 'red';//using nativElement directly accessing DOM which is not recommended
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backColor); // When using renderer this will not directly accesssing DOM.
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
    }
}
setBackground.ɵfac = function setBackground_Factory(t) { return new (t || setBackground)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
setBackground.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: setBackground, selectors: [["", "setBackground", ""]], inputs: { backColor: "backColor", textColor: "textColor" } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Custom_Directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Custom Directives/highlight.directive */ "e087");
/* harmony import */ var _Custom_Directives_setBackground_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Custom Directives/setBackground.directive */ "M/nn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.inpulVal = '';
    }
    onBtnClick(inputEl) {
        this.inpulVal = inputEl.value;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [["appHighlight", ""], ["type", "text"], ["inputEl", ""], ["setBackground", "", 3, "click"], ["routerLink", "/login"], ["routerLink", "/home"], ["routerLink", "/practice"], ["routerLink", "/admin"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onBtnClick(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Practice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
    } }, directives: [_Custom_Directives_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"], _Custom_Directives_setBackground_directive__WEBPACK_IMPORTED_MODULE_2__["setBackground"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".highlight-product[_ngcontent-%COMP%]{\r\n    transform: scale(1.01);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodC1wcm9kdWN0e1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/admin.service */ "2WT3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function AdminComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r10.name);
} }
function AdminComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r11.gender);
} }
function AdminComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Subscription Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r12.subType);
} }
function AdminComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminComponent_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r13.userStatus);
} }
function AdminComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 26);
} }
function AdminComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 27);
} }
class AdminComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.userName = '';
        this.gender = '';
        this.subType = '';
        this.userStatus = '';
        // Table
        // Define columns to be displayed in the table
        this.displayedColumns = ['name', 'gender', 'subType', 'userStatus'];
    }
    ngOnInit() {
        this.users = this.adminService.getAllUser();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.users);
    }
    addUser() {
        this.adminService.createUser(this.userName, this.gender, this.subType, this.userStatus);
        this.userName = '';
        this.gender = '';
        this.subType = '';
        this.userStatus = '';
        this.users = this.adminService.getAllUser(); // Update the users array
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](this.users); // Reassign MatTableDataSource with updated users array
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 55, vars: 7, consts: [[1, "container"], [1, "component1"], [1, "form"], ["appearance", "outline"], ["matInput", "", "placeholder", "Placeholder", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "Male"], ["value", "Female"], ["value", "yearly"], ["value", "quaterly"], ["value", "monthly"], ["value", "active"], ["value", "inactive"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "component2"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "gender"], ["matColumnDef", "subType"], ["matColumnDef", "userStatus"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_mat_select_ngModelChange_12_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Subscription Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.subType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Quaterly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_mat_select_ngModelChange_31_listener($event) { return ctx.userStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_37_listener() { return ctx.addUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](41, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AdminComponent_th_42_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AdminComponent_td_43_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](44, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AdminComponent_th_45_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AdminComponent_td_46_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](47, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AdminComponent_th_48_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AdminComponent_td_49_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](50, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AdminComponent_th_51_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, AdminComponent_td_52_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, AdminComponent_tr_53_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AdminComponent_tr_54_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.subType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".container[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n    \r\n}\r\n\r\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #28282b;\r\n    font-weight: bolder;\r\n    text-align: left;\r\n    padding-left: 1em;\r\n}\r\n\r\n.component1[_ngcontent-%COMP%]{\r\n    background-color: darkgrey;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1em;\r\n    margin-top: 1em;\r\n}\r\n\r\n.component1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 0.5em 1em;\r\n}\r\n\r\n\r\n\r\n.mat-option[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1o7Ozs7NkJBSXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUEsMkNBQTJDOztBQUMzQztJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG59XHJcblxyXG4uY29udGFpbmVyIGgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzI4MjgyYjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5jb21wb25lbnQxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcbi5jb21wb25lbnQxIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxufVxyXG5cclxuLyogU2V0IGJhY2tncm91bmQgY29sb3Igb2Ygc2VsZWN0IG9wdGlvbnMgKi9cclxuLm1hdC1vcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Custom_Directives_setBackground_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Custom Directives/setBackground.directive */ "M/nn");
/* harmony import */ var _Custom_Directives_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Custom Directives/highlight.directive */ "e087");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _Custom_Directives_disable_prod_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Custom Directives/disable-prod.directive */ "k/ol");
/* harmony import */ var _practice_practice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./practice/practice.component */ "ETPP");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _Custom_Directives_setBackground_directive__WEBPACK_IMPORTED_MODULE_6__["setBackground"],
        _Custom_Directives_highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"],
        _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
        _Custom_Directives_disable_prod_directive__WEBPACK_IMPORTED_MODULE_9__["DisableProdDirective"],
        _practice_practice_component__WEBPACK_IMPORTED_MODULE_10__["PracticeComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"]] }); })();


/***/ }),

/***/ "e087":
/*!**********************************************************!*\
  !*** ./src/app/Custom Directives/highlight.directive.ts ***!
  \**********************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HighlightDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
    }
    onMouseEnter() {
        this.renderer.addClass(this.element.nativeElement, 'highlight-product');
    }
    onMouseOut() {
        this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]], hostBindings: function HighlightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseout", function HighlightDirective_mouseout_HostBindingHandler() { return ctx.onMouseOut(); });
    } } });


/***/ }),

/***/ "k/ol":
/*!*************************************************************!*\
  !*** ./src/app/Custom Directives/disable-prod.directive.ts ***!
  \*************************************************************/
/*! exports provided: DisableProdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableProdDirective", function() { return DisableProdDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DisableProdDirective {
    constructor(element, rederer) {
        this.element = element;
        this.rederer = rederer;
    }
    set disableProd(disable) {
        if (disable) {
            this.rederer.addClass(this.element.nativeElement, 'disableCard');
        }
    }
}
DisableProdDirective.ɵfac = function DisableProdDirective_Factory(t) { return new (t || DisableProdDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DisableProdDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisableProdDirective, selectors: [["", "disableProd", ""]], inputs: { disableProd: "disableProd" } });


/***/ }),

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class LoginPageComponent {
    constructor() {
        //For FORM Builder.
        // myForm: FormGroup;
        // constructor(private fb: FormBuilder){
        //   this.myForm = this.fb.group({
        //     name: '',
        //     email: ''
        //   });
        // }
        // onSubmit() {
        //   // Handle form submission
        //   console.log(this.myForm.value);
        // }
        //For new LOGIN Form
        this.signupUser = [];
        this.signupObj = {
            userName: '',
            email: '',
            password: ''
        };
        this.loginObj = {
            email: '',
            password: ''
        };
    }
    onSignUp() {
        const isUserExist = this.signupUser
            .find(user => user.email == this.signupObj.email
        // && user.password == this.loginObj.password
        );
        if (isUserExist == undefined) {
            this.signupUser.push(this.signupObj);
            console.log(this.signupUser);
            localStorage.setItem('signupUser', JSON.stringify(this.signupUser));
            this.signupObj = {
                userName: '',
                email: '',
                password: ''
            };
            alert('Signed up successfully!!!');
        }
        else
            alert('User already exist!!');
    }
    onLogin() {
        const isUserExist = this.signupUser
            .find(user => user.email == this.loginObj.email
            && user.password == this.loginObj.password);
        if (isUserExist != undefined) {
            alert("Welcome back");
            this.loginObj = {
                email: '',
                password: ''
            };
        }
        else
            alert('Wrong credentials');
    }
    //if refreshed need to load again in signupUser
    ngOnInit() {
        const localData = localStorage.getItem('signupUser');
        if (localData != null) {
            this.signupUser = JSON.parse(localData);
        }
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 24, vars: 5, consts: [[1, "video-background"], ["autoplay", "", "loop", "", "muted", ""], ["src", "./assets/movie.mp4", "type", "video/mp4"], [1, "otherContent"], [1, "main"], ["type", "checkbox", "id", "chk", "aria-hidden", "true"], [1, "signup"], ["for", "chk", "aria-hidden", "true"], ["type", "text", "name", "txt", "placeholder", "User name", "required", "", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "pswd", "placeholder", "Password", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "login"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_11_listener($event) { return ctx.signupObj.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.signupObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_13_listener($event) { return ctx.signupObj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_14_listener() { return ctx.onSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_20_listener($event) { return ctx.loginObj.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_21_listener($event) { return ctx.loginObj.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_22_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.signupObj.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginObj.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".highlight-product[_ngcontent-%COMP%]{\r\n    transform: scale(1.01);\r\n}\r\n\r\n.video-background[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw; \r\n    height: 100vh; \r\n    overflow: hidden;\r\n    z-index: -1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n.video-background[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    object-fit: cover; \r\n    z-index: -1;\r\n    opacity: 40%;\r\n  }\r\n\r\n.otherContent[_ngcontent-%COMP%]{\r\n    position: relative; \r\n    z-index: 1;\r\n  }\r\n\r\n\r\n\r\n.main[_ngcontent-%COMP%]{\r\n\twidth: 350px;\r\n\theight: 500px;\r\n\tbackground: red;\r\n\toverflow: hidden;\r\n\tbackground: url(\"https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38\") no-repeat center/ cover;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.main[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 5px 20px 50px #000;\r\n}\r\n\r\n#chk[_ngcontent-%COMP%]{\r\n\tdisplay: none;\r\n}\r\n\r\n.signup[_ngcontent-%COMP%]{\r\n\tposition: relative;\r\n\twidth:100%;\r\n\theight: 100%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n\tcolor: #fff;\r\n\tfont-size: 2.3em;\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tmargin: 60px;\r\n\tfont-weight: bold;\r\n\tcursor: pointer;\r\n\ttransition: .5s ease-in-out;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n\twidth: 60%;\r\n\theight: 20px;\r\n\tbackground: #e0dede;\r\n\tjustify-content: center;\r\n\tdisplay: flex;\r\n\tmargin: 20px auto;\r\n\tpadding: 10px;\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-radius: 5px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n\twidth: 60%;\r\n\theight: 40px;\r\n\tmargin: 10px auto;\r\n\tjustify-content: center;\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\tbackground: #573b8a;\r\n\tfont-size: 1em;\r\n\tfont-weight: bold;\r\n\tmargin-top: 20px;\r\n\toutline: none;\r\n\tborder: none;\r\n\tborder-radius: 5px;\r\n\ttransition: .2s ease-in;\r\n\tcursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover{\r\n\tbackground: #6d44b8;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]{\r\n\theight: 460px;\r\n\tbackground: #eee;\r\n\tborder-radius: 60% / 10%;\r\n\ttransform: translateY(-180px);\r\n\ttransition: .8s ease-in-out;\r\n}\r\n\r\n.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\tcolor: #573b8a;\r\n\ttransform: scale(.6);\r\n}\r\n\r\n#chk[_ngcontent-%COMP%]:checked    ~ .login[_ngcontent-%COMP%]{\r\n\ttransform: translateY(-500px);\r\n}\r\n\r\n#chk[_ngcontent-%COMP%]:checked    ~ .login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\ttransform: scale(1);\t\r\n}\r\n\r\n#chk[_ngcontent-%COMP%]:checked    ~ .signup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\ttransform: scale(.6);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVksRUFBRSxvQ0FBb0M7SUFDbEQsYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVyxFQUFFLHlDQUF5QztJQUN0RCxZQUFZLEVBQUUseUNBQXlDO0lBQ3ZELGlCQUFpQixFQUFFLGlEQUFpRDtJQUNwRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFVBQVU7RUFDWjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QkM7O0FBRUg7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdVdBQXVXO0NBQ3ZXLG1CQUFtQjtBQUNwQjs7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFDQTtDQUNDLGFBQWE7QUFDZDs7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUNBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLDJCQUEyQjtBQUM1Qjs7QUFDQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixjQUFjO0NBQ2QsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsZUFBZTtBQUNoQjs7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLDZCQUE2QjtDQUM3QiwyQkFBMkI7QUFDNUI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2Qsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0Msb0JBQW9CO0FBQ3JCIiwiZmlsZSI6ImxvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQtcHJvZHVjdHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcbi52aWRlby1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7IC8qIFNldCB3aWR0aCB0byAxMDAgdmlld3BvcnQgd2lkdGggKi9cclxuICAgIGhlaWdodDogMTAwdmg7IC8qIFNldCBoZWlnaHQgdG8gMTAwIHZpZXdwb3J0IGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnZpZGVvLWJhY2tncm91bmQgdmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBFbnN1cmUgdGhlIHZpZGVvIGZpbGxzIHRoZSBjb250YWluZXIgKi9cclxuICAgIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIHRoZSB2aWRlbyBmaWxscyB0aGUgY29udGFpbmVyICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogRW5zdXJlIHRoZSB2aWRlbyBjb3ZlcnMgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgb3BhY2l0eTogNDAlO1xyXG4gIH1cclxuXHJcbiAgLm90aGVyQ29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogRW5zdXJlIHotaW5kZXggd29ya3MgKi9cclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5mb3JtQ29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7IFxyXG4gIH1cclxuICAuZm9ybUNvbnRhaW5lcjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICMwMDAwMDAsIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIH1cclxuXHJcbiAgLmZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbi5mb3JtIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuLmZvcm0gYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59ICovXHJcblxyXG4ubWFpbntcclxuXHR3aWR0aDogMzUwcHg7XHJcblx0aGVpZ2h0OiA1MDBweDtcclxuXHRiYWNrZ3JvdW5kOiByZWQ7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2RvYy0wOC0yYy1kb2NzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9kb2NzL3NlY3VyZXNjLzY4Yzkwc21pZ2xpaG5nOTUzNG12cW1xMTk0NmRtaXM1L2ZvMHBpY3NwMW5oaXVjbWMwbDI1czI5cmVzcGdwcjRqLzE2MzE1MjQyNzUwMDAvMDM1MjIzNjA5NjA5MjIyOTgzNzQvMDM1MjIzNjA5NjA5MjIyOTgzNzQvMVN4MGpoZHBFcG5OSXlkUzRybk40a0hTSnRVMUV5V2thP2U9dmlldyZhdXRodXNlcj0wJm5vbmNlPWdjcm9jZXBnYmIxN20mdXNlcj0wMzUyMjM2MDk2MDkyMjI5ODM3NCZoYXNoPXRmaGdiczg2a2E2ZGl2bzNsbGJ2cDkzbWc0Y3N2YjM4XCIpIG5vLXJlcGVhdCBjZW50ZXIvIGNvdmVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLm1haW46aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDVweCAyMHB4IDUwcHggIzAwMDtcclxufVxyXG4jY2hre1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNpZ251cHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6MTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxubGFiZWx7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAyLjNlbTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdG1hcmdpbjogNjBweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbmlucHV0e1xyXG5cdHdpZHRoOiA2MCU7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNlMGRlZGU7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5idXR0b257XHJcblx0d2lkdGg6IDYwJTtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0bWFyZ2luOiAxMHB4IGF1dG87XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogIzU3M2I4YTtcclxuXHRmb250LXNpemU6IDFlbTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG5cdGJhY2tncm91bmQ6ICM2ZDQ0Yjg7XHJcbn1cclxuLmxvZ2lue1xyXG5cdGhlaWdodDogNDYwcHg7XHJcblx0YmFja2dyb3VuZDogI2VlZTtcclxuXHRib3JkZXItcmFkaXVzOiA2MCUgLyAxMCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xODBweCk7XHJcblx0dHJhbnNpdGlvbjogLjhzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sb2dpbiBsYWJlbHtcclxuXHRjb2xvcjogIzU3M2I4YTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC42KTtcclxufVxyXG5cclxuI2NoazpjaGVja2VkIH4gLmxvZ2lue1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAwcHgpO1xyXG59XHJcbiNjaGs6Y2hlY2tlZCB+IC5sb2dpbiBsYWJlbHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1x0XHJcbn1cclxuI2NoazpjaGVja2VkIH4gLnNpZ251cCBsYWJlbHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC42KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page/login-page.component */ "pT+O");
/* harmony import */ var _practice_practice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./practice/practice.component */ "ETPP");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    { path: 'practice', component: _practice_practice_component__WEBPACK_IMPORTED_MODULE_3__["PracticeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routingComponents = [];


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map