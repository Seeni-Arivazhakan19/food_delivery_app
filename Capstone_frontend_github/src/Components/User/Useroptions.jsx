import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal
import axios from "axios"; // Import axios
import "./Useroptions.css"; // Import your CSS file for styling

export default function Useroptions() {
  // Function to fetch user data and display it in Swal
  const handleProfileClick = async () => {
    try {
      // Fetch user data from your API (replace with your API endpoint)
      const response = await axios.get("http://localhost:8080/customer/view/1");

      // Extract user details from the response
      const {
        customer_id,
        customer_emailId,
        customer_phone_no,
        customer_name,
        address,
        city, // Assuming these fields are in the response
        zipcode, // Assuming these fields are in the response
      } = response.data;

      // Display user details in Swal dialog
      Swal.fire({
        title: `User Profile`,
        html: `
          <p><strong>User ID:</strong> ${customer_id}</p>
          <p><strong>User Email:</strong> ${customer_emailId}</p>
          <p><strong>User Mobile Number:</strong> ${customer_phone_no}</p>
          <p><strong>User Name:</strong> ${customer_name}</p>
          <p><strong>User Address:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Zipcode:</strong> ${zipcode}</p>
        `,
        customClass: {
          confirmButton: "ok-button",
        },
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <nav className="user-options">
      <ul>
        <li>
          <Link to="#" onClick={handleProfileClick}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/orders">Order History</Link>
        </li>
        <li>
          <Link to="/update">Update Details</Link>
        </li>
      </ul>
    </nav>
  );
}
