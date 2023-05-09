import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {


    const coffee = useLoaderData()
    const {_id,quantity,supply,taste,photo,name,category,details} =coffee;
    const handleSubmit = event  =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supply = form.supply.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const details = form.details.value;
        const updateCoffee ={name,quantity,category,supply,taste,photo,details}
        console.log(updateCoffee)

        //send data to the server

        fetch(`http://localhost:3000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
       if(data.modifiedCount >0){

           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Your work has been saved',
             showConfirmButton: false,
             timer: 1500
           })
           
       }
            console.log(data)
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold">Add Coffee</h1>
            {/* flex row coffee name */}
        <form  onSubmit={handleSubmit}>
        <div className="md:flex ">
           <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">

    <input type="text" name='quantity' defaultValue={quantity} placeholder="Coffee Quantity" className="input input-bordered w-full" />
  </label>
</div>
           </div>
           {/* row */}
           <div className="md:flex ">
           <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Supplier</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="supply" placeholder="supply" defaultValue={supply} className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Coffee Taste</span>
  </label>
  <label className="input-group">

    <input type="text" name="taste" defaultValue={taste} placeholder="Coffee Quantity" className="input input-bordered w-full" />
  </label>
</div>
           </div>
           {/* row */}
           <div className="md:flex ">
           <div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text">Coffee Category</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='category' defaultValue={category} placeholder="Coffee Category" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">

    <input type="text" name="details" defaultValue={details} placeholder="Coffee Details" className="input input-bordered w-full" />
  </label>
</div>
           </div>
           {/* row */}
           <div className=" ">

           <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Photo Url</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="photo" defaultValue={photo} placeholder="Photo_url" className="input input-bordered w-full" />
  </label>
</div>


<input type="submit" value='Update Coffee'  className="btn btn-info w-full mt-5"/>
     
           </div>
        </form>
         
        </div>
    );
};

export default UpdateCoffee;