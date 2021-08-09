//problem 1 Seer to mon conversation 
    function seerToMon(seer){
        //checking if input seer is a type of number
        if(typeof seer !=="number"){
            return 'Error! seer must be a number !!'
        }
        //checking if input seer is positive 
        if(seer < 0){
            return 'Error ! Seer should not be negative !! '
        }
        //conversation 
        return seer / 40 ;
    }
    console.log("Mon will be ",seerToMon(340));

//Problem 2 about total sales of shirt pant and shoe
    function totalSales(soldShirtQuantity, soldPantQuantity , soldShoeQuantity){
        let pricePerShirt =100,
            pricePerPant = 200,
            pricePerShoe =500 ;
        // checking if the sold shirt pant and shoe is a type of number 
        if(typeof soldShirtQuantity !=="number" || typeof soldPantQuantity !=="number" || typeof soldShoeQuantity !=="number"){
            return "Error ! Shirt,pant,shoe quantity must be  a number !!!";
        }
        // checking if the sold shirt pant and shoe is positive number
        if(soldShirtQuantity < 0 || soldPantQuantity < 0 || soldShoeQuantity < 0){
            return "Error ! shirt, pant , shoe quantity must be a positive number !"
        }
        //today sales
        function todaySales(quantity,price){
            return price * quantity;
        }
        //Today shirt sales
        let shirtSales =todaySales(soldShirtQuantity,pricePerShirt);
        //today pant sales 
        let pantSales =todaySales(soldPantQuantity,pricePerPant);
        //today shoe sales
        let shoeSales = todaySales(soldShoeQuantity,pricePerShoe);
       
        return shirtSales + pantSales + shoeSales;
    }

    console.log("today your total sales is ",totalSales(1,3,5));

    //problem 3 delivery cost 

    function deliveryCost(shirtQuantity){
        let totalCost=0;
        //    checking its a number 
        if(typeof shirtQuantity !== "number"){
            return "Error ! shirtQuantity must be number !"
        }
        //checking its a positive value 
        if(shirtQuantity < 0 ){
            return "Error ! shirt quantity must be a positive value!";
        }

        if(shirtQuantity <=100){
            totalCost = shirtQuantity *100;
        }
        if(shirtQuantity > 100 ){
            let shirtCostInHundred = 100*100;
            if(shirtQuantity <=200){
                let restShirtQuantityInTwoHundreds = shirtQuantity -100;
                let restCostInTwoHundred =restShirtQuantityInTwoHundreds *80 ;
                totalCost += shirtCostInHundred + restCostInTwoHundred;
            }
            if(shirtQuantity > 200){
                let shirtCostInTwoHundred = shirtCostInHundred + (100 *80) ;
                let restShirtQuantityAfterTwoHundreds = shirtQuantity -200;
                let restCostAfterTwoHundreds = restShirtQuantityAfterTwoHundreds * 50;
                totalCost +=shirtCostInTwoHundred +restCostAfterTwoHundreds;
            }
        }
        return totalCost;
    }

    console.log("your delivery Cost will be ",deliveryCost(200));

    //problem 4 perfect friend name
          function perfectFriend(myFriends){
              let friendWithFiveWord ='';
              //checking if its an array
              if(Array.isArray(myFriends)){
                    for(let friend of myFriends){
                        // find first friend of 5 word name
                        if(friend.length ===5){
                            friendWithFiveWord = friend;
                            break;
                        }
                    }
                }else{
                    return "Error! You must give an array of your friend list!"
                }
              return friendWithFiveWord;
          }
          let friendsName=['motu','citu','jitu','korim','rohim','atul','jonu','chunu','jontu','montu', 'hiru'];
          console.log("my perfect friend is ",perfectFriend(friendsName));
