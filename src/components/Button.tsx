
type propsButton = {
    name: string,
    click: () => void;
};

function Button(props: propsButton) {

    return (
        <button onClick={props.click}>
            <h1>{props.name}</h1>
        </button>
    );
}

export default Button;