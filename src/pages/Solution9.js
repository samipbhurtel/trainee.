import React from "react";

const Solution9 = () => {
  return (
    <>
      <div className="container p-5">
        <p>
          <h1>Server-side Rendering</h1>
          <h2>Pros:</h2>
          <p>
            {" "}
            <li>All the data shown is always up to date.</li>
            <li>
              You can show user specific and dynamic data that can change
              frequently.
            </li>
          </p>
          <h2>Cons:</h2>
          <li>
            You need a server to run the rendering on — this can get expensive.
          </li>
          <li>
            You can’t use CDNs which help your app to load much faster (you
            could put a caching layer in front of your SSR app, but then you’d
            risk showing stale data).
          </li>
          <h1>Static Site Generation</h1>
          <h2>Pros:</h2>
          <li>
            You would get a very fast website (as it can be deployed to a CDN).
          </li>
          <li>
            There is no need to wait for server-side logic. Doesn’t matter if
            the server is down (as we don’t need it!){" "}
          </li>
          <h2>Cons:</h2>
          <li>Not ideal if the content is highly dynamic or user-specific.</li>
          <li>Needs a rebuild when we want to show different or new data.</li>
        </p>

        <h1>When would I prefer SSG over SSR?</h1>
        <p>
          {" "}
          Answer: If I don't want the updated data every time I load the page,
          then I will prefer SSG over SSR.
        </p>
      </div>
    </>
  );
};

export default Solution9;
