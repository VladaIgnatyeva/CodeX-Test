class Counter {
    counter: number;
    static instance: Counter;

    constructor() {
        this.counter = 0;
    }

    static get Instance(): Counter {
        if (!this.instance) {
            this.instance = new Counter();
        }

        return this.instance;
    }

    getCount(): number {
        this.counter = this.counter + 1;

        return this.counter;
    }
}

const instance = Counter.Instance;

export default instance;
