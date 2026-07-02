import FeaturedServices from "./FeaturedServices";
import FindingPetsCard from "./FindingPetsCard";
import PetRegister from "./PetRegister";

export default function HomeSidebar() {
  return (
    <div className='lg:col-span-4 space-y-6'>
      <FindingPetsCard />
      
      <FeaturedServices />
      
      <PetRegister />
    </div>
  )
}
