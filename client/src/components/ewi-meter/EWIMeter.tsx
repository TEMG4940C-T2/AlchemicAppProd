import React from "react";

import ReactSpeedometer from "react-d3-speedometer";

const EWIMeter = ({
  metricCompany,
  metricName,
  metricDesc,
  quantity,
  stops = [0, 0.2, 0.6, 1.0],
  segmentColors = ["firebrick", "gold", "limegreen"],
  lastUpdated,
}) => {
  return (
    <div className="ewi-meter">
      <h3 className="ewi-title">
        {metricCompany} {metricName}
      </h3>
      <div
        className="ewi-container"
        style={{ height: "100px", marginTop: "40px", marginBottom: "15px" }}
      >
        <ReactSpeedometer
          minValue={0}
          maxValue={1}
          value={quantity}
          customSegmentStops={stops}
          needleColor="steelblue"
          segmentColors={segmentColors}
          segments={2}
          height={170}
          width={230}
        />
      </div>
      <h3 className="benchmark-title" style={{ marginTop: "-12px" }}>
        Industry Benchmark
      </h3>
    </div>
  );
};

export default EWIMeter;
