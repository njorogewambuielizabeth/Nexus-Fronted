import React from 'react'
// import Register from './register/page'
import CustomerData from './components/customerData/page'
import SearchBar from './components/searchBar'
import Cards from './components/cards'
import Details from './components/details'


export default function Home() {
  return (
    <main>
      <div>
      {/* <Register/> */}
      {/* <SearchBar/> */}
      <Cards/>
      <CustomerData/>
      <Details/>
      </div>
    </main>
  )
}
