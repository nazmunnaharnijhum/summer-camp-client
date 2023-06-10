import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SingleClass = ({cls}) => {
    const {image, name, price, instructorName, availableSeats, _id} = cls;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectClass = cls => {
        console.log(cls);
        if(user && user.email){
            const cartItem = {clsId: _id, name, image, price, instructorName, availableSeats, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
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
      <button onClick={() => handleSelectClass(cls)} className="btn bg-[#e79e37]">Select class</button>
    </div>
  </div>
</div>
    );
};

export default SingleClass;