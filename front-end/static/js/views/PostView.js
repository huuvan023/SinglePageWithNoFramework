import AbtractView from './AbtractView.js';

export default class extends AbtractView {
    constructor(params){
        super(params);
        this.setTitle("Posts View");
    }

    async getHtml() {
        //Can be fetch data from server here
        return `
            <h1>Hello Post page</h1>
            <p>Im Van</p>
            <p>Post view: HERE</p>
            <p>
                <a href="/" data-link>Dashboard</a>
            </p>
        `;
    };
}