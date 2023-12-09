import React from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import img from './Screenshot 2023-12-08 173242.png'

const RastarData = () => {
  const mapCenter = [51.505, -0.09];
  const mapZoom = 13;
  const imageUrl = img;
  const imageBounds = [
   [17.444348, 78.385912],
   [17.444542, 78.402357],
   [17.450457, 78.385959],
   [17.450784, 78.402529]
  ]; 

  return (
    <MapContainer center={mapCenter} zoom={mapZoom} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
    </MapContainer>
  );
};

export default RastarData;
