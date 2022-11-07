import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Checkout = () => {
    const {img,title,_id} = useLoaderData();
    const {user} = useContext(AuthContext)
     const navigate = useNavigate()
    const handlePlaceContribute=(event)=>{
        event.preventDefault();
            const form = event.target;
            const name = `${form.firstName.value} ${form.lastName.value}`
             const email = user?.email || 'unregistered';
              const phone = form.phone.value;
              const message = form.message.value;

              const contribute = {
                event:_id,
                eventName:title,
                customer:name,
                email,
                phone,
                message
            }
              fetch('http://localhost:5000/contributes', {
                method:'POST',
                headers: {
                    'content-type': 'application/json',
                     authorization:`Bearer ${localStorage.getItem('volunteer-token')}`
                },
                body:JSON.stringify(contribute)
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if(data.acknowledged){
                  alert('Contribute placed successfully')
                  form.reset()
                  navigate('/contributes')
                  
                }
            })
            .catch(error=>console.log(error));
    }

   
    return (
        <div>
        <img className="w-[80%] mx-auto" src={img} alt="" />
        {/* <h2 className="text-4xl">You are about to order: {title}</h2> */}
        <h3 className="text-3xl">Price: $</h3>
      <form onSubmit={handlePlaceContribute}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
            name="lastName"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            name="phone"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            name="email"
             defaultValue={user?.email}
            readOnly
          />
        <textarea  name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
        </div>

        <input className="bg-red-500 cursor-pointer px-4 py-2 rounded-md" type="submit" value="Place Your Contribution" />
      </form>
    </div>
  );
};

export default Checkout;