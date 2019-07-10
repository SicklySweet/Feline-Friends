import React from 'react';

const Card = ({ name, username, email, id}) => {
    return (
        <div className="tc bg-light-green dib pa3 ma2 grow bw2 shadow-5">
            <img alt="cats" src={`https://robohash.org/${id}/set_set4?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;