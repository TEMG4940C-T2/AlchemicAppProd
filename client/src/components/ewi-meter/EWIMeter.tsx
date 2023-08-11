import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const EWIMeter = ({ metricName, metricDesc, quantity, stops=[0, 0.2, 0.6, 1.0], segmentColors=["firebrick", "gold", "limegreen"], lastUpdated }) => {
  return (
    <div className="ewi-meter">
      <h3 className="ewi-title">{metricName}</h3>
      {metricDesc && <p className="ewi-meter__desc">{metricDesc}</p>}
      <div className="ewi-container">
        <ReactSpeedometer
            minValue={0}
            maxValue={1}
          value={quantity}
          customSegmentStops={stops}
          needleColor="steelblue"
          segmentColors={segmentColors}
          segments={2}
        />
      </div>
      {/* <p className="ewi-meter__last-updated">Last updated {lastUpdated} day(s) ago</p> */}
    </div>
  );
};

export default EWIMeter;