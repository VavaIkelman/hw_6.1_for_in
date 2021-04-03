export default function orderByProps(obj, array) {
  const sortByProps = [];
  const sortByLetters = [];

  for (const key in obj) {
    if (array.includes(key)) {
      sortByProps.push({
        key,
        value: obj[key],
      });
    } else {
      sortByLetters.push({
        key,
        value: obj[key],
      });
    }
  }
  sortByProps.sort((a, b) => array.indexOf(a.key) - array.indexOf(b.key));
  sortByLetters.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...sortByProps, ...sortByLetters];
}
