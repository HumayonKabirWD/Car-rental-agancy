"use client"

import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SerchBar from "@/components/SerchBar";

export default function Home() {


  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Cataloge</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SerchBar/>

          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

      </div>
    </main>
  );
};
