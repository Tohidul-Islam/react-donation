import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
    const { id, title, category, picture, color_for_category_bg, color_for_card_bg, color_for_text_and_button_bg } = donation;


    return (
        <div>
            <Link to={`/donationDetails/${id}`}>
                <div style={{ backgroundColor: `${color_for_card_bg}` }} className="card  shadow-xl">
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions ">
                            <button style={{ color: `${color_for_text_and_button_bg}`, backgroundColor: `${color_for_category_bg}` }} className=' px-4 py-1 rounded-md'>{category}</button>
                        </div>
                        <h2 style={{ color: `${color_for_text_and_button_bg}` }} className='card-title text-lg font-semibold'>{title}</h2>

                    </div>
                </div>
            </Link>
        </div >
    );
};

export default Donation;