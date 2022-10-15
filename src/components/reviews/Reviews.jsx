import React, { useRef, useState } from "react";
import EP from "../../assets/ep.png";
import GR from "../../assets/gr.png";
import JC from "../../assets/jc.png";
import SS from "../../assets/ss.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./reviews.css";


// import required modules
import { Pagination } from "swiper";

const Reviews = () => {
  const reviewData = [
    {
      avatar: EP,
      name: "Erika Pilar",
      review:
        "Sarvang was a pleasure to work with and was a great team player. He communicated well with the team and never hesitated to bring up any issues to both team members and leaders. The team was highly confident with Sarvang’s quality of work and velocity. His positive attitude and energy always showed in meetings and in all of his interactions with colleagues.",
    },
    {
      avatar: GR,
      name: "Guillaume Rieublandou",
      review:
        "If I had to describe Sarvang in two words, it would be smart and eager. Throughout his stay with us he was always interested to take on new challenges and overcame them with brio. He has been a dependable team player too, working as readily in groups as a solo, and will complete leftover work at night - because he likes it. Treat him well, he deserves it!",
    },
    {
      avatar: JC,
      name: "Janelle Chew",
      review:
        "I had the pleasure of working on the same team with Sarvang for 1 year. As a product manager, I welcomed his input as he always kept the customer needs in mind. He challenges himself to learn new things and is flexible when priorities change. He is a diligent, hard worker and great communicator. His positive attitude and enthusiasm helped motivate me and the team every day.",
    },
    {
      avatar: SS,
      name: "Saba Siddiqi",
      review:
        "Sarvang worked with us at AI/Hub Durham College as a Research Assistant on multiple projects. The position involved working on various software, data and AI related solutions which included Python Scripts, Django/Flask Web Applications and APIs, Deployment, and any related Documentation. The position required working directly with project stakeholders and Sarvang effectively communicated and worked with team to deliver tasks timely and successfully. I have seen him go above and beyond to solve complex problems and delivery quality work. ",
    },
  ];

  return (
    <section id="reviews">
      <h5>Comments from Clients</h5>
      <h2>Reviews</h2>

      <Swiper
        className="container reviews__container"
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {reviewData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="review">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar for ..." />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
