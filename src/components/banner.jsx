import "../assets/styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left-banner">
        <h1 className="banner-title">Welcome to My Website</h1>
        <p className="banner-text">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
      </div>
      <div className="right-banner">
        <img
          src="https://i.pinimg.com/736x/d6/b5/f9/d6b5f99b4971bb44c73f54b44f990d8e.jpg"
          alt="Banner"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default Banner;
