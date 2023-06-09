import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useClass from "../../hooks/useClass";
import Cover from "../Shared/Cover/Cover";
import SingleClass from "../Shared/SingleClass/SingleClass";

const Classes = () => {
    const [classes] = useClass();
    const allClass = classes.filter(cls => cls.status === 'approved');
    return (
        <div>
            <section>
                <Cover
                img="https://i.ibb.co/99CJGZ0/yoga-man-young-man-doing-yoga-loft-sunrise.jpg"
                ></Cover>
                <SectionTitle
                heading="Pick a Yoga Pack"
                subHeading="We at ZenZone Camp provide various services to the nature of the clients. Wish how you would like to spend the time here
                we can talk and come to a conclusion."
                ></SectionTitle>
                <div className="grid md:grid-cols-3 gap-4">
                {
                    allClass.map(cls => (<SingleClass
                        key={cls._id}
                        cls={cls}
                        ></SingleClass>))
                }
            </div>
            </section>
        </div>
    );
};

export default Classes;