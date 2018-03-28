import React, { Component } from 'react';


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Number: [1, 2, 3, 4, 5] };
    }
    render() {
            const rows = this.state.Number.map((s) =>
            <tr key={s.Number}>
                <td>{s.Number}</td>
            </tr>
        );
        return (
            <div>
                <table className="table">
                    <tr><th>Id</th></tr>
                    {rows}
                </table>
                <h1>{this.state.Number} </h1>
            </div>
        )
    }
}
function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
            value={number} />

    );
    return (
        <ul>{listItems}</ul>
    );
}
const numbers = [1, 2, 3, 4, 5];
function NumberTable(props) {
    const numbers = props.numbers;
    const rows = this.state.Number.map((s) =>
        <tr key={s.Number}>
            <td>{s.Number}</td>
        </tr>
    );

}

export default Welcome;