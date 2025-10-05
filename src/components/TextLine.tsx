import '../index.css'

type propsTextline = {
    placeholder: string;
}

function TextLine(props: propsTextline) {
    return (
        <input type="text" placeholder={props.placeholder}>
        </input>
    )
}

export default TextLine;