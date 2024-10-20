import React, { useEffect } from 'react';
import chamber from "../images/chamber.jpg";
import goblet from "../images/goblet.jpg";
import half from "../images/half.jpg";
import order from "../images/order.jpg";
import prisoner from "../images/prisoner.jpg";




const Dashboard = () => {
  
  useEffect(() => {
    startVoiceRecognition();
  }, []);

  const handleReadingModeChange = (mode) => {
    if (mode === 'voice') {
      window.location.href = '/voice';
    } else if (mode === 'normal') {
      window.location.href = '/books';
    }
  };

  const startVoiceRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      console.log('Voice command received: ', command);
      handleVoiceCommand(command);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error: ', event.error);
    };
  };

  const handleVoiceCommand = (command) => {
    if (command.includes('speech')) {
      window.location.href = '/voice';
    } else if (command.includes('books')) {
      window.location.href = '/books';
    } else if (command.includes('home')) {
      window.location.href = '/';
    }
  };

  return (
    <div className="main-content">
      <div className="sidebar">
        <a href="/"><i className="fas fa-home"></i></a>
        <a href="#" className="active"><i className="fas fa-th-large"></i></a>
        <a href="/voice"><i className="fas fa-chart-line"></i></a>
      </div>
      <div className="container">
        <header>
          <h1>Dashboard</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search book, anything here" />
          </div>
          <div className="header-buttons">
            <button className="add-button">+</button>
            <button><i className="far fa-bell"></i></button>
            {/* <img src="/api/placeholder/40/40" alt="User Avatar" className="user-avatar" /> */}
          </div>
        </header>

        <div className="stats">
          <div className="stat-card">
            <h3>Book Authors</h3>
            <p>28,886</p>
            <small>+1280</small>
          </div>
          <div className="stat-card">
            <h3>Book Readers</h3>
            <p>26,995</p>
            <small>+1082</small>
          </div>
          <div className="stat-card">
            <h3>Book Sharer</h3>
            <p>20,622</p>
            <small>+1468</small>
          </div>
        </div>

        <div className="section-header">
          <h2>Popular Book</h2>
          <a href="#">...</a>
        </div>

        <div className="book-grid">
          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-sorcerers-stone.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('philosopher.jpg')" }}></div>
              <h3>The Philosopher’s Stone</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>

          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-chamber-of-secret-3.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('chamber.jpg')" }}></div>
              <h3>The Chamber of Secrets</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>

          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('prisoner.jpg')" }}></div>
              <h3>The Prisoner of Azkaban</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>

          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-goblet-of-fire.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('goblet.jpg')" }}></div>
              <h3>The Goblet of Fire</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>

          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/5harry-potter-and-the-order-of-the-phoenix-1.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('order.jpg')" }}></div>
              <h3>The Order of the Phoenix</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>

          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-half-blood-prince-j.k.-rowling.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('half.jpg')" }}></div>
              <h3>The Half-Blood Prince</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>

          <a href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harry-potter-and-the-deathly-hallows-j.k.-rowling.pdf" target="_blank" rel="noopener noreferrer">
            <div className="book-card">
              <div className="book-cover" style={{ backgroundImage: "url('hallows.jpg')" }}></div>
              <h3>The Deathly Hallows</h3>
              <p>J.K. Rowling</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
