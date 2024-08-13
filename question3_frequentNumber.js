//....
var numberFrequently = function (nums) {
  const map = {};
  let test = Math.floor(nums.length / 2) + 1;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i] + 1] || 1;
    if (map[nums[i]] === test) return nums[i];
  }
};
console.log(numberFrequently([2, 2, 1, 1, 1, 2, 2]));
