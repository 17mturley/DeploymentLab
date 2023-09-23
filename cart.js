///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(acc, curr){
    return acc + curr.price
})


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax
*/

function calcFinalPrice(cartTotal, couponValue, tax){
    let taxTotal = cartTotal * (1 + tax)
    let postCoupon = taxTotal - couponValue
    return postCoupon
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    In the customer object, the properties would be: Name(string), Budget(num), favFood(string), favDrink(string), Hungry(boolean), Thirsty(boolean). The Name, favFood, and favDrink would have to be strings because they're words. The budget needs to be a number because it should be how much money they are willing to spend.
    The Hungry and Thirsty properties will be booleans, to be able to identify what favFood or favDrink they will be wanting if any at all.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer ={
    name: 'Megan Turley',
    budget: 25,
    favFood: 'Tacos',
    favDrink: 'Thai Tea',
    hungry: true,
    thirsty: true
}
