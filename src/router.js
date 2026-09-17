import { renderHome } from "./home.js";
import { renderChat } from "./chat.js";
import { renderAbout } from "./about.js";
import { renderNotFound } from "./notFound.js";

const routes = {
  "/": renderHome,
  "/home": renderHome,
  "/chat": renderChat,
  "/about": renderAbout,
};

export function router() {
  const path = window.location.pathname;

 const render = routes[path] || renderNotFound;

  render();
}

export function navigateTo(path) {
  history.pushState({}, "", path);
  router();
}