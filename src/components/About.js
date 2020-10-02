import React from "react";
import Rainbow from '../components/hoc/Rainbow'
const About = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">About</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
          architecto tenetur doloribus nemo cupiditate, aliquid ab odio
          praesentium blanditiis temporibus!
        </p>
      </div>
    </div>
  );
}
export default Rainbow(About)