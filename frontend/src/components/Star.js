import React from "react";
import images from "../assets/image.js";

function Star() {
  return (
    <div>
      <h2 className="mt-5">What Star Hotel Do You Want?</h2>
      <h5>Choose the right one for you.</h5>

      <div className="card-group mt-3">
        <div className="card">
          <img
            className="card-img-top"
            src={images.twostarhotel}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="/"> ⭐⭐</a>
            </h5>
            <p className="card-text">
              Although similar to a one-star hotel, a two-star hotel is
              generally part of a larger chain or franchise as opposed to being
              individually owned (think Econo Lodge or Days Inn). The
              accommodations are similar to a one-star hotel's: simple and
              basic.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src={images.threestarhotel}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="/"> ⭐⭐⭐</a>
            </h5>
            <p className="card-text">
              Three-star hotels are typically part of larger, more upscale hotel
              chains. The hotel rooms are larger with higher-quality,
              contemporary furnishings and often include fancy extras like
              flat-screen TVs with extended cable. Three-star hotels are located
              near a major expressway and local attractions, and they are often
              geared toward business travelers.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src={images.fourstarhotel}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="/"> ⭐⭐⭐⭐</a>
            </h5>
            <p className="card-text">
              Four-star hotels offer loads of special services and amenities,
              including concierge services, fine dining, multiple pools, and hot
              tubs, high-class fitness centers, bellhops, room service, valet
              parking, day spas, limousine services, and an array of special
              suites.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            className="card-img-top"
            src={images.fivestarhotel}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <a href="/"> ⭐⭐⭐⭐⭐</a>
            </h5>
            <p className="card-text">
              Now we're talking lifestyles of the rich and famous. Five-star
              hotels are the most luxurious hotels in the world. These fine
              establishments boast extravagant lobbies, unparalleled service,
              and unequaled comfort. They resemble architectural works of art,
              featuring cutting-edge interior design and opulent furnishings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
