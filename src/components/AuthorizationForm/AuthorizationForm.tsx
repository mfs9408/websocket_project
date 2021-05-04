import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { userStateActions } from "../../store/userState";
import { useSelector } from "../../store";
import { isLoggedInActions } from "../../store/isLoggedIn";

const AuthorizationForm = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.userState.user);

  const onSubmit = () => {
    if (userName.length > 0) {
      return dispatch(isLoggedInActions.setIsLoggedIn(true));
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            marginTop: 100,
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Введите логин"
            value={userName || undefined}
            onChange={useCallback(
              (event) => dispatch(userStateActions.setUser(event.target.value)),
              []
            )}
            style={{ height: 20, width: "80%", marginBottom: 20 }}
          />
          <button type="submit" onClick={onSubmit} style={{ width: "50%" }}>
            Авторизоваться
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthorizationForm;
