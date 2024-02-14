import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedDonation } from "../../utilities/LocalStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { donationId } = useParams();
    const donationDetailsId = parseInt(donationId);
    const donation = donations.find(donation => donation.id === donationDetailsId);

    console.log(donation, donationDetailsId)

    // toastify
    const handleDonateBtn = () => {
        savedDonation(donationDetailsId);
        toast.success("Thank you for your donation!");
    }

    return (
        <div className="max-w-7xl mx-auto mb-10 my-5 p-5">
            <div className=" hero min-h-screen grid content-end rounded-lg" style={{ backgroundImage: `url(${donation.picture})` }}>

                <div className="bg-black bg-opacity-50  w-full py-6 px-5 rounded-bl-md rounded-br-md">
                    <button onClick={() => handleDonateBtn()} className="btn bg-[#FF444A] border-0 text-white font-semibold text-lg tracking-widest hover:bg-red-600	rounded-md">Donate ${donation.price}</button>
                </div>

            </div>
            <h2 className="text-4xl font-semibold py-5 text-black">{donation.title}</h2>
            <p className="text-lg text-gray-600">{donation.description}</p>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;