import React from "react"

export const DonateToWikipedia = () => (
  <div className="my-3 p-2 py-4 bg-teal-100 text-center text-teal-900">
    <h3 style={{ fontFamily: "'Amatic SC', cursive" }} className="mb-0">
      Donate to Wikipedia!
    </h3>
    <p className="mb-0">
      Help keep Wikipedia free for everyone!
      <br />
      <a
        className="bg-teal-900 text-teal-100 m-2 p-2 rounded inline-block"
        style={{ fontFamily: "'Amatic SC', cursive" }}
        href={
          "https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=US&uselang=en"
        }
      >
        Donate Now
      </a>
    </p>
  </div>
)
