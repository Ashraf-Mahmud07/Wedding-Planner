
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-96 py-8 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                    </div>
                    <div className="flex gap-6 ">
                        <h1 className="hover:text-[#d37b27] cursor-pointer">ABOUT</h1>
                        <h1 className="hover:text-[#d37b27] cursor-pointer">SERVICES</h1>
                        <h1 className="hover:text-[#d37b27] cursor-pointer">EVENTS</h1>
                    </div>
                </div>
                <div className="flex flex-col min-w-96 cursor-pointer">
                    <h1 className="text-3xl font-sans font-bold">24 CARROTS</h1>
                    <p className="text-slate-500">CREATING & EVENTS</p>
                </div>
                <div className="navbar-end flex gap-6">
                    <a className="hover:text-[#d37b27] cursor-pointer">VENUES</a>
                    <a className="hover:text-[#d37b27] cursor-pointer">CAREERS</a>
                    <a className="btn btn-sm rounded-2xl text-white bg-[#C15627] hover:bg-[#E8672F]">GET IN TOUCH</a>
                </div>
            </div>
        </div>
    );
};

export default Header;