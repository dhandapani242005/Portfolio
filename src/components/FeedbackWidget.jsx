import { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { db } from '../firebase';
import { ref, onValue, set, runTransaction } from 'firebase/database';
import './FeedbackWidget.css';

const STORAGE_KEY = 'portfolio-vote-state';

function FeedbackWidget({ activeSection }) {
  const [vote, setVote] = useState(null); // 'up' | 'down' | null
  const [upvotes, setUpvotes] = useState(0); // real count from firebase
  const [showPopup, setShowPopup] = useState(false);

  // RTDB reference
  const upvoteRef = ref(db, 'stats/upvotes');

  useEffect(() => {
    // 1. Sync real-time count from RTDB
    const unsubscribe = onValue(upvoteRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setUpvotes(data);
      } else {
        // Initialize if path doesn't exist
        set(upvoteRef, 126);
      }
    });

    // 2. Load voter state from localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.vote) setVote(parsed.vote);
      }
    } catch { /* Ignore */ }

    return () => unsubscribe();
  }, []);

  const handleVote = async (type) => {
    const isDesElecting = vote === type;
    const oldVote = vote;
    const newVote = isDesElecting ? null : type;
    
    setVote(newVote);
    if (!isDesElecting) setShowPopup(true);

    try {
      // safe increment/decrement with transaction
      await runTransaction(upvoteRef, (currentCount) => {
        if (currentCount === null) return 126; // Default if first time

        let delta = 0;
        if (isDesElecting) {
          // Deselecting current vote
          if (type === 'up') delta = -1;
        } else {
          // Selecting new vote or switching
          if (type === 'up') {
            delta = oldVote === 'down' ? 1 : 1;
          } else if (type === 'down' && oldVote === 'up') {
            delta = -1;
          }
        }

        return Math.max(0, currentCount + delta);
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify({ vote: newVote }));
    } catch (error) {
      console.error("Error updating RTDB vote:", error);
    }

    if (newVote === 'up' && !isDesElecting) {
      setTimeout(() => setShowPopup(false), 3500);
    }
  };

  const handleRedirect = () => {
    setShowPopup(false);
    window.location.href = '#contact';
  };

  if (activeSection && activeSection !== 'home') {
    return null;
  }

  return (
    <div className="top-feedback-widget" aria-label="Portfolio Feedback">
      <div className="icon-vote-actions">
        
        {/* Upvote Button Wrapper */}
        <div className="vote-icon-wrapper">
          <button 
            className={`btn-vote-icon upvote ${vote === 'up' ? 'active' : ''}`}
            onClick={() => handleVote('up')}
            aria-label="Upvote"
          >
            <FaThumbsUp aria-hidden="true" />
            {upvotes > 0 && <span className="vote-badge">{upvotes}</span>}
          </button>
          <span className="hover-tooltip">Upvote</span>
        </div>

        {/* Downvote Button Wrapper */}
        <div className="vote-icon-wrapper">
          <button 
            className={`btn-vote-icon downvote ${vote === 'down' ? 'active' : ''}`}
            onClick={() => handleVote('down')}
            aria-label="Downvote"
          >
            <FaThumbsDown aria-hidden="true" />
          </button>
          <span className="hover-tooltip">Downvote</span>
        </div>

      </div>

      {showPopup && (
        <div className="dropdown-popup">
          {vote === 'up' ? (
            <div className="popup-dropdown-content success">
              <FaCheckCircle className="dropdown-icon" aria-hidden="true" />
              <div>
                <h4>Thank You!</h4>
                <p>Glad you enjoyed the portfolio. Your support means a lot!</p>
              </div>
              <button className="dropdown-close" onClick={() => setShowPopup(false)} aria-label="Close">×</button>
            </div>
          ) : (
            <div className="popup-dropdown-content warning">
              <FaExclamationCircle className="dropdown-icon" aria-hidden="true" />
              <div>
                <h4>We value your feedback.</h4>
                <p>Sorry it wasn't perfect. Mind suggesting how we can improve?</p>
                <div className="dropdown-actions">
                  <button className="btn-give-feedback" onClick={handleRedirect}>Give Feedback</button>
                  <button className="btn-dismiss" onClick={() => setShowPopup(false)}>No thanks</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FeedbackWidget;
