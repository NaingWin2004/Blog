export const auth = () => {
    let token = localStorage.getItem("token");
    return token;
};

export const tokenLoader = () => {
  return  auth();
};
