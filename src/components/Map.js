import React from "react";

import Iframe from "react-iframe";

const Map = (props) => {
  return (
    <div>
      <Iframe
        src={props.src}
        width={props.width}
        height={props.height}
        allowFullScreen=""
        loading="lazy"
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default Map;
