//DELCARAICON BASICA
let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        return "Cannot afford! You are $${itemPrice-accountBalance}short";

    } else {
        return "Can afford!";
    }
}
//Declaracion ternaria
let canAfford2 = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
        ? "Cannot afford! You are $${itemPrice-accountBalance}short"
        : "Can afford!";

};
let myBankAcoountBalance=1000;
const drone=1001;
let droneOnSale=drone-drone*0.03;
console.log(canAfford(drone,myBankAcoountBalance));
console.log(canAfford2(drone,myBankAcoountBalance));

