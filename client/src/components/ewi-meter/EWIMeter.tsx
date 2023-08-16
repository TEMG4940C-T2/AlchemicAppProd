import React from "react";

import ReactSpeedometer from "react-d3-speedometer";

const EWIMeter = ({
  metricCompany,
  metricName,
  metricDesc,
  quantity,
  stops,
  segmentColors = ["#F7C8CE", "#FBEA9F", "#CDEECF"],
  lastUpdated,
  benchmark,
}) => {
  return (
    <div className="ewi-meter">
      <h3 className="ewi-title">{metricName}</h3>
      <h3 className="benchmark-title">Industry Benchmark: </h3>
      <h3 className="benchmark-value">{benchmark}</h3>
      <div
        className="ewi-container"
        style={{ height: "120px", marginTop: "40px", marginBottom: "15px" }}
      >
        <ReactSpeedometer
          minValue={0}
          maxValue={Math.max.apply(null, stops)}
          value={quantity}
          customSegmentStops={stops}
          needleColor="#FF316A"
          segmentColors={segmentColors}
          segments={2}
          height={200}
          width={350}
        />
      </div>
    </div>
  );
};

export default EWIMeter;
