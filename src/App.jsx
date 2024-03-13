import Footer from "./components/Footer";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";
const App = () => {
    return (
        <div className="text-2xl px-12 py-8 bg-[#fcfcfc]">
            <Testimonials />
            <Story />
            <Footer />
        </div>
    );
};

export default App;
