import Button from "./Button";
import TextLine from "./TextLine";

function Parameters() {
    return (
        <div style={
            {
                padding:'var(--ma-md)', boxSizing:'border-box',
                display:'flex', flexDirection:'row', gap: 'var(--ma-sm)'
                
            }
        }>
            <TextLine placeholder="Enter valid address"></TextLine>
            <Button><p>Detect</p></Button>
        </div>
    )
}

export default Parameters;