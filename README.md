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
   
        order           //define the frontend order data structure
        restaurant      //define the frontend restaurant data structure
        user            //define the frontend user data structure
   Service
   
        auth-guard      //provide authorised user logged in verification
        deliver         //provide client side deliver distance function
        menu            //provide client side menu related functions
        order           //provide client side order data operation functions
        restaurant      //provide client side restaurant related function
        shared          //provide client side sharable user and selected order
        user            //provide client side user related functions
   Component
   
        admin
            - add-user           //add user to system page
            - admin-home         //admin home page
            - edit-user          //edit user information page
            
        deliver
            - home               //home page of deliver including in transit order, order history and all the pending order
            - detail             //order details page including direction map, distance, accept/complete/cancel order
            
        restaurant
            - current-order      //restaurant current order page to show orders pending post
            - menu               //menu page to show all the dishes provided by restaurant
            - menu-edit          //menu edit page to update menu
            - restaurant-home          //home page of restaurant
            - restaurant-order-history    //order history page of restaurant
            - restaurant-profile       //profile page of restaurant
            
        user
            - checkout           //checkout page of customer to add dishes and checkout
            - order              //order detail page of customer
            - orderhistory       //order history page of customer
            - user-profile       //user profile page
            
        website
            - home               //home page of website
            - login              //login page of user
            - register           //register page of user
            - restaurant         //restaurant dishes page

#### Backend
    
   Schema
   
        order           //define the backend order schema
        restaurant      //define the backend restaurant schema
        user            //define the backend user schema
        menu            //define the backend menu schema
        website         //define the backend website schema     
   Model
   
        order           //define the backend order model functions
        restaurant      //define the backend restaurant model functions
        user            //define the backend user model functions
        menu            //define the backend menu model functions
        website         //define the backend website model functions
   Service (api)
   
        deliver //provide deliver distance calculation api
         (get)     /api/deliver/getdistance
<br>
        
        menu //provide server side menu related functions
         (post)    /api/restaurant/menu
         (get)    /api/menu
         (get)    /api/restaurant/menu/:did
         (put)    /api/restaurant/menu/:did
         (delete)    /api/restaurant/menu/:did
         (put)    /api/restaurant/menu?
<br>   

        order //provide server side order data operation functions
         (post)    /api/user/:userId/order
         (post)    /api/user/:userId/order/:orderId/checkout
         (post)    /api/user/:userId/order/:orderId/post
         (post)    /api/deliver/:deliverId/order/:orderId/accept
         (post)    /api/deliver/:deliverId/order/:orderId/complete
         (post)    /api/user/:userId/order/:orderId/cancel

         (get)    /api/user/:userId/orders
         (get)    /api/deliver/:deliverId/orders
         (get)    /api/order/:orderId
         (get)    /api/user/:userId/cartorders
         (get)    /api/deliver/:deliverId/intransitorder
         (get)    /api/user/:userId/intransitorder
         (get)    /api/allpendingorders
         (get)    /api/allcurrentorders
         
         (put)    /api/user/:userId/order/:orderId
         (delete)    /api/user/:userId/order/:orderId

<br>

        user //provide server side user related functions
         (post)    /api/user
         (get)    /api/user
         (get)    /api/user/:userId
         (put)    /api/user/:userId
         (delete)    /api/user/:userId
         (post)    /api/login
         (post)    /api/logout
         (post)    /api/register
         (post)    /api/loggedin
         (get)    /api/allusers/:userType


   External API:
   
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

