import React from "react";

const ContributeRow = ({contribute,handleStatusUpdate,handleDelete}) => {
   
    const {email,customer,eventName,_id,status} = contribute;
  return (
    
      <tr>
        <th>
          <label>
          <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{eventName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
     {customer}
          <br />
          <span className="badge badge-ghost badge-sm">
            {email}
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button  onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs bg-red-500">{status ? status : 'pending'}</button>
        </th>
      </tr>
    
  );
};

export default ContributeRow;
