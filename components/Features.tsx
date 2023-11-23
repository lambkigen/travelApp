import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container w-full relative flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/camp.svg" alt="camp" width={50} height={50} />
            <h2 className="capitalize bold-40 lg:bold-64">our features</h2>
          </div>

          <ul className="mt-10 gap-10 grid md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                variant={feature.variant}
                desc={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface featureProps {
  title: string;
  icon: string;
  variant: string;
  desc: string;
}

const FeatureItem = ({ title, icon, variant, desc }: featureProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`rounded-full p-4 lg:p-7 bg-green-50`}>
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{desc}</p>
    </li>
  )
};

export default Features;
