const pinLenCheck = (array, number) => {
  let found = false;
  const newArray = array.map((item) => {
    if (item.length === 0 && !found) {
      item = number;
      found = true;
      return item;
    }
    return item;
  });
  return newArray;
};

export default pinLenCheck;
