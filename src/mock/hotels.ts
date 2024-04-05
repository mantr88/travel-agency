import { Hotel } from "@/app/types/hotel";

import andresenPic from "../../public/images/andresen-413px.jpg";
import viafaroPic from "../../public/images/via-faro-413-px.jpg";
import petrouPic from "../../public/images/petrou-413px.jpg";
import galionPic from "../../public/images/galion-413.jpg";
import molitorPic from "../../public/images/molitor-413.jpg";
import sieraPic from "../../public/images/sierra-413px.jpg";
import petitPic from "../../public/images/petit-413px.jpg";
import granPic from "../../public/images/alicante-413.jpg";
import kviHotelPic from "../../public/images/kvihotel-413px.jpg";

export type Hotels = Hotel[];

export const hotels: Hotels = [
  {
    name: 'Vila Gale Lagos Hotel',
    city: 'Andresen',
    country: 'Portugal',
    rating: 7.1,
    photo: andresenPic,
  },
  {
    name: 'Cala Moresca',
    city: 'Via Faro',
    country: 'Italy',
    rating: 8.6,
    photo: viafaroPic,
  }, {
    name: 'Horison Blu',
    city: 'Petrou Karakousi',
    country: 'Greece',
    rating: 5.9,
    photo: petrouPic,
  }, {
    name: 'Le Galion Hotel',
    city: 'Saint-Martin-de-Re',
    country: 'France',
    rating: 8.4,
    photo: galionPic,
  }, {
    name: 'Molitor Hotel',
    city: 'Paris',
    country: 'France',
    rating: 6.9,
    photo: molitorPic,
  }, {
    name: 'Sierra de Meira',
    city: 'Madrid',
    country: 'Spain',
    rating: 7.4,
    photo: sieraPic,
  }, {
    name: 'Petit Hotel',
    city: 'Madrid',
    country: 'Spain',
    rating: 7.2,
    photo: petitPic,
  }, {
    name: 'Gran Hotel',
    city: 'Alicante',
    country: 'Spain',
    rating: 8.9,
    photo: granPic,
  },
  {
    name: 'KViHotel',
    city: 'Madrid',
    country: 'Spain',
    rating: 7.2,
    photo: kviHotelPic,
  },
]