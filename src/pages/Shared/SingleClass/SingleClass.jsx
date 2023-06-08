
const SingleClass = ({cls}) => {
    const {image, name, price, instructorName, availableSeats} = cls;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#e79e37]">Class Name: {name}</h2>
    <p>Instructor Name:{instructorName}</p>
    <p>Available Seats: {availableSeats}</p>
    <p className="text-[#e79e37]">Price: ${price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default SingleClass;