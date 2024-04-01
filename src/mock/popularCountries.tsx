import nantPic from "../../public/images/Nantes-413px.jpg";
import montpellierPic from "../../public/images/Montpellier-413px.jpg";
import parisPic from "../../public/images/Paris-413px.jpg";
import veneziaPic from "../../public/images/venezia-413px.jpg";
import firenzePic from "../../public/images/firenze-413px.jpg";
import romaPic from "../../public/images/roma-413px.jpg";
import sevillaPic from "../../public/images/sevilla-413px.jpg";
import madridPic from "../../public/images/madrid-413px.jpg";
import mallorcaPic from "../../public/images/mallorca-413px.jpg";
import { Hotel } from "@/app/types/hotel";

type PopularCountriesType = Hotel[];

export const popularCountries: PopularCountriesType = [
  {
    countryName: "france",
    countryNameUkr: "Франція",
    city: {
      cityName: "Nantes",
      photo: nantPic,
      hotelQuantity: 10753,
    },
  },
  {
    countryNameUkr: "Франція",
    countryName: "france",
    city: {
      cityName: "Montpellier",
      photo: montpellierPic,
      hotelQuantity: 11386,
    },
  },
  {
    countryNameUkr: "Франція",
    countryName: "france",
    city: {
      cityName: "Paris",
      photo: parisPic,
      hotelQuantity: 12278,
    },
  },
  {
    countryNameUkr: "Італія",
    countryName: "italy",
    city: {
      cityName: "Venezia",
      photo: veneziaPic,
      hotelQuantity: 14120,
    },
  },
  {
    countryNameUkr: "Італія",
    countryName: "italy",
    city: {
      cityName: "Firenze",
      photo: firenzePic,
      hotelQuantity: 7988,
    },
  },
  {
    countryNameUkr: "Італія",
    countryName: "italy",
    city: {
      cityName: "Roma",
      photo: romaPic,
      hotelQuantity: 12809,
    },
  },
  {
    countryNameUkr: "Іспанія",
    countryName: "spain",
    city: {
      cityName: "Sevilla",
      photo: sevillaPic,
      hotelQuantity: 8984,
    },
  },
  {
    countryNameUkr: "Іспанія",
    countryName: "spain",
    city: {
      cityName: "Madrid",
      photo: madridPic,
      hotelQuantity: 15325,
    },
  },
  {
    countryNameUkr: "Іспанія",
    countryName: "spain",
    city: {
      cityName: "Mallorca",
      photo: mallorcaPic,
      hotelQuantity: 9825,
    },
  },
];
