import { useState } from 'react';
import './NewTicket.css';

const NewTicket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    category: '',
    priority: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ticket Submitted:', formData);
    alert('Ticket submitted successfully!');
    setFormData({ subject: '', description: '', category: '', priority: '' });
  };

  return (
    <div className="ticket-container">
      <h2 className="ticket-title">Raise New Ticket</h2>
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Describe your issue"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Technical">Technical</option>
          <option value="Payment">Payment</option>
          <option value="Account">Account</option>
        </select>
        <select name="priority" value={formData.priority} onChange={handleChange} required>
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Submit Ticket</button>
      </form>
    </div>
  );
};

export default NewTicket;
