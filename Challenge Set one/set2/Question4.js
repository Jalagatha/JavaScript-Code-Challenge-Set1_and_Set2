//function definition
function singleNumber(nums) {
    let single = 0;
    //loop through
    for (let i = 0; i < nums.length; i++) {
        //xor operation
        single ^= nums[i];
    }
    
    return single;
}
//variable and output
let nums = [2,2,1];
console.log(singleNumber(nums));