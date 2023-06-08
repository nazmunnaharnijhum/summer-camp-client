import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
    return (

            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="relative">
            <img src="https://i.ibb.co/TbWF819/young-beautiful-woman-doing-yoga-nature.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src="https://i.ibb.co/cy2vvLG/full-shot-woman-exercising-outside.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Eternal love</p>
            <p className="uppercase">Live towards eternity</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src="https://i.ibb.co/q0hRkmz/beautiful-girls-are-playing-yoga-park.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">The secret of your everyouth</p>
            <p>Lose yourself in ambience & atmosphere</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src="https://i.ibb.co/RcYhV34/front-view-man-woman-meditating-outdoors.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src="https://i.ibb.co/phr6XWG/woman-with-folded-hands.jpg" alt="" />
            <div className="absolute top-1/3 right-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src="https://i.ibb.co/drv42Kj/woman-lotus-pose-park.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src="https://i.ibb.co/ZWF0L2x/3d-female-yoga-pose-against-sunset-landscape.jpg" alt="" />
            <div className="absolute top-1/3 left-10 text-sm md:text-lg lg:text-2xl lg:font-extrabold  bg-opacity-20 bg-white px-6 py-8 rounded-2xl">
            <p className="text-[#d4ad76] mb-4">Your mind & soul is beautiful</p>
            <p className="uppercase">Witness the Ethereal Beauty with <br /> ZenZone Camp</p>
            </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
 
    );
};

export default Banner;