import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions';


const MyComponent = (props) => {
    const dispatch = useDispatch();
    const hello = useSelector((state) => state.readHelloReducer.hello);

    useEffect(
        () => {
            dispatch({ type: actions.READ_HELLO_SAGA, payload: { name: "Mundo" } });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (
        <div>
            <div>
                Example:
            </div>
            <div>
                {hello}
            </div>
        </div>
    )
}

export default MyComponent;