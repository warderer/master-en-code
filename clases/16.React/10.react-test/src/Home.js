import React, {useState} from 'react';
import Search from './Search';

function Home () {
    const [searchText, setSearchText] = useState('');

    const onChangeInput = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <h1>Este es el Home</h1>
            <Search value={searchText} onChange={onChangeInput} text="Search: "/>
        </div>
    )
}

export default Home;