import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SingleClass = ({cls}) => {
    const {image, name, price, instructorName, availableSeats} = cls;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSelectClass = cls => {
        console.log(cls);
        if(user){
            fetch('http://localhost:5000/selectedClass')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
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
                  navigate('/login')
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