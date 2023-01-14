
import './App.css'
import Navbar from './Components/navbar'
import HeroSection from './Components/herosection'
import Card from './Components/card'
import data from './data'

// title = {object.title}
//       location = {object.location}
//       img = {`./Images/${object.coverImg}`} 
//       price={object.price}
//       rating = {object.stats.rating}
//       reviewCount = {object.stats.reviewCount} 
//       openSpots = {object.openSpots}

const cardArray = data.map(object => {
  return (
    <Card
      key = {object.title}
      {...object}
    />
  )
})

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <section className='card-list'>
        {cardArray}
      </section>      
      
    </div>
  )
}

export default App
