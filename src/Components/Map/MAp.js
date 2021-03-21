import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '40% ',
  height: '70%',
  borderRadius: '10px'
};

export class MAp extends Component  {
  render(){
      
  return (
    
      <Map style={mapStyles} google={this.props.google} center={{
      lat: 23.810331,
      lng: 90.412521
    }} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>

  );
}};


export default GoogleApiWrapper({
  apiKey: ('AIzaSyC_H_fns6duicUQFqQxYDlGT-RMEZbSq1k')
})(MAp)