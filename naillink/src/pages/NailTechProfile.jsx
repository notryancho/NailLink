import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NailTechProfile = () => {
  const [nailTech, setNailTech] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    profile_pic: null,
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/nailtech').then((response) => {
      setNailTech(response.data);
    });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNailTech((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.put('http://127.0.0.1:5000/nailtech', nailTech).then((response) => {
      console.log(response);
    });
  };

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
            value={nailTech.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={nailTech.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={nailTech.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea
            name="bio"
            id="bio"
            value={nailTech.bio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="profile_pic">Profile Picture:</label>
          <input
            type="file"
            name="profile_pic"
            id="profile_pic"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default NailTechProfile;

