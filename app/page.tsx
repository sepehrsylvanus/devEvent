import ExploreBtn from "@/components/ExploreBtn";
import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7"></div>
      <h3>Featured Events</h3>
      <ul className="events">Events</ul>
    </section>
  );
};

export default page;
