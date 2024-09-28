<<<<<<< HEAD:client/src/pages/CompareCars.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dpmenu from '../components/dropdown';

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCar1, setSelectedCar1] = useState(""); // State for first car selection
  const [selectedCar2, setSelectedCar2] = useState(""); // State for second car selection
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  const parameters = [
    'Sold By', 'Model', 'Year', 'External Color',
    'Fuel', 'Transmission', 'Mileage', 'Additional Features'
  ];

  const cars = [
    { name: 'Maruti 800', 
      img: 'https://img.indianautosblog.com/2021/03/05/maruti-800-ss80-restored-front-3-quarters-fbed.jpg',
      seller: 'Maruti seller', 
      model: 'Hatchback', 
      year: '2010', 
      color: 'Red',
      fuel: 'Petrol',
      gear: 'Manual',
      mileage: '10km/L',
      features: 'Basic features' },

    { name: 'Honda City',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl8ZMGp4zJW58wm-9WLUrUEfdSLySPTJ_nw&s',
      seller: 'Honda dealer',
      model: 'Sedan',
      year: '2018',
      color: 'White',
      fuel: 'Diesel',
      gear: 'Automatic',
      mileage: '15km/L',
      features: 'Sunroof, ABS' },

    { name: 'Toyota Corolla',
      img: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Ftoyota%2Fcorolla%2Ftoyota-corolla.jpg%3Fv%3D5&w=640&q=75',
      seller: 'Toyota dealer',
      model: 'Sedan',
      year: '2020',
      color: 'white',
      fuel: 'Hybrid',
      gear: 'Automatic',
      mileage: '20km/L',
      features: 'Keyless entry, Adaptive cruise control' },

    { name: 'Ford Mustang',
      img: 'https://imgd.aeplcdn.com/1280x720/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80',
      seller: 'Ford dealer',
      model: 'Coupe',
      year: '2019',
      color: 'Blue',
      fuel: 'Petrol',
      gear: 'Manual',
      mileage: '8km/L',
      features: 'V8 engine, Leather seats, Rear camera' },

    { name: 'Tesla Model 3',
      img: 'https://imgd.aeplcdn.com/600x337/n/lnk9cva_1595893.jpg?q=80',
      seller: 'Tesla showroom',
      model: 'Sedan',
      year: '2021',
      color: 'Black',
      fuel: 'Electric',
      gear: 'Automatic',
      mileage: '500km (Full charge)',
      features: 'Autopilot, Touchscreen dashboard, Full Self-Driving' }
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className="page mt-10 mx-32 text-center">
          <div className="text-5xl font-bold my-10">Compare cars</div>
          <div className="mt-8 text-2xl">
            Find the perfect car with our easy-to-use comparison tool! Whether you're looking for a fuel-efficient sedan, a powerful SUV, or a sleek sports car, our platform allows you to compare the latest models side by side. Explore key features like price, performance, safety ratings, and more, helping you make an informed decision. Start comparing today and drive away with confidence!
          </div>
        </div>

        <table className="Tb max-w-5xl mx-auto my-16 text-lg border-2 border-black">
          <tbody>
            <tr>
              <th className="item p-3 border">Name</th>
              <th className="item p-3 border ">
                <div className='flex justify-center items-start h-24'>
                  <Dpmenu onCarSelect={setSelectedCar1} /> {/* Pass handler for first car */}
                </div>
                <div className="flex justify-center items-center">
                  {selectedCar1 && <img src={cars.find(car => car.name === selectedCar1)?.img} className="c-img w-72 max-h-96 mt-5 object-cover border-2 border-gray-300" alt={selectedCar1} />}
                </div>
              </th>
              <th className="item p-3 border">
                <div className='flex justify-center items-start h-24' >
                  <Dpmenu onCarSelect={setSelectedCar2} /> {/* Pass handler for second car */}
                </div>
                <div className="flex justify-center items-center">
                  {selectedCar2 && <img src={cars.find(car => car.name === selectedCar2)?.img} className="c-img w-72 max-h-96 mt-5 object-cover border-2 border-gray-300" alt={selectedCar2} />}
                </div>
              </th>
            </tr>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td className="item p-3 border">{param}</td>
                <td className="item p-3 border">{cars.find(car => car.name === selectedCar1)?.[Object.keys(cars[0])[index + 2]]}</td>
                <td className="item p-3 border">{cars.find(car => car.name === selectedCar2)?.[Object.keys(cars[0])[index + 2]]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
=======
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CompareCars = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car1, car2 } = location.state || {};

  if (!car1 || !car2) {
    return <div>No cars to compare.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-6">Compare Cars</h2>
        <div className="flex gap-6">
          <div className="flex-1 p-4 border rounded-lg">
            <img
              src={car1.img}
              alt={car1.title}
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">{car1.title}</h3>
            <p className="text-lg text-green-600">₹{car1.text}</p>
            <div className="mt-4">{/* Car 1 Details Here */}</div>
          </div>
          <div className="flex-1 p-4 border rounded-lg">
            <img
              src={car2.img}
              alt={car2.title}
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">{car2.title}</h3>
            <p className="text-lg text-green-600">₹{car2.text}</p>
            <div className="mt-4">{/* Car 2 Details Here */}</div>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Back to Car Listings
        </button>
      </div>
    </div>
  );
};

export default CompareCars;
>>>>>>> fbc82be16dfd5f960c3e13deab6b175af89a86f6:client/src/user/CompareCars.jsx
