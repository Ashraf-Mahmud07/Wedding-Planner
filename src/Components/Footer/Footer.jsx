import { FaArrowRight, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside className='space-y-2'>
                    <p className='text-2xl font-bold'>24 CARROTS<br /><span className='font-normal text-sm text-slate-500'>CATERING EVENTS</span></p>
                    <div className="divide-y-2 divide-green-700 flex flex-col space-y-5">
                        <p className='leading-5'>The event specialists at our Southern <br /> California headquarters are available to <br /> help with every aspect of your event.</p>
                        <p className="pt-5">CALL US 714.942.6000 • 800.717.1545</p>
                    </div>
                    <p>EMAIL US info@24carrots.com</p>
                    <p className=' w-full flex gap-10'>FIND US150 Baker Street East, Costa Mesa, CA 92626</p>
                </aside>
                <nav>
                    <h6 className="footer-title flex gap-2">About <span className='text-orange-800'><FaArrowRight /></span></h6>
                    <a className="link link-hover">About 24 Carrots</a>
                    <a className="link link-hover">Meet the Team</a>
                    <a className="link link-hover">Award and Press</a>
                    <a className="link link-hover">Blog</a>
                </nav>
                <nav>
                    <h6 className="footer-title flex gap-2">Services<span className='text-orange-800'><FaArrowRight /></span></h6>
                    <a className="link link-hover">Gourmet Catering</a>
                    <a className="link link-hover">BarService</a>
                    <a className="link link-hover">Staffing</a>
                    <a className="link link-hover">Production</a>
                </nav>
                <nav>
                    <h6 className="footer-title flex gap-2">Events<span className='text-orange-800'><FaArrowRight /></span></h6>
                    <a className="link link-hover">Weddings</a>
                    < a className="link link-hover">Corporate</a>
                    <a className="link link-hover">Social</a>
                    <a className="link link-hover">Gallery</a>
                </nav>
                <nav>
                    <h6 className="footer-title flex gap-2">Venues<span className='text-orange-800'><FaArrowRight /></span></h6>
                    <h6 className="footer-title flex gap-2">Careers<span className='text-orange-800'><FaArrowRight /></span></h6>
                    <h6 className="footer-title flex gap-2">Contact<span className='text-orange-800'><FaArrowRight /></span></h6>

                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover flex items-center gap-2"><span><FaFacebookF /></span>Facebook</a>
                    <a className="link link-hover flex items-center gap-2"><span><FaInstagram /></span>Instagram</a>
                    <a className="link link-hover flex items-center gap-2"><FaPinterest />Pinterest</a>
                    <a className="link link-hover flex items-center gap-2"><span><FaLinkedin /></span>Linkedin</a>
                    <span className="mt-28">Site & design by Dooley Creative Co.</span>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;