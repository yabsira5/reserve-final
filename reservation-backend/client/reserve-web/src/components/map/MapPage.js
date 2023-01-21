import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';


mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const MapPage = ({long, lati}) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState( 38.7633);
  const [lat, setLat] = useState( 9.0313);
  const [zoom, setZoom] = useState( 18.92);

  console.log('long:',long);
  console.log('lat:',lati);
  
// const lo = Promise.resolve(long);

// const li = Promise.resolve(lati);

  
  console.log(long);
 

  // Initialize map when component mounts
  useEffect(() => {
    if(long !== undefined && lati !== undefined){
      setLng(long)
      setLat(lati)
// lo.then(value => {setLng(value)} );
//   li.then(value => {setLat(value)} );  
    }
  
    console.log(lng);
    console.log(lat);
   
    
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  
    map.on('move', () => {
    
      setLng(map.getCenter()?.lng.toFixed(4));
      setLat(map.getCenter()?.lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
      
      // updatemap();
    });
    
    // Clean up on unmount
    return () => map.remove();
   
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className='sidebar'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  )
}

export default MapPage