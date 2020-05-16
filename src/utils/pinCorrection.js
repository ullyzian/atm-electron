const pinCorrection = (array) => {
  let found = false;
  const newArray = array
    .slice(0)
    .reverse()
    .map((item) => {
      if (item.length === 1 && !found) {
        item = "";
        found = true;
        return item;
      }
      return item;
    });
  return newArray.slice(0).reverse();
};

export default pinCorrection;
