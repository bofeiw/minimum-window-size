Minimum Window Size library is a React library that prevents users with small window size from using your React app and visually hints users to adjust window size.

# Demo

![demo gif](https://github.com/bofeiw/minimum-window-size/blob/master/example/minimum-window-size-demo.gif?raw=true)
It hides the content when window size is small and shows the content when the window resizes to required size.

# Install

```shell script
npm i minimum-window-size
```
or 
```shell script
yarn add minimum-window-size
```

# Usage

```javascript
import React from 'react'

import MinimumWindowSize from "minimum-window-size";

const App = () => {
    return <MinimumWindowSize width={1200} height={768}>
        <YourComponent/>
    </MinimumWindowSize>
}

export default App
```
Simply import the library and wrap your components. Index should be the out-most component. `width` and `height` attributes describes the breakpoints at where your component should display. You can omit one or both of the attribute and by default they are set to 0.

# Run example locally
```shell script
npm i
cd example
yarn install
yarn start
```
An example React project is provided in the `example/` folder if you want to see the exapmle usage.
