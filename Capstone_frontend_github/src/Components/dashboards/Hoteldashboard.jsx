import React, { useEffect, useState } from "react";
import Usernav from "../navFooter/UserNav";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Hoteldashboard.css";

export default function Hoteldashboard() {
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantName, setRestaurantName] = useState("");

  useEffect(() => {
    // axios
    //   .get("http://localhost:8080/restaurant/your-endpoint-here")
    //   .then((response) => {
    //     setRestaurantName(response.data.name); // Assuming the API response has a "name" field
    //   })
    //   .catch((e) => {
    //     console.log("Error in fetching restaurant name", e);
    //   });

    axios
      .get("http://localhost:8080/menu/viewallitems")
      .then((response) => {
        setMenus(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Error in fetching details", e);
        setIsLoading(false);
      });
  }, []);
  // Function to handle delete operation
  // const handleDelete = (menuId) => {
  //     axios
  //       .delete(`http://localhost:8080/menu/remove/${menuId}`)
  //       .then(() => {
  //         // Update the state to remove the deleted menu item
  //         setMenus((prevMenus) => prevMenus.filter((menu) => menu.menu_id !== menuId));
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting menu item:", error);
  //       });
  //   };

  //update Function.

  return (
    <>
      <Usernav />
      <div className="row mt-4">
        <div className="col-sm-12 col-md-8 d-flex align-items-center">
          <h2 className="font-weight-bold"></h2>
        </div>
        <div className="col-sm-12 col-md-4">
          <h5>
            Welcome, <span className="font-weight-bold"></span>
          </h5>
          <Link to="/menu-details">
            <button className="btn btn-danger">Add Menu</button>
          </Link>
        </div>
        <Table className="dashboard-table" striped bordered hover>
          <thead>
            <tr>
              <th className="menu-id">Menu ID</th>
              <th className="category">Category</th>
              <th className="dish-name">Dish Name</th>
              <th className="quantity">Quantity</th>
              <th className="price">Price</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          {isLoading ? (
            <tbody>
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {menus.map((menu) => (
                <tr key={menu.menu_id}>
                  <td className="menu-id">{menu.menu_id}</td>
                  <td className="category">{menu.category}</td>
                  <td className="dish-name">{menu.dish_name}</td>
                  <td className="quantity">{menu.quantity}</td>
                  <td className="price">INR.{menu.dish_price}</td>
                  <td className="actions">
                    <Link to={`/update-menu/${menu.menu_id}`}>
                      <button className="btn btn-primary">Update</button>
                    </Link>
                    &nbsp;
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleDelete(menu.menu_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </Table>
      </div>
    </>
  );
}
