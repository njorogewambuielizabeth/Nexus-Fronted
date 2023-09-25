import Image from 'next/image'
import Dashboard from './Components/dashboards'
import SectionWithCards from './Components/cards'
import ChartComponent from './Components/powerGraph'
import DetailsSection from './Components/details'
import SearchBar from './Components/searchBar'



export default function Home() {

  return (
    <main>
     <Dashboard/>
    <SectionWithCards/>
    <ChartComponent/>
    <DetailsSection/>
    <SearchBar  />
    
    



    </main>
  )
}
