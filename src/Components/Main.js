// creating variabals
const name = "Gimhan Pabasara"
const nic = "Leo Munasinghe"
const position = "Project MAnager"
const hobby = "Mafia"

// create object
const myObj = {
    name:`${name}`,
    nic:`${nic}`,
    position: `${position}`,
    hobby:`${hobby}`
}

function Main(props){

    return(
        <div>
            Hello World! this is main.js
            <ul>
                <li>{name}</li>
                <li>{nic}</li>
                <li>{myObj.position}</li>
                <li>{myObj.hobby}</li>
            </ul>
            {props.children}
        </div>
    )
}

export default Main