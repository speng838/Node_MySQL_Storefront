var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user:"root",

    password: "Swish13",
    database: "bamazon"
});

connection.connect(function(error){
    if(error) throw error;
    console.log("connected as id" + connection.threadId);
    queryAllProducts();
});



function queryAllProducts(){
    connection.query("SELECT * FROM products", function(error, res){
        for (var i=0; i<res.length; i++){
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            
        }
        questions();
    });
}

var result;
var totalCost;
function questions(){
    inquirer
        .prompt([
            {
                name: "item_id",
                type: "input",
                message: "What is the ID of the product you would like to purchase?"
            },
            {
                name:"units",
                type: "input",
                message: "How many units of the product would you like to purchase?"
            }

        ]).then(function(answer){
            var query = "SELECT stock_quantity, price FROM products WHERE item_id = ?";
            connection.query(query, [answer.item_id], function(error, res){
                for (var i = 0; i < res.length; i++){
                    
                    if( answer.units < res[i].stock_quantity){

                        result = res[i].stock_quantity - answer.units;
                        
                        totalCost = answer.units * res[i].price;
                        
                        connection.query( "UPDATE products SET ? WHERE ?", 
                        [
                            {
                                stock_quantity: result
                            },
                            {
                                item_id: answer.item_id
                            }
                        ],
                        function(error, res){
                            
                            console.log("Your total cost of purchase is: " + totalCost)
                        });
                    }
                    else{
                        console.log("Sorry, insufficient quantity");
                    }

                }
            });
        }); 
        
    }

    
