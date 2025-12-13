"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function IndustrialShowcase() {
  return (
    <section className="bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-foreground">
              Precision Engineering for <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                Industrial Excellence
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              MSME-registered manufacturer delivering quality industrial spares and machinery components
            </p>
          </>
        }
      >
        <img
          src="/images/cnc-machining.jpg"
          alt="CNC Machining - Precision Industrial Manufacturing"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}

export default IndustrialShowcase;
