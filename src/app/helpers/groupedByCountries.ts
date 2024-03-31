import { Hotel } from "../types/hotel";

export function groupByCountries(
  // objectArray: Hotel[],
  // property: Partial<Hotel>
  objectArray: any[],
  property: string
) {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
