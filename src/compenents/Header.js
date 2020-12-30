import React, { useState } from 'react'
import axios from 'axios';
import './Header.css'

const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=c9fd3a3ff02ea8c83f2640c4e7ec0e2e&query=";

function Header(props) {

    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const Search = async (e) => {
        e.preventDefault();
        await axios.get(searchUrl + search)
            .then(res => {
                props.data(res.data.results)
        });
        setSearch('');
    }

    return (
        <>
            <form onSubmit={(e) => Search(e)}>
                <div className="header">
                    <p></p>
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" className="search-text" onChange={(e) => handleChange(e)} value={search} name="search" placeholder="Search..." />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Header
