import isObjectEmpty from '../isObjectEmpty';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Örnek kullanım
// const params = { name: 'John', age: 30, city: '' };
// const queryString = queryMaker(params);

// console.log(queryString); // "?name=John&age=30"
const queryMaker = (params: Record<string, any>): string => {
  if (isObjectEmpty(params)) return '';

  const keys = Object.keys(params);
  let query = '';
  const first = keys.shift();

  if (first) {
    query += '?' + first + '=' + params[first];
  }

  keys.forEach((key) => {
    if (params[key] !== '') query += '&' + key + '=' + params[key];
  });

  return query;
};

export default queryMaker;
