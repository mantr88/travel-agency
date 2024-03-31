import nantPic from "../../public/images/Nantes-413px.jpg";
import montpellierPic from "../../public/images/Montpellier-413px.jpg";
import parisPic from "../../public/images/Paris-413px.jpg";
import veneziaPic from "../../public/images/venezia-413px.jpg";
import firenzePic from "../../public/images/firenze-413px.jpg";
import romaPic from "../../public/images/roma-413px.jpg";
import { Hotel } from "@/app/types/hotel";

type PopularCountriesType = Hotel[];

export const popularCountries: PopularCountriesType = [
  {
    countryName: "france",
    city: {
      cityName: "Nantes",
      photo: nantPic,
      hotelQuantity: 10753,
    },
  },
  {
    countryName: "france",
    city: {
      cityName: "Montpellier",
      photo: montpellierPic,
      hotelQuantity: 11386,
    },
  },
  {
    countryName: "france",
    city: {
      cityName: "Paris",
      photo: parisPic,
      hotelQuantity: 12278,
    },
  },
  {
    countryName: "italy",
    city: {
      cityName: "Venezia",
      photo: veneziaPic,
      hotelQuantity: 14120,
    },
  },
  {
    countryName: "italy",
    city: {
      cityName: "Firenze",
      photo: firenzePic,
      hotelQuantity: 7988,
    },
  },
  {
    countryName: "italy",
    city: {
      cityName: "Roma",
      photo: romaPic,
      hotelQuantity: 12809,
    },
  },
];
