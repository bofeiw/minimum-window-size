import React from 'react'

import MinimumWindowSize from "minimum-window-size";

const App = () => {
    return <MinimumWindowSize width={1200} height={768}>
        <br/>
        <br/>
        <center><h1>Real content</h1></center>
    </MinimumWindowSize>
}

export default App
