import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const [search,setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };
  
  const [count, setCount] = useState(0);

  const parameters = [
    'Sold By', 'Model', 'Year', 'External Color',
    'Fuel', 'Transmission', 'Mileage', 'Additional Features'
  ];

  const car1 = ['Maruti 800', 'https://img.indianautosblog.com/2021/03/05/maruti-800-ss80-restored-front-3-quarters-fbed.jpg',
    'Maruti seller', 'Hatchback', '2010', 'Red',
    'Petrol', 'Manual', '10km/L', 'Basic features'
  ];

  const car2 = ['Honda City', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVl8ZMGp4zJW58wm-9WLUrUEfdSLySPTJ_nw&s',
    'Honda dealer', 'Sedan', '2018', 'White',
    'Diesel', 'Automatic', '15km/L', 'Sunroof, ABS'
  ];

  return (
    <>
      <div>
        <div className="header">
          <div className="Navbar">
            <div className="nav-links flex justify-between items-center px-12 py-5 border-b-2 border-black bg-white fixed top-0 w-full z-10">
              <div className="box1 flex space-x-5 items-center">
                <div className="logo">Logo</div>
                <div className="sbar">
                  <input type="text" placeholder="Search..." className="w-80 p-2 border-2 border-gray-300 focus:bg-gray-100 outline-none" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
              </div>
              <div className="box2 flex space-x-8 items-center">
                <a href="/wishlist" className="e1 hover:underline" onClick={()=> navigate("/wishlist")}>Wishlist</a>
                <a href="/" className="e1 hover:underline">Location</a>
                <button className="button border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors" onClick={() => navigate("/signIn")} target="_blank">Sign In</button>
              </div>
            </div>
          </div>
        </div>

        <div className="page mt-44 mx-32 text-center">
          <div className="text-5xl font-bold my-10">
            Compare cars
          </div>
          <div className="mt-8 text-2xl">
            Find the perfect car with our easy-to-use comparison tool! Whether you're looking for a fuel-efficient sedan, a powerful SUV, or a sleek sports car, our platform allows you to compare the latest models side by side. Explore key features like price, performance, safety ratings, and more, helping you make an informed decision. Start comparing today and drive away with confidence!
          </div>
        </div>

        <table className="Tb max-w-5xl mx-auto my-16 text-lg border-2 border-black">
          <tbody>
            <tr>
              <th className="item p-3 border">{/* Name */}Name</th>
              <th className="item p-3 border">
                <div>
                  {car1[0]}
                  <img src={car1[1]} className="c-img w-72 max-h-96 mt-5 object-cover border-2 border-gray-300" alt="Car 1" />
                </div>
              </th>
              <th className="item p-3 border">
                <div>
                  {car2[0]}
                  <img src={car2[1]} className="c-img w-72 max-h-96 mt-5 object-cover border-2 border-gray-300" alt="Car 2" />
                </div>
              </th>
            </tr>
            {parameters.map((param, index) => (
              <tr key={index}>
                <td className="item p-3 border">{param}</td>
                <td className="item p-3 border">{car1[index + 2]}</td>
                <td className="item p-3 border">{car2[index + 2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
