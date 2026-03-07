import "./style.css";
import router from "./router/router.js";

const basePath = "/workflow";

export function navigateTo(url) {
  history.pushState(null, null, basePath + url);
  router();
}

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;
    e.preventDefault();
    navigateTo(link.dataset.link);
  });

  router();
});
