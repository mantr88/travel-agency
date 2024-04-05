import AdsByCountries from "@/app/components/AdsByCountries/AdsByCountries";
import Criteria from "@/app/components/Criteria/Criteria";
import Hero from "@/app/components/Hero/Hero";
import { LastAds } from "@/app/components/LastAds/last-ads.component";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Criteria />
      <AdsByCountries />
      <LastAds />
    </>
  );
}
