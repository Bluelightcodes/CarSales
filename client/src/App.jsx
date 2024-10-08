import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserHome from "./user/userHome";
import SearchResults from "./user/searchResults";
import SignIn from "./user/signUp";
import WishList from "./user/wishList";
import CarDetails from "./user/car-details"; 
import CompareCars from './user/CompareCars';
import MakeAnOffer from './user/MakeAnOffer';
import DealershipDashboard from './dealership/DealershipDashboard';
import GarageManagement from './dealership/GarageManagement';
import AddNewVehicle from './dealership/AddNewVehicle';
import Profile from "./user/userProfile";
import DealershipSignIn from "./dealership/dealerLogin";
import Feedback from "./user/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        {/* For normal user */}
        <Route path="/" element={<UserHome />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/car-details/" element={<CarDetails />} /> 
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/CompareCars" element={<CompareCars />} />
        <Route path="/makeAnOffer" element={<MakeAnOffer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Feedback" element={<Feedback />} />

        {/* For dealership */}
        <Route path="/dealershipLogin" element={<DealershipSignIn /> } />
        <Route path="/garageManagement/*" element={<GarageManagement/>} />  {/* Add the wildcard here */}
        <Route path="/addNewVehicle" element={<AddNewVehicle/>} />   
        <Route path="/dealershipDashboard" element={<DealershipDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
