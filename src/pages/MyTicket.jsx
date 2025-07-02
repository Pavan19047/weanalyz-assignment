import { useState } from 'react';
import TicketModal from '../components/TicketModal';
import './MyTicket.css';

const MyTicket = () => {
  const allTickets = Array.from({ length: 45 }, (_, i) => ({
    id: `T${(i + 1).toString().padStart(3, '0')}`,
    subject: `Issue ${i + 1}`,
    category: i % 3 === 0 ? 'Technical' : i % 3 === 1 ? 'Payment' : 'Account',
    priority: ['High', 'Medium', 'Low'][i % 3],
    status: ['Open', 'In Progress', 'Resolved'][i % 3],
    supportBy: i % 2 === 0 ? 'Tech Support' : 'Operations Team',
    date: `2025-07-${(i % 30 + 1).toString().padStart(2, '0')}`,
    rating: 0,
  }));

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const handleRating = (ticketId, rating) => {
    const index = allTickets.findIndex((t) => t.id === ticketId);
    if (index !== -1) allTickets[index].rating = rating;
  };

  const filteredTickets = allTickets.filter(ticket =>
    ticket.id.toLowerCase().includes(searchQuery) ||
    ticket.subject.toLowerCase().includes(searchQuery) ||
    ticket.status.toLowerCase().includes(searchQuery)
  );

  const indexOfLastTicket = currentPage * entriesPerPage;
  const indexOfFirstTicket = indexOfLastTicket - entriesPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const totalPages = Math.ceil(filteredTickets.length / entriesPerPage);

  return (
    <div className="myticket-container">
      <h2 className="myticket-title">My Tickets</h2>

      <div className="myticket-controls">
        <input
          type="text"
          placeholder="Search by ID, Subject or Status"
          value={searchQuery}
          onChange={handleSearch}
        />

        <select value={entriesPerPage} onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="ticket-table-wrapper">
        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket No</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Support By</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {currentTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <span
                    className="ticket-link"
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    {ticket.id}
                  </span>
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status ${ticket.status.toLowerCase().replace(/\s/g, '-')}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.supportBy}</td>
                <td>{ticket.date}</td>
                <td>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => handleRating(ticket.id, star)}
                      style={{ color: ticket.rating >= star ? '#f4c150' : '#ccc', cursor: 'pointer' }}
                    >
                      ★
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-controls">
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
      </div>

      {selectedTicket && (
        <TicketModal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
      )}
    </div>
  );
};

export default MyTicket;
