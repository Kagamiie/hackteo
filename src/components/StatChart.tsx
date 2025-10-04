import {CartesianGrid, LineChart, XAxis, Tooltip, Line, ResponsiveContainer} from 'recharts';


type dataPoint = {
    name: string,
    pv: number,
    amt: number,
}

type propsChart = {
    datas: dataPoint[];
}


function StatChart(props: propsChart) {
    const datas = props.datas

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={datas} margin={{top: 5,right: 30,left: 20,bottom: 5,}}>
                    <XAxis dataKey="name"/>
                    <Tooltip/>
                    <CartesianGrid stroke="#fff"/>
                    <Line type="monotone" dataKey="pv" stroke="#fff" activeDot={{r:4}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default StatChart;