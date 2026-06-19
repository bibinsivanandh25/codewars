// Array.prototype.size()
// Implement Array.prototype.size() - without .length !
// Implement Array.prototype.size(), which should simply return the length of the array. But do it entirely without using Array.prototype.length!
// Where .length is a property, .size() is a method.

//? Solution
Array.prototype.size = function () {
  return this.reduce((count) => count + 1, 0);
};

// console.log(size([1].size());)
