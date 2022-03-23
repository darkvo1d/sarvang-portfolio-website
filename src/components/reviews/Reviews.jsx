import React, { useRef, useState } from "react";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
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
      avatar: AVTR1,
      name: "Thomas Bertin",
      review:
        "Do fugiat enim qui Lorem nostrud anim non pariatur occaecat dolor est incididunt ipsum. Magna ad duis velit ad. Tempor quis eiusmod laboris duis ad incididunt deserunt ex aliquip consequat quis duis in officia. Cillum elit ad duis reprehenderit incididunt occaecat veniam eu nostrud non duis. Sunt elit consectetur ea ea qui. Proident elit et ea velit aliquip adipisicing nostrud consectetur proident cillum esse nulla qui anim.",
    },
    {
      avatar: AVTR2,
      name: "Guillaume Reiublandou",
      review:
        "Pariatur labore ut amet id et aliquip sit. Consequat consectetur quis sit ea excepteur culpa qui. Veniam nostrud exercitation quis eu voluptate tempor excepteur velit aute minim pariatur fugiat. Reprehenderit dolor sint aute qui id aliquip proident excepteur consequat reprehenderit cillum.",
    },
    {
      avatar: AVTR3,
      name: "Erika Pilar",
      review:
        "Consequat est reprehenderit adipisicing do nulla ut eu anim cupidatat pariatur adipisicing enim in sunt. Aute est anim elit Lorem non Lorem esse fugiat eu duis eu aliqua veniam ullamco. Pariatur exercitation ex dolor fugiat anim nulla voluptate. Magna consectetur culpa eu consectetur dolore dolor sit ea. Magna in dolore excepteur elit enim. Aliqua officia cupidatat aute anim cillum officia. Id mollit fugiat pariatur velit ea elit adipisicing irure.",
    },
    {
      avatar: AVTR4,
      name: "Janelle Chew",
      review:
        "Proident elit elit enim laborum cupidatat irure fugiat dolor adipisicing duis minim velit est laboris. Sit irure enim exercitation nostrud Lorem dolor proident in minim consequat. Enim et id nulla velit irure est. Nulla labore officia in excepteur ullamco nulla adipisicing esse. Sunt consequat dolor fugiat laborum magna ex quis.",
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
