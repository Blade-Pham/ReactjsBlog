import "../assets/styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left-banner">
        <h1 className="banner-title">Welcome to My Blog</h1>
        <p className="banner-text">
          Đây là trang blog cá nhân của nhóm tôi, nơi chúng tôi chia sẻ kiến thức
        </p>
      </div>
      <div className="right-banner">
        <img
          src="https://i.pinimg.com/736x/d9/68/d1/d968d12fab15d97586b4a405f6767a51.jpg"
          alt="Banner"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
