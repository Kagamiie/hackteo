import Icon from './Icon';

type propsParameter = {
    value: string,
    name: string,
    icon: string,
}

function StatParameter(props: propsParameter) {
    return (
        <div className="card">
            <div className="value">
                <Icon src={`/icons/${props.icon}.svg`} background="var(--c-txt)"></Icon>
                <p>{props.value}</p>
            </div>
            <div className="name">
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default StatParameter;