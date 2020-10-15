import React, { useEffect, useState } from 'react';
import customer1 from '../../../../images/customer-1.png';
import customer2 from '../../../../images/customer-2.png';
import customer3 from '../../../../images/customer-3.png';
import FeedBackInfo from '../FeedBackInfo/FeedBackInfo';

// const customerInfo = [
//     {
//         name: 'Nash Patrik',
//         designation: 'CEO manpol',
//         img: customer1,
//         comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
//     },
//     {
//         name: 'Miriam Barron',
//         designation: 'CEO manpol',
//         img: customer2,
//         comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
//     },
//     {
//         name: 'Bria  Maloni',
//         designation: 'CEO manpol',
//         img: customer3,
//         comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
//     },
// ]


const FeedBack = () => {
    const[comments,setComments] = useState([])
    
    useEffect(() => {
        fetch('https://infinite-fjord-10812.herokuapp.com/commentsDetails')
            .then(res => res.json())
            .then(data => {
                setComments(data)
        })
    }, [])
    console.log(comments)
    return (

        <div className="container my-5 py-5">
            <h1 className="text-center font-family mb-5" style={{fontWeight:'600'}}>Client<span style={{color:'#7AB259'}}>Feed Back</span></h1>
            <div className="row">
            {
                comments.map(customer => <FeedBackInfo customer={customer}></FeedBackInfo>)
            }
            </div>
        </div>
    );
};

export default FeedBack;