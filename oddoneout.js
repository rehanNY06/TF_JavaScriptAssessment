function oddOneOut(arrOfInts){
    // Your code here!
    for (let i = 0; i < arrOfInts.length; i++)
    {
        if (arrOfInts[i] % 2 == 1)
        {
            return arrOfInts[i];
        }
    }

    return -1;
}


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;