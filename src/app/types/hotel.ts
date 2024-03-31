import { StaticImageData } from "next/image";

export type Hotel = {
  countryName: string;
  city: {
    cityName: string;
    photo: StaticImageData;
    hotelQuantity: number;
  };
};
