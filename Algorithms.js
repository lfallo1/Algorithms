var isSumPossible = function(arr, sum){

    //check to see if item is already in list
    if(arr.indexOf(sum) >= 0){ return true; }

    //if smallest number is larger than number we are looking for, then it's not possible
    if(arr[0] > sum){ return false; }

    if(arr[arr.length-1] > sum){
        arr.pop();
        return isSumPossible(arr,sum);
    }

    var combinations = 1 << arr.length;
    var arrayLength = arr.length;

    //iterate over length of combinations, skipping first two combinations.
    //(a) skip first combination.  when i is 0, the statement 0 & (anything) will always be zero. false and anything is always false.
    //(b) skip second combination. 1 & (1 << j) will only be true once, when j is 1.  since it's only true once, the combination sum will be the sum of one number. since the
    //number we are searching for is not in the list, it will never be the combination for which we are looking
    for(var i = 1; i < combinations; i++){

        var combinationSum = 0;
        for(var j = 0; j < arrayLength; j++){

            //get combination using bitwise and, and shifting 1 to right each iteration
            if(i & (1 << j)){
                combinationSum += arr[j];
            }
        }
        if(combinationSum === sum){
            console.log('found combo');
            return true;
        }
    }
    console.log('no combo found');
    return false;
};

isSumPossible([3,4,5,9,12,17,22,29], 25);
