import { useContext, useState } from "react"
import { ThemeContext } from "../../../App";

export default function UserNotesComponent() {
    const theme = useContext(ThemeContext);
    const [text,setText] = useState('');
    return (
        <div style = {{display: 'flex', textAlign: 'center', width: '100%', alignItems: 'center', gap: 10}}>

            <div style = {{height: '100%', width: '50%', flex: 'display', flexDirection: 'column'}}>
            <h1>Submit Notes</h1>
            <div>
            <textarea 
            value={text}
            placeholder="Enter text regarding employee here..."
            style = {{width: '50%', height: '200px'}}
            onChange={(e) => {setText(e.target.value)}}>
            </textarea>
            </div>
            <button 
            style = {{
                width: '100px',
                backgroundColor: theme?.theme.colors.background,
                color: theme?.theme.colors.primary,
                border: `2px solid`,
                borderRadius: '4px'
            }}
            onClick = {() => {}}>
                Submit
            </button>
            </div>

            <div style = {{height: '100%', width: '50%' }}>
                <h1>Notes</h1>
            </div>
        </div>
    )
}