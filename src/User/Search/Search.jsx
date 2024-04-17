import React, { useEffect, useState } from "react";
import { getAllServiceproviderApi } from "../../Services/allApi";
import Modal from "./Modal";
import Header from "../Header/Header";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    service: "",
    location: ""
  });

  const getAllServiceprovider = async () => {
    try {
      const result = await getAllServiceproviderApi();
      setData(result.data.allServiceProviders);
    } catch (error) {
      console.error("Error fetching service providers:", error);
    }
  };

  useEffect(() => {
    getAllServiceprovider();
  }, []);

  const filteredData = data.filter((item) => {
    const serviceMatch = item.service.toLowerCase().includes(search.service.toLowerCase());
    const locationMatch = item.location.toLowerCase().includes(search.location.toLowerCase());
    return serviceMatch && locationMatch;
  });
  

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center mt-5">
        <div>
          <input
            type="text"
            placeholder="service"
            className="form-control"
            value={search.service}
            onChange={(e) => setSearch({ ...search, service: e.target.value })}
          />
        </div>
        <div className="ms-3">
          <input
            type="text"
            placeholder="location"
            className="form-control"
            value={search.location}
            onChange={(e) => setSearch({ ...search, location: e.target.value })}
          />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div key={index} className="col-md-4 p-3">
                <div className="card shadow text-center" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ textTransform: 'uppercase' }}>{item.service}</h5>
                  </div>
                  <ul className="list-group list-group-light list-group-small">
                    <li className="list-group-item px-4">Username : {item.username}</li>
                    <li className="list-group-item px-4">Specialization : {item.specialization}</li>
                    <li className="list-group-item px-4">Qualification : {item.qualification}</li>
                    <li className="list-group-item px-4">Phone no : {item.mobile}</li>
                    <li className="list-group-item px-4">Location : {item.location}</li>
                    <li className="list-group-item px-4">Year of experience : {item.exp_year}</li>
                    <li className="list-group-item px-4">Email : {item.email}</li>
                  </ul>
                  <div className="card-body">
                    <Modal servicess={item} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-danger">No service provider available</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
