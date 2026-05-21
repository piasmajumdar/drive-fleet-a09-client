import AvailableCar from "@/components/AvailableCar";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import LowerBanner from "@/components/LowerBanner";
import LowerReviews from "@/components/LowerReviews";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <AvailableCar></AvailableCar>
      <LowerBanner></LowerBanner>
      <LowerReviews></LowerReviews>
    </div>
  );
}
