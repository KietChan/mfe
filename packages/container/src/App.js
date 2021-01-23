import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'

import MarketingApp from "./components/MarketingApp"
import Headers from './components/Header'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return <div>
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Headers/>
                    <MarketingApp/>
                </div>
            </StylesProvider>
        </BrowserRouter>
    </div>
}
