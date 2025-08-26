// Shared courses across all Science Education departments
const sharedCourses = {
  1: {
    first: [
        { code: "GST101", name: "Use of English I", credit: 1 },
        { code: "GST109", name: "Basic Studies in Igbo I", credit: 1 },
        { code: "GST105", name: "Humanities", credit: 2 },
        { code: "GST107", name: "Nigerian Peoples & Culture", credit: 2 },
        { code: "CSC101", name: "Intro to Computer Programming", credit: 2 },
        { code: "EDU101", name: "Sociological Foundation of Education", credit: 2 },
        { code: "EDU103", name: "Historical Foundation of Education", credit: 2 },
    ],
    second: [
        { code: "GST110", name: "Basic Studies in Igbo II", credit: 1 },
        { code: "GST102", name: "Use of English II", credit: 1 },
        { code: "GST106", name: "Social Sciences", credit: 2 },
        { code: "CSC102", name: "Introduction to Computer Programming II", credit: 2 },
        { code: "EDU112", name: "Introduction to Educational Psychology", credit: 3 },
        { code: "EDU102", name: "Philosophical Foundation in Education", credit: 2 },
        { code: "SED112", name: "Nature & History of Science", credit: 2 },
    ]
  },
  2: {
    first: [
      { code: "EDU212", name: "Psychology of  Learning", credit: 3 },
      { code: "EDU221", name: "Fundamentals of Curriculum Development", credit: 2 },
      { code: "EDU222", name: "Basic Methodology", credit: 2 },
      { code: "SED211", name: "Introduction to Science Education", credit: 3 },
    ],
    second: [
      { code: "EDU226", name: "Micro Teaching Practical", credit: 2 },
      { code: "EDU262", name: "Educational Technology", credit: 2 },
       { code: "SED224", name: "Special Method in Science Education", credit: 2 },
    ]
  },
  3: {
    first: [
      { code: "EDU331", name: "Educational Research & Statistics", credit: 3 },
      { code: "GST301", name: "Entrepreneurial Studies", credit: 1 },
      { code: "SED311", name: "Lab. Organization & Management", credit: 3 },
    ],
    second: [
      { code: "EDU326", name: "Teaching Practice", credit: 6 },
    ]
  },
  4: {
    first: [
        { code: "SED241", name: "Integrating Science", credit: 2 },
        { code: "EDU333", name: "Test & Measurement", credit: 2 },
        { code: "SED411", name: "Special Problems in Science Education", credit: 3 },
    ],
    second: [
      { code: "SED434", name: "Research Project", credit: 4 },
      { code: "SED412", name: "Curriculum Development", credit: 3 },
    ]
  }
};

// Department-specific courses
const coursesData = {
  cs: {
    1: {
      first: [
        //Verified ✅
        ...sharedCourses[1].first,
        { code: "CHM101", name: "Basic Organic Chemistry", credit: 2 },
        { code: "ICH111", name: "Basic Inorganic Chemistry I", credit: 2 },
        { code: "PHY101", name: "General Physics I", credit: 3 },
        { code: "MAT101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        //Verified ✅
        ...sharedCourses[1].second,
        { code: "MAT102", name: "Elementary Mathematics II", credit: 3 },
        { code: "PHY102", name: "General Physics II", credit: 3 },
        { code: "CSC112", name: "Computer Application & Management", credit: 2 },
      ]
    },
    2: {
      first: [
        //Verified ✅
        ...sharedCourses[2].first,
        { code: "CSC201", name: "Computer Programming I", credit: 2 },
        { code: "CSC221", name: "Assembly Language Programming", credit: 2 },
        { code: "CSC261", name: "Information Technology", credit: 2 },
        { code: "CSC231", name: "Automata Theory Computability", credit: 2 },
        { code: "CSC211", name: "Introduction to Digital Design", credit: 2 },
      ],
      second: [
        //Verified ✅
        ...sharedCourses[2].second,
        { code: "CSC202", name: "Computer Programming II", credit: 2 },
        { code: "CSC232", name: "Database Design & Management", credit: 2 },
        { code: "CSC252", name: "Data Structure", credit: 2 },
        { code: "MAT202", name: "Elementary Differential Equations", credit: 3 },
        { code: "PHY202", name: "Electric Circuit & Electronics", credit: 3 },
      ]
    },
    3: {
      first: [
        //Verified ✅
        ...sharedCourses[3].first,
        { code: "CSC311", name: "Digital Design & Microprocessor", credit: 2 },
        { code: "CSC341", name: "Numerical Methods", credit: 2 },
        { code: "CSC351", name: "System Analysis & Design", credit: 2 },
        { code: "CSC361", name: "Operational Research", credit: 2 },
        { code: "CSC321", name: "Operating System", credit: 2 },
        { code: "CSC371", name: "Information System & Management", credit: 2 },
      ],
      second: [
        ...sharedCourses[3].second,
      ]
    },
    4: {
      first: [
        //Verified ✅
        ...sharedCourses[4].first,
        { code: "CSC401", name: "Data Communication & Network", credit: 2 },
        { code: "CSC421", name: "Software Development & Management", credit: 2 },
        { code: "CSC431", name: "Algorithms & Complex Analysis", credit: 2 },
        { code: "CSC451", name: "Artificial Intelligence", credit: 2 },
        { code: "CSC461", name: "Object Oriented Programming", credit: 3 },
      ],
      second: [
        //Verified ✅
        ...sharedCourses[4].second,
        { code: "CSC412", name: "Computer Graphics", credit: 2 },
        { code: "CSC442", name: "Computer Modeling & Simulation", credit: 2 },
        { code: "CSC452", name: "Expert System", credit: 2 },
        { code: "CSC462", name: "Computer Installation & Management", credit: 2 },
      ]
    },
  },

  //Biology course list...............
  bio: {
    1: {
      first: [
        ...sharedCourses[1].first,
        { code: "BIO101", name: "General Biology I", credit: 3 },
        { code: "BIO103", name: "General Biology Practical", credit: 0 },
        { code: "SED101", name: "Basic Chemistry I", credit: 3 },
        { code: "MAT101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        { code: "BIO102", name: "Cell Biology", credit: 3 },
        { code: "MAT102", name: "Elementary Mathematics II", credit: 3 },
        { code: "SED102", name: "Basic Chemistry II", credit: 3 },
      ]
    },
    2: {
      first: [
        ...sharedCourses[2].first,
        { code: "BIO201", name: "Seedless Plants", credit: 3 },
        { code: "BIO251", name: "General Genetics", credit: 3 },
        { code: "BIO201", name: "Intro. to Bio Techniques", credit: 2 },
        { code: "ZOO201", name: "Invetebrate Zoology", credit: 3 },
        { code: "BIO261", name: "Introductory Ecology", credit: 2 },
      ],
      second: [
        ...sharedCourses[2].second,
        { code: "ZOO202", name: "Chordate Zoology", credit: 3 },
        { code: "BOT204", name: "Seed Plants", credit: 2 },
        { code: "BIO232", name: "General Physiology", credit: 3 },
        { code: "ZOO282", name: "Intro. to Parasitology", credit: 2 },
        { code: "SED212", name: "Lab. Techniques in Biology", credit: 3 },
      ]
    },
    3: {
      first: [
        ...sharedCourses[3].first,
        { code: "BIO361", name: "Principles of Ecological & Field Course", credit: 3 },
        { code: "BOT341", name: "Mycology", credit: 3 },
        { code: "BOT331", name: "Plant Physiology I", credit: 3 },
        { code: "ZOO331", name: "Animal Physiology and Behaviour", credit: 3 },
        { code: "BOT311", name: "Principles of Plant Taxonomy", credit: 3 },
      ],
      second: [
        ...sharedCourses[3].second,
      ]
    },
    4: {
      first: [
        //Verified ✅
        ...sharedCourses[4].first,
        { code: "ZOO371", name: "Intro. to Insect & other Arthropods", credit: 2 },
        { code: "BIO421", name: "Conservation & Development of Natural Resources", credit: 3 },
        { code: "BOT471", name: "Plant Pathology & Virology", credit: 3 },
        { code: "BIO463", name: "Population Ecology", credit: 3 },
      ],
      second: [
        //Verified ✅
        ...sharedCourses[4].second,
        { code: "ZOO422", name: "Wildlife Ecology & Conservation", credit: 3 },
        { code: "BOT402", name: "Economic Botany", credit: 3 },
        { code: "BOT452", name: "Cytogenetics", credit: 3 },
        { code: "BIO424", name: "Environmental Biology", credit: 2 },
      ]
    }
  
  },

  math: {
    1: {
      first: [
        ...sharedCourses[1].first,
        { code: "MAT161", name: "Elementary Mechanics I", credit: 3 },
        { code: "STA111", name: "Probability Theory I", credit: 3 },
        { code: "MAT101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        { code: "MAT102", name: "Elementary Mathematics II", credit: 3 },
        { code: "MAT162", name: "Elementary Mechanics II", credit: 3 },
         { code: "MAT104", name: "Introduction to Actuarial", credit: 3 },
      ]
    },
    2: {
      first: [
        //Verified ✅
        ...sharedCourses[2].first,
        { code: "MAT231", name: "Calculus", credit: 3 },
        { code: "MAT211", name: "Introduction to Acturial Mathematics II", credit: 3 },
        { code: "STA211", name: "Probability Theory", credit: 3 },
        { code: "MAT251", name: "Introduction to Real Analysis", credit: 3 },
      ],
      second: [
        //Verified ✅
        ...sharedCourses[2].second,
        { code: "MAT221", name: "Numerical Methods", credit: 3 },
        { code: "MAT252", name: "Complex Variables", credit: 3 },
        { code: "MAT202", name: "Elementary Differential Equations", credit: 3 },
      ]
    },
    3: {
      first: [
        //Verified ✅
        ...sharedCourses[3].first,
        { code: "MAT351", name: "Real Analysis", credit: 3 },
        { code: "MAT331", name: "Advanced Calculus", credit: 3 },
        { code: "MAT321", name: "Numerical Analysis", credit: 3 },
        { code: "MAT332", name: "Differential Equation", credit: 3 },
      ],
      second: [
        ...sharedCourses[3].second,
      ]
    },
    4: {
      first: [
        //Verified ✅
        ...sharedCourses[4].first,
        { code: "MAT431", name: "Theory of ODE", credit: 3 },
        { code: "MAT423", name: "Mathematics Modelling", credit: 3 },
        { code: "MAT451", name: "Complex Analysis", credit: 3 },
      ],
      second: [
        //Verified ✅
        ...sharedCourses[4].second,
        { code: "MAT432", name: "Partial Differential Equation", credit: 3 },
        { code: "MAT454", name: "Complex Analysis II", credit: 3 },
        { code: "MAT434", name: "Mathematical Methods", credit: 3 },
      ]
    }
  },

  //Chemistry courses list......
  chem: {
    1: {
      first: [
        ...sharedCourses[1].first,
        // { code: "BIO101", name: "General Biology I", credit: 3 },
        // { code: "BIO103", name: "General Biology Practical", credit: 0 },
        // { code: "SED101", name: "Basic Chemistry I", credit: 3 },
        // { code: "MAT101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        // { code: "BIO102", name: "Cell Biology", credit: 3 },
      ]
    }
    // Add year 2–4 chemistry...
  },

  //Physics course list....
  phy: {
    1: {
      first: [
        ...sharedCourses[1].first,
        { code: "PHY101", name: "General Physics I", credit: 3 },
        { code: "PHY103", name: "General Physics II (Properties)", credit: 2 },
        { code: "PHY107", name: "General Physics Laboratory", credit: 1 },
        { code: "MAT101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        { code: "PHY102", name: "Electricity & Magnetism", credit: 3 },
        { code: "PHY108", name: "General Physics Laboratory", credit: 1 },
        { code: "MAT102", name: "General Mathematics II", credit: 3 },
      ]
    },
    2: {
      first: [
        ...sharedCourses[2].first,
        { code: "PHY201", name: "Elementary Moderm Physics", credit: 3 },
        { code: "PHY205", name: "Thermal Physics I", credit: 3 },
        { code: "PHY207", name: "Experimental Physics I", credit: 1 },
        { code: "MAT161", name: "Elementary Mechanics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[2].second,
        { code: "PHY202", name: "Electrical Circuit & Electronics", credit: 3 },
        { code: "PHY204", name: "Waves & Optics", credit: 3 },
        { code: "PHY208", name: "Experimental Physics II", credit: 1 },
        { code: "PHY206", name: "Energy Gen & Uses", credit: 3 },
        { code: "MAT162", name: "Elementary Mechanics II", credit: 3 },
      ]
    },
    3: {
      first: [
        ...sharedCourses[3].first,
        { code: "PHY303", name: "Electricity & Magnetism", credit: 3 },
        { code: "PHY305", name: "Quantum Machanics I", credit: 3 },
        { code: "PHY307", name: "Experimental Physics", credit: 1 },
        { code: "PHY313", name: "Electronics & Circuits", credit: 3 },
        { code: "PHY309", name: "Introduction to Astronomy", credit: 3 },
      ],
      second: [
        ...sharedCourses[3].second,
      ]
    },
    4: {
      first: [
        ...sharedCourses[4].first,
        { code: "PHY401", name: "Atomic Physics & Spectroscopy", credit: 3 },
        { code: "PHY407", name: "Solar Energy I", credit: 3 },
        { code: "PHY473", name: "Physics of the Earth", credit: 3 },
        { code: "PHY415", name: "Interior Science of Materials I", credit: 3 },
        { code: "PHY405", name: "Quantum Mechanics", credit: 3 },
        { code: "PHY411", name: "Nuclear & Particle Physics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[4].second,
        { code: "PHY408", name: "Solar Energy II", credit: 3 },
        { code: "PHY474", name: "Industrial Geophysics", credit: 3 },
        { code: "PHY414", name: "Solid State Physics II", credit: 3 },
        { code: "PHY404", name: "Thermal & Statistical Physics", credit: 2 },
        { code: "PHY412", name: "Nuclear & Particle Physics II", credit: 2 },
      ]
    }
  },

  //Integrated science course list.....
  is: {
    1: {
      first: [
        ...sharedCourses[1].first,
        // { code: "BIO101", name: "General Biology I", credit: 3 },
        // { code: "BIO103", name: "General Biology Practical", credit: 0 },
        // { code: "SED101", name: "Basic Chemistry I", credit: 3 },
        // { code: "MAT101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        // { code: "BIO102", name: "Cell Biology", credit: 3 },
      ]
    }
    // Add year 2–4 Biology...
  },
};
