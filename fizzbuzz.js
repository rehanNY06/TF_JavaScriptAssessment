function fizzBuzz(start, end, skip){
    // Your code here!
    let nums = [];
    for (let i = start; i <= end; i++)
    {
        if (!(i.toString().includes(skip)))
        {
        nums.push(i);
        }
    }
        return nums;
    
}

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;