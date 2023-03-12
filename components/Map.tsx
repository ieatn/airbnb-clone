// https://github.com/visgl/react-map-gl
// npm install --save react-map-gl mapbox-gl
// https://github.com/manuelbieh/geolib
// npm install geolib
import { useState } from 'react';
import {Map, Marker, Popup} from 'react-map-gl';
import { getCenter } from 'geolib';

// @ts-ignore
const MapBox = ({searchResults}) => {

    const [selectedLocation, setselectedLocation] = useState({})


    // @ts-ignore
    const coordinates = searchResults.map((result) => ({
        longitude: result.lng,
        latitude: result.lat
    }))
    const center = getCenter(coordinates)

    // const [viewport, setViewport] = useState({
    //     width: '100%',
    //     height: '100%',
    //     // @ts-ignore
    //     longitude: center.longitude,
    //     // @ts-ignore
    //     latitude: center.latitude,
    //     zoom: 11
    // })


    return ( 
        // import reactmapgl and create a new style in mapbox.com, then go to share and copy the style url
        <Map 
            mapStyle='mapbox://styles/ieatn/clf4ox8z1000i01p5bs09fpbh' 
            mapboxAccessToken={process.env.mapbox_key}
            initialViewState={{
                // @ts-ignore
                longitude: center.longitude,
                // @ts-ignore
                latitude: center.latitude,
                zoom: 3.5
            }}
            // @ts-ignore
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {/* @ts-ignore */}
            {searchResults.map(result => (
                <div key={result.name}>
                    {/* @ts-ignore */}
                    <Marker 
                        longitude={result.lng} 
                        latitude={result.lat} 
                        // @ts-ignore
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p className='cursor-pointer text-2xl animate-bounce' onClick={() =>setselectedLocation(result)} role='img' aria-label='push-pin'>📌</p>
                    </Marker>
                    {/* {selectedLocation.lng === result.lng ? (
                        <Popup onClose={() => setselectedLocation({})} closeOnClick={true} latitude={result.lat} longitude={result.lng}>
                            {result.name}
                        </Popup>
                    )} */}
                </div>
            ))}
        </Map>


    );
}
 
export default MapBox;