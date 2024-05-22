export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const addToStorage = function (obj, key) {
  const storageData = getFromStorage(key);
  storageData.push(obj);
  localStorage.setItem(key, JSON.stringify(storageData));
};

export const generateUser = function (User, userData) {
  // localStorage.clear();
  const user = new User(userData.login, userData.password, userData.admin);
  User.save(user);
};

export const generateSimpleUser = function (User) {
  generateUser(User, {
    login: "test",
    password: "1234",
  });
};

export const generateAdminUser = function (User) {
  generateUser(User, {
    login: "admin",
    password: "123",
    admin: true,
  });
};
