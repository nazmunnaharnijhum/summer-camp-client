
import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Cover from "../Shared/Cover/Cover";

const Instructors = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect (() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
          
            setInstructor(data);
        })
    },[])
    return (
  <section>
    <Cover img="https://i.ibb.co/2jkpN8R/young-slim-beautiful-attractive-woman-doing-yoga-morning-sunrise-by-sea-healthy-lifestyle.jpg"></Cover>
    <SectionTitle
    heading="Our Special Team"
    subHeading="We at ZenZone Camp provide various services to the nature of the clients. Wish how you would like to spend the time here
    we can talk and come to a conclusion."
    ></SectionTitle>
    <div>
    {
        instructor.map(i => <div key={i._id} className="hero  bg-base-200 gap-4">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={i.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold text-[#e79e37]">{i.instructorName}</h1>
            <p className="py-6">Email: {i.email}</p>
            <p className="pb-6">Number of classes taken by the instructor: {i.takenClasses}</p>
            <button className="btn bg-[#e79e37]">See Classes</button>
          </div>
        </div>
      </div>)
    }
  </div>
  </section>
    );
};

export default Instructors;