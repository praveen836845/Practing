/*Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k. 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

// ***********************************************Important************************************************************************
/* 
    Use a two-pointer technique to handle in-place modifications without extra space.
 This is a common pattern for array problems requiring reordering or filtering. But it can work on both sorted order and unsorted order.

*/




var removeDuplicates = function(nums) {    // [0,0,1,1,1,2,2,3,3,4]   
    let j = 0;
     for (let i = 1; i < nums.length; i++) {
       console.log(nums[i] ,nums[j])
         if (nums[i] !== nums[j]) {
                  // case 1 comparision that Tracking j  with the i is basically iterating 
             j++;
             nums[j] = nums[i];
         }
     }
      j++;     //why we need this one 
      nums.fill('_' , j);
    return [j, nums];
 };
 
 
 
 console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))  // Time Complexity O(n);


/* 
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

function  replace_function(nums) {
    let k = 2 ; 
    for(let i= 2; i< nums; i++){
        if(nums[i]!= nums[k-2]){
            nums[k] = nums[i];
            k++
        }

    }
    return k;
}






