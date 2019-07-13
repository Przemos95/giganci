export const RandomOrder = (array) => {
    if (!array || !array.length) return array;

    const length = array.length;
    let newOrder = [];
    let nums = [];
    for (var i = 0; i < length; i++) {
        nums.push(i); 
    }
    
    while (nums.length !== 0) {
        let item = nums[Math.floor(Math.random()*length)];
        nums = nums.filter(s => s !== item);
        newOrder.push(item);
    }

    newOrder = newOrder.filter(s => s !== undefined);

    let newArray = [];
    newOrder.forEach(s => {
        newArray.push(array[s]);
    });
    return newArray;
}