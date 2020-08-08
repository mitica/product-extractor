export const asyncIteratorToArray = async <T>(iterator: AsyncIterable<T>) => {
  const list: T[] = [];
  for await (const item of iterator) {
    list.push(item);
  }

  return list;
};

export const delay = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));
