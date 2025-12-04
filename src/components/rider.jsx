// import React from 'react'
import RiderItems from './rideritemcontainer.jsx'

export default function Rider( rider) {


        return (
            <section>
                <h1>{rider.title}</h1>
                <h2>{rider.description}</h2>
                <RiderItems items={rider.items} title={rider.title} />
                {rider.title === 'EXHIBITION' ? <div>* with the exception of salvaged materials</div> : null}
            </section>
        )
}
