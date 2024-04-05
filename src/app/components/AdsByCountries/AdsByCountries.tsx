import React from "react";
import Link from "next/link";

import { popularCountries } from "../../../mock/popularCountries";

import css from "./AdsByCountries.module.css";
import gstyles from "../../page.module.css";
import { groupByCountries } from "@/app/helpers/groupedByCountries";
import CitiesByCountriesList from "../CitiesByCountriesList/CitiesByCountriesList";
import { City } from "@/app/types/city";
import { randomUUID } from "crypto";

export default function AdsByCountries() {
  const groupedCities: Record<string, City[]> = groupByCountries(
    popularCountries,
    "countryName"
  );

  return (
    <section className={gstyles.container}>
      <h2 className={css.title}>Найпопулярніші країни для подорожей</h2>
      <ul>
        <CitiesByCountriesList cities={groupedCities.france} />
        <CitiesByCountriesList cities={groupedCities.italy} />
        <CitiesByCountriesList cities={groupedCities.spain} />
      </ul>
    </section>
  );
}
