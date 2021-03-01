const userStorage = new UserStorage();

const getUserData = (id, password) => {
  userStorage
    .loginUser(id, password)
    .then((id) => userStorage.getRoles(id))
    .then((info) => console.log(`hi ${info.name} you have a ${info.role} role`))
    .catch((error) => console.log(error));
};
