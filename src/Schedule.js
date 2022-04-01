import { Events } from "./Events";
import React, { useState } from "react";

function Schedule({ isDesktop }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const inputted = e.target.value;
    setSearchTerm(inputted);
  };

  const filtered =
  !searchTerm || searchTerm === ''
    ? Events
    : Events.filter((obj) =>
        obj.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
      <div className="flex flex-col justify-start w-full">
      <div
        className="flex flex-col items-center  w-full mb-8 min-w-280"
        style={{ marginTop: isDesktop ? '4rem' : '1rem' }}
      >
        <label htmlFor="searchMatchws" className="label">
          <span className="label-text">Search upcoming games</span>
        </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Find a match"
          className={`input input-bordered input-primary ${
            isDesktop ? 'w-2/3' : 'w-full'
          }`}
        />
      </div>
      {filtered.map(event => (
        <label-card 
        cardtitle={event.name}
        withleftborder={false}
        text={`${event.time} - ${event.location}`}
        image='https://www.kclsu.org/asset/Event/8770/yes1.jpg'
        link='https://www.kclsu.org/ents/event/10912/'
        margin="15px 0"
        cardheight={isDesktop ? '130px' : 'auto'}
      />
      ))}

      </div>
    )
}

export default Schedule