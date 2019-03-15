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
    questions();
});

function questions() {
    inquirer.prompt({
        name: "toBeChanged",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
        ]
    }).then(function(answer){
        switch(answer.toBeChanged){
            case "View Products for Sale":
                productForSale();
                break;
            
            case "View Low Inventory":
                lowInventory();
                break;
            
            case "Add to Inventory":
                addInventory();
                break;

            case "Add New Product":
                addProduct();
                break;
        }
    });
}

function productForSale(){
    connection.query("SELECT * FROM products", function(error, res){
        for (var i=0; i<res.length; i++){
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
            
        }
        questions();
    });
}

function lowInventory(){
    var query = "SELECT * FROM products WHERE stock_quantity < 10";
    connection.query(query, function(error, res){
        for (var i = 0; i < res.length; i++) {
           console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        questions();
    })

}
var total;
function addInventory(){
    inquirer
        .prompt([
            {
                name: "item_id",
                type: "input",
                message: "Which inventory id would you like to add to?"
            },
            {
                name: "toAddTo",
                type: "input",
                message: "How much would you like to add to the inventory?"
            }
        ]).then(function(answer){
            var query = "SELECT stock_quantity FROM products WHERE item_id = ?";
            connection.query(query,[answer.item_id],function(error, res){
                for (var i = 0; i < res.length; i++){
                    total = res[i].stock_quantity + parseInt(answer.toAddTo);

                    connection.query( "UPDATE products SET ? WHERE ?", 
                        [
                            {
                                stock_quantity: total
                            },
                            {
                                item_id: answer.item_id
                            }
                        ],
                        function(error, res){
                            
                            console.log("Your total for this inventory now has: " + total + " item(s)");
                            questions();
                        });
                }
                
            })
            
        });
       
}
var newOne;
function addProduct(){
    inquirer.prompt([
        {
            name: "product_name",
            type: "input",
            message: "What is the name of the new product?"
        },
        {
            name: "department_name",
            type: "input",
            message: "What is the department name of the product?"
        },
        {
            name: "price",
            type:"input",
            message: "What is the price of the product?"
        },
        {
            name: "stock_quantity",
            type: "input",
            message: "What is the stock quantity of the product?"
        }
    ]).then(function(answer){
        connection.query("INSERT INTO products SET ?",
        {
            product_name: answer.product_name,
            department_name: answer.department_name,
            price: answer.price,
            stock_quantity: answer.stock_quantity

        }, function(error){
            if (error) throw error;
            console.log(" product inserted!\n");
            questions();
        })
    
    });
}