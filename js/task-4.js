'use strict' 
function getShippingMessage(country) {
    let price;
    let message;
    switch (country){
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
            break;
        default:
            message = "Sorry, there is no delivery to your country";
    }
     if (price !== undefined) {
    message = `Shipping to ${country} will cost ${price} credits`;
    }
    return message;
}

console.log(getShippingMessage("Australia"));
console.log(getShippingMessage("Germany")); 
console.log(getShippingMessage("China"));
console.log(getShippingMessage("Chile"));
console.log(getShippingMessage("Jamaica"));
console.log(getShippingMessage("Sweden")); 