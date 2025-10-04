type propsParameter = {
    value: string,
    name: string,
    icon: string,
}

function StatParameter(props: propsParameter) {
    return (
        <div className="card">
            <div className="value">
                <img src={props.icon}></img>
                <p>{props.value}</p>
            </div>
            <div className="name">
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default StatParameter;