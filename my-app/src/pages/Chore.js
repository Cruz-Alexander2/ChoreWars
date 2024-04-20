import React, { useState } from 'react';
import './Chore.css';


function Chore() {
const [chore, setChore] = useState({
  title: '',
  description: '',
  priority: 'Medium',
  schedule: 'Scheduled', // Default value
  username: '' // New field
});


const handleChange = (event) => {
  const { name, value } = event.target;
  setChore(prevState => ({
    ...prevState,
    [name]: value
  }));
};


const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Creating Chore:', chore);
  // Here you would typically send the chore to the backend
};


return (
  <div className="chore-wrapper">
    <img src="https://imgs.search.brave.com/iHd2RWUPR8qj1qU52dLr5w4XgkcO36uuQ8Hd0nnbWOI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydGJheS5j/b20vY2xpcGFydHMv/YnJvb20tY2xpcGFy/dC00ZDhpbGIyLmpw/Zw" alt="Same Image" className="left-image" />
    <div className="container">
      <h2><center>Create Chore</center></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="label">Username</label>
          <input
            type="text"
            className="input"
            id="username"
            name="username"
            value={chore.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="label">Title</label>
          <input
            type="text"
            className="input"
            id="title"
            name="title"
            value={chore.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Schedule</label>
          <div>
            <label>
              <input
                type="radio"
                name="schedule"
                value="Scheduled"
                checked={chore.schedule === 'Scheduled'}
                onChange={handleChange}
              />
              Scheduled
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="schedule"
                value="Unscheduled"
                checked={chore.schedule === 'Unscheduled'}
                onChange={handleChange}
              />
              Unscheduled
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="label">Description</label>
          <textarea
            className="textarea"
            id="description"
            name="description"
            value={chore.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="priority" className="label">Priority</label>
          <select
            className="input"
            id="priority"
            name="priority"
            value={chore.priority}
            onChange={handleChange}
          >
            <option value="High">High (3 Points)</option>
            <option value="Medium">Medium (2 Points)</option>
            <option value="Low">Low (1 Point)</option>
          </select>
        </div>
        <button type="submit" className="button">Create Chore</button>
      </form>
    </div>
    <img src="https://imgs.search.brave.com/iHd2RWUPR8qj1qU52dLr5w4XgkcO36uuQ8Hd0nnbWOI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2xpcGFydGJheS5j/b20vY2xpcGFydHMv/YnJvb20tY2xpcGFy/dC00ZDhpbGIyLmpw/Zw" alt="Same Image" className="right-image" />
  </div>
);
}


export default Chore;
  
  
  
  
  