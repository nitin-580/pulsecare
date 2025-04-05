"use client";
import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import indiaMap from "../app/india-topo.json"; // Use a local TopoJSON file

const patientData: Record<string, number> = {
  Gujarat: 0,
  Maharashtra: 0,
  Delhi: 250,
  Karnataka: 150,
  Rajasthan: 200,
  TamilNadu: 180,
};

const getColor = (count: number) => {
  if (count > 300) return "#ff4d4d"; // High patient density
  if (count > 200) return "#ffa500"; // Medium patient density
  return "#90ee90"; // Low patient density
};

const PatientDemographicsMap = () => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <div className="relative">
      <ComposableMap projection="geoMercator">
        <Geographies geography={indiaMap}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.NAME_1;
              const patientCount = patientData[stateName] || 0;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor(patientCount)}
                  stroke="#000"
                  onMouseEnter={() => setTooltip(`${stateName}: ${patientCount} patients`)}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#00bfff", outline: "none" },
                    pressed: { fill: "#ff6347", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltip && <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">{tooltip}</div>}
    </div>
  );
};

export default PatientDemographicsMap;
