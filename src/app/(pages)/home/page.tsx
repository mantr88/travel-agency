import AdsByCountries from "@/app/components/AdsByCountries/AdsByCountries";
import Criteria from "@/app/components/Criteria/Criteria";
import Hero from "@/app/components/Hero/Hero";
import React from "react";

export interface PageProps {
  children: React.ReactNode;
}

export default function Home({ children }: PageProps) {
  return (
    <>
      <Hero />
      <Criteria />
      <AdsByCountries />
    </>
  );
}
