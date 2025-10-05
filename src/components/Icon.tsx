type propsIcon = {
    src: string,
    background: string,
}

function Icon(props:propsIcon) {
    return (
        <div style={{
            background: props.background,
            maskImage: `url(${props.src})`,
            maskSize:'cover',
            width: '24px',
            height: '24px'
        }}></div>
    )
}

export default Icon;