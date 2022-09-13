data = [
    {
        "session": "NORMAL",
        "duration": "DAY",
        "orderType": "STOP",
        "complexOrderStrategyType": "NONE",
        "quantity": 18,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 18
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9348619027,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619028,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 18,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 41.34,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 18
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619030,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 18,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 18
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619029,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 19,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 19
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9348619018,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619019,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619020,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 43.35,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619021,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 18,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 18
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9348619023,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619024,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 18,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 42.01,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 18
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619026,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 18,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 18
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619025,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 19,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "UBSS",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 19
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9348619010,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619011,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619012,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 43.02,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619013,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 19,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "SOHO",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 19
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9348619014,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619015,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619016,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 42.75,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619017,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610984,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:17+0000",
        "closeTime": "2022-09-12T13:31:32+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672275,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:32+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610985,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:17+0000",
                "closeTime": "2022-09-12T13:32:50+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 161.21,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610987,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:32:49+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619318,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:32:49+0000",
                        "closeTime": "2022-09-12T13:32:49+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041303691,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.151,
                                        "time": "2022-09-12T13:32:49+0000"
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
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610986,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:32:50+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610988,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:17+0000",
        "closeTime": "2022-09-12T13:31:31+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672180,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:31+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610989,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:17+0000",
                "closeTime": "2022-09-12T13:36:53+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619870,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:36:52+0000",
                        "closeTime": "2022-09-12T13:36:52+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041306367,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.4975,
                                        "time": "2022-09-12T13:36:52+0000"
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
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 161.69,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610991,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:36:52+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610990,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:36:53+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 18,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 18
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9348619005,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619006,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 18,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 18
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619007,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 18,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 42.61,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 18
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619008,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "JNST",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610976,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:17+0000",
        "closeTime": "2022-09-12T13:31:31+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672167,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:31+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610977,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:17+0000",
                "closeTime": "2022-09-12T13:32:50+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 160.78,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610979,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:32:49+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610978,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:32:50+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619320,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:32:49+0000",
                        "closeTime": "2022-09-12T13:32:50+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041303706,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.1614,
                                        "time": "2022-09-12T13:32:50+0000"
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "UBSS",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610980,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:17+0000",
        "closeTime": "2022-09-12T13:31:32+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672238,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:32+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610981,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:17+0000",
                "closeTime": "2022-09-12T13:43:24+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "CDRG",
                        "price": 160.73,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348620681,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:42:38+0000",
                        "closeTime": "2022-09-12T13:43:24+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348620761,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:43:24+0000",
                        "closeTime": "2022-09-12T13:43:24+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47043050576,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.5754,
                                        "time": "2022-09-12T13:43:24+0000"
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
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 160.45,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348620665,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:42:33+0000",
                        "closeTime": "2022-09-12T13:43:24+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 160.78,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610983,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:42:38+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610982,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:42:33+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 19,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 19
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347611000,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:21+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9348619001,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:21+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619003,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 42.61,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619004,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:21+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 19,
        "filledQuantity": 0,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "CDRG",
        "stopPrice": 44.02,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "771049103",
                    "symbol": "RBLX"
                },
                "instruction": "SELL_SHORT",
                "positionEffect": "OPENING",
                "quantity": 19
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610996,
        "cancelable": false,
        "editable": false,
        "status": "CANCELED",
        "enteredTime": "2022-09-12T13:31:20+0000",
        "closeTime": "2022-09-12T13:31:42+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610997,
                "cancelable": false,
                "editable": false,
                "status": "CANCELED",
                "enteredTime": "2022-09-12T13:31:20+0000",
                "closeTime": "2022-09-12T13:31:42+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "price": 42.75,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610999,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:20+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 19,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "AutoRoute",
                        "stopPrice": 44.69,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "771049103",
                                    "symbol": "RBLX"
                                },
                                "instruction": "BUY_TO_COVER",
                                "positionEffect": "CLOSING",
                                "quantity": 19
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610998,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:20+0000",
                        "closeTime": "2022-09-12T13:31:42+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "NITE",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610968,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:17+0000",
        "closeTime": "2022-09-12T13:31:31+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672223,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:31+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610969,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:17+0000",
                "closeTime": "2022-09-12T13:36:46+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "price": 160.49,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610971,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:36:46+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041306260,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.49,
                                        "time": "2022-09-12T13:36:46+0000"
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
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610970,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:36:46+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610972,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:17+0000",
        "closeTime": "2022-09-12T13:31:31+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672204,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:31+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610973,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:17+0000",
                "closeTime": "2022-09-12T13:32:50+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "NITE",
                        "price": 160.68,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610975,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:32:49+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619322,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:32:49+0000",
                        "closeTime": "2022-09-12T13:32:50+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041303700,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.1571,
                                        "time": "2022-09-12T13:32:50+0000"
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
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610974,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:17+0000",
                        "closeTime": "2022-09-12T13:32:50+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "ETMM",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610960,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:16+0000",
        "closeTime": "2022-09-12T13:31:32+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672264,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:32+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610961,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:16+0000",
                "closeTime": "2022-09-12T13:36:43+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "price": 160.68,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610963,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:16+0000",
                        "closeTime": "2022-09-12T13:36:36+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "price": 160.37,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619818,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:36:36+0000",
                        "closeTime": "2022-09-12T13:36:43+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "UBSS",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610962,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:16+0000",
                        "closeTime": "2022-09-12T13:36:43+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "SOHO",
                        "price": 160.36,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619847,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:36:43+0000",
                        "closeTime": "2022-09-12T13:36:43+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041306228,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.36,
                                        "time": "2022-09-12T13:36:43+0000"
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
        "quantity": 26,
        "filledQuantity": 26,
        "remainingQuantity": 0,
        "requestedDestination": "AUTO",
        "destinationLinkName": "SOHO",
        "stopPrice": 159.77,
        "stopType": "STANDARD",
        "orderLegCollection": [
            {
                "orderLegType": "EQUITY",
                "legId": 1,
                "instrument": {
                    "assetType": "EQUITY",
                    "cusip": "037833100",
                    "symbol": "AAPL"
                },
                "instruction": "BUY",
                "positionEffect": "OPENING",
                "quantity": 26
            }
        ],
        "orderStrategyType": "TRIGGER",
        "orderId": 9347610964,
        "cancelable": false,
        "editable": false,
        "status": "FILLED",
        "enteredTime": "2022-09-12T13:31:16+0000",
        "closeTime": "2022-09-12T13:31:31+0000",
        "tag": "AA_lingrong",
        "accountId": 123446,
        "orderActivityCollection": [
            {
                "activityType": "EXECUTION",
                "activityId": 47039672149,
                "executionType": "FILL",
                "quantity": 26,
                "orderRemainingQuantity": 0,
                "executionLegs": [
                    {
                        "legId": 1,
                        "quantity": 26,
                        "mismarkedQuantity": 0,
                        "price": 159.78,
                        "time": "2022-09-12T13:31:31+0000"
                    }
                ]
            }
        ],
        "childOrderStrategies": [
            {
                "orderStrategyType": "OCO",
                "orderId": 9347610965,
                "cancelable": false,
                "editable": false,
                "status": "FILLED",
                "enteredTime": "2022-09-12T13:31:16+0000",
                "closeTime": "2022-09-12T13:32:50+0000",
                "tag": "AA_lingrong",
                "accountId": 123446,
                "childOrderStrategies": [
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "LIMIT",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "JNST",
                        "price": 160.25,
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610967,
                        "cancelable": false,
                        "editable": false,
                        "status": "REPLACED",
                        "enteredTime": "2022-09-12T13:31:16+0000",
                        "closeTime": "2022-09-12T13:32:49+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "STOP",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 0,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "stopPrice": 159.29,
                        "stopType": "STANDARD",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9347610966,
                        "cancelable": false,
                        "editable": false,
                        "status": "CANCELED",
                        "enteredTime": "2022-09-12T13:31:16+0000",
                        "closeTime": "2022-09-12T13:32:50+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123456
                    },
                    {
                        "session": "NORMAL",
                        "duration": "DAY",
                        "orderType": "MARKET",
                        "complexOrderStrategyType": "NONE",
                        "quantity": 26,
                        "filledQuantity": 26,
                        "remainingQuantity": 0,
                        "requestedDestination": "AUTO",
                        "destinationLinkName": "ETMM",
                        "orderLegCollection": [
                            {
                                "orderLegType": "EQUITY",
                                "legId": 1,
                                "instrument": {
                                    "assetType": "EQUITY",
                                    "cusip": "037833100",
                                    "symbol": "AAPL"
                                },
                                "instruction": "SELL",
                                "positionEffect": "CLOSING",
                                "quantity": 26
                            }
                        ],
                        "orderStrategyType": "SINGLE",
                        "orderId": 9348619315,
                        "cancelable": false,
                        "editable": false,
                        "status": "FILLED",
                        "enteredTime": "2022-09-12T13:32:49+0000",
                        "closeTime": "2022-09-12T13:32:49+0000",
                        "tag": "AA_lingrong",
                        "accountId": 123446,
                        "orderActivityCollection": [
                            {
                                "activityType": "EXECUTION",
                                "activityId": 47041303682,
                                "executionType": "FILL",
                                "quantity": 26,
                                "orderRemainingQuantity": 0,
                                "executionLegs": [
                                    {
                                        "legId": 1,
                                        "quantity": 26,
                                        "mismarkedQuantity": 0,
                                        "price": 160.1571,
                                        "time": "2022-09-12T13:32:49+0000"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];