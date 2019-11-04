import React from 'react';
//COPIED SKELETON FROM REACTJS WEBSITE


class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {building: '', code: '', address: '', latitude: '', longitude: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({building: event.target.building});
        this.setState({code: event.target.code});
        this.setState({address: event.target.address});
        this.setState({latitude: event.target.latitude});
        this.setState({longitude: event.target.longitude});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.building);
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>
                    ADD NEW BUILDING HERE:
                </label>
                <br></br>
                <br></br>
                <label>
                    Name:
                    <input type="text" value={this.state.building} onChange={this.handleChange} />
                </label>
                <label>
                    Code:
                    <input type="text" value={this.state.code} onChange={this.handleChange} />
                </label>
                <label>
                    Address:
                    <input type="text" value={this.state.address} onChange={this.handleChange} />
                </label>
                <label>
                    Latitude:
                    <input type="text" value={this.state.latitude} onChange={this.handleChange} />
                </label>
                <label>
                    Longitude:
                    <input type="text" value={this.state.longitude} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add Building" />
            </form>
        );
    }
}
export default AddBuilding;