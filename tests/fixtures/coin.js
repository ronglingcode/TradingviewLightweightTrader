window.TradingApp.Test.Fixtures['coin'] = [
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "MARKET",
        "complexOrderStrategyType": "NONE",
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379470,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:21+0000",
        "closeTime": "2022-09-13T13:35:23+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024523,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.895,
                        "time": "2022-09-13T13:35:23+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379471,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:21+0000",
                "closeTime": "2022-09-13T13:37:11+0000",
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
                        "destinationLinkName": "ARCX",
                        "price": 74.16,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379473,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:37:10+0000",
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
                        "destinationLinkName": "JNST",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379472,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379768,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:37:10+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47092025958,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.13,
                                        "time": "2022-09-13T13:37:11+0000"
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379465,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:21+0000",
        "closeTime": "2022-09-13T13:35:23+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024507,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.8807,
                        "time": "2022-09-13T13:35:23+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379467,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:21+0000",
                "closeTime": "2022-09-13T13:37:11+0000",
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
                        "destinationLinkName": "NSDQ",
                        "price": 72.49,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379469,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:37:10+0000",
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
                        "destinationLinkName": "UBSS",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379468,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379764,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:37:10+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47092025952,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.13,
                                        "time": "2022-09-13T13:37:11+0000"
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379461,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:20+0000",
        "closeTime": "2022-09-13T13:35:22+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024491,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.91,
                        "time": "2022-09-13T13:35:22+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379462,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:20+0000",
                "closeTime": "2022-09-13T13:37:11+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379463,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379766,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:37:10+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47092025970,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.1767,
                                        "time": "2022-09-13T13:37:11+0000"
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
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "price": 72.79,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379464,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:37:10+0000",
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379478,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:21+0000",
        "closeTime": "2022-09-13T13:35:23+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024555,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.81,
                        "time": "2022-09-13T13:35:23+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379479,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:21+0000",
                "closeTime": "2022-09-13T13:41:28+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380223,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:40:26+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093738660,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.9,
                                        "time": "2022-09-13T13:41:28+0000"
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
                        "destinationLinkName": "ETMM",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380212,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:40:25+0000",
                        "closeTime": "2022-09-13T13:40:26+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "EDGX",
                        "price": 69.6,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379481,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
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
                        "destinationLinkName": "SOHO",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379480,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:40:25+0000",
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379474,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:21+0000",
        "closeTime": "2022-09-13T13:35:23+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024539,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.91,
                        "time": "2022-09-13T13:35:23+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379475,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:21+0000",
                "closeTime": "2022-09-13T13:37:11+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379770,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:37:10+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47092025978,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.13,
                                        "time": "2022-09-13T13:37:11+0000"
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
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 71.12,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379477,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:37:10+0000",
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
                        "destinationLinkName": "ETMM",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379476,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:21+0000",
                        "closeTime": "2022-09-13T13:37:11+0000",
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379455,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:20+0000",
        "closeTime": "2022-09-13T13:35:22+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024475,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.896,
                        "time": "2022-09-13T13:35:22+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379456,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:20+0000",
                "closeTime": "2022-09-13T13:41:28+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
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
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380206,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:40:25+0000",
                        "closeTime": "2022-09-13T13:40:26+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 72.79,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379458,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
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
                        "destinationLinkName": "NITE",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379457,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:40:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380217,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:40:26+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093738652,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.9,
                                        "time": "2022-09-13T13:41:28+0000"
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379450,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:20+0000",
        "closeTime": "2022-09-13T13:35:21+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024447,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.8205,
                        "time": "2022-09-13T13:35:21+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379451,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:20+0000",
                "closeTime": "2022-09-13T13:41:28+0000",
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
                        "destinationLinkName": "NITE",
                        "price": 72.49,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379453,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
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
                        "destinationLinkName": "JNST",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379452,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:40:25+0000",
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
                        "destinationLinkName": "UBSS",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380210,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:40:25+0000",
                        "closeTime": "2022-09-13T13:40:26+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380225,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:40:26+0000",
                        "closeTime": "2022-09-13T13:41:27+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093738645,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.9,
                                        "time": "2022-09-13T13:41:27+0000"
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
        "quantity": 4,
        "filledQuantity": 4,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "19260Q107",
                    "symbol": "COIN"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 4
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9358379446,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-13T13:35:20+0000",
        "closeTime": "2022-09-13T13:35:21+0000",
        "tag": "AA_lingrong",
        "accountId": 686083551,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47092024419,
                "executionType": "FILL",
                "quantity": 4,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 4,
                        "mismarkedQuantity": 0,
                        "price": 75.855,
                        "time": "2022-09-13T13:35:21+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9358379447,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-13T13:35:20+0000",
                "closeTime": "2022-09-13T13:41:28+0000",
                "tag": "AA_lingrong",
                "accountId": 686083551,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 4,
                        "filledQuantity": 4,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380219,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-13T13:40:26+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47093738667,
                                "executionType": "FILL",
                                "quantity": 4,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 4,
                                        "mismarkedQuantity": 0,
                                        "price": 75.899,
                                        "time": "2022-09-13T13:41:28+0000"
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
                        "quantity": 4,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 73.4,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379449,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:41:28+0000",
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
                        "destinationLinkName": "NITE",
                        "stopPrice": 75.89,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358380208,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:40:25+0000",
                        "closeTime": "2022-09-13T13:40:26+0000",
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
                        "destinationLinkName": "ETMM",
                        "stopPrice": 77.2,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "19260Q107",
                                    "symbol": "COIN"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 4
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9358379448,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-13T13:35:20+0000",
                        "closeTime": "2022-09-13T13:40:25+0000",
                        "tag": "AA_lingrong",
                        "accountId": 686083551
                    }
                ]
            }
        ]
    }
];