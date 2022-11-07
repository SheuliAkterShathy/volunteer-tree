import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import ContributeRow from "./ContributeRow";

const Contributes = () => {
  const { user, logOut } = useContext(AuthContext);
  const [contributes, setContributes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contributes?email=${user?.email}`, {
       headers: {
           authorization: `Bearer ${localStorage.getItem('volunteer-token')}`
       }
    })
      .then((res) => {
         if (res.status === 401 || res.status === 403) {
             return logOut();
         }
        return res.json();
      })
      .then((data) => {
        setContributes(data);
      });
  }, [user?.email,logOut]);

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/contributes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
         authorization: `Bearer ${localStorage.getItem('volunteer-token')}`
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = contributes.filter((ctbt) => ctbt._id !== id);
          const approving = contributes.find((ctbt) => ctbt._id === id);
          approving.status = "Approved";
          const newContributes = [approving, ...remaining];
          setContributes(newContributes);
        }
      });
  };

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
        fetch(`http://localhost:5000/contributes/${id}`, {
            method: 'DELETE',
             headers: {
                 authorization: `Bearer ${localStorage.getItem('volunteer-token')}`
             }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = contributes.filter(ctbt => ctbt._id !== id);
                    setContributes(remaining);
                }
            })
    }
}
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contributes.map((contribute) => (
            <ContributeRow
              key={contribute._id}
              contribute={contribute}
               handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></ContributeRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contributes;
