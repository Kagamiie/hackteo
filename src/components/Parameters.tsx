import Button from "./Button";
import TextLine from "./TextLine";

type propsParameters = {
    clickUpdate : () => void;
}

function Parameters(props: propsParameters) {
    return (
        <div style={{
                padding:'var(--ma-md)', boxSizing:'border-box',
                display:'flex', flexDirection:'row', gap: 'var(--ma-sm)'  
            }}>
            <TextLine placeholder="Enter valid address"></TextLine>
            <Button click={props.clickUpdate}><p>Detect</p></Button>
        </div>
    )
}

export default Parameters;