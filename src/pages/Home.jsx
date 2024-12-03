import React from "react";
import Dashboard from "./Dashboard";
import Navbar from '../components/Navbar';
import PaginatedData from "../components/PaginatedData";
import { useRoute} from '../routes';

const Home = () => {
  const { currentRoute } = useRoute();
  return (
        <div>
          <Navbar />
          {currentRoute === 'todo' &&  <Dashboard />}
          {currentRoute === 'pagination' && <PaginatedData/>}
        </div>
  );
}

export default Home;




