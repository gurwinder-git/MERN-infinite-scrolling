import React, {useEffect, useState} from 'react';
import Card from './Card';
import axios from 'axios';
import '../css/home.css';
import Loader from '../components/Loader';

const intialPage = 1;
function Home() {
    let [blogs, setBlogs] = useState([]);
    let [page, setPage] = useState(intialPage);
    let [loader, setloader] = useState(undefined);
    let [isPreviousCallFinished, setIsPreviousCallFinished] = useState(false);
    let [itemsFinished, setItemsFinished] = useState(false);

    async function getblogs(){
        setloader(true);
        let res = await axios.get(`http://localhost:4000/blogs?page=${page}&limit=5`);

        if(res.data.results.length !== 0){
            setBlogs((pre) => [...pre, ...res.data.results]);
            setIsPreviousCallFinished(true);
        }else{
            setItemsFinished(true);
        }
        setloader(false);
    }

    function loadMoreData(e){
        let distanceFromBottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 100;
        if(distanceFromBottom && isPreviousCallFinished){
            setIsPreviousCallFinished(false);
            setPage((pre) => pre + 1)
        }
    }
    
    useEffect(() => {
        getblogs()
    }, [page])
    return (
        <div id="homeDiv" onScroll = {loadMoreData}>
            {
                blogs.map((items, index) => {
                    return <Card key = {index} cardData = {items}/>
                })
            } 
            {loader? <Loader/> : null}
            {itemsFinished? <p style={{textAlign: 'center', margin: '20px 0px', color: 'whitesmoke'}}>No more items.</p>: null}
        </div>
    )
}

export default Home;
