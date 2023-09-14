import React, { useEffect, useState } from "react";
import Usernav from "../navFooter/UserNav";
import "../dashboards/Userdashboard.css";
import Swal from "sweetalert2";
import axios from "../../Axios";
import Useroptions from "../User/Useroptions";

export default function Userdashboard() {
  // const [query, setQuery] = useState("");
  // const [hotels, setHotels] = useState([]);


  // const handleQueryInput = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);
  // };

  // const handleSearchUsers = (e) =>{
  //   e.preventDefault();
  // }

  // useEffect(() => {
  //   // Function to fetch user data when the component mounts
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "/customer/view/2"
  //       );
  //       console.log("response", response);
  //       Swal.fire({
  //         title: "User Profile",
  //         html: `<p>Name: ${response.customer_name
  //         }</p><p>Email: ${response}</p>`,
  //         customClass: {
  //           confirmButton: "ok-button",
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData(); // Call the function when the component mounts
  // }, []); // Empty dependency array to run the effect only once

  const [query, setQuery] = useState("");

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearchUsers = (e) => {
    e.preventDefault();
    // Perform your search logic here using the "query" state value.
    // This code just alerts the search query for demonstration purposes.
    alert("Search Query: " + query);
  };

  return (
    <>
      <Usernav />
      <Useroptions/>
      <div className="search-bar">
        <form onSubmit={handleSearchUsers}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleQueryInput}
          />
          <button type="submit" style={{ background: "crimson", color: "white" }}>
            Search
          </button>
        </form>
      </div>

    </>
  );
}
