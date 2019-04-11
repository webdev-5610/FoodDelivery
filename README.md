# FoodDelivery


 Customer: url/user/uid
 
    profile: url/user/uid/profile
    order_history: url/user/uid/orderhistory
    checkout: url/restaurant=rid/user=uid/checkout
    
 Order: url/user/uid/orderId
 
    order_edit: url/restaurant=rid/user=uid/order
 

 Restaurant:url/restaurant/rid
 
    profile: url/restaurant/rid/profile
    menu: url/restaurant/rid/menu
    menu_edit : url/restaurant/rid/menu-edit
    statistics: url/restaurant/rid/statistics
    
 Admin: url/admin
 
    admin-list
    admin-edit
 All user can access:
 
    home(login,search)
    login: url/login
    register: url/register
    searchbyaddress: url/restaurant/search=location
    searchbytype: url/restaurant/search=location/type
    Restaurant: url/restaurant/rid
    review: url/restaurant/rid/review
    
    
 Backend data design:
  
    user:  _id, name, password, email, address, phone, credit_card_info, billing_info, order_history
    restaurant: _id,name, password, email , address, phone, type , orders, menu(dish name, price,discription)
    order: _id, user, restaurant, time, status，details(dish, quantity, total) 
    
 Backend model design:给menu增加了id，因为按照原本的结构一个menu只有一个dish，所以把restaurant的menu改成了menu[]，details因为是一对一的，没有做改动。
  
    user:  _id, name, password, email, address, phone, credit_card_info, billing_info, order_history, all string type
             constructor(username: String, password: String, email: String, address: String, phone: String,              credit_card_info: String,billing_info: String)
             


             
    restaurant: _id, name, password, email , address, phone, type , orders, menus(_id, dish_name, price,discription)
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
    }}

    order:  user, restaurant, time, status，details(dish, quantity, total) 
    class Details {
    dish: String[];
    quantity: Number[];
    total: Number;
    constructor(dish:String[],quantity:Number[],total:Number){
      this.dish = dish;
      this.quantity = quantity;
      this.total = total;
    }
    }
    export class Order {
      _id: String;
      user: String;
      restaurant: String;
      time: Date;
      status: Boolean;
      details: Details;
      constructor(user: String, restaurant: String, time: Date, status: Boolean,details: Details) {
        this.user = user;
        this.restaurant = restaurant;
        this.time = time;
        this.status = status;
        this.details = details;
      }
    }


API
    
    user:
    userModel.createUser = createUser;
    userModel.findUserById = findUserById;
    //userModel.findUserByFacebookId = findUserByFacebookId;
    userModel.findUserByUsername = findUserByUsername;
    userModel.findUserByCredentials = findUserByCredentials;
    userModel.updateUser = updateUser;
    userModel.deleteUser = deleteUser;
    userModel.findAllOrders = findAllOrders;
    
    order:
    orderModel.findAllOrdersByUser = findAllOrdersByUser;
    orderModel.findOrderById = findOrderById;
    orderModel.updateOrder = updateOrder;// also check status if finished or not.
    orderModel.deleteOrder = deleteOrder;
    orderMedel.createOrder = createorder;
    orderModel.findAllOrdersByRestaurant = findAllOrdersByRestaurant;   
    orderModel.finishOrder = finishOrder;
    
    restaurant:
    restaurantModel.findAllOrders = findAllOrders;
    restaurantModel.createRestaurant = createRestaurant;
    restaurantModel.findRestaurantByName = findRestaurantByName;
    restaurantModel.findRestaurantByCredentials = findRestaurantByCredentials;
    restaurantModel.findRestaurantByType = findRestaurantByType;
    restaurantModel.updateRestaurant = updateRestaurant;
    restaurantModel.deleteRestaurant = deleteRestaurant;
    
>>>>>>> master
