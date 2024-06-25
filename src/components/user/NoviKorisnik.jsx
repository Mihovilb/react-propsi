import React from "react";


export default class NoviKorisnik extends React.Component {
state = { ime: "", godine: "" };

    handleFormSubmit = event => {
        event.preventDefault();
        const { novoIme, noveGodine } = this.state;
        const { onUserSubmit } = this.props;
        onUserSubmit({ novoIme, noveGodine});
        //resetirati stanje komponente
    
    };

    handleChangeIme = event => {
        this.setState({novoIme: event.target.value});
    };

    handleChangeGodine = event => {
        this.setState({noveGodine: parseInt(event.target.value)});
    }

    render(){
        return (
        <form onSubmit={this.handleFormSubmit}>
            <label>Ime Korisnika:</label>
            <input type="text" placeholder="Ime" onChange={this.handleChangeIme}></input>
            <label>Godine korisnika:</label>
            <input type="text" placeholder="Godine" onChange={this.handleChangeGodine}></input>

            <button type="submit">Unesi</button>
        </form>
        );
    }
}