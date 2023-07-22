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
    hobby:`${hobby}`,
    city: "Kalutara"
}

function Main({children, name, city, hobby, position}){
    // object distructuring
    // const{ city } = myObj;
    return(
        <div>
            Hello World! this is main.js
            <ul>
                <li>{name}</li>
                <li>{position}</li>
                <li>{hobby}</li>
                <li>{city}</li>
            </ul>
        </div>
    )
}

export default Main