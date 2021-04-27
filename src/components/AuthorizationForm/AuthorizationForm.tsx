import React, { Dispatch, SetStateAction, useCallback } from "react";

interface AuthorizationFormProps {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const AuthorizationForm = ({
  userName,
  setUserName,
  setIsLoggedIn,
}: AuthorizationFormProps) => {
  const onSubmit = () => {
    if (userName.length > 0) {
      return setIsLoggedIn(true);
    }
    return setIsLoggedIn(false);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Введите логин"
          value={userName}
          onChange={useCallback((event) => setUserName(event.target.value), [])}
        />
        <button type="submit" onClick={onSubmit}>
          Авторизоваться
        </button>
      </div>
    </>
  );
};

export default AuthorizationForm;
