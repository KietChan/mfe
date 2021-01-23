import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import MarketingApp from "./components/MarketingApp"
import Headers from './components/Header'

// .... test push event ....
export default () => {
    return <div>
        <BrowserRouter>
            <div>
                <Headers/>
                <MarketingApp/>
            </div>
        </BrowserRouter>
    </div>
}
