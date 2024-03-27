import React from "react";

import Card from "../UI/Card";
import classes from "./Location.module.css";

const Location = () => {
  return (
    <div id="location" className={classes["location-wrapper"]}>
      <Card className={classes["mapouter"]}>
        <div className={classes["gmap_canvas"]}>
          <iframe
            title="map"
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=austin.%20tx&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </Card>
      <Card className={classes["location-description"]}>
        <h3>Were to find us!</h3>
        <p>
          We are currently only the local region of Austin, TX. But we do have
          plans to expand to other large cities in the very near future!
        </p>
        <h3>Future cities</h3>
        <ul>
          <li>Detroit - Spring 2023</li>
          <li>Los Angeles - Summer 2023</li>
          <li>Boston - Winter 2023</li>
          <li>Chicago - Spring 2024</li>
          <li>Los Vegas - Summer 2024</li>
        </ul>
      </Card>
    </div>
  );
};

export default React.memo(Location);
