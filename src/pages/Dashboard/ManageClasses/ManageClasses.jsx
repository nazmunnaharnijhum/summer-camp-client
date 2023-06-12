
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClass from "../../../hooks/useClass";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FcApproval, FcCancel, FcFeedback } from "react-icons/fc";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { refetch} = useQuery(['class'], async() => {
        const res = await axiosSecure.get('/class')
        return res.data;
    })
    const [classes] = useClass();
    const allClass = classes.filter(cls => cls.status === 'pending');


    

    const handleApprove = cls =>{
        fetch(`https://summer-camp-school-assignment12-server.vercel.app/class/approved/${cls._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${cls.name} is Approved Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDeny = cls =>{
        fetch(`https://summer-camp-school-assignment12-server.vercel.app/class/denied/${cls._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${cls.name} is Denied Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        
        <section className="w-full">
            <SectionTitle heading="Manage Classes" subHeading="You can Approve or Deny a class"></SectionTitle>
            <div className="w-full">
            
            <div>
  
   {
    allClass.map(cls => <div key={cls._id} className="hero  bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <img src={cls.image} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-3xl font-bold">{cls.name}</h1>
        <p className="py-6">Instructor Name: {cls.instructorName}</p>
        <p>Instructor Email: {cls.email}</p>
        <p className="py-6">Available Seats: {cls.availableSeats}</p>
        <p>Price: {cls.price}</p>
        <div className="flex gap-4 justify-between">
            <div>
                <p>approve</p>
                <>
                {cls.status === 'approved' ? 'approved' :
                <button onClick={() => handleApprove(cls)} className="btn btn-ghost bg-[#e79e37]"><FcApproval></FcApproval></button>
                }
                </>
            </div>
            <div>
                <p>Deny</p>
                <>
                {cls.status === 'denied' ? 'denied' :
                <button onClick={() => handleDeny(cls)} className="btn btn-ghost bg-[#e79e37]"><FcCancel></FcCancel></button>
                }
                </>
            </div>
            <div>
                <p>Send Feedback</p>
                <button className="btn btn-ghost bg-[#e79e37]">
                    <FcFeedback></FcFeedback>
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>)
   }
    
</div>
        </div>
        </section>
    );
};

export default ManageClasses;