import { PER_DAY_FIELDS, PER_NIGHT_FIELDS } from "./constants";
import { IDisneylandTrip } from "./types";

export const capitalizeFirstLetter = (str: string): string => {
  if (str.length === 0) {
    return str;
  }

  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const fieldToDisplayName = (str: string): string =>{
  let displayName = str
    .split("-")
    .map((fragment) => capitalizeFirstLetter(fragment))
    .join(" ");

    if(PER_NIGHT_FIELDS.includes(str)){
        return `${displayName} per night`
    } else if(PER_DAY_FIELDS.includes(str)){
        return `${displayName} per day`
    } else return displayName
}

export const getEmptyDisneylandTrip = (): IDisneylandTrip => {
  return {
    flight: 0,
    hotel: 0,
    "park-tickets": 0,
    food: 0,
    car: 0,
    parking: 0,
    souvenirs: 0,
    days: 0,
    total: 0,
  };
};
