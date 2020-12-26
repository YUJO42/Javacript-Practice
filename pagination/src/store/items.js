export const items = () => {
  const items = [];
  for (let i = 1; i <= 33; i++) {
    items.push({
      id: i,
      data: `dummy data ${i}`,
    });
  }
  return items;
};
