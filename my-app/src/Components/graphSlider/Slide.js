import React from "react";
import Plot from 'react-plotly.js';


import "./slider.scss";

// export default function Slide({ data: { url, title } }) {
//     return (
//         <div>
//             {/* <div className="slide-title">{"yeet"}</div>; */}

//         </div>
//     );
// }

export default function Slide({ data: { url, title }, animation }) {
    return (
        <div className={`slide ${animation && 'fadeInAnimation'}`}>
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 350, height: 280, title: 'A Fancy Plot', showlegend: false }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
}