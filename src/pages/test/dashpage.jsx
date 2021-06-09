import React from 'react'

import InnerNavigation from '../../components/InnerNavigation/InnerNavigation'
import { innerroutes } from '../../routes/innerroutes'


const dashpage = () => {

    return (
        <div>
            <h1>DASHBOARD PAGE</h1>
            <InnerNavigation routes={innerroutes }/>
        </div>
    )
}

export default dashpage
