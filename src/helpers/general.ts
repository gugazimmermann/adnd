export const CapitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const ShowList = (list: string[]): string => {
  const capitalize = list.map((s) => {
    let text = s;
    if (s.includes('/')) {
      const rearrange = s.split('/');
      const rearrangeMap = rearrange.map((r) =>  CapitalizeFirstLetter(r))
      text = rearrangeMap.join('/');
    } else {
      text = CapitalizeFirstLetter(s);
    }
    return text
  });
  return capitalize.join(", ");
};