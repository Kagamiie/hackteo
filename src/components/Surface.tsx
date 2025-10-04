type propsSurface = {
    children: React.ReactNode;
};

function Surface(props: propsSurface) {
    return (
        <div className="surface">
            {props.children}
        </div>
    )
}

export default Surface;