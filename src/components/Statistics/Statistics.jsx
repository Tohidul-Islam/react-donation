import { useLoaderData, useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getStoredDonations } from '../../utilities/LocalStorage';


const Statistics = () => {
    const donations = useLoaderData();
    const donationsLength = donations.length;
    const storedDonatedIds = getStoredDonations();
    const donatedLength = storedDonatedIds.length;
    const donatedPercentage = donatedLength / donationsLength * 100;
    const totalDonations = 100 - donatedPercentage;
    console.log(donationsLength, 'bro are you there', donatedLength, donatedPercentage, totalDonations);

    const data = [
        { name: 'Donations', value: donatedPercentage },
        { name: 'Donated', value: totalDonations },

    ];

    const COLORS = ['green', 'orange'];


    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className=' max-w-7xl mx-auto '>

            <PieChart width={500} height={500} className='mx-auto'>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                </Pie>

            </PieChart>

            <div className='max-w-2xl mx-auto'>
                <div className='grid sm:grid-cols-2 place-items-center sm:place-content-start place-content-center justify-items-center  text-center mb-16  '>
                    <div className='flex items-center'>
                        <h2 className='font-semibold  pr-3'>Your Donations</h2>
                        <div className="border-t-8 border-green-600 w-24 mt-1"></div>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='font-semibold  pr-3'>Total Donations</h2>
                        <div className="border-t-8 border-orange-400 w-24 mt-1"></div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Statistics;