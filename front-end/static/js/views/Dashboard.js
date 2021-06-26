import AbtractView from "./AbtractView.js";

export default class extends AbtractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    };

    async getHtml() {
        //Can be fetch data from server here
        return `
            <h1>Hello single page</h1>
            <p>Im Van</p>
            <p>
                <a href="/posts" data-link>View posts</a>
            </p>
        `;
    };
}