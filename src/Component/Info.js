import React, {useEffect, useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log('effect')
        console.log(name)
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    },[name]);

    const onChangeName = e =>{
        setName(e.target.value);
    }
    const onChangeNickName = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
            <div>
                <div><b>name: {name}</b></div>
                <div><b>nickname: {nickname}</b></div>
            </div>
        </div>
    );
};

export default Info;
