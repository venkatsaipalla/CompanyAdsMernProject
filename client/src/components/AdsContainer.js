import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Card from "./Card";
import "./AdsContainer.css";


const AdsContainer = () => {
  const getData = async () => {
    //geting all details after populating
    const { data } = await axios.get(`http://localhost:3004/api/ads/all`);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const [formData, setFormData] = useState({
    search:''
  });

  const [searchResults, setSearchResults] = useState([]);
  var { search } = formData;
  const [data, setData] = useState([]);

  const onKeyChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    var x = data.filter((eachUser) => {
      let caseCheck = e.target.value.toUpperCase();
      let pText=eachUser.primaryText.toUpperCase();
      let heading=eachUser.headline.toUpperCase();
      let desc=eachUser.description.toUpperCase();
      let cName=eachUser.companyId.name.toUpperCase();
      if (
        
        pText.includes(caseCheck) ||
        heading.toUpperCase().includes(caseCheck) ||
        desc.includes(caseCheck)||
        cName.includes(caseCheck)
      ) {
        // console.log(caseCheck)
        return true;
      }
      else{
        return false;
      }
    });
    setSearchResults(x);
  };
  return (
    <div>
       <div class="search-box">
      <input
      placeholder="Enter search"
        type="search"
        name="search"
        onChange={(e) => onKeyChange(e)}

        className="input-search"
      />
      </div>
      <div className="container-2">
      
        {search.length === 0
          ? data.map((eachItem) => (
              <Card key={eachItem._id} companyDetails={eachItem} />
              
            ))
          : searchResults.length===0?<h1><span className="noResults">No results Found</span></h1>
          :searchResults.map((eachItem) => (
              <Card key={eachItem._id} companyDetails={eachItem} />
            ))}
      </div>
    </div>
  );
};

export default AdsContainer;
