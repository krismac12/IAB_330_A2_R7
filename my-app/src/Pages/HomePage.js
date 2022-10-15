import React from 'react';
import { Link } from 'react-router-dom';
export default function HomePage() {
    return (
        <div>
            <Link to={"/Map"}>
                <button style={{height:"50px"}}>To map view</button>
            </Link>
        </div>
    )
}