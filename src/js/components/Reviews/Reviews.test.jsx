import React from "react";
import { shallow } from "enzyme";
import Reviews from "./Reviews";
import { getReviews } from "../../redux/Actions";
//import { defaultState } from "../../redux/Store";
import { baseUrl } from "../../services/ApiConnect";
import configureStore from "redux-mock-store";
import nock from "nock";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const response = {
  id: 353486,
  page: 1,
  results: [
    {
      author: "piyushgupta69",
      content:
        "Previous 2 parts were much better story wise, however effects are good in this part.",
      id: "5a4ff969c3a3681bca00082a",
      url: "https://www.themoviedb.org/review/5a4ff969c3a3681bca00082a"
    },
    {
      author: "amanshroff",
      content:
        "**The 90's Game is back and got even more adventurous !!**\r\n\r\n\r\nWhen four teenagers in detention discover an old video game console with a game they've never heard of, they are immediately thrust into the game's jungle setting, into the bodies of their avatars, played by Dwayne Johnson, Jack Black, Kevin Hart, and Karen Gillan. What they discover is that you don't just play Jumanji -Jumanji plays you. They'll have to go on the most dangerous adventure of their lives, or they'll be stuck in the game forever.\r\n\r\n\r\n\r\nIn the age of Hollywood's obsession with franchise-building and reboots, the idea for a sequel to 1995's 'Jumanji' came across as another eye-roll worthy project. However, the combination of charming actors Dwayne Johnson, Jack Black, Karen Gillian and Kevin Hart, made it evident that this would wind up either being a complete trainwreck, or total mindless fun. Fortunately, 'Welcome to the Jungle' falls solidly into the latter category. The chemistry between the lead cast is evident and the script makes the most of this by giving each actor moments to shine and showcase their skills while they clearly enjoy playing their characters.\r\n\r\nJohnson's younger persona Spencer is a nerdy guy who has lived a sheltered life and is afraid of the world. When he enters the game he takes on the avatar of a hunk with no discernible physical weakness. Johnson has fun with this switch of persona and watching him go back and forth doesn't get old. The same goes for Jack Black who plays a self-absorbed, social media addicted teenage girl Bethany. Her switch into Black's trademark rotund shape is the most extreme and ends up being hilarious. While Black and Johnson are engaging as they are completely cast against their typical selves, Gillian and Hart aren't too far behind playing an awkward, insecure but intelligent girl, and an all-star jock boy trapped in a less-than-stellar body respectively.\r\n\r\n\r\n\r\nThis entire body-switch premise works on slapstick humour that's not crass and moves quickly with ample action to ensure that the 2-hour runtime doesn't feel bulky at any point. Granted there's a villain problem with Bobby Cannavale's Van Pelt being as one-dimensional as they come. It's conveniently explained away as this is all a video game, and the same rules apply for its lack of depth. \r\n\r\n\r\n\r\n_Overall_, 'Jumanji: Welcome To The Jungle' ends up being a fun, holiday film that will keep you entertained enough to make it worth your time and money.",
      id: "5a5c7031c3a3686d7c007302",
      url: "https://www.themoviedb.org/review/5a5c7031c3a3686d7c007302"
    },
    {
      author: "Gimly",
      content:
        "The effects have improved (as you'd hope they would over the course of 22 years), but _Welcome to the Jungle_ didn't really do much for me. It completely lacks the charm of the original movie, but also the worldly scope of the animated series. I sat there patiently as weak joke after weak joke bounced off of me ineffectually, but the person I watched it with seemed to be having a great time, so maybe I'm just dead inside?\r\n\r\n_Final rating:★★ - Definitely not for me, but I sort of get the appeal._",
      id: "5aa49b0dc3a3687c0c0197a7",
      url: "https://www.themoviedb.org/review/5aa49b0dc3a3687c0c0197a7"
    }
  ],
  total_pages: 1,
  total_results: 3
};

const request = nock(baseUrl)
  .get("/3/movie/123/reviews")
  .reply(200, response);

describe("reviews", () => {
  // @TODO: get initial state
  const store = mockStore({
    config: {
      images: {}
    },
    movies: {
      latest: []
    },
    genres: [],
    movieFullView: {
      details: {
        data: [],
        isLoading: false
      },
      similarMovies: {
        data: [],
        isLoading: false
      },
      reviews: {
        data: [],
        isLoading: false
      },
      credits: {
        data: [],
        isLoading: false
      }
    }
  });

  it("should dispatch correct actions", async () => {  
    await store.dispatch(getReviews(123));
    expect(store.getActions()).toMatchSnapshot(); 
  });

  it("renders correctly", () => {
    // @TODO: get reviews from state
    // const state = store.getState();
    // const reviews = state.movieFullView.reviews.data;
    const tree = shallow(<Reviews.WrappedComponent reviews={response.results} />);


    expect(tree).toMatchSnapshot();
  });
});
