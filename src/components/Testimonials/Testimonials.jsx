import React, { useRef } from "react";
import "./Testimonials.css";
import nexticon from "../../assets/next-icon.png";
import backicon from "../../assets/back-icon.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";
import star from "../../assets/star.png";

const Testimonials = () => {
  const ulslide = useRef();
  let tx = 0;
  const slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    ulslide.current.style.transform = `translateX(${tx}%)`;
  };
  const backforward = () => {
    if (tx < 0) {
      tx += 25;
    }
    ulslide.current.style.transform = `translateX(${tx}%)`;
  };
  const userlist = [
    {
      userimg: user1,
      name: "Liza bay",
      city: "Edicity ,USA",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Undequos similique explicabo ipsa deleniti qui fugit expeditapariatur accusamus necessitatibus dolorem, corporis amet autem  eligendi quas eos tempora molestiae alias.",
      rating: 1,
      star: star,
    },
    {
      userimg: user2,
      name: "John Sins",
      city: "New york ,USA",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Undequos similique explicabo ipsa deleniti qui fugit expeditapariatur accusamus necessitatibus dolorem, corporis amet autem  eligendi quas eos tempora molestiae alias.",

      star: star,
      rating: 2,
    },
    {
      userimg: user3,
      name: "Dazy Kay",
      city: "New Jersey ,USA",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Undequos similique explicabo ipsa deleniti qui fugit expeditapariatur accusamus necessitatibus dolorem, corporis amet autem  eligendi quas eos tempora molestiae alias.",
      star: star,

      rating: 3,
    },
    {
      userimg: user4,
      name: "The Rock",
      city: "Califonia ,USA",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Undequos similique explicabo ipsa deleniti qui fugit expeditapariatur accusamus necessitatibus dolorem, corporis amet autem  eligendi quas eos tempora molestiae alias.",

      star: star,
      rating: 4,
    },
  ];
  return (
    <div className="testi">
      <img src={nexticon} className="next-btn" alt="" onClick={slideforward} />
      <img src={backicon} className="back-btn" alt="" onClick={backforward} />
      <div className="slider">
        <ul ref={ulslide}>
          {userlist.map((user, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.userimg} alt="" />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.city}</span>
                  </div>
                </div>
                <p>{user.discription}</p>
                <h2>
                  <span>
                    <img src={user.star} alt="" />
                  </span>
                  {user.rating}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
