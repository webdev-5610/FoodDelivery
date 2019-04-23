# FoodDelivery

## Guide

   1. Install node.js, npm and mongodb
   2. Install Angular cli
   
            npm install -g @angular/cli
        
   3. Install dependencies
   
            npm install
        
   4. Build & run frontend
   
            ng serve
        
   5. Run backend
   
            node server.js
        
## Structure

#### Frontend
    
   Model
   
        order
        restaurant
        user
   Service
   
        auth-guard
        deliver
        menu
        order
        restaurant
        shared
        user
   Component
   
        admin
            - add-user
            - admin-home
            - edit-user
            
        deliver
            - home
            - detail
            
        restaurant
            - current-order
            - menu
            - menu-deit
            - restaurant-home
            - restaurant-order-history
            - restaurant-profile
            
        user
            - checkout
            - menu
            - order
            - orderhistory
            - user-profile
            
        website
            - home
            - login
            - register
            - restaurant

#### Backend
    
   Model
   
        order
        restaurant
        user
   Service
   
        auth-guard
        deliver
        menu
        order
        restaurant
        shared
        user
   Component
   
        admin
            - add-user
            - admin-home
            - edit-user
            
        deliver
            - home
            - detail
            
        restaurant
            - current-order
            - menu
            - menu-deit
            - restaurant-home
            - restaurant-order-history
            - restaurant-profile
            
        user
            - checkout
            - menu
            - order
            - orderhistory
            - user-profile
            
        website
            - home
            - login
            - register
            - restaurant


### External API:
Frontend
    
   Angular google maps - AgmDirectionModule, AgmCoreModule

    dependencies:
        "@agm/core": "^1.0.0-beta.5",
        "agm-core": "^1.0.0-beta.5",
        "agm-direction": "^0.7.6",
        "@types/googlemaps": "^3.30.19"
    
Backend

   Google distancematrix api [Learn more](https://developers.google.com/maps/documentation/distance-matrix/start)
        
        https://maps.googleapis.com/maps/api/distancematrix/json?



4.13:update order api

    app.post('/    updateOrder(userId, orderId, order) {
api/user/:userId/order', createOrder);
    app.post('/api/deliver/:deliverId/order', orderAccept);
    app.get('/api/user/:userId/order', findOrdersByUser);
    app.get('/api/user/:userId/order/:orderId', findOrderById);
    app.put('/api/user/:userId/order/:orderId', updateOrder);// also check status if finished or not.
    app.delete('/api/user/:userId/order/:orderId', deleteOrder);
    app.get('/api/user/:userId/order/:orderId/:status',findOrdersByStatus);
    app.put('/api/user/:userId/order/:orderId/:status', updateOrderStatus);
    app.get('/api/deliver/:deliverId/order', findOrdersByDeliver);
    
    app.get('/api/deliver/pending', findAllPendingOrders);
    app.get('/api/deliver/:deliverId/currentOrder', findCurrentOrderByDeliver);
    
  order signature
  
    createOrder(userId, order) {
    }
    findOrdersByUser(userId): Observable<Order[]> {
    }
    findAllOrdersByDeliver(deliverId): Observable<Order[]> {
    }
    findOrderById(userId, orderId) {
    }
    updateOrder(userId, orderId, order) {
    }
    deleteOrder(userId, orderId) {
    }
    findOrderByStatus(deliverId, status){
    }
    finishOrder(userId, orderId, orderStatus=1) {
    }
    postOrder(userId, orderId, orderStatus=2){
    }
    acceptOrder(userId, orderId, orderStatus=3){
    }
    completeOrder(userId, orderId, orderStatus=4){
    }
    cancelOrder(userId,orderId, orderStatus=5){
    }
    orderAccept(deliverId, userId, orderId){
    }
    
 Delivery: 
 
    home: url/deliver/uid/home    updateOrder(userId, orderId, order) {

    detail: url/deliver/uid/detail
    profile: url/user/uid/profile

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
             


             
    
    
google map api key: AIzaSyBtrCeFbuL6cSgjC2UyJsaJuJoXKXAmQQM
