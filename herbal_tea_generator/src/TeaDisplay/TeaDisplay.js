import teas from "../TeaLibrary/TeaLibrary.js"

export default function TeaDisplay () {
    let randomTea = teas[Math.floor(Math.random()*teas.length)];

    return (
        <div>
            <p className="teaHeader">Name:</p>
            <p>{randomTea.Name}</p>
            <p className="teaHeader">Contains:</p>
            <p>{randomTea.Contains}</p>
            <p className="teaHeader">Use:</p>
            <p>{randomTea.Use}</p>
        </div>
    )
};