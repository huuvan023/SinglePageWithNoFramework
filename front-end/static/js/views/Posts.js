import AbtractView from './AbtractView.js';

export default class extends AbtractView {
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml() {
        //Can be fetch data from server here
        return `
            <h1>Hello Post page</h1>
            <p>Im Van</p>
            <p>
                <a href="/" data-link>Dashboard</a>
            </p>
        `;
    };
}