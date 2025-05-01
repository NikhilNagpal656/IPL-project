import React, { useEffect, useState } from 'react'

const PointsTable = () => {

    let pointsTableData = {
        "pointsTable": [
          {
            "groupName": "Teams",
            "pointsTableInfo": [
              {
                "teamId": 59,
                "teamName": "RCB",
                "matchesPlayed": 10,
                "matchesWon": 7,
                "matchesLost": 3,
                "points": 14,
                "nrr": "+0.521",
                "teamFullName": "Royal Challengers Bengaluru",
                "teamMatches": [
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1742652000000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "KKR",
                    "matchId": 114960,
                    "matchName": "1st Match",
                    "winner": 59,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1743170400000",
                    "result": "Won by 50 runs",
                    "opponentSName": "CSK",
                    "matchId": 115012,
                    "matchName": "8th Match",
                    "winner": 59,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1743602400000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "GT",
                    "matchId": 115048,
                    "matchName": "14th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1744034400000",
                    "result": "Won by 12 runs",
                    "opponentSName": "MI",
                    "matchId": 115095,
                    "matchName": "20th Match",
                    "winner": 59,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1744293600000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "DC",
                    "matchId": 115111,
                    "matchName": "24th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1744538400000",
                    "result": "Won by 9 wkts",
                    "opponentSName": "RR",
                    "matchId": 115138,
                    "matchName": "28th Match",
                    "winner": 59,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1744984800000",
                    "result": "Loss by 5 wkts - 14 overs game - due to rain",
                    "opponentSName": "PBKS",
                    "matchId": 115174,
                    "matchName": "34th Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1745143200000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 115192,
                    "matchName": "37th Match",
                    "winner": 59,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1745503200000",
                    "result": "Won by 11 runs",
                    "opponentSName": "RR",
                    "matchId": 115230,
                    "matchName": "42nd Match",
                    "winner": 59,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1745762400000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "DC",
                    "matchId": 115257,
                    "matchName": "46th Match",
                    "winner": 59,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1746280800000",
                    "opponentSName": "CSK",
                    "matchId": 115302,
                    "matchName": "52nd Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1746799200000",
                    "opponentSName": "LSG",
                    "matchId": 115354,
                    "matchName": "59th Match",
                    "winner": 1,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1747144800000",
                    "opponentSName": "SRH",
                    "matchId": 115390,
                    "matchName": "64th Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1747490400000",
                    "opponentSName": "KKR",
                    "matchId": 115417,
                    "matchName": "68th Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "W",
                  "W",
                  "W"
                ],
                "teamImageId": 225643
              },
              {
                "teamId": 62,
                "teamName": "MI",
                "matchesPlayed": 10,
                "matchesWon": 6,
                "matchesLost": 4,
                "points": 12,
                "nrr": "+0.889",
                "teamFullName": "Mumbai Indians",
                "teamMatches": [
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1742738400000",
                    "result": "Loss by 4 wkts",
                    "opponentSName": "CSK",
                    "matchId": 114976,
                    "matchName": "3rd Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1743256800000",
                    "result": "Loss by 36 runs",
                    "opponentSName": "GT",
                    "matchId": 115014,
                    "matchName": "9th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1743429600000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "KKR",
                    "matchId": 115032,
                    "matchName": "12th Match",
                    "winner": 62,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1743775200000",
                    "result": "Loss by 12 runs",
                    "opponentSName": "LSG",
                    "matchId": 115059,
                    "matchName": "16th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1744034400000",
                    "result": "Loss by 12 runs",
                    "opponentSName": "RCB",
                    "matchId": 115095,
                    "matchName": "20th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1744552800000",
                    "result": "Won by 12 runs",
                    "opponentSName": "DC",
                    "matchId": 115140,
                    "matchName": "29th Match",
                    "winner": 62,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1744898400000",
                    "result": "Won by 4 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115167,
                    "matchName": "33rd Match",
                    "winner": 62,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1745157600000",
                    "result": "Won by 9 wkts",
                    "opponentSName": "CSK",
                    "matchId": 115201,
                    "matchName": "38th Match",
                    "winner": 62,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1745416800000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115221,
                    "matchName": "41st Match",
                    "winner": 62,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1745748000000",
                    "result": "Won by 54 runs",
                    "opponentSName": "LSG",
                    "matchId": 115255,
                    "matchName": "45th Match",
                    "winner": 62,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1746108000000",
                    "opponentSName": "RR",
                    "matchId": 115291,
                    "matchName": "50th Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1746540000000",
                    "opponentSName": "GT",
                    "matchId": 115336,
                    "matchName": "56th Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1746957600000",
                    "opponentSName": "PBKS",
                    "matchId": 115365,
                    "matchName": "61st Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1747317600000",
                    "opponentSName": "DC",
                    "matchId": 115401,
                    "matchName": "66th Match",
                    "winner": 1,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  }
                ],
                "form": [
                  "W",
                  "W",
                  "W",
                  "W",
                  "W"
                ],
                "teamImageId": 225645
              },
              {
                "teamId": 971,
                "teamName": "GT",
                "matchesPlayed": 9,
                "matchesWon": 6,
                "matchesLost": 3,
                "points": 12,
                "nrr": "+0.748",
                "teamFullName": "Gujarat Titans",
                "teamMatches": [
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1742911200000",
                    "result": "Loss by 11 runs",
                    "opponentSName": "PBKS",
                    "matchId": 114987,
                    "matchName": "5th Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1743256800000",
                    "result": "Won by 36 runs",
                    "opponentSName": "MI",
                    "matchId": 115014,
                    "matchName": "9th Match",
                    "winner": 971,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1743602400000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "RCB",
                    "matchId": 115048,
                    "matchName": "14th Match",
                    "winner": 971,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1743948000000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115093,
                    "matchName": "19th Match",
                    "winner": 971,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1744207200000",
                    "result": "Won by 58 runs",
                    "opponentSName": "RR",
                    "matchId": 115104,
                    "matchName": "23rd Match",
                    "winner": 971,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1744452000000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "LSG",
                    "matchId": 115122,
                    "matchName": "26th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1745056800000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "DC",
                    "matchId": 115176,
                    "matchName": "35th Match",
                    "winner": 971,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1745244000000",
                    "result": "Won by 39 runs",
                    "opponentSName": "KKR",
                    "matchId": 115210,
                    "matchName": "39th Match",
                    "winner": 971,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1745848800000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "RR",
                    "matchId": 115266,
                    "matchName": "47th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1746194400000",
                    "opponentSName": "SRH",
                    "matchId": 115300,
                    "matchName": "51st Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1746540000000",
                    "opponentSName": "MI",
                    "matchId": 115336,
                    "matchName": "56th Match",
                    "winner": 1,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1746972000000",
                    "opponentSName": "DC",
                    "matchId": 115372,
                    "matchName": "62nd Match",
                    "winner": 1,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1747231200000",
                    "opponentSName": "LSG",
                    "matchId": 115392,
                    "matchName": "65th Match",
                    "winner": 1,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1747562400000",
                    "opponentSName": "CSK",
                    "matchId": 115426,
                    "matchName": "69th Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "W",
                  "W",
                  "L"
                ],
                "teamImageId": 235085
              },
              {
                "teamId": 61,
                "teamName": "DC",
                "matchesPlayed": 10,
                "matchesWon": 6,
                "matchesLost": 4,
                "points": 12,
                "nrr": "+0.362",
                "teamFullName": "Delhi Capitals",
                "teamMatches": [
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1742824800000",
                    "result": "Won by 1 wkt",
                    "opponentSName": "LSG",
                    "matchId": 114985,
                    "matchName": "4th Match",
                    "winner": 61,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1743328800000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115021,
                    "matchName": "10th Match",
                    "winner": 61,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1743847200000",
                    "result": "Won by 25 runs",
                    "opponentSName": "CSK",
                    "matchId": 115068,
                    "matchName": "17th Match",
                    "winner": 61,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1744293600000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "RCB",
                    "matchId": 115111,
                    "matchName": "24th Match",
                    "winner": 61,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1744552800000",
                    "result": "Loss by 12 runs",
                    "opponentSName": "MI",
                    "matchId": 115140,
                    "matchName": "29th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1744812000000",
                    "result": "Match tied (Delhi Capitals won the Super Over)",
                    "opponentSName": "RR",
                    "matchId": 115165,
                    "matchName": "32nd Match",
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1745056800000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "GT",
                    "matchId": 115176,
                    "matchName": "35th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1745330400000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "LSG",
                    "matchId": 115212,
                    "matchName": "40th Match",
                    "winner": 61,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1745762400000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "RCB",
                    "matchId": 115257,
                    "matchName": "46th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1745935200000",
                    "result": "Loss by 14 runs",
                    "opponentSName": "KKR",
                    "matchId": 115275,
                    "matchName": "48th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1746453600000",
                    "opponentSName": "SRH",
                    "matchId": 115327,
                    "matchName": "55th Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1746712800000",
                    "opponentSName": "PBKS",
                    "matchId": 115347,
                    "matchName": "58th Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1746972000000",
                    "opponentSName": "GT",
                    "matchId": 115372,
                    "matchName": "62nd Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1747317600000",
                    "opponentSName": "MI",
                    "matchId": 115401,
                    "matchName": "66th Match",
                    "winner": 1,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  }
                ],
                "form": [
                  "T",
                  "L",
                  "W",
                  "L",
                  "L"
                ],
                "teamImageId": 225644
              },
              {
                "teamId": 65,
                "teamName": "PBKS",
                "matchesPlayed": 9,
                "matchesWon": 5,
                "matchesLost": 3,
                "noRes": 1,
                "points": 11,
                "nrr": "+0.177",
                "teamFullName": "Punjab Kings",
                "teamMatches": [
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1742911200000",
                    "result": "Won by 11 runs",
                    "opponentSName": "GT",
                    "matchId": 114987,
                    "matchName": "5th Match",
                    "winner": 65,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1743516000000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "LSG",
                    "matchId": 115039,
                    "matchName": "13th Match",
                    "winner": 65,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1743861600000",
                    "result": "Loss by 50 runs",
                    "opponentSName": "RR",
                    "matchId": 115075,
                    "matchName": "18th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1744120800000",
                    "result": "Won by 18 runs",
                    "opponentSName": "CSK",
                    "matchId": 115102,
                    "matchName": "22nd Match",
                    "winner": 65,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1744466400000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115129,
                    "matchName": "27th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1744725600000",
                    "result": "Won by 16 runs",
                    "opponentSName": "KKR",
                    "matchId": 115156,
                    "matchName": "31st Match",
                    "winner": 65,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1744984800000",
                    "result": "Won by 5 wkts - 14 overs game - due to rain",
                    "opponentSName": "RCB",
                    "matchId": 115174,
                    "matchName": "34th Match",
                    "winner": 65,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1745143200000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "RCB",
                    "matchId": 115192,
                    "matchName": "37th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1745676000000",
                    "result": "No result due to rain",
                    "opponentSName": "KKR",
                    "matchId": 115248,
                    "matchName": "44th Match",
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1746021600000",
                    "opponentSName": "CSK",
                    "matchId": 115282,
                    "matchName": "49th Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1746367200000",
                    "opponentSName": "LSG",
                    "matchId": 115318,
                    "matchName": "54th Match",
                    "winner": 1,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1746712800000",
                    "opponentSName": "DC",
                    "matchId": 115347,
                    "matchName": "58th Match",
                    "winner": 1,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1746957600000",
                    "opponentSName": "MI",
                    "matchId": 115365,
                    "matchName": "61st Match",
                    "winner": 1,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1747404000000",
                    "opponentSName": "RR",
                    "matchId": 115410,
                    "matchName": "67th Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  }
                ],
                "form": [
                  "L",
                  "W",
                  "W",
                  "L",
                  "N"
                ],
                "teamImageId": 225648
              },
              {
                "teamId": 966,
                "teamName": "LSG",
                "matchesPlayed": 10,
                "matchesWon": 5,
                "matchesLost": 5,
                "points": 10,
                "nrr": "-0.325",
                "teamFullName": "Lucknow Super Giants",
                "teamMatches": [
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1742824800000",
                    "result": "Loss by 1 wkt",
                    "opponentSName": "DC",
                    "matchId": 114985,
                    "matchName": "4th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1743084000000",
                    "result": "Won by 5 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115005,
                    "matchName": "7th Match",
                    "winner": 966,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1743516000000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 115039,
                    "matchName": "13th Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1743775200000",
                    "result": "Won by 12 runs",
                    "opponentSName": "MI",
                    "matchId": 115059,
                    "matchName": "16th Match",
                    "winner": 966,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1744106400000",
                    "result": "Won by 4 runs",
                    "opponentSName": "KKR",
                    "matchId": 115084,
                    "matchName": "21st Match",
                    "winner": 966,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1744452000000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "GT",
                    "matchId": 115122,
                    "matchName": "26th Match",
                    "winner": 966,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1744639200000",
                    "result": "Loss by 5 wkts",
                    "opponentSName": "CSK",
                    "matchId": 115149,
                    "matchName": "30th Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1745071200000",
                    "result": "Won by 2 runs",
                    "opponentSName": "RR",
                    "matchId": 115183,
                    "matchName": "36th Match",
                    "winner": 966,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1745330400000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "DC",
                    "matchId": 115212,
                    "matchName": "40th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1745748000000",
                    "result": "Loss by 54 runs",
                    "opponentSName": "MI",
                    "matchId": 115255,
                    "matchName": "45th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1746367200000",
                    "opponentSName": "PBKS",
                    "matchId": 115318,
                    "matchName": "54th Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1746799200000",
                    "opponentSName": "RCB",
                    "matchId": 115354,
                    "matchName": "59th Match",
                    "winner": 1,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1747231200000",
                    "opponentSName": "GT",
                    "matchId": 115392,
                    "matchName": "65th Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1747576800000",
                    "opponentSName": "SRH",
                    "matchId": 115435,
                    "matchName": "70th Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "W",
                  "L",
                  "L"
                ],
                "teamImageId": 389444
              },
              {
                "teamId": 63,
                "teamName": "KKR",
                "matchesPlayed": 10,
                "matchesWon": 4,
                "matchesLost": 5,
                "noRes": 1,
                "points": 9,
                "nrr": "+0.271",
                "teamFullName": "Kolkata Knight Riders",
                "teamMatches": [
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1742652000000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "RCB",
                    "matchId": 114960,
                    "matchName": "1st Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1742997600000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "RR",
                    "matchId": 114996,
                    "matchName": "6th Match",
                    "winner": 63,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1743429600000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "MI",
                    "matchId": 115032,
                    "matchName": "12th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1743688800000",
                    "result": "Won by 80 runs",
                    "opponentSName": "SRH",
                    "matchId": 115050,
                    "matchName": "15th Match",
                    "winner": 63,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1744106400000",
                    "result": "Loss by 4 runs",
                    "opponentSName": "LSG",
                    "matchId": 115084,
                    "matchName": "21st Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1744380000000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "CSK",
                    "matchId": 115113,
                    "matchName": "25th Match",
                    "winner": 63,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1744725600000",
                    "result": "Loss by 16 runs",
                    "opponentSName": "PBKS",
                    "matchId": 115156,
                    "matchName": "31st Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1745244000000",
                    "result": "Loss by 39 runs",
                    "opponentSName": "GT",
                    "matchId": 115210,
                    "matchName": "39th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1745676000000",
                    "result": "No result due to rain",
                    "opponentSName": "PBKS",
                    "matchId": 115248,
                    "matchName": "44th Match",
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1745935200000",
                    "result": "Won by 14 runs",
                    "opponentSName": "DC",
                    "matchId": 115275,
                    "matchName": "48th Match",
                    "winner": 63,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1746352800000",
                    "opponentSName": "RR",
                    "matchId": 115309,
                    "matchName": "53rd Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1746626400000",
                    "opponentSName": "CSK",
                    "matchId": 115345,
                    "matchName": "57th Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1746885600000",
                    "opponentSName": "SRH",
                    "matchId": 115356,
                    "matchName": "60th Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1747490400000",
                    "opponentSName": "RCB",
                    "matchId": 115417,
                    "matchName": "68th Match",
                    "winner": 1,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "L",
                  "N",
                  "W"
                ],
                "teamImageId": 225646
              },
              {
                "teamId": 64,
                "teamName": "RR",
                "matchesPlayed": 10,
                "matchesWon": 3,
                "matchesLost": 7,
                "points": 6,
                "nrr": "-0.349",
                "teamFullName": "Rajasthan Royals",
                "teamMatches": [
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1742724000000",
                    "result": "Loss by 44 runs",
                    "opponentSName": "SRH",
                    "matchId": 114967,
                    "matchName": "2nd Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1742997600000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "KKR",
                    "matchId": 114996,
                    "matchName": "6th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1743343200000",
                    "result": "Won by 6 runs",
                    "opponentSName": "CSK",
                    "matchId": 115030,
                    "matchName": "11th Match",
                    "winner": 64,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1743861600000",
                    "result": "Won by 50 runs",
                    "opponentSName": "PBKS",
                    "matchId": 115075,
                    "matchName": "18th Match",
                    "winner": 64,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1744207200000",
                    "result": "Loss by 58 runs",
                    "opponentSName": "GT",
                    "matchId": 115104,
                    "matchName": "23rd Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1744538400000",
                    "result": "Loss by 9 wkts",
                    "opponentSName": "RCB",
                    "matchId": 115138,
                    "matchName": "28th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1744812000000",
                    "result": "Match tied (Delhi Capitals won the Super Over)",
                    "opponentSName": "DC",
                    "matchId": 115165,
                    "matchName": "32nd Match",
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1745071200000",
                    "result": "Loss by 2 runs",
                    "opponentSName": "LSG",
                    "matchId": 115183,
                    "matchName": "36th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1745503200000",
                    "result": "Loss by 11 runs",
                    "opponentSName": "RCB",
                    "matchId": 115230,
                    "matchName": "42nd Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1745848800000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "GT",
                    "matchId": 115266,
                    "matchName": "47th Match",
                    "winner": 64,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1746108000000",
                    "opponentSName": "MI",
                    "matchId": 115291,
                    "matchName": "50th Match",
                    "winner": 1,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1746352800000",
                    "opponentSName": "KKR",
                    "matchId": 115309,
                    "matchName": "53rd Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1747058400000",
                    "opponentSName": "CSK",
                    "matchId": 115381,
                    "matchName": "63rd Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1747404000000",
                    "opponentSName": "PBKS",
                    "matchId": 115410,
                    "matchName": "67th Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  }
                ],
                "form": [
                  "L",
                  "T",
                  "L",
                  "L",
                  "W"
                ],
                "teamImageId": 225647
              },
              {
                "teamId": 255,
                "teamName": "SRH",
                "matchesPlayed": 9,
                "matchesWon": 3,
                "matchesLost": 6,
                "points": 6,
                "nrr": "-1.103",
                "teamFullName": "Sunrisers Hyderabad",
                "teamMatches": [
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1742724000000",
                    "result": "Won by 44 runs",
                    "opponentSName": "RR",
                    "matchId": 114967,
                    "matchName": "2nd Match",
                    "winner": 255,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1743084000000",
                    "result": "Loss by 5 wkts",
                    "opponentSName": "LSG",
                    "matchId": 115005,
                    "matchName": "7th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1743328800000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "DC",
                    "matchId": 115021,
                    "matchName": "10th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1743688800000",
                    "result": "Loss by 80 runs",
                    "opponentSName": "KKR",
                    "matchId": 115050,
                    "matchName": "15th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1743948000000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "GT",
                    "matchId": 115093,
                    "matchName": "19th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1744466400000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 115129,
                    "matchName": "27th Match",
                    "winner": 255,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1744898400000",
                    "result": "Loss by 4 wkts",
                    "opponentSName": "MI",
                    "matchId": 115167,
                    "matchName": "33rd Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1745416800000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "MI",
                    "matchId": 115221,
                    "matchName": "41st Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1745589600000",
                    "result": "Won by 5 wkts",
                    "opponentSName": "CSK",
                    "matchId": 115239,
                    "matchName": "43rd Match",
                    "winner": 255,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1746194400000",
                    "opponentSName": "GT",
                    "matchId": 115300,
                    "matchName": "51st Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1746453600000",
                    "opponentSName": "DC",
                    "matchId": 115327,
                    "matchName": "55th Match",
                    "winner": 1,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1746885600000",
                    "opponentSName": "KKR",
                    "matchId": 115356,
                    "matchName": "60th Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1747144800000",
                    "opponentSName": "RCB",
                    "matchId": 115390,
                    "matchName": "64th Match",
                    "winner": 1,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1747576800000",
                    "opponentSName": "LSG",
                    "matchId": 115435,
                    "matchName": "70th Match",
                    "winner": 1,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  }
                ],
                "form": [
                  "L",
                  "W",
                  "L",
                  "L",
                  "W"
                ],
                "teamImageId": 225649
              },
              {
                "teamId": 58,
                "teamName": "CSK",
                "matchesPlayed": 9,
                "matchesWon": 2,
                "matchesLost": 7,
                "points": 4,
                "nrr": "-1.302",
                "teamFullName": "Chennai Super Kings",
                "teamMatches": [
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1742738400000",
                    "result": "Won by 4 wkts",
                    "opponentSName": "MI",
                    "matchId": 114976,
                    "matchName": "3rd Match",
                    "winner": 58,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1743170400000",
                    "result": "Loss by 50 runs",
                    "opponentSName": "RCB",
                    "matchId": 115012,
                    "matchName": "8th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1743343200000",
                    "result": "Loss by 6 runs",
                    "opponentSName": "RR",
                    "matchId": 115030,
                    "matchName": "11th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1743847200000",
                    "result": "Loss by 25 runs",
                    "opponentSName": "DC",
                    "matchId": 115068,
                    "matchName": "17th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1744120800000",
                    "result": "Loss by 18 runs",
                    "opponentSName": "PBKS",
                    "matchId": 115102,
                    "matchName": "22nd Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1744380000000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "KKR",
                    "matchId": 115113,
                    "matchName": "25th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1744639200000",
                    "result": "Won by 5 wkts",
                    "opponentSName": "LSG",
                    "matchId": 115149,
                    "matchName": "30th Match",
                    "winner": 58,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1745157600000",
                    "result": "Loss by 9 wkts",
                    "opponentSName": "MI",
                    "matchId": 115201,
                    "matchName": "38th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1745589600000",
                    "result": "Loss by 5 wkts",
                    "opponentSName": "SRH",
                    "matchId": 115239,
                    "matchName": "43rd Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1746021600000",
                    "opponentSName": "PBKS",
                    "matchId": 115282,
                    "matchName": "49th Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1746280800000",
                    "opponentSName": "RCB",
                    "matchId": 115302,
                    "matchName": "52nd Match",
                    "winner": 1,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1746626400000",
                    "opponentSName": "KKR",
                    "matchId": 115345,
                    "matchName": "57th Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1747058400000",
                    "opponentSName": "RR",
                    "matchId": 115381,
                    "matchName": "63rd Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1747562400000",
                    "opponentSName": "GT",
                    "matchId": 115426,
                    "matchName": "69th Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  }
                ],
                "form": [
                  "L",
                  "L",
                  "W",
                  "L",
                  "L"
                ],
                "teamImageId": 225641
              }
            ]
          }
        ],
        "appIndex": {
          "seoTitle": "Indian Premier League 2025 Points Table | Cricbuzz.com",
          "webURL": "www.cricbuzz.com/cricket-series/9237/indian-premier-league-2025/points-table"
        }
      }

      const[tableData,setTableData] = useState(pointsTableData.pointsTable[0].pointsTableInfo)

      async function fetchPointsTable() {
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/9237/points-table';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setTableData(result.pointsTable[0].pointsTableInfo)
} catch (error) {
	console.error(error);
}
  }

  useEffect(()=>{
    // fetchPointsTable()
    setTableData(pointsTableData.pointsTable[0].pointsTableInfo)

  },[])

  return (
    <div className='w-full p-4 text-[10px] md:text-[13px] lg:text-[16px]'>

      <table className='w-full '>
        <tr className='text-center '>
        <td className='text-left w-[40%]  '>Team</td>
        <td>M</td>
        <td>W</td>
        <td>L</td>
        <td>Pts</td>
        <td>NRR</td>
        <td>Last 5</td>
        </tr>
      
        {
          tableData.length <= 0 ? <h1>Loading...</h1> : tableData.map(({form,matchesLost,matchesPlayed,matchesWon,teamName,nrr,points,teamImageId},i) =>(
                <tr key={i} className='text-center w-full h-[40px]  border-t border-gray-500' >
                  <div className='flex gap-4 mt-2'>
                    <td className='w-4'>{i+1}</td>
                    <img className='w-4 object-contain' src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${teamImageId}`} alt="" />
                    <td>{teamName}</td>

                  </div>
                    <td>{matchesPlayed}</td>
                    <td>{matchesWon}</td>
                    <td>{matchesLost}</td>
                    <td>{points}</td>
                    <td>{nrr}</td>
                    <td className='flex gap-1 justify-center'>{form.reverse().map(data => (data=="W" ? <i className="fi fi-ss-check-circle text-green-600" ></i> :  <i className="fi fi-sr-cross-circle text-red-600"></i> ))}</td>
                    
                </tr>
            ))
          }
          </table>
    </div>
  )
}

export default PointsTable