function strClean(arrOfStrs){
   
    let newArr = [];


    for (let i = 0; i < arrOfStrs.length; i++)
    {
        let temp = arrOfStrs[i];

        for (let j = 0; j < temp.length; j++) {
            if (parseInt(temp[j], 10) == 0) {
                temp = temp.replace(temp[j], "zero");
            }
            else if (parseInt(temp[j], 10) == 1) {
                temp = temp.replace(temp[j], "one");
            }
            else if (!isNaN(parseInt(temp[j], 10))){
                temp = temp.replace(temp[j], "");
                j--;
            }
        }

        temp = temp.trim();

        while (temp.indexOf(" ") != -1) {
            temp = temp.replace(temp[temp.indexOf(" ")], "_");
        }

        newArr.push(temp);
    }

    return newArr;
}



// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;