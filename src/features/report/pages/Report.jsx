import ConditionToggle from "../components/ConditionToggle"
import PetsSlider from "../components/PetsSlider"
import ReportActions from "../components/ReportActions"
import ReportHeader from "../components/ReportHeader"
import YourLocation from "../components/YourLocation"

function Report() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='bg-gray-50 min-h-screen pb-20'>
        <ReportHeader />

        <YourLocation />

        <ConditionToggle />

        <PetsSlider />

        <ReportActions />
      </div>
    </div>
  )
}

export default Report
