window.TradingApp.Test.Fixtures['filled_oto_oco'] = [
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "01609W102",
                    "symbol": "BABA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 8887713342,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-07-06T19:12:13+0000",
        "closeTime": "2022-07-06T19:12:14+0000",
        "tag": "some_tag",
        "accountId": 123456,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 44503172278,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 119.3751,
                        "time": "2022-07-06T19:12:14+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 8887713343,
                "cancelable": true,
                "editable": false,
                "status": "WORKING",
                "enteredTime": "2022-07-06T19:12:13+0000",
                "tag": "some_tag",
                "accountId": 123456,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 2,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 123.38,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "01609W102",
                                    "symbol": "BABA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 8887713345,
                        "cancelable": true,
                        "editable": false,
                        "status": "WORKING",
                        "enteredTime": "2022-07-06T19:12:13+0000",
                        "tag": "some_tag",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 2,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 115.5,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "01609W102",
                                    "symbol": "BABA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 8887713344,
                        "cancelable": true,
                        "editable": false,
                        "status": "WORKING",
                        "enteredTime": "2022-07-06T19:12:13+0000",
                        "tag": "some_tag",
                        "accountId": 123456
                    }
                ]
            }
        ]
    }
];
