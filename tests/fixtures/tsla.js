window.TradingApp.Test.Fixtures['tsla'] = [
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 1,
        "filledQuantity": 1,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 1
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158234,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:12+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587670,
                "executionType": "FILL",
                "quantity": 1,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 1,
                        "mismarkedQuantity": 0,
                        "price": 295.6672,
                        "time": "2022-09-13T13:57:12+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158235,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "price": 303.61,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158237,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 1,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158272,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:19+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009914,
                                "executionType": "FILL",
                                "quantity": 1,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 1,
                                        "mismarkedQuantity": 0,
                                        "price": 295.13,
                                        "time": "2022-09-13T14:01:13+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158236,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 1,
        "filledQuantity": 1,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 1
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158238,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:13+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587678,
                "executionType": "FILL",
                "quantity": 1,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 1,
                        "mismarkedQuantity": 0,
                        "price": 295.655,
                        "time": "2022-09-13T13:57:13+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158239,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 306.97,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158241,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 1,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158269,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:19+0000",
                        "closeTime": "2022-09-13T14:01:12+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009907,
                                "executionType": "FILL",
                                "quantity": 1,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 1,
                                        "mismarkedQuantity": 0,
                                        "price": 295.12,
                                        "time": "2022-09-13T14:01:12+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158240,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158226,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:13+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587698,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.65,
                        "time": "2022-09-13T13:57:13+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158227,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158281,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:20+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009921,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.1206,
                                        "time": "2022-09-13T14:01:13+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 302.87,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158229,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158228,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158230,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:13+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587688,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.6793,
                        "time": "2022-09-13T13:57:13+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158231,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158279,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:20+0000",
                        "closeTime": "2022-09-13T14:01:12+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009901,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.12,
                                        "time": "2022-09-13T14:01:12+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 302.87,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158233,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158232,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158218,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:12+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587600,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.6633,
                        "time": "2022-09-13T13:57:12+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158219,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T13:58:29+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158459,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:58:29+0000",
                        "closeTime": "2022-09-13T13:58:29+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097008436,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 296.4219,
                                        "time": "2022-09-13T13:58:29+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158288,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:20+0000",
                        "closeTime": "2022-09-13T13:58:29+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 296.6,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158416,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:58:15+0000",
                        "closeTime": "2022-09-13T13:58:29+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 299.51,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158221,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:58:15+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158220,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
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
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158222,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:12+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587654,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.6663,
                        "time": "2022-09-13T13:57:12+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158223,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158286,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:20+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009937,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.12,
                                        "time": "2022-09-13T14:01:13+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 301.37,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158225,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158224,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158242,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:13+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587737,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.6595,
                        "time": "2022-09-13T13:57:13+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158243,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158275,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:20+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009947,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.12,
                                        "time": "2022-09-13T14:01:13+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 303.61,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158245,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158244,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 1,
        "filledQuantity": 1,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 1
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359158246,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:57:12+0000",
        "closeTime": "2022-09-13T13:57:13+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47095587709,
                "executionType": "FILL",
                "quantity": 1,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 1,
                        "mismarkedQuantity": 0,
                        "price": 295.6663,
                        "time": "2022-09-13T13:57:13+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359158247,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:57:12+0000",
                "closeTime": "2022-09-13T14:01:13+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "price": 310.7,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158249,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 1,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 295.12,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158284,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:57:20+0000",
                        "closeTime": "2022-09-13T14:01:13+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47097009928,
                                "executionType": "FILL",
                                "quantity": 1,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 1,
                                        "mismarkedQuantity": 0,
                                        "price": 295.13,
                                        "time": "2022-09-13T14:01:13+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359158248,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:57:12+0000",
                        "closeTime": "2022-09-13T13:57:20+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 6,
        "filledQuantity": 6,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 6
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157083,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:50+0000",
        "closeTime": "2022-09-13T13:47:50+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741994,
                "executionType": "FILL",
                "quantity": 6,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 6,
                        "mismarkedQuantity": 0,
                        "price": 295.5761,
                        "time": "2022-09-13T13:47:50+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157084,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:50+0000",
                "closeTime": "2022-09-13T13:50:16+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 6,
                        "filledQuantity": 6,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 296.49,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 6
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157143,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:48:17+0000",
                        "closeTime": "2022-09-13T13:50:16+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095583433,
                                "executionType": "FILL",
                                "quantity": 6,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 6,
                                        "mismarkedQuantity": 0,
                                        "price": 296.49,
                                        "time": "2022-09-13T13:50:16+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 6,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 299.31,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 6
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157086,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:50+0000",
                        "closeTime": "2022-09-13T13:48:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 6,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 6
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157085,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:50+0000",
                        "closeTime": "2022-09-13T13:50:16+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
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
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380382,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:42+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738875,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.197,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380383,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:42+0000",
                "closeTime": "2022-09-13T13:41:54+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "price": 296,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380434,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:41:54+0000",
                        "closeTime": "2022-09-13T13:41:54+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093739085,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 296.1601,
                                        "time": "2022-09-13T13:41:54+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "price": 298.73,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380385,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:42+0000",
                        "closeTime": "2022-09-13T13:41:54+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380384,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:42+0000",
                        "closeTime": "2022-09-13T13:41:54+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380378,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:42+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738861,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.185,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380379,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:42+0000",
                "closeTime": "2022-09-13T13:56:25+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 300.4,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380381,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:42+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157541,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095587049,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.39,
                                        "time": "2022-09-13T13:56:25+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380380,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:42+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380399,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:43+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738926,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.17,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380400,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:43+0000",
                "closeTime": "2022-09-13T13:45:58+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "price": 302.4,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380402,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:45:58+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380401,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:45:58+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380848,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:45:58+0000",
                        "closeTime": "2022-09-13T13:45:58+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093740850,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 294.9751,
                                        "time": "2022-09-13T13:45:58+0000"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380395,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:43+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738914,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.14,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380396,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:43+0000",
                "closeTime": "2022-09-13T13:51:51+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 302.4,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380398,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:51:36+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 297.43,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157585,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:51:36+0000",
                        "closeTime": "2022-09-13T13:51:48+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157537,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:51:51+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 296.99,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157609,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:48+0000",
                        "closeTime": "2022-09-13T13:51:51+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095584704,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 296.99,
                                        "time": "2022-09-13T13:51:51+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380397,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380390,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:43+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738942,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.18,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380391,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:43+0000",
                "closeTime": "2022-09-13T13:42:17+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 301.74,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380393,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:42:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
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
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380492,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:42:17+0000",
                        "closeTime": "2022-09-13T13:42:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093739318,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.98,
                                        "time": "2022-09-13T13:42:17+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380392,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:42:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380386,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:42+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738895,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.1748,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380387,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:42+0000",
                "closeTime": "2022-09-13T13:46:54+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380941,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:46:54+0000",
                        "closeTime": "2022-09-13T13:46:54+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093741284,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 294.9918,
                                        "time": "2022-09-13T13:46:54+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 301.74,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380389,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:42+0000",
                        "closeTime": "2022-09-13T13:46:54+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380388,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:42+0000",
                        "closeTime": "2022-09-13T13:46:54+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 1,
        "filledQuantity": 1,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 1
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380407,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:43+0000",
        "closeTime": "2022-09-13T13:41:44+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738981,
                "executionType": "FILL",
                "quantity": 1,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 1,
                        "mismarkedQuantity": 0,
                        "price": 295.19,
                        "time": "2022-09-13T13:41:44+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380408,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:43+0000",
                "closeTime": "2022-09-13T13:56:26+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 1,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157530,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095587092,
                                "executionType": "FILL",
                                "quantity": 1,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 1,
                                        "mismarkedQuantity": 0,
                                        "price": 295.33,
                                        "time": "2022-09-13T13:56:25+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 308.75,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380410,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:56:26+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380409,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 1,
        "filledQuantity": 1,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 1
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358380403,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:41:43+0000",
        "closeTime": "2022-09-13T13:41:43+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093738973,
                "executionType": "FILL",
                "quantity": 1,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 1,
                        "mismarkedQuantity": 0,
                        "price": 295.16,
                        "time": "2022-09-13T13:41:43+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358380404,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:41:43+0000",
                "closeTime": "2022-09-13T13:56:26+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 305.41,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380406,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:56:26+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380405,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:41:43+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 1,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157532,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095587083,
                                "executionType": "FILL",
                                "quantity": 1,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 1,
                                        "mismarkedQuantity": 0,
                                        "price": 295.35,
                                        "time": "2022-09-13T13:56:25+0000"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
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
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157019,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:38+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741745,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.2772,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157020,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:38+0000",
                "closeTime": "2022-09-13T13:56:25+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 300.35,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157022,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157534,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095587039,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.39,
                                        "time": "2022-09-13T13:56:25+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157021,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157023,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:38+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741792,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.264,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157024,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:38+0000",
                "closeTime": "2022-09-13T13:49:25+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157259,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:49:25+0000",
                        "closeTime": "2022-09-13T13:49:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093742886,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.6843,
                                        "time": "2022-09-13T13:49:25+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 301.68,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157026,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:49:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157025,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:49:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157015,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:38+0000",
        "closeTime": "2022-09-13T13:47:38+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741686,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.265,
                        "time": "2022-09-13T13:47:38+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157016,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:38+0000",
                "closeTime": "2022-09-13T13:50:16+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "price": 298.69,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157018,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:48:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 296.49,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157141,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:48:17+0000",
                        "closeTime": "2022-09-13T13:50:16+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095583439,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 296.49,
                                        "time": "2022-09-13T13:50:16+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157017,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:50:16+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157040,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:39+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741820,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.26,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157041,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:39+0000",
                "closeTime": "2022-09-13T13:56:26+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 305.33,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157043,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:39+0000",
                        "closeTime": "2022-09-13T13:54:04+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157042,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:39+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157528,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095587072,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 295.34,
                                        "time": "2022-09-13T13:56:25+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 297.45,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157871,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:54:04+0000",
                        "closeTime": "2022-09-13T13:56:26+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157044,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:39+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741809,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.264,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157045,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:39+0000",
                "closeTime": "2022-09-13T13:50:43+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 302.34,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157047,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:39+0000",
                        "closeTime": "2022-09-13T13:50:29+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157046,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:39+0000",
                        "closeTime": "2022-09-13T13:50:43+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157460,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:50:42+0000",
                        "closeTime": "2022-09-13T13:50:43+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095583911,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 296.5413,
                                        "time": "2022-09-13T13:50:43+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 296.92,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157420,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:50:29+0000",
                        "closeTime": "2022-09-13T13:50:43+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CSTI",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157032,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:38+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741782,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.2699,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157033,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:38+0000",
                "closeTime": "2022-09-13T13:53:17+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157539,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:53:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ARCX",
                        "price": 302.34,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157035,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:51:35+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
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
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157778,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:53:17+0000",
                        "closeTime": "2022-09-13T13:53:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095585437,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 297.074,
                                        "time": "2022-09-13T13:53:17+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157034,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 297.43,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157583,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:51:35+0000",
                        "closeTime": "2022-09-13T13:53:17+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 1,
        "filledQuantity": 1,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 1
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157036,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:39+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741774,
                "executionType": "FILL",
                "quantity": 1,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 1,
                        "mismarkedQuantity": 0,
                        "price": 295.2684,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157037,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:39+0000",
                "closeTime": "2022-09-13T13:56:25+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 308.65,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157039,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:39+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 1,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157526,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:56:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095587060,
                                "executionType": "FILL",
                                "quantity": 1,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 1,
                                        "mismarkedQuantity": 0,
                                        "price": 295.375,
                                        "time": "2022-09-13T13:56:25+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 1,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 1
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157038,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:39+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 2,
        "filledQuantity": 2,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 2
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9359157027,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:47:38+0000",
        "closeTime": "2022-09-13T13:47:39+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47093741762,
                "executionType": "FILL",
                "quantity": 2,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 2,
                        "mismarkedQuantity": 0,
                        "price": 295.2899,
                        "time": "2022-09-13T13:47:39+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9359157028,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:47:38+0000",
                "closeTime": "2022-09-13T13:50:56+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 2,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 296.92,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157411,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:50:28+0000",
                        "closeTime": "2022-09-13T13:50:56+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095584081,
                                "executionType": "FILL",
                                "quantity": 2,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 2,
                                        "mismarkedQuantity": 0,
                                        "price": 296.92,
                                        "time": "2022-09-13T13:50:56+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 301.68,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157030,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:50:28+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 2,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 2
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157029,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:47:38+0000",
                        "closeTime": "2022-09-13T13:50:56+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 4,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379103,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-13T13:33:46+0000",
        "closeTime": "2022-09-13T13:35:02+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379104,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-13T13:33:46+0000",
                "closeTime": "2022-09-13T13:35:02+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 299.89,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379106,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379105,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "UBSS",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379099,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-13T13:33:46+0000",
        "closeTime": "2022-09-13T13:35:02+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379100,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-13T13:33:46+0000",
                "closeTime": "2022-09-13T13:35:02+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 301.85,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379102,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379101,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379116,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-13T13:33:47+0000",
        "closeTime": "2022-09-13T13:35:02+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379117,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-13T13:33:47+0000",
                "closeTime": "2022-09-13T13:35:02+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 304.2,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379119,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379118,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 3,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379112,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:33:46+0000",
        "closeTime": "2022-09-13T13:34:08+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092023214,
                "executionType": "FILL",
                "quantity": 3,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 3,
                        "mismarkedQuantity": 0,
                        "price": 295.96,
                        "time": "2022-09-13T13:34:08+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379113,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:33:46+0000",
                "closeTime": "2022-09-13T13:53:30+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "stopPrice": 295.39,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157543,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:51:18+0000",
                        "closeTime": "2022-09-13T13:53:30+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 304.2,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379115,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:53:30+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 3,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9359157807,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:53:30+0000",
                        "closeTime": "2022-09-13T13:53:30+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47095585593,
                                "executionType": "FILL",
                                "quantity": 3,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 3,
                                        "mismarkedQuantity": 0,
                                        "price": 297.36,
                                        "time": "2022-09-13T13:53:30+0000"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379114,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:51:18+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379107,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-13T13:33:46+0000",
        "closeTime": "2022-09-13T13:35:02+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379108,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-13T13:33:46+0000",
                "closeTime": "2022-09-13T13:35:02+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 303.42,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379110,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379109,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:46+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 3,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CSTI",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379128,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:33:47+0000",
        "closeTime": "2022-09-13T13:34:08+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092023224,
                "executionType": "FILL",
                "quantity": 3,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 3,
                        "mismarkedQuantity": 0,
                        "price": 295.9287,
                        "time": "2022-09-13T13:34:08+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379129,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:33:47+0000",
                "closeTime": "2022-09-13T13:46:57+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 303.42,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379131,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:46:56+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379130,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:46:57+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 3,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380945,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:46:56+0000",
                        "closeTime": "2022-09-13T13:46:57+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093741317,
                                "executionType": "FILL",
                                "quantity": 3,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 3,
                                        "mismarkedQuantity": 0,
                                        "price": 294.9801,
                                        "time": "2022-09-13T13:46:57+0000"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379124,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-13T13:33:47+0000",
        "closeTime": "2022-09-13T13:35:02+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379125,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-13T13:33:47+0000",
                "closeTime": "2022-09-13T13:35:02+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 307.73,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379127,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379126,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    },
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 3,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "stopPrice": 295.97,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "88160R101",
                    "symbol": "TSLA"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 3
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379120,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-13T13:33:47+0000",
        "closeTime": "2022-09-13T13:35:02+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379121,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-13T13:33:47+0000",
                "closeTime": "2022-09-13T13:35:02+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 311.65,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379123,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 3,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 292.05,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "88160R101",
                                    "symbol": "TSLA"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 3
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379122,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:33:47+0000",
                        "closeTime": "2022-09-13T13:35:02+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    }
];