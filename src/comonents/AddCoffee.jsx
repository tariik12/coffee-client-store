import Swal from "sweetalert2";



const AddCoffee = () => {


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
        const newCoffee ={name,quantity,supply,taste,photo,category,details}
        console.log(newCoffee)

        //send data to the server

        fetch('http://localhost:3000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
       
            console.log(data)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            
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
    
    <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Available Quantity</span>
  </label>
  <label className="input-group">

    <input type="text" name='quantity' placeholder="Coffee Quantity" className="input input-bordered w-full" />
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
    
    <input type="text" name="supply" placeholder="supply" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Coffee Taste</span>
  </label>
  <label className="input-group">

    <input type="text" name="taste" placeholder="Coffee Quantity" className="input input-bordered w-full" />
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
    
    <input type="text" name='category' placeholder="Coffee Category" className="input input-bordered w-full" />
  </label>
</div>
            <div className="form-control md:w-1/2 ms-4">
  <label className="label">
    <span className="label-text">Details</span>
  </label>
  <label className="input-group">

    <input type="text" name="details" placeholder="Coffee Details" className="input input-bordered w-full" />
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
    
    <input type="text" name="photo" placeholder="Photo_url" className="input input-bordered w-full" />
  </label>
</div>


<input type="submit" value='Add Coffee'  className="btn btn-info w-full mt-5"/>
     
           </div>
        </form>
         
        </div>
    );
};

export default AddCoffee;