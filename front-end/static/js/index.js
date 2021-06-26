import Dashboard from "./views/Dashboard.js";
import Settings from "./views/Settings.js";
import Posts from "./views/Posts.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        {
            path: "/",
            view: Dashboard
        },
        {
            path: "/posts",
            view: Posts
        },
        {
            path: "/settings",
            view: Settings  
        },
    ]
    const notFoundRoute = {
        path: "/error-404",
        view: () => console.log("404 Page")
    }

    //Test each route for potential match
    const potentialMatch = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path
        };
    })
    let match = potentialMatch.find(route => route.isMatch);
    if(!match) {
        match = {
            route: notFoundRoute,
            isMatch: true
        };
    }
    console.log(match.route)
    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e =>  {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href); 
        }
    })
    router();
})