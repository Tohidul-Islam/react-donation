import { Link } from "react-router-dom";


const Banner = () => {



    return (
        <div className="mt--5">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/front-view-smiley-volunteers-helping-with-food-donations_23-2148637921.jpg?w=996&t=st=1707710602~exp=1707711202~hmac=bccc0b0c33cdf04b543b1be28e639327dfd1e561733c955042f4dcf31fab5360)' }}>
                <div className="hero-overlay bg-opacity-90 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="  text-black">
                        <h1 className="mb-5 sm:text-5xl text-2xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div className="py-5">
                            <input type="text" name="category" id="donationField" placeholder="Search By Category" className="border-2 border-gray-500  px-5 py-3 text-black rounded-l-md sm:w-80 w-48" />
                            <Link>
                                <button className="bg-red-600 px-5 py-3 text-white font-bold border-2 border-red-600 rounded-r-md ">Search</button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;