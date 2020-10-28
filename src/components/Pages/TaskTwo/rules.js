export const include = (arr, filterCriterionObj) => {
  const criterion = Object.entries(filterCriterionObj)[0];
  return arr.filter((item) => {
    const [key, value] = criterion;
    return item[key] === value;
  });
};

export const exclude = (arr, filterCriterionObj) => {
  const criterion = Object.entries(filterCriterionObj)[0];
  return arr.filter((item) => {
    const [key] = criterion;
    return !item[key];
  });
};
