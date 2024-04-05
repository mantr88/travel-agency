import { StaticImageData } from "next/image";

export type City = {
  countryName: string;
  countryNameUkr: string;
  city: {
    cityName: string;
    photo: StaticImageData;
    hotelQuantity: number;
  };
};
