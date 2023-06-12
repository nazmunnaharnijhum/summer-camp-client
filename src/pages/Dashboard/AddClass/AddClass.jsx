import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { user } = useAuth();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, status, availableSeats, enrolledStudents } = data;
          const newClass = {
            name,
            price: parseFloat(price),
            instructorName: user.displayName,
            email: user.email,
            status,
            availableSeats,
            enrolledStudents,
            image: imgURL
          };

          axiosSecure.post('/class', newClass)
            .then((data) => {
              console.log('after posting new class', data.data);
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Class added successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <SectionTitle subHeading="What's new" heading="Add an item" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            {...register("instructorName", { required: true, maxLength: 120 })}
            defaultValue={user?.displayName} 
            className="input input-bordered w-full"
            readOnly 
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Email"
            {...register("email", { required: true, maxLength: 120 })}
            defaultValue={user?.email} 
            className="input input-bordered w-full"
            readOnly 
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Available Seats*</span>
          </label>
          <input
            type="text"
            placeholder="Available Seats"
            {...register("availableSeats", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true, maxLength: 120 })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Enrolled Students*</span>
          </label>
          <input
            type="number"
            placeholder="Enrolled Students"
            {...register("enrolledStudents", { required: true, maxLength: 120 })}
            defaultValue="0"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Status*</span>
          </label>
          <input
            type="text"
            placeholder="Status"
            {...register("status", { required: true, maxLength: 120 })}
            defaultValue="pending"
            className="input input-bordered w-full"
          />
        </div>

        <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
      </form>
    </div>
  );
};

export default AddClass;
