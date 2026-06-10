import Adoption from "@/components/Adoption";
import AdoptPet from "@/components/AdoptPet";
import Banner from "@/components/Banner";
import Bread from "@/components/Bread";
import PetCareTips from "@/components/PetCareTips";
import SuccessStory from "@/components/SuccessStory";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <Banner/>
    <AdoptPet/>
    <SuccessStory/>
    <PetCareTips/>
    <Bread/>
    <Adoption/>
    </div>
  );
}
