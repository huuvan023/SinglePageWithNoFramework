import Dashboard from "./views/Dashboard.js";
import Settings from "./views/Settings.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import NotFound from "./views/NotFound.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
const getParam = match => {
    if(!match.result) return;
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const router = async () => {
    const routes = [
        {
            path: "/",
            view: Dashboard
        },
        {
            path: "/posts/:param",
            view: PostView
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
        view: NotFound
    }

    //Test each route for potential match
    const potentialMatch = routes.map(route => {
        return {
            route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    })
    let match = potentialMatch.find(route => route.result !== null);
    if(!match) {
        match = {
            route: notFoundRoute,
            result: null
        };
    }

    const view = new match.route.view(getParam(match));
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