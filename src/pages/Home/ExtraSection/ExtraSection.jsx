import { Bounce, Zoom } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ExtraSection = () => {
    return (
        <div>
            <SectionTitle
            heading="A BRIEF DESCRIPTION ABOUT THE WAYS OF YOGA" subHeading="We at ZenZone Camp provide various services to the nature of the clients. Wish how you would like to spend the time here
            we can talk and come to a conclusion."
            ></SectionTitle>
            <div className=" items-center gap-4 grid md:grid-cols-4 justify-between text-[#e79e37]">
                <Zoom duration="3000">
                <div className="items-center ">
                    <p className="text-2xl">ASTANGA YOGA</p>
                    <img className="my-4" style={{borderRadius:"50%", width:"200px", height:"200px"}} src="https://i.ibb.co/rfsxWRk/yoga-woman-young-woman-doing-yoga-morning.jpg" alt="" />
                    <p className="text-green-400">-----------------------------------------</p>
                    <p className="text-green-400">____________________________________</p>
                    <p >
                    Yoga is a holistic practice combining <br /> physical postures, breathing <br /> exercises, and meditation for overall <br /> well-being.
                    </p>
                </div>
                </Zoom>
                <Bounce duration="3000">
                <div className="items-center">
                    <p className="text-2xl">HATHA YOGA</p>
                    <img className="my-4" style={{borderRadius:"50%", width:"200px", height:"200px"}} src="https://i.ibb.co/fCDw8pL/side-view-woman-outdoors-nature-doing-yoga.jpg" alt="" />
                    <p className="text-green-400">-----------------------------------------</p>
                    <p className="text-green-400">____________________________________</p>
                    <p >
                    Yoga is a holistic practice combining <br /> physical postures, breathing <br /> exercises, and meditation for overall <br /> well-being.
                    </p>
                </div>
                </Bounce>
                <Bounce duration="3000">
                <div className="items-center">
                    <p className="text-2xl">IYENGAR YOGA</p>
                    <img className="my-4" style={{borderRadius:"50%", width:"200px", height:"200px"}} src="https://i.ibb.co/0QLvdhG/man-stretching-while-doing-yoga-outdoors.jpg" alt="" />
                    <p className="text-green-400">-----------------------------------------</p>
                    <p className="text-green-400">____________________________________</p>
                    <p >
                    Yoga is a holistic practice combining <br /> physical postures, breathing <br /> exercises, and meditation for overall <br /> well-being.
                    </p>
                </div>
                </Bounce>
                <Zoom duration="3000">
                <div className="items-center">
                    <p className="text-2xl">KUNDALINI YOGA</p>
                    <img className="my-4" style={{borderRadius:"50%", width:"200px", height:"200px"}} src="https://i.ibb.co/VxD5HGg/full-shot-woman-doing-yoga-outside.jpg" alt="" />
                    <p className="text-green-400">-----------------------------------------</p>
                    <p className="text-green-400">_____________________________</p>
                    <p >
                    Yoga is a holistic practice combining <br /> physical postures, breathing <br /> exercises, and meditation for overall <br /> well-being.
                    </p>
                </div>
                </Zoom>
            </div>
        </div>
    );
};

export default ExtraSection;