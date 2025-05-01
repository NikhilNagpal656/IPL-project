import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [matchData, setMatchData] = useState([]);

  // console.log(matchData.matchDetails);

  let data = {
    matchDetails: [
      {
        matchDetailsMap: {
          key: "Sat, 22 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 114960,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "1st Match",
                matchFormat: "T20",
                startDate: "1742652000000",
                endDate: "1742664600000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 7 wkts",
                team1: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 174,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 177,
                    wickets: 3,
                    overs: 16.2,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_1",
          layout: "native_large",
          position: 1,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 23 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 114967,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "2nd Match",
                matchFormat: "T20",
                startDate: "1742724000000",
                endDate: "1742736600000",
                state: "Complete",
                status: "Sunrisers Hyderabad won by 44 runs",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 255,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 286,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 242,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 114976,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "3rd Match",
                matchFormat: "T20",
                startDate: "1742738400000",
                endDate: "1742751000000",
                state: "Complete",
                status: "Chennai Super Kings won by 4 wkts",
                team1: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                curBatTeamId: 58,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 155,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 158,
                    wickets: 6,
                    overs: 19.1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 24 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 114985,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "4th Match",
                matchFormat: "T20",
                startDate: "1742824800000",
                endDate: "1742837400000",
                state: "Complete",
                status: "Delhi Capitals won by 1 wkt",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 154,
                  ground: "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
                  city: "Visakhapatnam",
                  timezone: "+05:30",
                },
                curBatTeamId: 61,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 209,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 211,
                    wickets: 9,
                    overs: 19.3,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 25 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 114987,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "5th Match",
                matchFormat: "T20",
                startDate: "1742911200000",
                endDate: "1742923800000",
                state: "Complete",
                status: "Punjab Kings won by 11 runs",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 65,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 243,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 232,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_2",
          layout: "native_large",
          position: 4,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 26 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 114996,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "6th Match",
                matchFormat: "T20",
                startDate: "1742997600000",
                endDate: "1743010200000",
                state: "Complete",
                status: "Kolkata Knight Riders won by 8 wkts",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 380,
                  ground: "Barsapara Cricket Stadium",
                  city: "Guwahati",
                  timezone: "+05:30",
                },
                curBatTeamId: 63,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 151,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 153,
                    wickets: 2,
                    overs: 17.3,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 27 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 115005,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "7th Match",
                matchFormat: "T20",
                startDate: "1743084000000",
                endDate: "1743096600000",
                state: "Complete",
                status: "Lucknow Super Giants won by 5 wkts",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 966,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 190,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 193,
                    wickets: 5,
                    overs: 16.1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 28 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 115012,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "8th Match",
                matchFormat: "T20",
                startDate: "1743170400000",
                endDate: "1743183000000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 50 runs",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 196,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 146,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 29 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 115014,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "9th Match",
                matchFormat: "T20",
                startDate: "1743256800000",
                endDate: "1743269400000",
                state: "Complete",
                status: "Gujarat Titans won by 36 runs",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 971,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 196,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 160,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 30 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 115021,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "10th Match",
                matchFormat: "T20",
                startDate: "1743328800000",
                endDate: "1743341400000",
                state: "Complete",
                status: "Delhi Capitals won by 7 wkts",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 154,
                  ground: "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium",
                  city: "Visakhapatnam",
                  timezone: "+05:30",
                },
                curBatTeamId: 61,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 163,
                    wickets: 10,
                    overs: 18.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 166,
                    wickets: 3,
                    overs: 16,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115030,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "11th Match",
                matchFormat: "T20",
                startDate: "1743343200000",
                endDate: "1743355800000",
                state: "Complete",
                status: "Rajasthan Royals won by 6 runs",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 380,
                  ground: "Barsapara Cricket Stadium",
                  city: "Guwahati",
                  timezone: "+05:30",
                },
                curBatTeamId: 64,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 182,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 176,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 31 Mar 2025",
          match: [
            {
              matchInfo: {
                matchId: 115032,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "12th Match",
                matchFormat: "T20",
                startDate: "1743429600000",
                endDate: "1743442200000",
                state: "Complete",
                status: "Mumbai Indians won by 8 wkts",
                team1: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                curBatTeamId: 62,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 116,
                    wickets: 10,
                    overs: 16.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 121,
                    wickets: 2,
                    overs: 12.5,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 01 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115039,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "13th Match",
                matchFormat: "T20",
                startDate: "1743516000000",
                endDate: "1743528600000",
                state: "Complete",
                status: "Punjab Kings won by 8 wkts",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                curBatTeamId: 65,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 171,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 177,
                    wickets: 2,
                    overs: 16.2,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 02 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115048,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "14th Match",
                matchFormat: "T20",
                startDate: "1743602400000",
                endDate: "1743615000000",
                state: "Complete",
                status: "Gujarat Titans won by 8 wkts",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                curBatTeamId: 971,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 169,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 170,
                    wickets: 2,
                    overs: 17.5,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 03 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115050,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "15th Match",
                matchFormat: "T20",
                startDate: "1743688800000",
                endDate: "1743701400000",
                state: "Complete",
                status: "Kolkata Knight Riders won by 80 runs",
                team1: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                curBatTeamId: 63,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 200,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 120,
                    wickets: 10,
                    overs: 16.4,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 04 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115059,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "16th Match",
                matchFormat: "T20",
                startDate: "1743775200000",
                endDate: "1743787800000",
                state: "Complete",
                status: "Lucknow Super Giants won by 12 runs",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                curBatTeamId: 966,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 203,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 191,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 05 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115068,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "17th Match",
                matchFormat: "T20",
                startDate: "1743847200000",
                endDate: "1743859800000",
                state: "Complete",
                status: "Delhi Capitals won by 25 runs",
                team1: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                curBatTeamId: 61,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 183,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 158,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115075,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "18th Match",
                matchFormat: "T20",
                startDate: "1743861600000",
                endDate: "1743874200000",
                state: "Complete",
                status: "Rajasthan Royals won by 50 runs",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  id: 851,
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "Chandigarh",
                  timezone: "+05:30",
                },
                curBatTeamId: 64,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 205,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 155,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 06 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115093,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "19th Match",
                matchFormat: "T20",
                startDate: "1743948000000",
                endDate: "1743960600000",
                state: "Complete",
                status: "Gujarat Titans won by 7 wkts",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 971,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 152,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 153,
                    wickets: 3,
                    overs: 16.4,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 07 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115095,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "20th Match",
                matchFormat: "T20",
                startDate: "1744034400000",
                endDate: "1744047000000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 12 runs",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 221,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 209,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 08 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115084,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "21st Match",
                matchFormat: "T20",
                startDate: "1744106400000",
                endDate: "1744119000000",
                state: "Complete",
                status: "Lucknow Super Giants won by 4 runs",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                curBatTeamId: 966,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 238,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 234,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115102,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "22nd Match",
                matchFormat: "T20",
                startDate: "1744120800000",
                endDate: "1744133400000",
                state: "Complete",
                status: "Punjab Kings won by 18 runs",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 851,
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "Chandigarh",
                  timezone: "+05:30",
                },
                curBatTeamId: 65,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 219,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 201,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 09 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115104,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "23rd Match",
                matchFormat: "T20",
                startDate: "1744207200000",
                endDate: "1744219800000",
                state: "Complete",
                status: "Gujarat Titans won by 58 runs",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 971,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 217,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 159,
                    wickets: 10,
                    overs: 19.2,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 10 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115111,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "24th Match",
                matchFormat: "T20",
                startDate: "1744293600000",
                endDate: "1744306200000",
                state: "Complete",
                status: "Delhi Capitals won by 6 wkts",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                curBatTeamId: 61,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 163,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 169,
                    wickets: 4,
                    overs: 17.5,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 11 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115113,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "25th Match",
                matchFormat: "T20",
                startDate: "1744380000000",
                endDate: "1744392600000",
                state: "Complete",
                status: "Kolkata Knight Riders won by 8 wkts",
                team1: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                curBatTeamId: 63,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 103,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 107,
                    wickets: 2,
                    overs: 10.1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 12 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115122,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "26th Match",
                matchFormat: "T20",
                startDate: "1744452000000",
                endDate: "1744464600000",
                state: "Complete",
                status: "Lucknow Super Giants won by 6 wkts",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                curBatTeamId: 966,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 180,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 186,
                    wickets: 4,
                    overs: 19.3,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115129,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "27th Match",
                matchFormat: "T20",
                startDate: "1744466400000",
                endDate: "1744479000000",
                state: "Complete",
                status: "Sunrisers Hyderabad won by 8 wkts",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 255,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 245,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 247,
                    wickets: 2,
                    overs: 18.3,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 13 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115138,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "28th Match",
                matchFormat: "T20",
                startDate: "1744538400000",
                endDate: "1744551000000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 9 wkts",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  id: 76,
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 173,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 175,
                    wickets: 1,
                    overs: 17.3,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115140,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "29th Match",
                matchFormat: "T20",
                startDate: "1744552800000",
                endDate: "1744565400000",
                state: "Complete",
                status: "Mumbai Indians won by 12 runs",
                team1: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 51,
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                curBatTeamId: 62,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 205,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 193,
                    wickets: 10,
                    overs: 19,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 14 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115149,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "30th Match",
                matchFormat: "T20",
                startDate: "1744639200000",
                endDate: "1744651800000",
                state: "Complete",
                status: "Chennai Super Kings won by 5 wkts",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                curBatTeamId: 58,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 166,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 168,
                    wickets: 5,
                    overs: 19.3,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 15 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115156,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "31st Match",
                matchFormat: "T20",
                startDate: "1744725600000",
                endDate: "1744738200000",
                state: "Complete",
                status: "Punjab Kings won by 16 runs",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 851,
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "Chandigarh",
                  timezone: "+05:30",
                },
                curBatTeamId: 65,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 111,
                    wickets: 10,
                    overs: 15.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 95,
                    wickets: 10,
                    overs: 15.1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 16 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115165,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "32nd Match",
                matchFormat: "T20",
                startDate: "1744812000000",
                endDate: "1744824600000",
                state: "Complete",
                status: "Match tied (Delhi Capitals won the Super Over)",
                team1: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 51,
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 188,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 188,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 17 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115167,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "33rd Match",
                matchFormat: "T20",
                startDate: "1744898400000",
                endDate: "1744911000000",
                state: "Complete",
                status: "Mumbai Indians won by 4 wkts",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                curBatTeamId: 62,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 162,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 166,
                    wickets: 6,
                    overs: 18.1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 18 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115174,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "34th Match",
                matchFormat: "T20",
                startDate: "1744984800000",
                endDate: "1744997400000",
                state: "Complete",
                status:
                  "Punjab Kings won by 5 wkts  -  14 overs game - due to rain",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                curBatTeamId: 65,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 95,
                    wickets: 9,
                    overs: 14,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 98,
                    wickets: 5,
                    overs: 12.1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 19 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115176,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "35th Match",
                matchFormat: "T20",
                startDate: "1745056800000",
                endDate: "1745069400000",
                state: "Complete",
                status: "Gujarat Titans won by 7 wkts",
                team1: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 971,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 203,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 204,
                    wickets: 3,
                    overs: 19.2,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115183,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "36th Match",
                matchFormat: "T20",
                startDate: "1745071200000",
                endDate: "1745083800000",
                state: "Complete",
                status: "Lucknow Super Giants won by 2 runs",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 76,
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                curBatTeamId: 966,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 180,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 178,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 20 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115192,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "37th Match",
                matchFormat: "T20",
                startDate: "1745143200000",
                endDate: "1745155800000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 7 wkts",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  id: 851,
                  ground:
                    "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur",
                  city: "Chandigarh",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 157,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 159,
                    wickets: 3,
                    overs: 18.5,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115201,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "38th Match",
                matchFormat: "T20",
                startDate: "1745157600000",
                endDate: "1745170200000",
                state: "Complete",
                status: "Mumbai Indians won by 9 wkts",
                team1: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                curBatTeamId: 62,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 176,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 177,
                    wickets: 1,
                    overs: 15.4,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 21 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115210,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "39th Match",
                matchFormat: "T20",
                startDate: "1745244000000",
                endDate: "1745256600000",
                state: "Complete",
                status: "Gujarat Titans won by 39 runs",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                curBatTeamId: 971,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 198,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 159,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 22 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115212,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "40th Match",
                matchFormat: "T20",
                startDate: "1745330400000",
                endDate: "1745343000000",
                state: "Complete",
                status: "Delhi Capitals won by 8 wkts",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                curBatTeamId: 61,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 159,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 161,
                    wickets: 2,
                    overs: 17.5,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 23 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115221,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "41st Match",
                matchFormat: "T20",
                startDate: "1745416800000",
                endDate: "1745429400000",
                state: "Complete",
                status: "Mumbai Indians won by 7 wkts",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                curBatTeamId: 62,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 143,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 146,
                    wickets: 3,
                    overs: 15.4,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 24 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115230,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "42nd Match",
                matchFormat: "T20",
                startDate: "1745503200000",
                endDate: "1745515800000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 11 runs",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 205,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 194,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 25 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115239,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "43rd Match",
                matchFormat: "T20",
                startDate: "1745589600000",
                endDate: "1745602200000",
                state: "Complete",
                status: "Sunrisers Hyderabad won by 5 wkts",
                team1: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                curBatTeamId: 255,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 154,
                    wickets: 10,
                    overs: 19.5,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 155,
                    wickets: 5,
                    overs: 18.4,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 26 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115248,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "44th Match",
                matchFormat: "T20",
                startDate: "1745676000000",
                endDate: "1745688600000",
                state: "Complete",
                status: "No result due to rain",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 201,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 7,
                    overs: 1,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 27 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115255,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "45th Match",
                matchFormat: "T20",
                startDate: "1745748000000",
                endDate: "1745760600000",
                state: "Complete",
                status: "Mumbai Indians won by 54 runs",
                team1: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                curBatTeamId: 62,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 215,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 161,
                    wickets: 10,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 115257,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "46th Match",
                matchFormat: "T20",
                startDate: "1745762400000",
                endDate: "1745775000000",
                state: "Complete",
                status: "Royal Challengers Bengaluru won by 6 wkts",
                team1: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  id: 51,
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                curBatTeamId: 59,
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 162,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 165,
                    wickets: 4,
                    overs: 18.3,
                  },
                },
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 28 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115266,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "47th Match",
                matchFormat: "T20",
                startDate: "1745848800000",
                endDate: "1745861400000",
                state: "Toss",
                status: "Rajasthan Royals opt to bowl",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 76,
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 29 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115275,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "48th Match",
                matchFormat: "T20",
                startDate: "1745935200000",
                endDate: "1745947800000",
                state: "Upcoming",
                status: "Match starts at Apr 29, 14:00 GMT",
                team1: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 51,
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 30 Apr 2025",
          match: [
            {
              matchInfo: {
                matchId: 115282,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "49th Match",
                matchFormat: "T20",
                startDate: "1746021600000",
                endDate: "1746034200000",
                state: "Upcoming",
                status: "Match starts at Apr 30, 14:00 GMT",
                team1: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 01 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115291,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "50th Match",
                matchFormat: "T20",
                startDate: "1746108000000",
                endDate: "1746120600000",
                state: "Upcoming",
                status: "Match starts at May 01, 14:00 GMT",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 76,
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 02 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115300,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "51st Match",
                matchFormat: "T20",
                startDate: "1746194400000",
                endDate: "1746207000000",
                state: "Upcoming",
                status: "Match starts at May 02, 14:00 GMT",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 03 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115302,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "52nd Match",
                matchFormat: "T20",
                startDate: "1746280800000",
                endDate: "1746293400000",
                state: "Upcoming",
                status: "Match starts at May 03, 14:00 GMT",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 04 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115309,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "53rd Match",
                matchFormat: "T20",
                startDate: "1746352800000",
                endDate: "1746365400000",
                state: "Upcoming",
                status: "Match starts at May 04, 10:00 GMT",
                team1: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
            {
              matchInfo: {
                matchId: 115318,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "54th Match",
                matchFormat: "T20",
                startDate: "1746367200000",
                endDate: "1746379800000",
                state: "Upcoming",
                status: "Match starts at May 04, 14:00 GMT",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  id: 155,
                  ground: "Himachal Pradesh Cricket Association Stadium",
                  city: "Dharamsala",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 05 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115327,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "55th Match",
                matchFormat: "T20",
                startDate: "1746453600000",
                endDate: "1746466200000",
                state: "Upcoming",
                status: "Match starts at May 05, 14:00 GMT",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 06 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115336,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "56th Match",
                matchFormat: "T20",
                startDate: "1746540000000",
                endDate: "1746552600000",
                state: "Upcoming",
                status: "Match starts at May 06, 14:00 GMT",
                team1: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 07 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115345,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "57th Match",
                matchFormat: "T20",
                startDate: "1746626400000",
                endDate: "1746639000000",
                state: "Upcoming",
                status: "Match starts at May 07, 14:00 GMT",
                team1: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 08 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115347,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "58th Match",
                matchFormat: "T20",
                startDate: "1746712800000",
                endDate: "1746725400000",
                state: "Upcoming",
                status: "Match starts at May 08, 14:00 GMT",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 155,
                  ground: "Himachal Pradesh Cricket Association Stadium",
                  city: "Dharamsala",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 09 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115354,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "59th Match",
                matchFormat: "T20",
                startDate: "1746799200000",
                endDate: "1746811800000",
                state: "Upcoming",
                status: "Match starts at May 09, 14:00 GMT",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 10 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115356,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "60th Match",
                matchFormat: "T20",
                startDate: "1746885600000",
                endDate: "1746898200000",
                state: "Upcoming",
                status: "Match starts at May 10, 14:00 GMT",
                team1: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 11 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115365,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "61st Match",
                matchFormat: "T20",
                startDate: "1746957600000",
                endDate: "1746970200000",
                state: "Upcoming",
                team1: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  id: 155,
                  ground: "Himachal Pradesh Cricket Association Stadium",
                  city: "Dharamsala",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
            {
              matchInfo: {
                matchId: 115372,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "62nd Match",
                matchFormat: "T20",
                startDate: "1746972000000",
                endDate: "1746984600000",
                state: "Upcoming",
                team1: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  id: 51,
                  ground: "Arun Jaitley Stadium",
                  city: "Delhi",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 12 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115381,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "63rd Match",
                matchFormat: "T20",
                startDate: "1747058400000",
                endDate: "1747071000000",
                state: "Upcoming",
                status: "Match starts at May 12, 14:00 GMT",
                team1: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  id: 11,
                  ground: "MA Chidambaram Stadium",
                  city: "Chennai",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 13 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115390,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "64th Match",
                matchFormat: "T20",
                startDate: "1747144800000",
                endDate: "1747157400000",
                state: "Upcoming",
                status: "Match starts at May 13, 14:00 GMT",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 14 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115392,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "65th Match",
                matchFormat: "T20",
                startDate: "1747231200000",
                endDate: "1747243800000",
                state: "Upcoming",
                status: "Match starts at May 14, 14:00 GMT",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 15 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115401,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "66th Match",
                matchFormat: "T20",
                startDate: "1747317600000",
                endDate: "1747330200000",
                state: "Upcoming",
                status: "Match starts at May 15, 14:00 GMT",
                team1: {
                  teamId: 62,
                  teamName: "Mumbai Indians",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 61,
                  teamName: "Delhi Capitals",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  id: 81,
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 16 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115410,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "67th Match",
                matchFormat: "T20",
                startDate: "1747404000000",
                endDate: "1747416600000",
                state: "Upcoming",
                status: "Match starts at May 16, 14:00 GMT",
                team1: {
                  teamId: 64,
                  teamName: "Rajasthan Royals",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 65,
                  teamName: "Punjab Kings",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  id: 76,
                  ground: "Sawai Mansingh Stadium",
                  city: "Jaipur",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 17 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115417,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "68th Match",
                matchFormat: "T20",
                startDate: "1747490400000",
                endDate: "1747503000000",
                state: "Upcoming",
                status: "Match starts at May 17, 14:00 GMT",
                team1: {
                  teamId: 59,
                  teamName: "Royal Challengers Bengaluru",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 63,
                  teamName: "Kolkata Knight Riders",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  id: 27,
                  ground: "M.Chinnaswamy Stadium",
                  city: "Bengaluru",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 18 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115426,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "69th Match",
                matchFormat: "T20",
                startDate: "1747562400000",
                endDate: "1747575000000",
                state: "Upcoming",
                team1: {
                  teamId: 971,
                  teamName: "Gujarat Titans",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 58,
                  teamName: "Chennai Super Kings",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  id: 50,
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
            {
              matchInfo: {
                matchId: 115435,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "70th Match",
                matchFormat: "T20",
                startDate: "1747576800000",
                endDate: "1747589400000",
                state: "Upcoming",
                team1: {
                  teamId: 966,
                  teamName: "Lucknow Super Giants",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 255,
                  teamName: "Sunrisers Hyderabad",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  id: 485,
                  ground:
                    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium",
                  city: "Lucknow",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 20 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115437,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "Qualifier 1",
                matchFormat: "T20",
                startDate: "1747749600000",
                endDate: "1747762200000",
                state: "Upcoming",
                status: "Match starts at May 20, 14:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 21 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115444,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "Eliminator",
                matchFormat: "T20",
                startDate: "1747836000000",
                endDate: "1747848600000",
                state: "Upcoming",
                status: "Match starts at May 21, 14:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 80,
                  ground: "Rajiv Gandhi International Stadium",
                  city: "Hyderabad",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 23 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115446,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "Qualifier 2",
                matchFormat: "T20",
                startDate: "1748008800000",
                endDate: "1748021400000",
                state: "Upcoming",
                status: "Match starts at May 23, 14:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 25 May 2025",
          match: [
            {
              matchInfo: {
                matchId: 115455,
                seriesId: 9237,
                seriesName: "Indian Premier League 2025",
                matchDesc: "Final",
                matchFormat: "T20",
                startDate: "1748181600000",
                endDate: "1748194200000",
                state: "Upcoming",
                status: "Match starts at May 25, 14:00 GMT",
                team1: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                team2: {
                  teamId: 106,
                  teamName: "TBC",
                  teamSName: "TBC",
                  imageId: 172198,
                },
                venueInfo: {
                  id: 31,
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                seriesStartDt: "1742601600000",
                seriesEndDt: "1748304000000",
                isTimeAnnounced: true,
              },
            },
          ],
          seriesId: 9237,
        },
      },
    ],
    landingPosition: 85,
    appIndex: {
      seoTitle:
        "Indian Premier League 2025 live scores, schedule and results - Cricbuzz | Cricbuzz.com",
      webURL: "www.cricbuzz.com/cricket-series/",
    },
  };

  let filterData = data.matchDetails.filter(
    (everyMatch) => everyMatch.matchDetailsMap
  );
  // console.log(filterData);

  async function fetchData() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/9237";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // let filterData = result.matchDetails.filter(singleMatch => singleMatch.matchDetailsMap)
      // setMatchData(filterData)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // fetchData()
    setMatchData(filterData);
  }, []);

  return (
    <div className="flex flex-wrap w-full ">
      {matchData.map(({ matchDetailsMap: { match, key: date } }, i) =>
        match.map(
          (
            {
              matchInfo: {
                team1: {
                  teamSName: team1Name,
                  teamName: team1LongName,
                  imageId: team1Img,
                },
                team2: {
                  teamSName: team2Name,
                  teamName: team2LongName,
                  imageId: team2Img,
                },
                status,
                matchId,
                matchDesc,
                matchFormat,
              },
              matchScore,
            },
            i
          ) => (
            // console.log(singleMatch)
            <Link className="w-[50%] h-[130px]" to={`/matchDetails/${matchId}`}>
              {/* <h1 key={i}>{team1Name} VS {teamSName}, {date} {status}</h1>   */}
              <div className=" w-full bg-gray-500 border p-3 flex flex-col gap-2.5">
                <div className="flex justify-between">
                  <p> {matchDesc}</p>
                  <p>{date.split(2025)[0]}</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <img
                        className="w-4 object-contain"
                        src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team1Img}`}
                        alt=""
                      />
                      <p>{team1Name}</p>
                    </div>
                    {matchScore?.team1Score ? (
                      <p>
                        {matchScore?.team1Score?.inngs1?.runs}/
                        {matchScore?.team1Score?.inngs1?.wickets} (
                        {matchScore?.team1Score?.inngs1?.overs})
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <img
                        className="w-4 object-contain"
                        src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team2Img}`}
                        alt=""
                      />
                      <p>{team2Name}</p>
                    </div>
                    {matchScore?.team2Score ? (
                      <p>
                        {matchScore?.team2Score?.inngs1?.runs}/
                        {matchScore?.team2Score?.inngs1?.wickets} (
                        {matchScore?.team2Score?.inngs1?.overs})
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <p className="text-[9px] lg:text-[13px]">{status}</p>
              </div>
            </Link>
          )
        )
      )}
    </div>
  );
};

export default Home;
