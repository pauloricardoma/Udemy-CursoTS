type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a'];

const arrayFilteredOriginal = array.filter((value) => value < 5);
console.log(arrayFilteredOriginal);

const arrayFiltered = myFilter(array, (value) => value < 5);
console.log(arrayFiltered);
