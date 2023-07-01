function duplicate(arr) {
    return [...arr, ...arr];
  }
  
  // Example usage
  const originalArray = [1, 2];
  const duplicatedArray = duplicate(originalArray);
  console.log(duplicatedArray);