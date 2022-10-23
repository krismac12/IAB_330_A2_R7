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

export default function Slide({ data: { data, title }, animation }) {
    return (
        <div className={`slide ${animation && 'fadeInAnimation'}`}>
            <Plot
                data={[data]}
                layout={{ width: 350, height: 280, title: title, showlegend: false }}
                config={{ displayModeBar: false }}
            />
        </div>
    );
}