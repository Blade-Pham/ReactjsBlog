import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MainLayout from "../layouts/mainlayout";
import Content from "../components/content";
import { getUsers } from "../services/usersService";
import { getNewss } from "../services/newssService";
import config from "../config";
import "../assets/styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [news, setNews] = useState([]);
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
    const fetchNewss = async () => {
        try {
          const data = await getNewss();
          console.log("Fetched news:", data);
          setNews(data.slice(0, 3)); // Lấy 3 bài viết gần nhất
        } catch (err) {
          setError(err.message || "Lỗi tải tin tức");
        }
      };

    fetchUsers();
    fetchNewss();
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
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {users.map((user) => (
              <SwiperSlide key={user.id}>
                 <div className="card-members" onClick={() => navigate(`/member/${user.id}`)} style={{ cursor: 'pointer' }}>
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
        {news.length === 0 ? (
          <p>Không có tin tức nào.</p>
        ) : (
          <ul className="list-news">
            {news.map((item) => (
                <div className="card-news">
                <li key={item.id}>
                
                
                <img
                  src={`${config.BASE_URL}${item.image}`}
                  alt={item.title}
                  className="image-news"></img>
                <h4>{item.title}</h4>
                
              </li>
              </div>
            ))}
          </ul>
        )}
      </Content>
    </MainLayout>
  );
};

export default Home;
