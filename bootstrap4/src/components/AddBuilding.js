import React from 'react';
//COPIED SKELETON FROM REACTJS WEBSITE


class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {building: '', code: '', address: '', latitude: '', longitude: '' };


    }
    addBuilding() {

        console.log("working");
        var listing = {
            code: this.code.value.toUpperCase(),
            name: this.building.value
        }
        if (this.latitude.value && this.longitude.value) {
            listing.coordinates = {
                latitude: this.latitude.value,
                longitude: this.longitude.value
            }
        }
        if (this.address.value)
            listing.address = this.address.value

        this.props.addBuilding(listing);

    }



    render() {
        return (
            <form >
                <label>Enter New Building Here:</label>
                <br></br>
                <br></br>
                <label>
                    Name:
                    <input type="text" ref={(building) => this.building = building} />
                </label>
                <label>
                    Code:
                    <input type="text" ref={(code) => this.code = code} />
                </label>
                <label>
                    Address:
                    <input type="text" ref={(address) => this.address = address} />
                </label>
                <label>
                    Latitude:
                    <input type="text" ref={(latitude) => this.latitude = latitude} />
                </label>
                <label>
                    Longitude:
                    <input type="text" ref={(longitude) => this.longitude = longitude} />
                </label>
                <input type="button" value="Add Building" onClick={this.addBuilding.bind(this)}/>
</form>
        );
    }
}
export default AddBuilding;