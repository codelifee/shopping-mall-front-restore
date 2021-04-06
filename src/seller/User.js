import React, { useState, useEffect } from "react";
import "./User.css";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import axios from "../axios/axios";
import UserTable from "./UserTable";

import "react-datepicker/dist/react-datepicker.css";
function User() {
  const [startDate, setStartDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const request = await axios
        .get("users/all")
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error));

      return request;
    }

    console.log(users);

    fetchDate();
  }, []);

  return (
    <div className="user">
      <div className="user__container">
        <div className="user__search">
          <div className="user__button_and_input">
            <div className="user__button">
              <button className="user__search-button">Search</button>
              <button className="user__reset-button">Reset</button>
            </div>
            <form className="user__searchbar">
              <input
                type="text"
                className="userProduct__input"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />{" "}
              <FaSearch className="search-icon" />
            </form>
          </div>
          <div className="user__category">
            <p>User Creation Date</p>
            <DatePicker
              className="datepicker_date2"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className="user__info">
          <h2>{users.length} Users</h2>
        </div>
        <div className="user__table_bg">
          <table className="user__table">
            <thead className="user__table_thead">
              <th className="user__table_th1">Customer Id</th>
              <th className="user__table_th2">Name</th>
              <th className="user__table_th3">Phone</th>
              <th className="user__table_th4">Address</th>
            </thead>
            <tbody>
              {users
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.user_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((user) => (
                  <UserTable
                    key={user.user_sequence_id}
                    id={user.user_id}
                    name={user.user_name}
                    phone={user.user_phone}
                    address={user.user_address}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
