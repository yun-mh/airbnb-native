import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { logIn, logOut } from "../redux/usersSlice";
import Auth from "../navigation/Auth";
import Main from "../navigation/Main";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoggedIn ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { isLoggedIn: false };
// };

// export default connect(mapStateToProps)(Gate);
