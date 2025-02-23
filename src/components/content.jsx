import "../assets/styles/content.css";
const Content = ({title,link, children}) => {
    return (
        <div>
            <div className="headline">
                <h1 className="title">{title}</h1>              
                <a href="{link}" className="btn-viewmore">
                    <p>VIew More</p>
                </a>
                
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};
export default Content;