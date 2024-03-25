import React from 'react'
import { Link } from 'react-router-dom';

function Dash() {
  return (
    <div>
       
       <nav>
      <div className="navbar">
         <h1>WELCOME</h1>
        <div className="logout">
          <button id="logoutBtn">Logout</button>
          <button id="resetBtn">Reset</button>
        </div>
      </div>
    </nav>




  <section>
      <div className="card" style={{ width: '300px', padding: '20px', backgroundColor: 'grey', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',marginTop:'70px', marginInline:'400px',height:'200px' }}>
        <Link to="/add">
        <h2 style={{textAlign:'center',color:'black'}}>Click</h2>
        </Link>
      </div>
  </section>

    </div>
  )
}

export default Dash