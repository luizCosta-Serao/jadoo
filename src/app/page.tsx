import BestServices from "@/components/Home/BestServices/BestServices";
import HeroHome from "@/components/Home/Hero/HeroHome";
import Steps from "@/components/Home/Steps/Steps";
import TopDestinations from "@/components/Home/TopDestinations/TopDestinations";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <BestServices />
      <TopDestinations />
      <Steps />
    </main>
  );
}
