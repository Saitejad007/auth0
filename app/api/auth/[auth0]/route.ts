import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/chats",
  }),
  // signup: handle({
  //   authorizationParams: {
  //     screen_hint: "signup",
  //   },
  //   returnTo: "/chats",
  // }),
  logout: handleLogout({ returnTo: "/" }),
});
