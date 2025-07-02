import "./TicketModal.css";

const TicketModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Ticket Details</h2>
        <p><strong>Ticket No:</strong> {ticket.id}</p>
        <p><strong>Date:</strong> {ticket.date}</p>
        <p><strong>Name:</strong> {ticket.name}</p>
        <p><strong>Dept:</strong> {ticket.department}</p>
        <br />
        <p><strong>Title:</strong> {ticket.title}</p>
        <p><strong>Description:</strong> {ticket.description}</p>
        <p><strong>Category:</strong> {ticket.category}</p>
        <p><strong>Type:</strong> {ticket.type}</p>
        <p><strong>Priority:</strong> {ticket.priority}</p>
        <p><strong>Status:</strong> {ticket.status}</p>
        <p><strong>Attachment:</strong> {ticket.attachment}</p>

        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TicketModal;
