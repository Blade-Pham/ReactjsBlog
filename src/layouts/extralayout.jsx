import Footer from "../components/footer";
import Header from "../components/header";

const ExtraLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
export default ExtraLayout;