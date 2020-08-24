var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}



console.log(inventory.find(findCherries));


console.log(inventory.find(item => { return item.name === 'cherries' }));
