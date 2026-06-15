class ExeroSDK {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async market() {
        const response = await fetch(
            `${this.baseUrl}/api/market`
        );

        return response.json();
    }
}

module.exports = ExeroSDK;
