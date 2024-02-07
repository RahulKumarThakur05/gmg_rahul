import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const email = location.state.email;
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({});

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/user?email=${email}`
      );
      setDetails(response.data);
      setEditedDetails(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [email]);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setEditedDetails({
      ...editedDetails,
      [e.target.name]: e.target.value,
    });
  };

  const toggleEdit = () => {
    if (isEditing) {
      axios
        .put(`http://localhost:5000/user/${details.id}`, editedDetails)
        .then((response) => {
          console.log("User details updated successfully");
          // Re-fetch user details after successful update
          fetchUserData();
        })
        .catch((error) => {
          console.error("Error updating user details:", error.message);
        });
    }
    setIsEditing(!isEditing);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex  justify-content-center align-items-center bg-secondary vh-100">
      <div className="w-25 mx-auto mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="d-flex justify-content-center align-item-center text-size-15" >Edit Profile</h2>
        <div>
          {!isEditing ? (
            <div>
              <p >
                <strong>Name:</strong> {details.name}
              </p>
              <p>
                <strong>Age:</strong> {details.age}
              </p>
              <p>
                <strong>Date of Birth:</strong> {formatDate(details.dob)}
              </p>
              <p>
                <strong>Contact:</strong> {details.contact}
              </p>
            </div>
          ) : (
            <form>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-2"
                  value={editedDetails.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
              <label><strong>Age</strong></label>
              <input
                type="number"
                name="age"
                className="form-control rounded-2"
                value={editedDetails.age}
                onChange={handleChange}
              />
              </div>
              <div className="mb-3">
              <strong>Date of Birth</strong>
              <input
                type="date"
                className="form-control rounded-2"
                name="dob"
                value={editedDetails.dob} // Use formatDate to format the date
                onChange={handleChange}
              />
              </div>
              <div className="mb-3">
              <label><strong>Contact</strong></label>
              <input
                type="phone"
                name="contact"
                className="form-control rounded-2"
                value={editedDetails.contact}
                onChange={handleChange}
              />
              </div>
            </form>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-${isEditing ? "green" : "blue"}-500 hover:bg-${isEditing ? "green" : "blue"
              }-700 text-black font-bold py-1 mt-2 px-12 btn btn-danger rounded align-content-center focus:outline-none focus:shadow-outline`}
            type="button"
            onClick={toggleEdit}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <button className="py-1 mt-4 " onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfilePage;
