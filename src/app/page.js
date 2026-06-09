import AdoptPet from "@/components/AdoptPet";
import Banner from "@/components/Banner";
import SuccessStory from "@/components/SuccessStory";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
    <Banner/>
    <AdoptPet/>
    <SuccessStory/>
    </div>
  );
}
