type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = {
  username: string,
  password: string,
};

const verifyUser: VerifyUserFn = (user, sentValue) => {
  const verify = user.username === sentValue.username && user.password === sentValue.password;
  return verify;
};

const bdUser = {
  username: 'Leonardo',
  password: '123456',
}

const sentUser = {
  username: 'Leonardo',
  password: '123456',
}

const loggedIn = verifyUser(bdUser, sentUser);

console.log('\n', loggedIn);
