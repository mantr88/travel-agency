import React from "react";
import Link from "next/link";

import { popularCountries } from "../../../mock/popularCountries";

import css from "./AdsByCountries.module.css";
import gstyles from "../../page.module.css";
import { groupByCountries } from "@/app/helpers/groupedByCountries";
import HotelsByCountriesList from "../HotelsByCountriesList/HotelsByCountriesList";
import { Hotel } from "@/app/types/hotel";
import { randomUUID } from "crypto";

export default function AdsByCountries() {
  const groupedHotels: Record<string, Hotel[]> = groupByCountries(
    popularCountries,
    "countryName"
  );

  return (
    <section className={gstyles.container}>
      <h2 className={css.title}>Найпопулярніші країни для подорожей</h2>
      <ul>
        <HotelsByCountriesList hotels={groupedHotels.france} />
        <HotelsByCountriesList hotels={groupedHotels.italy} />
        <HotelsByCountriesList hotels={groupedHotels.spain} />
      </ul>
    </section>
  );
}
