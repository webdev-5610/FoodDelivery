import {Order} from "./order.client.model";

class Menu {
    _id: String;
    dish_name: String;
    price: Number;
    description: String;

    constructor(name: String, price: Number, description: String) {
        this.description = description;
        this.dish_name = name;
        this.price = price;
    }

}


export class Restaurant {
    _id: String;
    name: String;
    password: String;
    email: String;
    address: String;
    phone: String;
    type: String;
    oders: Order[];
    menus: Menu[];


    constructor(name: String, password: String, email: String, address: String, phone: String, type: String, orders: Order[], menus: Menu[]) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.type = type;
        this.oders = orders;
        this.menus = menus;
    }
}
