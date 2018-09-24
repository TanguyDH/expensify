import React from 'react';
import { Link } from 'react-router-dom';

const ExenseListItem = ({ id, description, note, amount, createdAt }) => {
    return (
        <div>
         <Link to={`/edit/${id}`}>
          <h3>{description}</h3>
        </Link>
          <div>
            <p>{amount} - {createdAt}</p>
          </div>
        </div>
    );
}


export default ExenseListItem;;