import React from "react";
import post1 from "../../assests/post1.svg";
import PostCard from "./PostCard";
import post2 from "../../assests/post2.svg";
import post3 from "../../assests/post3.svg";
import profile1 from "../../assests/profile1.svg";
import profile2 from "../../assests/profile2.svg";
import profile3 from "../../assests/profile3.svg";
import profile4 from "../../assests/profile4.svg";
import Header from "../Header/Header";
import threeDots from "../../assests/threeDots.svg";
import share from "../../assests/share.svg";
import Location from '../Location/Location'
import Warning from '../Note'
import Group from "../Groups/Group";
import "./Post.css";
const Post = () => {
  const postDetails = [
    {
      topic: "Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      about:
        "I've worked in UX for the better part of a decade, From now on, I plan to rei...",
      name: "Sarthak Karma",
      views: "1.4k",
      image: post1,
      profile: profile1,
      edit: threeDots,
      share: share,
      link:""
    },
    {
      topic: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      about:
        "I've worked in UX for the better part of a decade, From now on, I plan to rei...",
      name: "Sarah West",
      views: "1.4k",
      image: post2,
      profile: profile2,
      edit: threeDots,
      share: share,
      link:""
    },
    {
      topic: "Meetup",
      title: "Finance & Investment Elite Social Mixer @Lujiazui",
      date: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      link: "Visit Website",
      name: "Ronal Jones",
      views: "1.4k",
      image: post3,
      profile: profile3,
      edit: threeDots,
      share: share,
    },
    {
      topic: "Job",
      title: "Software Developer",
      company: "Innovaccer Analytics Private Ltd.",
      location: "Ahmedabad, India",
      link: "Apply on Timesjobs",
      name: "Ronal Jones",
      views: "1.4k",
      profile: profile4,
      edit: threeDots,
      share: share,
    },
  ];
  return (
    <div className="posts">
      <Header />
     <div className="data">
     <div>
     {postDetails.map(( post) => (
        <PostCard data={post} key={post} />
      ))}
     </div>
     <div>
     <Location location={"Rajanagaram"}/>
     <Warning/>
     <Group/>
     </div>
     </div>
    </div>
  );
};

export default Post;
