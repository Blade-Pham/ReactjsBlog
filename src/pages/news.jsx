import ExtraLayout from "../layouts/extralayout";
import { useState, useEffect } from "react";
import { getNewss } from "../services/newssService";
import "../assets/styles/news.css";
const News = () => {
      const [news, setNews] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
          const fetchNewss = async () => {
              try {
                const data = await getNewss();
                console.log("Fetched news:", data);
                setNews(data);
              } catch (err) {
                setError(err.message || "Lỗi tải tin tức");
              } finally {
                setLoading(false);
              }
            };
          fetchNewss();
        }, []);
    return (
        <ExtraLayout>
            <h1>News</h1>
            {loading && <p>Đang tải...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul className="list-articles">
                
            {news.map((item) => (
                <div className="card-articles">
                <li key={item.id}>
                <h3>{item.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: item.article }} />
                <p>{item.created_at}</p>
              </li>
              </div>
            ))}
            
            </ul>
        </ExtraLayout>
    );
}
export default News;