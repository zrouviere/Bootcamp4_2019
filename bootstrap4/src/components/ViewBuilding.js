import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const currentBuilding = this.props.data.find(selected =>
			{
				return selected.id === this.props.selectedUpdate.id
			}
		)



		if (currentBuilding === undefined)
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);

		else if (currentBuilding.coordinates)
			return (
				<div>
					<p>
						<b>NAME: </b> {currentBuilding.name}
						<br/>
						<b>ADDRESS: </b> {currentBuilding.address}
						<br/>
						<b>COORDINATES: </b>
						<br/>{currentBuilding.coordinates.latitude}, {currentBuilding.coordinates.longitude}
						<br/>


					</p>
				</div>


			);
		else return(
				<div>
					<p>
						<b>NAME: </b> {currentBuilding.name}
						<br/>
						<b>ADDRESS: </b> None
						<br/>

					</p>
				</div>

			)
	}
}
export default ViewBuilding;
