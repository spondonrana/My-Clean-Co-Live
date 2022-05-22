import React from "react";
import BucketGirl from "../../Assets/Images/bucketgirl.png";
const Landing = () => {
  return (
    <div class="hero min-h-screen bg-base-200 mt-16">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
        <img src={BucketGirl} class="max-w-sm" alt="" />
      </div>
    </div>
  );
};

export default Landing;
