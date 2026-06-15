import requests

class MarketAgent:

    def get_market_data(self):
        return {
            "BTC": 106000,
            "ETH": 6200
        }

if __name__ == "__main__":
    agent = MarketAgent()
    print(agent.get_market_data())
