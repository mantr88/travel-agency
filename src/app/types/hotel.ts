import { StaticImageData } from "next/image";

export type Hotel = {
  name: string;
  city: string;
  country: string;
  rating: number;
  photo: StaticImageData;
}