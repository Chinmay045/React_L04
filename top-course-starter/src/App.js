import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const resJson = await res.json();
      setCourses(resJson.data);
      // console.log(resJson)
    }
    catch (err) {
      toast.err("Some Error  occured" + err);
    }
    setLoading(false)
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
