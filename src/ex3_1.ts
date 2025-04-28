interface IItem {
    price: number,
    name: string,
}
function processItems(items: IItem[]) {
    const LIMIT_EXPENSIVE = 100;
    for (let index = 0; index < items.length; index++) {
        const currentItem = items[index];
        if (currentItem.price > LIMIT_EXPENSIVE) {
            console.log(currentItem.name + ' is expensive');
        }
    }
}

processItems([
    {
        name: 'xbox',
        price: 1200
    }
])