import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";
import { Link } from "react-router-dom";

const Donations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('../../../public/donationData.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])


    // const handleSearching = () => {
    //     const inputField = document.getElementById('donationField');
    //     const inputFieldText = inputField.value;
    //     const donationFilter = donations.filter(donation => donation.category === inputFieldText);

    //     console.log(inputFieldText, 'the form submitted successfully', donationFilter)
    // }
    const [searchQuery, setSearchQuery] = useState('');

    let filteredData = donations.filter(donation =>
        donation.category.toLowerCase() === searchQuery);

    if (searchQuery === '') {
        filteredData = donations;
    }

    let wrongText = 'Something is Wrong! Try Again';




    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value);

    };





    // const allDonations = donations.map(donate => donate.category)
    console.log('all donations here, it will be 12 maybe', donations, 'filter data achos!', filteredData, 'searchQuery', searchQuery)

    return (
        <div>
            <div className="mt--5">
                <div className="hero h-[30rem]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/front-view-smiley-volunteers-helping-with-food-donations_23-2148637921.jpg?w=996&t=st=1707710602~exp=1707711202~hmac=bccc0b0c33cdf04b543b1be28e639327dfd1e561733c955042f4dcf31fab5360)' }}>
                    <div className="hero-overlay bg-opacity-90 bg-white"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="  text-black">
                            <h1 className="mb-5 sm:text-5xl text-2xl font-bold text-black">I Grow By Helping People In Need</h1>
                            <input value={searchQuery} onChange={handleSearchInput} type="text" name="category" id="donationField" placeholder="Search By Category" className="border-2 border-gray-500  px-5 py-3 text-black rounded-l-md sm:w-80 w-48" />
                            <Link>
                                <button className="bg-red-600 px-5 py-3 text-white font-bold border-2 border-red-600 rounded-r-md my-5">Search</button>
                            </Link>
                            <h3 className={filteredData.length > 0 ? 'hidden' : 'visible text-2xl font-bold text-red-400 my-5 transition delay-150 duration-300 ease-in-out'}>{wrongText}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-5 mb-5 p-5">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                    {
                        filteredData.map(donation => <Donation
                            key={donation.id}
                            donation={donation}
                        ></Donation>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Donations;