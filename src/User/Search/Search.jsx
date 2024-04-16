import React, { useEffect, useState } from "react";
import { getAllServiceprovider } from "../../Services/allApi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Header from "../Header/Header";

function Search() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    service: "",
    location: "",
  });

  useEffect(() => {
    if (data.length === 0) {
      Swal.fire({
        title: "For Searching service Fill the form",
        icon: "warning",
      });
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.service) {
      Swal.fire({
        title: "Please enter the service",
        icon: "warning",
      });
    } else if (!searchQuery.location) {
      Swal.fire({
        title: "Please enter the location",
        icon: "warning",
      });
    } else {
      try {
        // Convert input values to lowercase
        const searchData = {
          service: searchQuery.service.toLowerCase(),
          location: searchQuery.location.toLowerCase(),
        };

        const result = await getAllServiceprovider(searchData);
        if (result.status >= 200 && result.status <= 300) {
          setData(result.data.searchUser);
          console.log(result.data.searchUser);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
    <Header/>
      <div className="container d-flex justify-content-center mt-5">
        <div>
          <input
            type="text"
            placeholder="service"
            className="form-control"
            value={searchQuery.service}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, service: e.target.value })
            }
          />
        </div>
        <div className="ms-3">
          <input
            type="text"
            placeholder="location"
            className="form-control"
            value={searchQuery.location}
            onChange={(e) =>
              setSearchQuery({ ...searchQuery, location: e.target.value })
            }
          />
        </div>
        <div className="ms-3">
          <button onClick={handleSearch} className="btn btn-primary">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="container mt-5">
        {searchQuery === null ? (
          <h1 className="text center mt-5 p-2">Search your need</h1>
        ) : (
          <div className="row">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div key={index} className="col-md-4 p-3">
                  <div className="card shadow text-center" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{item.service}</h5>
                    </div>
                    <ul className="list-group list-group-light list-group-small">
                      <li className="list-group-item px-4">Username : {item.username}</li>
                      <li className="list-group-item px-4">
                      Specialization : {item.specialization}
                      </li>
                      <li className="list-group-item px-4">
                      Qualification : {item.qualification}
                      </li>
                      <li className="list-group-item px-4">Phone no : {item.mobile}</li>
                      <li className="list-group-item px-4">Location : {item.location}</li>
                      <li className="list-group-item px-4">Year of experience : {item.exp_year}</li>
                      <li className="list-group-item px-4">Email : {item.email}</li>
                    </ul>
                    <div className="card-body">
                     <Modal service={item} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-danger">
                No service provider available
              </h1>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
