import React from 'react'
import '../styles/App.css'


const ReviewCard = ({review}) => {
  console.log(review);
  // console.log(typeof review.name);
  return (
    <div className='reviewCard'>
      <div id={'author-'+review.id} className='author'> Author- {review.name}</div>
      <div className='job'>Job -{review.job}</div>
      <div className='info'>Review - {review.text}</div>
      <img src={review.image} id='person-img' alt='img'/>
      
    </div>
    
  )
}

export default ReviewCard