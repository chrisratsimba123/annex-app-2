import React from 'react'
import { Route, Link } from 'react-router-dom'
// import Navigation from './Navigation'
import Collection from './Collection'
import CreateCollection from './CreateCollection'
import User from './User'
import CreateUser from './CreateUser'
import FeatureCollection from './FeatureCollection'

function Home() {
    return (
        <>
            <section>
                <FeatureCollection />
            </section>
        
            <div>
                <Collection />
                <CreateCollection />
            </div>
        
            <div>
                <User />
                <CreateUser />
            </div>
        </>
    )
}

export default Home