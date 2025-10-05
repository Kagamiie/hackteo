import {CartesianGrid, LineChart, XAxis, Tooltip, Line, ResponsiveContainer} from 'recharts';


type dataPoint = {
    name: string,
    pv: number,
}

type propsChart = {
    datas: dataPoint[];
}

type CustomTooltipProps = {
  active?: boolean;
  label?: string;
  payload?: {
    value: number;
    name: string;
  };
};


function CustomTooltip(props: CustomTooltipProps) {

    const isVisible = props.active && props.payload;
    const value:any = (props.payload as any)?.[0]?.value ?? '';

    return (
    <div className="tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        {isVisible && (
        <>
            <div style={{margin: 0}}> 
                <p className="label" style={{margin: 0}}>{`${props.label}`}</p>
                <p className="value" style={{margin: 0}}>{`${value}`}</p>
            </div>
        </>
        )}
    </div>
    );
};

function StatChart(props: propsChart) {
    const datas = props.datas

    return (
        <div style={{width:"100%", height:"100%"}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={datas} margin={{top: 5,right: 30,left: 20,bottom: 5,}}>
                    <XAxis dataKey="name"/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <CartesianGrid stroke="var(--c-primary)"/>
                    <Line type="monotone" dataKey="pv" stroke="var(--c-txt)" activeDot={{r:4}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default StatChart;