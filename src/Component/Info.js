import React, {useEffect, useReducer, useState} from 'react';
import useInputs from "./useInputs";

function reducer(state, action) {
    return{
        ...state,
        [action.name]: action.value
    }

}

const Info = () => {

    const [state, onChange]=useInputs({
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;

    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });

    // const onChange = e =>{
    //     dispatch(e.target);
    // }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>

                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div><b>name: {name}</b></div>
                <div><b>nickname: {nickname}</b></div>
            </div>
        </div>
    );
};

export default Info;
