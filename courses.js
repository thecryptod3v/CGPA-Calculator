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
        ...sharedCourses[1].first,
        { code: "CHM101", name: "Basic Organic Chemistry", credit: 2 },
        { code: "ICH111", name: "Basic Inorganic Chemistry I", credit: 2 },
        { code: "PHY101", name: "General Physics I", credit: 3 },
        { code: "MTH101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        { code: "MTH102", name: "Elementary Mathematics II", credit: 3 },
        { code: "PHY102", name: "General Physics II", credit: 3 },
        { code: "CSC112", name: "Computer Application & Management", credit: 2 },
      ]
    },
    2: {
      first: [
        ...sharedCourses[2].first,
        { code: "CSC201", name: "Computer Programming I", credit: 2 },
        { code: "CSC221", name: "Assembly Language Programming", credit: 2 },
        { code: "CSC261", name: "Information Technology", credit: 2 },
        { code: "CSC231", name: "Automata Theory Computability", credit: 2 },
        { code: "CSC211", name: "Introduction to Digital Design", credit: 2 },
      ],
      second: [
        ...sharedCourses[2].second,
        { code: "CSC202", name: "Computer Programming II", credit: 2 },
        { code: "CSC232", name: "Database Design & Management", credit: 2 },
        { code: "CSC252", name: "Data Structure", credit: 2 },
        { code: "MTH202", name: "Elementary Differential Equations", credit: 3 },
        { code: "PHY202", name: "Electric Circuit & Electronics", credit: 3 },
        { code: "SED224", name: "Special Method in Computer Science", credit: 2 },
      ]
    },
    3: {
      first: [
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
        ...sharedCourses[4].first,
        { code: "CSC401", name: "Data Communication & Network", credit: 2 },
        { code: "CSC421", name: "Software Development & Management", credit: 2 },
        { code: "CSC431", name: "Algorithms & Complex Analysis", credit: 2 },
        { code: "CSC451", name: "Artificial Intelligence", credit: 2 },
        { code: "CSC461", name: "Object Oriented Programming", credit: 3 },
      ],
      second: [
        ...sharedCourses[4].second,
        { code: "CSC412", name: "Computer Graphics", credit: 2 },
        { code: "CSC442", name: "Computer Modeling & Simulation", credit: 2 },
        { code: "CSC452", name: "Expert System", credit: 2 },
        { code: "CSC462", name: "Computer Installation & Management", credit: 2 },
      ]
    },
    // Continue with year 3 and 4 CS...
  },

  bio: {
    1: {
      first: [
        ...sharedCourses[1].first,
        { code: "BIO101", name: "General Biology I", credit: 3 },
        { code: "BIO103", name: "General Biology Practical", credit: 0 },
        { code: "SED101", name: "Basic Chemistry I", credit: 3 },
        { code: "MTH101", name: "Elementary Mathematics I", credit: 3 },
      ],
      second: [
        ...sharedCourses[1].second,
        { code: "BIO102", name: "Cell Biology", credit: 3 },
      ]
    }
    // Add year 2–4 Biology...
  },

  // Add chem, math, phy, is similarly
};
