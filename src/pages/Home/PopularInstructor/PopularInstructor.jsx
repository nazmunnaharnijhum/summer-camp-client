import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect (() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
            const popularInstructors = data.slice(0, 6);
            setInstructor(popularInstructors);
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading="Our Popular Instructors"
            subHeading="Discover our acclaimed instructors - renowned experts in their fields, delivering engaging and insightful content that fuels your learning journey."
            ></SectionTitle>
           <div className="grid md:grid-cols-3 gap-6">
            {
                instructor.map(i =>  <div key={i._id} className="card w-80 bg-base-100 shadow-xl relative">
                <figure className="px-10 pt-10">
                  <img src={i.image} alt="Shoes" className="" style={{borderRadius:"50%", width:"200px", height:"200px"}} />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title absolute top-1 text-[#e79e37]">{i.instructorName}</h2>
                  <p>Email: {i.email}</p>
                  <p className="text-[#e79e37]">Number of classes taken by the instructor: {i.takenClasses}</p>
                  <div className="card-actions">
                 
                  </div>
                </div>
              </div>)
            }
           </div>
        </section>
    );
};

export default PopularInstructor;