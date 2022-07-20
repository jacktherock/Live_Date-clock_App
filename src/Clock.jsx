import React, { useState } from "react";

const Clock = () => {

  const time = new Date().toLocaleString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    const time = new Date().toLocaleString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="container">
        <div className="main">
          {ctime}
        </div>
      </div>
    </>
  )
}

export default Clock;