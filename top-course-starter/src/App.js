import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";

const App = () => {

  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const resJson = await res.json();
        setCourses(resJson.data);
        // console.log(resJson)
      }
      catch (err) {
        console.log("Some Error  occured" + err);
      }
    }
    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses = {courses}/>
    </div>
  );
};

export default App;
