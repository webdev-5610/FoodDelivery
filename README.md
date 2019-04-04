# FoodDelivery



 Customer: url/user/uid
 
    profile: url/user/uid/profile
    order_history: url/user/uid/orderhistory
    checkout: url/restaurant=rid/user=uid/checkout
    order_success: url/user/uid/orderId
 Restaurant:
 
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
