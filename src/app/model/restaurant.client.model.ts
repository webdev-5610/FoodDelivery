import {Order} from "./order.client.model";

export class Menu {
    _id: String;
    dish_name: String;
    price: Number;
    description: String;
    url: String;

    constructor(id: String, name: String, price: Number, description: String, url: String) {
        this._id = id;
        this.description = description;
        this.dish_name = name;
        this.price = price;
        this.url = url;
    }

}


export class Restaurant {
    _id: String;
    username: String;
    password: String;
    name: String;
    email: String;
    address: String;
    phone: String;
    type: String;
    orders: Order[];
    menus: Menu[];


    constructor(username: String, password: String,name: String, email: String, address: String, phone: String, type: String, orders: Order[], menus: Menu[]) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.type = type;
        this.orders = orders;
        this.menus = menus;
    }
}
