
const Cover = ({img}) => {
    return (
        <div className="hero h-[700px]" style={{backgroundImage: `url("${img}")`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-[#e79e37]">Hello Student</h1>
            <p className="mb-5">We at ZenZone Camp provide various services to the nature of the clients. Wish how you would like to spend the time here
we can talk and come to a conclusion.</p>
            <button className="btn  bg-[#e79e37]">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Cover;