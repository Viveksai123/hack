import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/index.css";
import np from './images/np.png';
import bujji from './images/bujji1.png';

function SecretCodePage() {
  localStorage.setItem('secretCode', 'false');
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code ==='hii') {
      localStorage.setItem('secretCode', 'true');
      navigate('/home');
    } else {
      alert('Incorrect code!');
    }
  };

  return (
    <div className='row2'>
      <img src={np} alt="img"/>
    <div className="secretcode-page">  {/* Updated class */}
      <div className="popup">
        <h2 className='animate__animated animate__fadeInRight'>Enter Secret Code :</h2>
        <form onSubmit={handleSubmit}>
          <input
            className='animate__animated animate__fadeInLeft'
            style={{margin:"20px"}}
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter secret code"
          /><br />
          <button type="submit" style={{marginLeft:"85px"}} className="px-3 py-2 text-sm bg-blue text-white border border-white-300 rounded-md hover:bg-gray-800 transition duration-300 mt-2 animate__animated animate__fadeInUpBig">
            Submit
          </button>
        </form>
      </div>
      </div>
      <img src={bujji} alt="img"/>
    </div>
  );
}

export default SecretCodePage;

