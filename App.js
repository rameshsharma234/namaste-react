
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

/* 
Header
  Logo
  Nav item
Body
  Search
  Restaurant container
  Restarantcard
Footer
  Copyright
  Link
  Licence
 
*/
const resData = [

              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "588569",
                  "name": "Vaishnav Foods",
                  "uuid": "7b4aee79-ce06-4cd7-b28e-e903cfac7bb7",
                  "city": "12",
                  "area": "Gopalpura",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "f6usnre0i1ibfpgbraec",
                  "cuisines": [
                    "North Indian",
                    "South Indian",
                    "Chinese",
                    "Snacks",
                    "Fast Food",
                    "Pastas",
                    "Thalis",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "slaString": "36 MINS",
                  "lastMileTravel": 8.300000190734863,
                  "slugs": {
                    "restaurant": "vaishnav-foods-manasarovar-manasarovar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "PLOT NO.-27-A, SCHEME DEEPAK VATIKA, KARTARPURA, JAIPUR",
                  "locality": "Manasarovar",
                  "parentId": 220999,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5400,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5400",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7066223~p=1~eid=00000188-9932-3197-0735-138600bf010a",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "8.3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "588569",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 8.300000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.7",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "158325",
                  "name": "Cheelgadi Sweets",
                  "uuid": "e8627432-8a41-483a-acdf-0c274e39f7a5",
                  "city": "12",
                  "area": "Sanganer",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "ucuxg3r5mkdazfuwisz7",
                  "cuisines": [
                    "Sweets",
                    "Chaat",
                    "Desserts",
                    "Indian",
                    "Rajasthani"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 7.699999809265137,
                  "slugs": {
                    "restaurant": "cheelgadi-sweets-pratap-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "65 VIKAS NAGAR AIRPORT ROAD SANGANER JAIPUR ,Sanganer,Jaipur,Rajasthan-302029",
                  "locality": "Vikas Nagar",
                  "parentId": 13464,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4600,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4600",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "7.6 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "158325",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 7.699999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.0",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "580281",
                  "name": "Pizza Plant",
                  "uuid": "2d45b132-577c-4534-bca0-0d8f1bdf1a95",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "Too Few Ratings",
                  "cloudinaryImageId": "rqgnxikgxqdf2nvskirk",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 35,
                  "slaString": "35 MINS",
                  "lastMileTravel": 4.099999904632568,
                  "slugs": {
                    "restaurant": "pizza-plant-mansarovar-extension-mansarovar-extension",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "25 Kanak Vihar Colony, Khejdo Ka Vas, Mansarovar, Jaipur, Rajasthan 302020, India",
                  "locality": "Kanak Vihar",
                  "parentId": 347354,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "580281",
                    "deliveryTime": 35,
                    "minDeliveryTime": 35,
                    "maxDeliveryTime": 35,
                    "lastMileTravel": 4.099999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "--",
                  "totalRatings": 0,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "52159",
                  "name": "Andewalaz (egg delicacies)",
                  "uuid": "2861c0b7-8f6e-4600-afda-ca1b4116717b",
                  "city": "12",
                  "area": "Durgapura",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "skcuzhythtgj2lppeclt",
                  "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Chinese",
                    "Mughlai",
                    "Chaat",
                    "Punjabi",
                    "Desserts",
                    "Snacks",
                    "Rajasthani",
                    "Tandoor",
                    "Sweets",
                    "Indian",
                    "Beverages",
                    "Ice Cream",
                    "Italian",
                    "Pastas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 40,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 40,
                  "slaString": "40 MINS",
                  "lastMileTravel": 8.600000381469727,
                  "slugs": {
                    "restaurant": "ande-walaz-gopalpura-malviya-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "38, kailash puri colony, Milap Nagar, Tonk Road, Jaipur",
                  "locality": "Kailash Puri Colony",
                  "parentId": 33134,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5400,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5400",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7052448~p=4~eid=00000188-9932-3197-0735-138700bf046d",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "8.6 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "52159",
                    "deliveryTime": 40,
                    "minDeliveryTime": 40,
                    "maxDeliveryTime": 40,
                    "lastMileTravel": 8.600000381469727,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.8",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "579174",
                  "name": "Jain Namkeen And Kachori (Tonk Wale)",
                  "uuid": "a713d12c-a56d-481a-a77d-bb3006dd2a15",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "lwplb5jk9fynklp5dj0v",
                  "cuisines": [
                    "Snacks",
                    "Sweets"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 15000,
                  "costForTwoString": "₹150 FOR TWO",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "slaString": "28 MINS",
                  "lastMileTravel": 4.199999809265137,
                  "slugs": {
                    "restaurant": "jain-namkeen-and-kachori-(tonk-wale)-mansarovar-extension-mansarovar-extension",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "2/36, Sfs Chouraha,agarwal Farm,Mansaover",
                  "locality": "SFS Chouraha",
                  "parentId": 346790,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.1 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "579174",
                    "deliveryTime": 28,
                    "minDeliveryTime": 28,
                    "maxDeliveryTime": 28,
                    "lastMileTravel": 4.199999809265137,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.6",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "528939",
                  "name": "Madrid Taco And Shakes",
                  "uuid": "9dfbc415-10e4-45f7-9eff-2944d52c5b65",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "20+ ratings",
                  "cloudinaryImageId": "gcihrtsnkw6uf6jjqizb",
                  "cuisines": [
                    "Pizzas",
                    "Burgers",
                    "Beverages",
                    "Italian",
                    "Cafe",
                    "Mexican",
                    "French",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "slaString": "29 MINS",
                  "lastMileTravel": 5.800000190734863,
                  "slugs": {
                    "restaurant": "madrid-taco-and-shakes-manasarovar-manasarovar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": " Hotspot Kiosk 2, 61/21, Basement, Rajat Path, Mansarovar, Jaipur, Jaipur-II Ward 35, Jaipur, Rajasthan - 302020",
                  "locality": "Rajat Path",
                  "parentId": 318735,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3600",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "528939",
                    "deliveryTime": 29,
                    "minDeliveryTime": 29,
                    "maxDeliveryTime": 29,
                    "lastMileTravel": 5.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 20,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "61560",
                  "name": "Bombay Mishthan Bhandar (BMB) - Durapura",
                  "uuid": "359e00c7-3f00-4f59-b0ca-af039470ef71",
                  "city": "12",
                  "area": "Durgapura",
                  "totalRatingsString": "10000+ ratings",
                  "cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
                  "cuisines": [
                    "North Indian",
                    "Thalis",
                    "Rajasthani",
                    "Snacks",
                    "Sweets",
                    "Indian"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "slaString": "31 MINS",
                  "lastMileTravel": 8,
                  "slugs": {
                    "restaurant": "bombay-mishthan-bhandar-sweets-durgapura-malviya-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "12, 12A Jai Jawan Colony, Near Durgapura, Tonk Road, Jaipur",
                  "locality": "Jai Jawan Colony",
                  "parentId": 13728,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4600,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4600",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7066168~p=7~eid=00000188-9932-3197-0735-138800bf0747",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "61560",
                    "deliveryTime": 31,
                    "minDeliveryTime": 31,
                    "maxDeliveryTime": 31,
                    "lastMileTravel": 8,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 10000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "356954",
                  "name": "Kafeholic",
                  "uuid": "b35d5fe6-c64d-423d-b7de-e6442f6f1afc",
                  "city": "12",
                  "area": "Tonk Road",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "rhwwkcrevpheatc42vfw",
                  "cuisines": [
                    "Cafe",
                    "Italian",
                    "Fast Food",
                    "Burgers",
                    "Mexican",
                    "Street Food",
                    "Salads"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 35,
                  "slaString": "35 MINS",
                  "lastMileTravel": 6.800000190734863,
                  "slugs": {
                    "restaurant": "kafeholic-manasarovar-manasarovar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "79/1 SHIPRA PATH MANSAROVAR JAIPUR, Jaipur-II Ward 32, Jaipur II, Rajasthan, 302020",
                  "locality": "Shipra Path",
                  "parentId": 113443,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 4100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 4100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "4100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "6.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "30% OFF",
                    "subHeader": "UPTO ₹75",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "356954",
                    "deliveryTime": 35,
                    "minDeliveryTime": 35,
                    "maxDeliveryTime": 35,
                    "lastMileTravel": 6.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.9",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "375120",
                  "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                  "uuid": "d08c1d8b-39b8-4b4c-aefd-b7f4e18753ee",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "qdmfbxnbictuxr8knatu",
                  "cuisines": [
                    "Ice Cream"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 17,
                  "minDeliveryTime": 17,
                  "maxDeliveryTime": 17,
                  "slaString": "17 MINS",
                  "lastMileTravel": 2.9000000953674316,
                  "slugs": {
                    "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-manasarovar-manasarovar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "KASHISH BAKERS AND CONFECTIONAERY: Plot No. 172, Khejro Ka Baas, Near Dakshinmukhi Hanuman temple, ISKON Temple road, Mansarover, Jaipur, Rajasthan-302020",
                  "locality": "Iskcon Road",
                  "parentId": 582,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.9 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "375120",
                    "deliveryTime": 17,
                    "minDeliveryTime": 17,
                    "maxDeliveryTime": 17,
                    "lastMileTravel": 2.9000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.6",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "149781",
                  "name": "90 Bata 3 The Desi Canteen",
                  "uuid": "25a0de78-d1c3-4a38-b7df-bd567d1da344",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "sip4gnlfdswoproosvhn",
                  "cuisines": [
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "slaString": "36 MINS",
                  "lastMileTravel": 4.800000190734863,
                  "slugs": {
                    "restaurant": "90-bata-3-the-desi-canteen-madhyam-marg-manasarovar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "90, 3, Madhyam Marg, Sector 12, Mansarovar, Jaipur",
                  "locality": "Sector 12",
                  "parentId": 24295,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7066018~p=10~eid=00000188-9932-3197-0735-138900bf0a1f",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.8 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "ABOVE ₹149",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "149781",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 4.800000190734863,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.2",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "306226",
                  "name": "BAKE A CAKE",
                  "uuid": "e4a6bdf3-c2ec-4b29-beac-26bb0539d788",
                  "city": "12",
                  "area": "C Scheme",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "trpohqzrcgymlb1grtaq",
                  "cuisines": [
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 50000,
                  "costForTwoString": "₹500 FOR TWO",
                  "deliveryTime": 34,
                  "minDeliveryTime": 34,
                  "maxDeliveryTime": 34,
                  "slaString": "34 MINS",
                  "lastMileTravel": 11.5,
                  "slugs": {
                    "restaurant": "bake-a-cake-c-scheme-c-scheme",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "C-14  PRATAPSTADIUM  CHITRAKOOT  YOJNA  VAISHALI  NAGAR  JAIPUR,   -  302021",
                  "locality": "Nandpuri Colony",
                  "parentId": 39853,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 7800,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 7800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "7800",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 1,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "11.5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "60% OFF",
                    "subHeader": "UPTO ₹120",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "306226",
                    "deliveryTime": 34,
                    "minDeliveryTime": 34,
                    "maxDeliveryTime": 34,
                    "lastMileTravel": 11.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "IT_IS_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.6",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "679113",
                  "name": "VADILAL ICE CREAM",
                  "uuid": "d1f0e3b7-3667-4236-8b35-11aabc12dc57",
                  "city": "12",
                  "area": "Mansarovar Extension",
                  "totalRatingsString": "50+ ratings",
                  "cloudinaryImageId": "d10f848df624e1d192c1b57c92f37c74",
                  "cuisines": [
                    "Ice Cream"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "slaString": "25 MINS",
                  "lastMileTravel": 4.099999904632568,
                  "slugs": {
                    "restaurant": "vadilal-ice-cream-mansarovar-extension-mansarovar-extension-2",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "SHREE BALAJI ENTERPRISES-Jaipur - P.NO.12, KANAK VIHAR, NEAR bRAHMAN KI THADI, MANSAROVAR, Sanganer, Jaipur ll- Rajasthan-302020",
                  "locality": "Kanak Vihar",
                  "parentId": 11745,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "679113",
                    "deliveryTime": 25,
                    "minDeliveryTime": 25,
                    "maxDeliveryTime": 25,
                    "lastMileTravel": 4.099999904632568,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 50,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "455212",
                  "name": "Hotel Mini Mahal",
                  "uuid": "22e82077-8feb-49d0-94f1-bd28d2518156",
                  "city": "12",
                  "area": "Chitrakoot",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "d7hol7knjuf97e0g6bis",
                  "cuisines": [
                    "North Indian",
                    "Thalis"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 42,
                  "minDeliveryTime": 42,
                  "maxDeliveryTime": 42,
                  "slaString": "42 MINS",
                  "lastMileTravel": 9.399999618530273,
                  "slugs": {
                    "restaurant": "hotel-mini-mahal-vaishali-nagar-vaishali-nagar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "HOTEL MINI MAHAL, PLOT NO. 7 BHURA PATEL NAGAR, NEAR SBI CHOURAHA, CHITRAKOOT, VAISHALI NAGAR JAIPUR, Jaipur II, Ward 33, Jaipur 11(Rajasthan)  302021",
                  "locality": "Bhura Patel Nagar",
                  "parentId": 100361,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 6200,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 6200,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "6200",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7066549~p=13~eid=00000188-9932-3197-0735-138a00bf0d47",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "9.3 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹299",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "455212",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 9.399999618530273,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "528813",
                  "name": "Bakingo",
                  "uuid": "7253c33d-6733-4abf-8343-e5d16d424e3f",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "tmhaokxkj2uzqnfq8b4v",
                  "cuisines": [
                    "Bakery",
                    "Desserts",
                    "Beverages",
                    "Snacks"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 29900,
                  "costForTwoString": "₹299 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 5,
                  "slugs": {
                    "restaurant": "bakingo-jaipur-manasarovar",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "111, 395C, Shipra Path, Jhalana Chhod, Mansarovar, Jaipur, Rajasthan 302020",
                  "locality": "Shipra Path",
                  "parentId": 3818,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3600,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3600,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3600",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "528813",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.4",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "391972",
                  "name": "The Crust",
                  "uuid": "67bbc553-ed26-42d4-8df8-4e22a29d0fef",
                  "city": "12",
                  "area": "Mansarovar",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "e29wtpn1nxnnhvlxz9sv",
                  "cuisines": [
                    "Bakery"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 4.400000095367432,
                  "slugs": {
                    "restaurant": "the-crust-manasarovar-manasarovar-2",
                    "city": "jaipur"
                  },
                  "cityState": "12",
                  "address": "Shop no.1 , 122/51 vijay path chorha madhyam marg mansarover  jaipur, Jaipur-II Ward 34, Jaipur II, Rajasthan - 302023",
                  "locality": "Madhyam Marg \n",
                  "parentId": 6309,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "4.4 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹100",
                    "discountTag": "",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "391972",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 4.400000095367432,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              }
      ]
const Header = ()=> {
  return(
    <div className='header'>
      <div className='logo-container'>
        <img src='https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_1280.png'
         className='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>About Us</li>
          <li className='nav-item'>Contact Us</li>
          <li className='nav-item'>Card</li>
        </ul>
      </div>
    </div>
  )
}

const Body = ()=> {
  return (
    <div className='body-container'>
      <Search/>
      <RestaurantContainer/>
       </div>
  )
}

const Search = ()=> {
  return (
    <div className='search-container'>
      <input className='search-input' type='text'></input>
      <button>Search</button>
    </div>
  )
}

const RestaurantContainer = () => {
  return (
    <div className='restaurants-container'>
      {
      resData.map((restaurant) => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
}
    </div>
  )
}

const RestaurantCard = (props) => {
  console.log("props", props)
  const { resData } = props;
  console.log("resData", resData)
  const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${resData.data.cloudinaryImageId}`
  return (
    <div className='restaurant-card'>
      <img className='restaurant-image' src={imageUrl} />
      <h3 className='title'>
      {resData.data?.name}
      </h3>
      <small className='description'>
        {resData.data?.cuisines?.join(', ')}
      </small>
      <h4>
        4.3 stars
      </h4>
      <h4>
        38 minutes
      </h4>
    </div>
  )
}
const AppLayout = ()=> {
  return (
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
