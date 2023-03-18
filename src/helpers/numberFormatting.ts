export const numberFormatting = (value: number) => {
  return value.toLocaleString('en', {
    useGrouping: true,
  });
};
