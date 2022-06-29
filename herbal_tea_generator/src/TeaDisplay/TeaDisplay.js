import teas from "../TeaLibrary/TeaLibrary.js"

export default function TeaDisplay () {
    let randomTea = teas[Math.floor(Math.random()*teas.length)];
    return (
        <div>
            <p>Name: {randomTea.Name}</p>
            <p>Contains: {randomTea.Contains}</p>
            <p>Use: {randomTea.Use}</p>
        </div>
    )
};