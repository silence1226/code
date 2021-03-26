var lengthOfLIS = function(nums) {
  let n = nums.length;
  if(n <= 1){
      return n;
  }
  let tail = [nums[0]];
  for(let i = 0;i < n;i++){
      if(nums[i] > tail[tail.length-1]){
          tail.push(nums[i]);
      }else{
          let left = 0;
          let right = tail.length-1;
          while(left < right){
              let mid = (left + right) >> 1;
              if(tail[mid] < nums[i]){
                  left = mid + 1;
              }else{
                  right = mid;
              }
          }
          tail[left] = nums[i];
      }
  }
  return tail.length;
};

var lenthMax = function (nums) {
  let n = nums.length;
  if (n <= 1) return n;

  let tail = [nums[0]];

  for (let i = 0; i < n; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      tail.push(nums[i]);
    } else {
      // 二分查找
      let left = 0;
      right = tail.length - 1;
      while (left < right) {
        let mid = (left + right) >>> 1;
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i]
    }
  }
  return tail.length
}