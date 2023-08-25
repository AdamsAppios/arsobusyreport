import React, { useState } from 'react';
import axios from 'axios';
import LoadButton from './Refcomponents/LoadButton';
import SaveButton from './Refcomponents/SaveButton';

function RefillingcctvGPT() {
  const [formData, setFormData] = useState({
    date_monitored: '',
    time: '',
    dealer: 0,
    pickup: 0,
    rnd: 0,
    square: 0,
    squareSmall: 0,
    small: 0,
    dayparts: '',
    suspicious: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    axios.defaults.headers.common['X-CSRFToken'] = csrftoken;
    try {
      const response = await axios.post('/api/talamban-data/', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    if (!event.target) return; // add a check for event.target
    
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date Monitored:</label>
      <input type="date" name="date_monitored" onChange={handleInputChange} value={formData.date_monitored} />
      <br />
      <label>Dealer:</label>
      <input type="text" name="dealer" onChange={handleInputChange} value={formData.dealer} />
      <br />
      <label>Pickup:</label>
      <input type="text" name="pickup" onChange={handleInputChange} value={formData.pickup} />
      <br />
      <label>RND:</label>
      <input type="number" name="rnd" onChange={handleInputChange} value={formData.rnd} />
      <br />
      <label>Square:</label>
      <input type="text" name="square" onChange={handleInputChange} value={formData.square} />
      <br />
      <label>Square Small:</label>
      <input type="text" name="squareSmall" onChange={handleInputChange} value={formData.squareSmall} />
      <br />
      <label>Small:</label>
      <input type="text" name="small" onChange={handleInputChange} value={formData.small} />
      <br />
      <label>Dayparts:</label>
      <input type="text" name="dayparts" onChange={handleInputChange} value={formData.dayparts} />
      <br />
      <label>Suspicious:</label>
      <input type="text" name="suspicious" onChange={handleInputChange} value={formData.suspicious} />
      <br />
      <button type="submit">Submit</button>

    </form>
  );
}

export default RefillingcctvGPT;