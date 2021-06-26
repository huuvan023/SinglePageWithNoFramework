import AbtractView from './AbtractView.js';

export default class extends AbtractView {
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml() {
        //Can be fetch data from server here
        return `
            <h1>Hello Setting page</h1>
            <p>Im Van</p>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <p>
                <a href="/" data-link>Dashboard</a>
            </p>
        `;
    };
}