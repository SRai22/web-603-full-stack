import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <h1>TV APPS</h1>
        
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <Link to="/Netflix">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" 
              alt="Netflix" 
              style={{ width: '300px', height: '150px', objectFit: 'contain', border: '2px solid #000', padding: '20px', backgroundColor: '#c00' }} 
            />
          </Link>
          <Link to="/HBOMax">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" 
              alt="HBO Max" 
              style={{ width: '300px', height: '150px', objectFit: 'contain', border: '2px solid #000', padding: '20px', backgroundColor: '#fff' }} 
            />
          </Link>
          <Link to="/Hulu">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Hulu_logo_%282018%29.svg" 
              alt="Hulu" 
              style={{ width: '300px', height: '150px', objectFit: 'contain', border: '2px solid #000', padding: '20px', backgroundColor: '#fff' }} 
            />
          </Link>
          <Link to="/PrimeVideo">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" 
              alt="Prime Video" 
              style={{ width: '300px', height: '150px', objectFit: 'contain', border: '2px solid #000', padding: '20px', backgroundColor: '#fff' }} 
            />
          </Link>
        </div>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {

  // Below this comment, there's one major key script missing
  const { id } = useParams();

  return (
    <div>
      <h3>You Selected: <span>{id}</span></h3>
    </div>
  );
}