import { router } from "./router.js";
import { setupLinkInterception } from "./navigation.js";

router();
setupLinkInterception();

window.addEventListener("popstate", router);