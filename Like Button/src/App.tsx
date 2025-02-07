/* The heart and spinner icons are provided for your convenience. The focus of this 
question is on the handling of the various states, not so much on being pixel perfect. 
As for colors, you can use #f00 for the red and #888 for the gray.

Requirements
In the button's default state, when it is clicked, it goes into the loading state and 
a request is made to the provided back end API which has a 50% chance to 
succeeding/failing.
If the request was successful, the button changes to the "Liked" state.
Otherwise it returns to the "Default"/"Hovered" state depending on whether 
the cursor is still over the button. The error message from the back end API should 
be shown below the button.
If the user clicks on a "Liked"-state button, the reverse flow happens.
Submission API
URL: https://www.greatfrontend.com/api/questions/like-button
HTTP Method: POST
Content Type: json
Parameters
The following fields are accepted in the request body:

action: A string of either 'like' or 'unlike' depending on the desired action.
Response
The API has a 50% chance of succeeding (HTTP 200) or failing (HTTP 500) so as to make it
easy for you to test the request failure cases. 
It returns a JSON payload of the following shape depending on the outcome.

Success: { message: 'Success!' }
Failure: { message: 'Unknown error during attempted {{action}}. Please try again later.!' }
*/
import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";
import "./App.scss";

export default function App() {
  const [liked, setLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  function handleOnClick() {
    const url = "https://www.greatfrontend.com/api/questions/like-button";
    const action = liked ? "unlike" : "like";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    };
    setLoading(true);
    setDisabled(true);
    fetch(url, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          setLiked((prev) => !prev);
        }
        setLoading(false);
        setDisabled(false);
      })
      .catch((err) => console.log("An error has occured: ", err));
  }

  return (
    <div>
      <button
        className={liked ? "liked" : ""}
        onClick={handleOnClick}
        disabled={disabled ? true : false}
      >
        {!loading ? (
          <HeartIcon className="heart" />
        ) : (
          <SpinnerIcon className="spinner" />
        )}{" "}
        Like
      </button>
    </div>
  );
}
