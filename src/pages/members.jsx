import ExtraLayout from "../layouts/extralayout";
import "../assets/styles/members.css";
import React, { useEffect, useState } from "react";
import { getUsers } from "../services/usersService";
import config from "../config";
import { useNavigate } from "react-router-dom";

const Members = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const navigate = useNavigate();
        useEffect(() => {
          const fetchUsers = async () => {
            try {
              const data = await getUsers();
              console.log("Fetched users:", data);
              setUsers(data);
            } catch (err) {
              setError(err.message || "Lỗi tải dữ liệu");
            } finally {
              setLoading(false);
            }
          };
          fetchUsers();
        }, []);
    return (
        <ExtraLayout>
            <h1>Members</h1>
            {loading && <p>Đang tải...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul className="list-users">
            {users.map((item) => (
                <div className="card-users" onClick={() => navigate(`/member/${item.id}`)} style={{ cursor: 'pointer' }}>
                <li key={users.id}>
                
                
                <img
                  src={`${config.BASE_URL}${item.image}`}
                
                  className="image-users"></img>
                <h4>{item.name}</h4>
                
              </li>
              </div>
            ))}
          </ul>
        </ExtraLayout>
    );
}
export default Members;