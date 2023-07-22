* Zomato App

// page1
> List of city
* http://localhost:9130/location
> Rest wrt to city
* http://localhost:9130/restaurants?stateId=3
> List of Quick Search
* http://localhost:9130/mealType

//page2
> Rest wrt to mealtype
* http://localhost:9130/restaurants?mealId=4
> Rest wrt to mealtype + cuisine
* http://localhost:9130/filter/1?cuisineId=3
> Rest wrt to mealtype + cost
* http://localhost:9130/filter/1?lcost=400&hcost=1000

//Page3
> Details of Restaurant
* http://localhost:9130/details/2
> Menu of restaurant
* http://localhost:9130/menu/2

//Page4
> Details of Menu selected
* http://localhost:9130/menuDetails
> Place Order
* http://localhost:9130/placeOrder

// Page5
> List of all the orders
* http://localhost:9130/orders
> Update orders details
* http://localhost:9130/updateOrder
> Delete Orders
* http://localhost:9130/deleteOrder
