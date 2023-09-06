import React from "react";

class Botones extends React.Component {
    constructor(alert) {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={(m1) => alert('Aprobado')}>Modulo 1</button>
                <button onClick={(m2) => alert('En curso')}>Modulo 2</button>
            </div>
        )
    }
}

export default Botones;