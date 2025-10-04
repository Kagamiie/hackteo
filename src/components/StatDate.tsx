type propsDate = {
    date:string,
    value:string, /*Convert from percentage*/
    average_value: string,
}

function StatDate(props: propsDate) {

    const normalized = 255-parseInt(props.average_value);

    return (
        <div className="card" style={{backgroundColor: `rgb(255, ${normalized}, ${normalized})`}}>
            <p>{props.value}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default StatDate;