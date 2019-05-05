import { GET_ERRORS, ACTIVE_USER } from "./types";
import axios from "axios";
import rooturl from "../utility/url";
import tokenHeader from "../utility/tokenHeader";
import jwt_decode from "jwt-decode";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post(rooturl + "/register", userData)
    .then(res => {
      console.log("redux test");
      console.log(res);
      const { token } = res.data;
      console.log(res.data);
      localStorage.setItem("token", token);
      tokenHeader(token);
      const decrypt_data = jwt_decode(token);
      decrypt_data.token = token;
      console.log(decrypt_data);
      dispatch(activeUser(decrypt_data));

      // history.push('/login')
    })
    .catch(err => {
      console.log("error redux");
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = userData => dispatch => {
  console.log("user");
  axios
    .post(rooturl + "/login", userData)
    .then(res => {
      const { token } = res.data;
      console.log(res.data);
      localStorage.setItem("token", token);
      tokenHeader(token);
      const decrypt_data = jwt_decode(token);
      decrypt_data.token = token;
      console.log("data is 1" + JSON.stringify(decrypt_data));
      dispatch(activeUser(decrypt_data));
    })
    .catch(err => {
      
      if (err.response) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      } 
     
    }
    );
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  tokenHeader(false);
  dispatch(activeUser({}));
};

export const activeUser = decrypt_data => {
  return {
    type: ACTIVE_USER,
    payload: decrypt_data
  };
};
