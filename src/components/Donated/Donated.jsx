import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utilities/LocalStorage";
import DonatedDetails from "../DonatedDetails/DonatedDetails";


const Donated = () => {
    const donations = useLoaderData();
    const [donated, setDonated] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonatedIds = getStoredDonations();
        const donatedAlready = donations.filter(donation => storedDonatedIds.includes(donation.id));
        setDonated(donatedAlready);
    }, [donations]);
    return (
        <div className=" max-w-7xl mx-auto my-5">

            <div className="grid grid-cols-2 gap-5">
                {
                    donated.slice(0, dataLength).map(donate => <DonatedDetails
                        key={donate.id}
                        donate={donate}
                    ></DonatedDetails>)
                }
            </div>
            <div className={dataLength === donated.length || dataLength > donated.length ? 'hidden' : 'text-center my-5'}>
                <button onClick={() => setDataLength(donated.length)} className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg">View All</button>
            </div>
        </div>
    );
};

export default Donated;