
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleClass from "../../Shared/SingleClass/SingleClass";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {
    const [classes] = useClass();
    const sortedClasses = classes.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
            const popularClasses = sortedClasses.slice(0, 6);
    return (
        <section>
            <SectionTitle
            heading="Our Popular Yoga Pack"
            subHeading="We at ZenZone Camp provide various services to the nature of the clients. Wish how you would like to spend the time here
            we can talk and come to a conclusion."
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    popularClasses.map(cls => (<SingleClass
                        key={cls._id}
                        cls={cls}
                        ></SingleClass>))
                }
            </div>
        </section>
    );
};

export default PopularClasses;