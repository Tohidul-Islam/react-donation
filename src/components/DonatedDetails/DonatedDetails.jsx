import { useState } from "react";
import { Link } from "react-router-dom";

const DonatedDetails = ({ donate }) => {

    const { id, title, category, picture, color_for_category_bg, color_for_card_bg, color_for_text_and_button_bg, price } = donate;



    return (

        <div>
            <div style={{ backgroundColor: `${color_for_card_bg}` }} className=" flex justify-start border-2 border-gray-300 rounded-md    items-center">
                <div >
                    <img src={picture} alt="img" className="w-80" />
                </div>
                <div className="pl-5">

                    <button style={{ color: `${color_for_text_and_button_bg}`, backgroundColor: `${color_for_category_bg}` }} className='my-1 px-4 py-1 rounded-md'>{category}</button>
                    <h2 className=' text-lg font-semibold my-2'>{title}</h2>
                    <h4 style={{ color: `${color_for_text_and_button_bg}` }} className="text-lg font-semibold my-1">${price}</h4>
                    <Link to={`/donationDetails/${id}`}>
                        <button style={{ backgroundColor: `${color_for_text_and_button_bg}` }} className="my-2 px-5 py-2 rounded-lg text-white font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default DonatedDetails;

