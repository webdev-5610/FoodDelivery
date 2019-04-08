# FoodDelivery



 Customer: url/user/uid
 
    profile: url/user/uid/profile
    order_history: url/user/uid/orderhistory
    order_edit: url/restaurant=rid/user=uid/order
    checkout: url/restaurant=rid/user=uid/checkout
    order_success: url/user/uid/orderId
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
  
    user:  name, password, email, address, phone, credit_card_info, billing_info, order_history
    restaurant: name, password, email , address, phone, type , orders, menu(dish name, price,discription)
    order:  user, restaurant, time, status，details(dish, quantity, total) 
    
 Backend api design:
  
    user:  name, password, email, address, phone, credit_card_info, billing_info, order_history
             constructor(username: String, password: String, email: String, address: String, phone: String,               credit_card_info: String,billing_info: String)
    restaurant: name, password, email , address, phone, type , orders, menu(dish name, price,discription)
    order:  user, restaurant, time, status，details(dish, quantity, total) 
