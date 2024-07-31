"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navheader from '../_components/Navheader';


function Dashboard() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the backend API using Axios
        axios.get('http://18.209.16.118/get_all')
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <main className="bg-background h-screen  ">
            <Navheader />
            <div className="container mx-auto mt-8 text-white font-bold text-center">
                <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="w-full border-collapse border-2 border-white">
                        <thead>
                            <tr>
                                <th className="border border-white p-2">Bottle Number</th>
                                <th className="border border-white p-2">Date</th>
                                <th className="border border-white p-2">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    {/* <td className="border border-white p-2">{item.bottle_number}</td>
                                    <td className="border border-white p-2">{item.date}</td>
                                    <td className="border border-white p-2">{item.time}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </main>
    );
}

function App() {
    return (
        <div className="App">
            <Dashboard />
        </div>
    );
}

export default App;
