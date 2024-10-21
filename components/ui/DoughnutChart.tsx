"use client"
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js";
import { plugin } from 'postcss';

ChartJS.register(ArcElement,Tooltip,Legend);

const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data={
    datasets:[
        {
            label:'banks',
            data:[1230,3240,5100],
            backgroundColor: ['#0747b6','#2265d8','#2f91fa']
        }
    ],
    labels:['Bank1','Bank2','Bank3']
  }
  
    return <Doughnut 
        data={data}
        options={{
            cutout:"60%",
            plugins:{
                legend:{
                    display:false
            }
            }}
        }
    />
        
}

export default DoughnutChart