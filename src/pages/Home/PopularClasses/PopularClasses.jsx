import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleClass from "../../Shared/SingleClass/SingleClass";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect (() => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const sortedClasses = data.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
            const popularClasses = sortedClasses.slice(0, 6);
            setClasses(popularClasses);
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading="Our Popular Yoga Pack"
            subHeading="We at ZenZone Camp provide various services to the nature of the clients. Wish how you would like to spend the time here
            we can talk and come to a conclusion."
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classes.map(cls => (<SingleClass
                        key={cls._id}
                        cls={cls}
                        ></SingleClass>))
                }
            </div>
        </section>
    );
};

export default PopularClasses;