import { FaArrowRight } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className='flex items-center h-[510px]  bg-[#C15627]'>
            <div className=' text-white font-serif space-y-8 w-[600px] text-start ms-auto mt-4'>
                <h1 className='text-6xl'>Endless Inspiration</h1>
                <p className="text-lg pe-6">Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.</p>
                <div className='flex items-center gap-4'>
                    <input className='bg-white text-[#CD5627] border-none p-3 rounded-full w-[320px]' placeholder='Enter Your Email' type="text" name="email" id="" />
                    <button className='flex items-center gap-2 text-white bg-[#993921] hover:bg-[#B64427] px-5 py-3 rounded-full'>Sign Up<span className=''><FaArrowRight /></span></button>
                </div>
                <p className='text-sm'>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
            </div>
            <img className='w-1/2 h-[510px] ' src="https://img.freepik.com/free-photo/asian-people-having-dinner-party_23-2149552638.jpg?w=740&t=st=1708278443~exp=1708279043~hmac=c5b0a8b0a91ad84eed491b0a3873c33b55d116638113269ed3f439442cf55c89" alt="" />
        </div>
    );
};

export default Contact;