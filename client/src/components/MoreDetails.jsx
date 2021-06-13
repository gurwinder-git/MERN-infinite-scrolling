import React, {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Loader from './Loader';
import '../css/moredetails.css';
import axios from 'axios';

function MoreDetails() {
    let {id} = useParams();
    const [blog, setBlog] = useState({});
    
    useEffect(() => {
        axios.get(`http://localhost:4000/getfullblog/${id}`)
        .then( res => setBlog(res.data[0]))
        .catch(err => console.log(err));
    }, [])
    return (<>
        {Object.keys(blog).length === 0? <Loader/>:
        <div id="aboutBlogDiv">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <NavLink to="/">Home</NavLink>
        </div>
    }</>
    )
}

export default MoreDetails
