import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome Home!</h1>
            <Link to="/register">Register</Link> {/* Link to the register page */}
        </div>
    );
};

export default Home;
