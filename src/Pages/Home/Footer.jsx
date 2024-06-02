import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="p-5 lg:p-16 bg-black text-white">
            <footer className="footer flex justify-center lg:mx-24 ">
                <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
                    <aside className="lg:row-span-2 col-span-2 md:col-span-4 lg:col-span-1 mb-6 flex flex-col justify-center space-y-2 h-full">
                        <div className="flex items-center mb-3">
                        <Link to="/">
                            <div className="flex flex-col justify-center relative items-center gap-1">
                                <img className="h-28 lg:h-36  p-2" src="logo2.png" alt="" />
                                <h1 className="absolute bottom-2 lg:bottom-0 font-bold lg:text-3xl ">Medi<span className="text-red-600 ">Care</span></h1>
                            </div>
                        </Link>
                        </div>
                        <p>Give your hand to serve the people.</p>
                    </aside>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Local camps</a>
                        <a className="link link-hover">Urban camps</a>
                        <a className="link link-hover">Join with us</a>
                        <a className="link link-hover">Professional</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Work ethics</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form className="mt-10 hidden lg:block">
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="form-control">
                            <label className="label">
                                <span className="">Enter your email address</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
            <div>
                <footer className="footer footer-center mt-20 -mb-3 lg:-mb-12">
                    <aside>
                        <p>Copyright © 2024 - All right reserved by CDA  Industries Ltd.</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;