import React from 'react';
import './App.css';
import ReduxWrap from './redux/ReduxWrapp';
import MyComponent from './components/MyComponent';

function App() {
    return (
        <div className="App">
            <ReduxWrap>
                <MyComponent />
            </ReduxWrap>
        </div>
    );
}

export default App;