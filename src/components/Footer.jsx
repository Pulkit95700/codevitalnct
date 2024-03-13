import LogoImg from "../assets/logo.png";
import Copyright from "./Copyright";
const Footer = () => {
    return (
        <footer className="bg-white mt-32 ">
            <div className="mx-auto w-full max-w-screen-xl flex flex-col lg:flex-row gap-8">
                <div className="footer-left mt-8 flex flex-col gap-4 w-full md:w-48">
                    <img src={LogoImg} className="w-[80px]" />
                    <p
                        className="text-[1.1rem] w-full lg:w-48"
                        style={{ lineHeight: "24px" }}
                    >
                        Savor the artistry where every dish is a culinary
                        masterpiece
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 flex-1">
                    <div>
                        <h2 className="mb-6 text-[1.1rem] font-semibold text-gray-900">
                            Useful Links
                        </h2>
                        <ul className="text-[#55555] text-sm font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Careers
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Brand Center
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-[1.1rem] font-semibold text-gray-900">
                            Help center
                        </h2>
                        <ul className="text-[#55555] text-sm font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Discord Server
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-[1.1rem] font-semibold text-gray-900">
                            Legal
                        </h2>
                        <ul className="text-[#55555] text-sm font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Licensing
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    );
};

export default Footer;
