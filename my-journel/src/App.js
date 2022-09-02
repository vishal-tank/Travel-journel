import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import './index.css'
import locationData from "./data.js"

function App() {
  const locations=locationData.map(location=>{
    return (
        <Card
        img={location.imageUrl}
        country={location.countryLocation}
        googleMapUrl={location.googleMapsUrl}
        location={location.title}
        startDate={location.startDate}
        endDate={location.endDate}
        description={location.description}
        />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {locations}
    </div>
  );
}

export default App;
