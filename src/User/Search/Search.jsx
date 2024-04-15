import React, { useEffect, useState } from 'react';
import { getAllServiceprovider } from '../../Services/allApi';

function Search() {
    const [data, setData] = useState({
        service: '',
        location: ''
    });
   

    const handleSearch = async () => {
        try {
            // Convert input values to lowercase
            const searchData = {
                service: data.service.toLowerCase(),
                location: data.location.toLowerCase()
            };

            const result = await getAllServiceprovider(searchData);
            console.log(result.data.searchUser);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(()=>{
handleSearch()
    })

    return (
        <>

            <div className='container d-flex justify-content-center mt-5'>
                <div>
                    <input type="text" placeholder='service' className='form-control' value={data.service} onChange={(e) => setData({ ...data, service: e.target.value })} />
                </div>
                <div className='ms-3'>
                    <input type="text" placeholder='location' className='form-control' value={data.location} onChange={(e) => setData({ ...data, location: e.target.value })} />
                </div>
                <div className='ms-3'>
                    <button onClick={handleSearch} className='btn btn-primary'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    { data?.length>0?
                    data.map((item)=>(<div className='col-md-3'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp" className="card-img-top" alt="Chicago Skyscrapers" />
                        <div className="card-body">
                            <h5 className="card-title">{item.service}</h5>
                        </div>
                        <ul className="list-group list-group-light list-group-small">
                            <li className="list-group-item px-4">{item.username}</li>
                            <li className="list-group-item px-4">{item.specialization}</li>
                            <li className="list-group-item px-4">{item.qualification}</li>
                            <li className="list-group-item px-4">{item.mobile}</li>
                            <li className="list-group-item px-4">{item.location}</li>
                            <li className="list-group-item px-4">{item.exp_year}</li>
                            <li className="list-group-item px-4">{item.email}</li>

                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>))
                        
                    
                : <h1>No service provider available</h1>
                }
                </div>
            </div>


        </>
    );
}

export default Search;
