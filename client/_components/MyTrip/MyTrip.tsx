import React from "react";
import { Chrono } from "react-chrono";
import items from "../../mock/tripdata";
const MyTrip = () => {
  return (
    <div style={{ width: "100%", height: "auto", paddingTop: "2rem" }}>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items as any}
        hideControls
        cardHeight={200}
        theme={{
          primary: "var(--primary-color)",
          secondary: "#DDF45B",
          titleColor: "#8D6346",
        }}
      ></Chrono>
    </div>
  );
};

export default MyTrip;
