const data = [
  {
    country: "Brazil",
    Religion: [
      {
        religion: "Catholic",
        details: {
          speak: ["Portuguese", [3, 7], "Carnival"],
          population: {
            percentage: "64.6%",
            major_areas: ["Rio de Janeiro", "Sao Paulo"],
          },
        },
      },
      {
        religion: "Protestant",
        details: {
          speak: ["Portuguese", [2, 5], "Festa Junina"],
          population: {
            percentage: "22.2%",
            major_areas: ["Bahia", "Brasilia"],
          },
        },
      },
      {
        religion: "Spiritist",
        details: {
          speak: [
            "Portuguese",
            {
              count: "2.2%",
              festival: "Day of the Dead",
              centers: [
                {
                  name: "Spiritist Center of Sao Paulo",
                  city: "Sao Paulo",
                  capacity: 300,
                },
                {
                  name: "Spiritist Union of Rio",
                  city: "Rio de Janeiro",
                  capacity: 200,
                },
              ],
            },
          ],
        },
      },
    ],
    Education: {
      levels: {
        primary: "4 years",
        secondary: "4 years",
        higher_secondary: "3 years",
      },
      universities: [
        {
          name: "University of Sao Paulo",
          founded: 1934,
          students: 90000,
        },
        {
          name: "Federal University of Rio de Janeiro",
          founded: 1920,
          students: 65000,
        },
      ],
    },
  },
  {
    country: "Japan",
    Religion: [
      {
        religion: "Shinto",
        details: {
          population: {
            percentage: "48%",
            major_areas: ["Tokyo", "Kyoto"],
          },
        },
      },
      {
        religion: "Buddhism",
        details: {
          population: {
            percentage: "46%",
            major_areas: ["Osaka", "Nara"],
          },
        },
      },
    ],
    Athletes: [
      {
        name: "Shohei Ohtani",
        sport: ["Baseball", "Pitcher"],
        awards: {
          MLB: 1,
          NPB: 1,
          WBC: 1,
        },
        statistics: {
          games: 150,
          home_runs: 45,
          ERA: 2.52,
        },
      },
      {
        name: "Naomi Osaka",
        sport: ["Tennis", "Singles"],
        awards: {
          GrandSlams: 4,
          WTA: 7,
          Olympics: 1,
        },
        statistics: {
          matches: 100,
          wins: 85,
          losses: 15,
        },
      },
    ],
    Education: {
      levels: {
        primary: "6 years",
        secondary: "3 years",
        higher_secondary: "3 years",
      },
      universities: [
        {
          name: "University of Tokyo",
          founded: 1877,
          students: 30000,
        },
        {
          name: "Kyoto University",
          founded: 1897,
          students: 22000,
        },
      ],
    },
  },
  {
    country: "Australia",
    Religion: [
      {
        religion: "Christianity",
        details: {
          population: {
            percentage: "52%",
            major_areas: ["Sydney", "Melbourne"],
          },
        },
      },
      {
        religion: "No Religion",
        details: {
          population: {
            percentage: "30%",
            major_areas: ["Brisbane", "Perth"],
          },
        },
      },
    ],
    Leaders: [
      {
        name: "Scott Morrison",
        term: "2018-2022",
        party: "Liberal",
      },
      {
        name: "Julia Gillard",
        term: "2010-2013",
        party: "Labor",
        achievements: [
          "National Broadband Network",
          "DisabilityCare Australia",
        ],
      },
    ],
    Sports: {
      popular_sports: ["Cricket", "Rugby", "Soccer"],
      major_events: [
        {
          name: "Melbourne Cup",
          sport: "Horse Racing",
          audience: "10 million",
        },
        {
          name: "Australian Open",
          sport: "Tennis",
          audience: "30 million",
        },
      ],
    },
  },
  {
    country: "India",
    Religion: [
      {
        religion: "Hinduism",
        details: {
          festivals: ["Diwali", "Holi"],
          population: {
            percentage: "79.8%",
            major_areas: ["Uttar Pradesh", "Maharashtra"],
          },
        },
      },
      {
        religion: "Islam",
        details: {
          festivals: ["Eid al-Fitr", "Eid al-Adha"],
          population: {
            percentage: "14.2%",
            major_areas: ["Uttar Pradesh", "West Bengal"],
          },
        },
      },
      {
        religion: "Christianity",
        details: {
          festivals: ["Christmas", "Easter"],
          population: {
            percentage: "2.3%",
            major_areas: ["Kerala", "Goa"],
          },
        },
      },
    ],
    Technology: {
      companies: [
        {
          name: "Tata Consultancy Services",
          founded: 1968,
          headquarters: "Mumbai",
          employees: 450000,
        },
        {
          name: "Infosys",
          founded: 1981,
          headquarters: "Bangalore",
          employees: 250000,
        },
      ],
      innovations: [
        {
          name: "Aadhaar",
          type: "Biometric ID system",
          coverage: "1.3 billion people",
        },
        {
          name: "Unified Payments Interface (UPI)",
          type: "Digital payment system",
          transactions_per_month: "4 billion",
        },
      ],
    },
    Education: {
      levels: {
        primary: "5 years",
        secondary: "3 years",
        higher_secondary: "2 years",
      },
      universities: [
        {
          name: "Indian Institute of Technology Bombay",
          founded: 1958,
          students: 10000,
        },
        {
          name: "University of Delhi",
          founded: 1922,
          students: 132000,
        },
      ],
    },
  },
];
console.log(
  `In ${data[0].country}, the predominant religion is ${data[0].Religion[0].religion}, spoken in ${data[0].Religion[0].details.speak[0]} with celebrations like ${data[0].Religion[0].details.speak[2]}, 
   and it comprises ${data[0].Religion[0].details.population.percentage} of the population mainly in ${data[0].Religion[0].details.population.major_areas[0]} and ${data[0].Religion[0].details.population.major_areas[1]}. ${data[0].Education.universities[0].name}
   found in ${data[0].Education.universities[0].founded}, is one of the major educational institutions with ${data[0].Education.universities[0].students} students.
   
   In ${data[1].country}, ${data[1].Religion[0].religion} is followed by ${data[1].Religion[0].details.population.percentage} of the population, with major areas including ${data[1].Religion[0].details.population.major_areas[0]} and 
   ${data[1].Religion[0].details.population.major_areas[1]}, Notable athlets include ${data[1].Athletes[0].name}, a ${data[1].Athletes[0].sport[0]} ${data[1].Athletes[0].sport[1]} wit statistics of ${data[1].Athletes[0].statistics.games}
   games and ${data[1].Athletes[0].statistics.home_runs} home runs, and ${data[1].Athletes[1].name}, a ${data[1].Athletes[1].sport[0]}player with ${data[1].Athletes[1].awards.GrandSlams} Grand Slams and a match record of 
   ${data[1].Athletes[1].statistics.wins} and ${data[1].Athletes[1].statistics.losses} losses. 
   
   ${data[2].country}'s major sport include ${data[2].Sports.popular_sports[0]}, ${data[2].Sports.popular_sports[1]} and ${data[2].Sports.popular_sports[2]}, with the ${data[2].Sports.major_events[0].name} in ${data[2].Sports.major_events[0].sport} attracting 
   an audience  of ${data[2].Sports.major_events[0].audience}. 

   ${data[3].country} is known for ${data[3].Religion[0].religion}, festivals like ${data[3].Religion[0].details.festivals[0]} and ${data[3].Religion[0].details.festivals[1]}, and boasts significant technological 
   innovations such as the ${data[3].Technology.innovations[0].name} ${data[3].Technology.innovations[0].type} covering ${data[3].Technology.innovations[0].coverage}.`
);
