{
  /* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */
}

import React, { useState } from "react";
import "../styles/App.css";
import ReviewCard from "./ReviewCard";

const App = () => {
  const [current, setCurrent] = useState(1);
  console.log('currentIndex',current);
  const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  let curretnRev = reviews.filter((rev)=>rev.id==current);
  console.log('current index', curretnRev);


  return (
    <main>
      <section className="container">
      <h1 id="review-heading">Our Reviews</h1>
      <div className="reviewContainer">
        {/* <ReviewCard review = {curretnRev[0]}/> */}
        {curretnRev.map((item)=>{
          return <ReviewCard review = {item} />
        })}
      </div>
      <div className='btn-container'>
        <button onClick={() => setCurrent(current==1 ? 4 : current-1 )} className='prev-btn'>Previous</button>
        <button onClick={()=>setCurrent(Math.floor(current%4)+1)}  className='next-btn'>Next</button>
        <button onClick={()=>setCurrent(Math.floor(Math.random()*4)+1)} className='random-btn'>surprise me</button>
      </div>
      </section>
    </main>
  );
};

export default App;
