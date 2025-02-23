import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MainLayout from "../layouts/mainlayout";
import Content from "../components/content";
import { getUsers } from "../services/userService";
import config from "../config";
import "../assets/styles/home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <MainLayout>
      <Content title="Member">
        {loading && <p>Đang tải...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && users.length > 0 && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
          >
            {users.map((user) => (
              <SwiperSlide key={user.id}>
                <div className="card-members">
                  <img
                    src={`${config.BASE_URL}${user.image}`}
                    alt={user.name}
                    className="image-members"
                  />
                  <p>{user.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Content>

      <Content title="News">
        <p>This is content2</p>
      </Content>
    </MainLayout>
  );
};

export default Home;
