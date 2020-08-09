import React from 'react'
import Collection from './Collection'
import User from './User'
import FeatureCollection from './FeatureCollection'

function Home() {
    return (
        <>
            <section>
                <FeatureCollection />
            </section>
        
            <div>
                <Collection />
            </div>
        
            <div>
                <User />
            </div>
        </>
    )
}

export default Home