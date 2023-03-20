// Sorting

// Sorting, in the basic sense, is rearranging items in a collection so that the items are in some kinds of order

// Ex:
// - Sorting number from smallest to laregest
// - Sorting strings alphabetically

// 1. Runtimes

// Each sorting algorithms have different runtimes depending on the shape or arrangement of the data.
// For example, a bubble sort algorithm can be very efficient in a certain data set and very slow in another

// 2. Bubble Sort

// Get its name because the "largest" values find their way to the top or the end of the data set(array)
// These involve comparing values

// Implementing Bubble Sort

// Naive Approach (Bad)
function bubbleSortBad(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log('Total Count:', count);
}

// The above function works, but it is not very efficient, because it loops over each value every time, even when a value as been correctly sorted

// What we want to do is only loops through the items that have not been sorted yet, making the array smaller and smaller, speeding up perforance.

function bubbleSortBetter(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // This slight change below improves performance because it does not loop through every value every time only the unsorted values
        for (let j = 0; j < arr.length - i; j++) {
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log('Total Count:', count);
}

//

function bubbleSortEvenBetter(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - i; j++) {
            count++;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // This is the change
        if (!swapped) break;
    }
    console.log('Total Count:', count);
}

// This optimization is only a lot better when the array is mostly sorted!
// -----------------------

// 3. Bubble Sort Runtime

// Bubble sort is O(n^2)
// Very simple algo to work with

// Other common O(n^2) sorts:
// 	- Selection Sort
// 	- Insertion Sort
// 		-> Insertion is quadratic, but if nearly sorted it is slightly better than bubble sort

// -----------------------------

// 4 Merge Sort

// This is considered an intermediate sorting algorithm

// For comparitive sorts, O(n log n) is the fastest possible runtime
// "n" because you have to touch every item in the list once
// "log n" because best possible strategy is divide and conquer method

// Merge sort is combination of merging and sorting

// You split main array into smaller subarrays of 0 or 1 elements
// Then building up newly sorted array from those sorted arrays and contuining until whole array is sorted

// First we will implement a helper function that sorts two arrays that already sorted
// This function will not change the original arrays rather it will return a newly sorted array
// Runtime is O(n + m) because it depends on size of first and second array

function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// merge([1,3,5,7], [2,4,6,8]);

function mergeSort(arr) {
    // base case
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    // normal case
    return merge(left, right);
}

// -------------------------------

// 5. Choosing a sorting algorithm

// Keep in mind that merge-sort creates multiple arrays, so you are storing more in memory.

// Choosing an Algorithm:

// Performance for your requirements:
// 	- For small "n", simple sorts can be faster

// Runtime

// Likely Structure of your data:
// 	- Random?
// 	- Almost reversed?
// 	- Almost sorted?
// 	- Likely duplicates?

// Adaptive Sorting Algorithms

// 6. Other sorting topics

// Stable sorts refer to sorting algos that always return items in the same order, even when there are items that are "ties" or equal in some type of value

// For example, merge sort is a stable algo so it will always return items in the same order, while selection sort can return items that are equal in value like the priority example in the vid in different orders

// Collation:
// how two string compare in a language is controlled by their collation
// Ex: capitalization: does "a" sort before or after "Z"
// Some languages allow you to specify the collation rules

// Comparative/Non-Comparative Sorts

// There are sorts that do not compare values together to sort.
// For example, the radix sort, places numbers in buckets based off the last digit in the number, and then again on the second to last digit in the number, over and over again until all the items are sorted, without ever comparing items in the list
