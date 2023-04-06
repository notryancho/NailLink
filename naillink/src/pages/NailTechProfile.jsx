import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NailTechProfile = ({ handleLogout }) => {
  const [nailTech, setNailTech] = useState(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
  });

  const getNailTech = async () => {
    axios.get(`http://127.0.0.1:5000/nailtech/${localStorage.getItem('id')}`).then((response) => {
      setNailTech(response.data.nail_tech);
    });
  }

  useEffect(() => {
    getNailTech()
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = async () => {
    axios.delete(`http://127.0.0.1:5000/nailtech/${localStorage.getItem('id')}`).then((response) => {
      console.log(response)
      handleLogout()
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    checkForm()
    axios.put(`http://127.0.0.1:5000/nailtech/${localStorage.getItem('id')}`, formState).then((response) => {
      setFormState({name: '',
      email: '',
      phone: '',
      bio: '',})
      getNailTech()
    });
  };

   const checkForm = () => {
    if (formState.name === '') formState.name = nailTech.name;
    if (formState.email === '') formState.email = nailTech.email;
    if (formState.phone === '') formState.phone = nailTech.phone;
    if (formState.bio === '') formState.bio = nailTech.bio;
  }

  if (!nailTech) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{nailTech.name}'s Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name === '' ? nailTech.name : formState.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formState.email === '' ? nailTech.email : formState.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formState.phone === '' ? nailTech.phone : formState.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            name="bio"
            id="bio"
            value={formState.bio === '' ? nailTech.bio : formState.bio}
            onChange={handleInputChange}
          />
        </div>
        {/* <div>
          <label htmlFor="profile_pic">Profile Picture:</label>
          <input
            type="file"
            name="profile_pic"
            id="profile_pic"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div> */}
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={handleDelete}>DELETE Profile</button>
    </div>
  );
};

export default NailTechProfile;

