
type propsButton = {
    name: string,
};

function Button(props: propsButton) {

    return (
        <button>
            <h1>{props.name}</h1>
        </button>
    );
}

export default Button;