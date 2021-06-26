import AbtractView from './AbtractView.js';

export default class extends AbtractView {
    constructor(params){
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        //Can be fetch data from server here
        return `
            <h1>Hello Post page</h1>
            <p>Im Van</p>
            <p>
                <a href="/posts/post" data-link>Go to post view</a>
            </p>
        `;
    };
}