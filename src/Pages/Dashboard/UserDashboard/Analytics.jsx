import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useState } from 'react';


const Analytics = () => {
    const [participantData, setParticipantData] = useState([])
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/participants')
        .then(res => {
            setParticipantData(res.data)
        })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='flex  p-4 lg:p-5 justify-center items-center w-full h-full'>
            <BarChart className='bg-green-200 ' 
                width={900}
                height={400}
                data={participantData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="CampName" />
                <YAxis />
                <Bar dataKey="CampFees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {participantData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default Analytics;