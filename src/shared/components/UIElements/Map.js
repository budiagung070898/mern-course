// import React from "react";

// import "./Map.css";

// const Map = (props) => {
//     return (
//         <div className={`map ${props.className}`} style={props.style}>
//             <iframe
//                 title="maps"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63181.75884332711!2d114.33113115589825!3d-8.216838534814643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15aeb98f842ab%3A0x4027a76e3530a90!2sBanyuwangi%2C%20Banyuwangi%20Sub-District%2C%20Banyuwangi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1621731723272!5m2!1sen!2sid"
//                 width="100%"
//                 height="100%"
//                 // style="border:0;"
//                 allowfullscreen=""
//                 loading="lazy"
//             ></iframe>
//         </div>
//     );
// };

// export default Map;

import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        new window.ol.Map({
            target: mapRef.current.id,
            layers: [
                new window.ol.layer.Tile({
                    source: new window.ol.source.OSM(),
                }),
            ],
            view: new window.ol.View({
                center: window.ol.proj.fromLonLat([center.lng, center.lat]),
                zoom: zoom,
            }),
        });
    }, [center, zoom]);

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style} id="map"></div>
    );
};

export default Map;
