import moment from "moment";

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const reformatDate = (date: string) => {
  let momentInstance = moment(date);
  return momentInstance.format("DD/MM/YYYY");
};
