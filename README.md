# Node_MySQL_Storefront

This folder contains a bamazonCustomer.js and a bamazonManager.js file. 

Hi user, 
Welcome to bamazon. In this first portion of the readme, we will go over a summary of what each javascript file does. Then we will go over in detail on how to run these two programs.

A) The bamazonCustomer.js file is used from a customer's perspective. The customer will be given a list of store inventory and will be prompted by two questions asking which and how many units of items to purchase.

B) The bamazonManager.js file is used from a store manager's perspective. The manager is given four options in this program. 1) View products for sale 2)View low inventory 3)Add to inventory 4)Add new product. All four options should be self explanitory in what they will do.


A) In order to run this file successfully, first enter into your terminal and install all the packages. In this case, type into the terminal the four following commands, hopefully no more, no less: 

npm install
npm install mysql
npm install inquirer
npm init

Next, type into the terminal "node" then (space), then the file name, which in this case is bamazonCustomer.js. 
All the products and inventory should now be displayed and you should be prompted with a question asking what product you want to purchase. Followed by this question is another question asking you how many items of the product you want. If the amount exceeds the total amount of the product in the inventory, you will be notified that there is insufficent quantity. The end result is displayed as the total amount you need to spend to purchase the product(s) as well an update to the database in mysql.

B) In order to run this file successfully, first enter into your terminal and install all the packages. In this case, type into the terminal the four following commands, hopefully no more, no less: 

npm install
npm install mysql
npm install inquirer
npm init

Next, type into the terminal "node" then (space), then the file name, which in this case is bamazonManager.js. 
Now you should be prompted by four options.

    1."View Products for Sale" - displays the entire list of inventory for purchase

    2. "View Low inventory" - displays to terminal only the products with less than 10 items

    3. "Add to Inventory" - adds a certain amount to an inventory and displays the updated total units of that        product.

    4. "Add New Product" - adds an entirely new product to the table in mysql storefront database 

The following are the two videos of a user running the above two files:
https://drive.google.com/file/d/1uAa7RBP2EP4b5Vw7YWSnC-wTdrmy9cA7/view
https://drive.google.com/file/d/1R4FtvuI4OJo4nTkfqbJcLay7ON8jeDJ5/view

