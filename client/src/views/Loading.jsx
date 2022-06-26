import React from 'react'
import '../styles/loading.css'
export const Loading = () => {
    return (
        <div className='container-loading'>

            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        </div>
    )
}
