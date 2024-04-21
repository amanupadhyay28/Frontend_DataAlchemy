import React from 'react'
import Plot from 'react-plotly.js';

const graph = ({data}) => {
  return (
    <div style={{ display: "flex-1" }}>
    <h1 style={{ marginBottom: "20px" }}>{data.layout.title}</h1>
    <Plot
      data={[
        {
          x: data.graphData.x,
          y: data.graphData.y,
          type: data.graphData.type,
          mode: "lines+markers",
          marker: { color: "red" },
        },
      ]}
     // layout={data.layout}
    />
  </div>
);
}

export default graph
