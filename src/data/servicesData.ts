export interface ServiceItem {
  id: string;
  titleGu: string;
  titleEn: string;
  descriptionGu: string;
  descriptionEn: string;
  iconName: string;
  badgeGu?: string;
  badgeEn?: string;
  requiredDocsGu?: string[];
  requiredDocsEn?: string[];
}

export interface ServiceCategory {
  id: string;
  titleGu: string;
  titleEn: string;
  iconName: string;
  color: string;
  items: ServiceItem[];
}

export interface CourseItem {
  id: string;
  title: string;
  titleGu: string;
  duration: string;
  descriptionGu: string;
  descriptionEn: string;
  highlightsGu: string[];
  highlightsEn: string[];
  badgeGu?: string;
}

export const CONTACT_INFO = {
  phone: "+91 72260 30701",
  displayPhone: "72260 30701",
  contactPerson: "Yagnik Gayakwad",
  email: "hytechcomputer53@gmail.com",
  instagram: "hy_tech_computer_education_",
  instagramUrl: "https://instagram.com/hy_tech_computer_education_",
  addressGu: "Shop No. 05, First Floor, Rajmilan Complex, Old Jakatnaka, Dharampur",
  addressEn: "Shop No. 05, First Floor, Rajmilan Complex, Old Jakatnaka, Dharampur",
  city: "Dharampur",
  workingHoursGu: "Mon to Sat: 9:00 AM to 8:00 PM",
  workingHoursEn: "Mon to Sat: 9:00 AM to 8:00 PM",
  whatsappNumber: "917226030701"
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "online-services",
    titleGu: "Online Government Services",
    titleEn: "Online Government Services",
    iconName: "Globe",
    color: "from-amber-500 to-orange-600",
    items: [
      {
        id: "pan-card",
        titleGu: "PAN Card (New & Correction)",
        titleEn: "PAN Card (New & Correction)",
        descriptionGu: "New PAN Card application, name/DOB correction, or lost card reprint.",
        descriptionEn: "New PAN Card application, name/DOB correction, or lost card reprint.",
        iconName: "CreditCard",
        badgeGu: "Fast Processing",
        badgeEn: "Fast Processing",
        requiredDocsGu: ["Aadhaar Card", "Passport Photo", "Mobile Number"],
        requiredDocsEn: ["Aadhaar Card", "Passport Photo", "Mobile Number"]
      },
      {
        id: "aadhaar-update",
        titleGu: "Aadhaar Update & Guidance",
        titleEn: "Aadhaar Update & Guidance",
        descriptionGu: "Aadhaar mobile linking, biometric update, address and name corrections.",
        descriptionEn: "Aadhaar mobile linking, biometric update, address and name corrections.",
        iconName: "UserCheck",
        badgeGu: "Popular",
        badgeEn: "Popular",
        requiredDocsGu: ["Current Aadhaar", "Original Proof (Voter ID/Ration Card)", "Mobile"],
        requiredDocsEn: ["Current Aadhaar", "Original Proof (Voter ID/Ration Card)", "Mobile"]
      },
      {
        id: "voter-id",
        titleGu: "Voter ID / Election Card",
        titleEn: "Voter ID / Election Card",
        descriptionGu: "New Voter ID registration, address update, and online color PDF download.",
        descriptionEn: "New Voter ID registration, address update, and online color PDF download.",
        iconName: "Vote",
        requiredDocsGu: ["Aadhaar Card", "Passport Photo", "Electricity Bill / Ration Card"],
        requiredDocsEn: ["Aadhaar Card", "Passport Photo", "Electricity Bill / Ration Card"]
      },
      {
        id: "passport",
        titleGu: "Passport Services",
        titleEn: "Passport Services",
        descriptionGu: "New Passport application form filling and appointment booking.",
        descriptionEn: "New Passport application form filling and appointment booking.",
        iconName: "FileCheck",
        requiredDocsGu: ["Aadhaar Card", "PAN Card", "10th/12th Marksheet", "Bank Passbook"],
        requiredDocsEn: ["Aadhaar Card", "PAN Card", "10th/12th Marksheet", "Bank Passbook"]
      },
      {
        id: "driving-licence",
        titleGu: "Driving Licence Application",
        titleEn: "Driving Licence Application",
        descriptionGu: "Learner & Permanent Driving Licence online registration & slot booking.",
        descriptionEn: "Learner & Permanent Driving Licence online registration & slot booking.",
        iconName: "Car",
        requiredDocsGu: ["Aadhaar Card", "Blood Group Report", "10th Certificate"],
        requiredDocsEn: ["Aadhaar Card", "Blood Group Report", "10th Certificate"]
      },
      {
        id: "ayushman-card",
        titleGu: "Ayushman Card (PMJAY)",
        titleEn: "Ayushman Bharat Health Card",
        descriptionGu: "Ayushman Bharat health card issuance for up to Rs. 5 Lakh free medical care.",
        descriptionEn: "Ayushman Bharat health card issuance for up to Rs. 5 Lakh free medical care.",
        iconName: "HeartPulse",
        badgeGu: "Govt Scheme",
        badgeEn: "Govt Scheme",
        requiredDocsGu: ["Ration Card (NFSA)", "Aadhaar Card", "Mobile Number"],
        requiredDocsEn: ["Ration Card (NFSA)", "Aadhaar Card", "Mobile Number"]
      },
      {
        id: "eshram-card",
        titleGu: "E-Shram Card Registration",
        titleEn: "E-Shram Card Registration",
        descriptionGu: "E-Shram Card registration and update for unorganized sector workers.",
        descriptionEn: "E-Shram Card registration and update for unorganized sector workers.",
        iconName: "BadgeCheck",
        requiredDocsGu: ["Aadhaar Card", "Bank Account Details", "Mobile Number"],
        requiredDocsEn: ["Aadhaar Card", "Bank Account Details", "Mobile Number"]
      },
      {
        id: "pm-kisan",
        titleGu: "PM Kisan & Farmer Services",
        titleEn: "PM Kisan & Farmer Services",
        descriptionGu: "PM Kisan e-KYC, installment tracking, and farmer welfare applications.",
        descriptionEn: "PM Kisan e-KYC, installment tracking, and farmer welfare applications.",
        iconName: "Sprout",
        requiredDocsGu: ["Aadhaar Card", "7/12 8-A Land Record", "Bank Passbook"],
        requiredDocsEn: ["Aadhaar Card", "7/12 8-A Land Record", "Bank Passbook"]
      },
      {
        id: "income-caste-cert",
        titleGu: "Income / Caste / Non-Creamy Layer Cert",
        titleEn: "Income / Caste / Non-Creamy Layer Cert",
        descriptionGu: "Income certificate, Caste certificate, and Non-Creamy Layer (NCL) form online filling.",
        descriptionEn: "Income certificate, Caste certificate, and Non-Creamy Layer (NCL) form online filling.",
        iconName: "ShieldCheck",
        requiredDocsGu: ["Aadhaar Card", "Ration Card", "Electricity Bill", "Talati Certificate / Income Proof"],
        requiredDocsEn: ["Aadhaar Card", "Ration Card", "Electricity Bill", "Talati Certificate / Income Proof"]
      }
    ]
  },
  {
    id: "aadhaar-guidance",
    titleGu: "Aadhaar Services & Guidance",
    titleEn: "Aadhaar Services & Guidance",
    iconName: "Fingerprint",
    color: "from-blue-600 to-indigo-700",
    items: [
      {
        id: "aadhaar-mobile-link",
        titleGu: "Aadhaar Mobile Number Linking",
        titleEn: "Aadhaar Mobile Number Linking",
        descriptionGu: "Linking your primary mobile number to your Aadhaar card.",
        descriptionEn: "Linking your primary mobile number to your Aadhaar card.",
        iconName: "Smartphone",
        badgeGu: "Essential",
        badgeEn: "Essential"
      },
      {
        id: "aadhaar-biometric",
        titleGu: "Biometric Update (Fingerprint & Photo)",
        titleEn: "Biometric Update (Fingerprint & Photo)",
        descriptionGu: "Child & adult biometric update (fingerprints, iris, photo).",
        descriptionEn: "Child & adult biometric update (fingerprints, iris, photo).",
        iconName: "ScanFace"
      },
      {
        id: "aadhaar-address",
        titleGu: "Address & Name Correction",
        titleEn: "Address & Name Correction",
        descriptionGu: "Address change, post-marriage surname update, father's name fix.",
        descriptionEn: "Address change, post-marriage surname update, father's name fix.",
        iconName: "MapPin"
      },
      {
        id: "aadhaar-pvc",
        titleGu: "e-Aadhaar & PVC Smart Card",
        titleEn: "e-Aadhaar & PVC Smart Card",
        descriptionGu: "Waterproof plastic PVC Aadhaar smart card printing.",
        descriptionEn: "Waterproof plastic PVC Aadhaar smart card printing.",
        iconName: "Printer"
      }
    ]
  },
  {
    id: "education-services",
    titleGu: "Educational Admission & Exam Forms",
    titleEn: "Educational Admission & Exam Forms",
    iconName: "GraduationCap",
    color: "from-emerald-500 to-teal-700",
    items: [
      {
        id: "vanraj-college-forms",
        titleGu: "Shree Vanraj Arts & Commerce College Dharampur Forms",
        titleEn: "Shree Vanraj Arts & Commerce College Dharampur Forms",
        descriptionGu: "Complete online form filling for Shree Vanraj Arts & Commerce College Dharampur.",
        descriptionEn: "Complete online form filling for Shree Vanraj Arts & Commerce College Dharampur.",
        iconName: "School",
        badgeGu: "Special College Service",
        badgeEn: "Special College Service",
        requiredDocsGu: ["12th Marksheet", "Aadhaar Card", "Caste Certificate", "Income Cert", "Bank Passbook"],
        requiredDocsEn: ["12th Marksheet", "Aadhaar Card", "Caste Certificate", "Income Cert", "Bank Passbook"]
      },
      {
        id: "gcas-registration",
        titleGu: "GCAS Portal Registration & Admissions",
        titleEn: "GCAS Portal Registration & College Admissions",
        descriptionGu: "Gujarat Common Admission Services (GCAS) portal registration for BA, BCom, BSc.",
        descriptionEn: "Gujarat Common Admission Services (GCAS) portal registration for BA, BCom, BSc.",
        iconName: "Laptop",
        badgeGu: "GCAS Specialist",
        badgeEn: "GCAS Specialist"
      },
      {
        id: "college-hostel-forms",
        titleGu: "Hostel & Digital Gujarat Scholarship Forms",
        titleEn: "Hostel & Digital Gujarat Scholarship Forms",
        descriptionGu: "Digital Gujarat scholarship application and government hostel entry forms.",
        descriptionEn: "Digital Gujarat scholarship application and government hostel entry forms.",
        iconName: "Award"
      },
      {
        id: "resume-cv",
        titleGu: "Professional Resume & CV Design",
        titleEn: "Professional Resume & CV Design",
        descriptionGu: "Modern eye-catching Resume / CV creation for job interviews.",
        descriptionEn: "Modern eye-catching Resume / CV creation for job interviews.",
        iconName: "FileText"
      }
    ]
  },
  {
    id: "job-services",
    titleGu: "Government & Private Job Applications",
    titleEn: "Government & Private Job Applications",
    iconName: "Briefcase",
    color: "from-purple-600 to-indigo-800",
    items: [
      {
        id: "govt-jobs",
        titleGu: "OJAS & GPSC Govt Recruitment Forms",
        titleEn: "OJAS & GPSC Govt Recruitment Forms",
        descriptionGu: "All Gujarat OJAS recruitment forms for Talati, Clerk, GPSC, Class 3 jobs.",
        descriptionEn: "All Gujarat OJAS recruitment forms for Talati, Clerk, GPSC, Class 3 jobs.",
        iconName: "Building2",
        badgeGu: "New Jobs",
        badgeEn: "New Jobs"
      },
      {
        id: "railway-ssc",
        titleGu: "Railway, SSC & Central Recruitment",
        titleEn: "Railway, SSC & Central Recruitment",
        descriptionGu: "Railway recruitment, SSC GD/MTS/CHSL, UPSC online application filling.",
        descriptionEn: "Railway recruitment, SSC GD/MTS/CHSL, UPSC online application filling.",
        iconName: "Train"
      },
      {
        id: "police-army",
        titleGu: "Police, Army & Forest Guard Applications",
        titleEn: "Police, Army & Forest Guard Applications",
        descriptionGu: "Gujarat Police Constable, PSI, Army Agniveer, Forest Guard recruitment.",
        descriptionEn: "Gujarat Police Constable, PSI, Army Agniveer, Forest Guard recruitment.",
        iconName: "Shield"
      }
    ]
  },
  {
    id: "computer-courses",
    titleGu: "Computer Courses & Training",
    titleEn: "Computer Courses & Training",
    iconName: "Monitor",
    color: "from-indigo-600 to-indigo-800",
    items: [
      {
        id: "ccc-course",
        titleGu: "CCC Course (Govt Recognized)",
        titleEn: "CCC Course (Govt Recognized)",
        descriptionGu: "Government recognized basic computer course with practical training.",
        descriptionEn: "Government recognized basic computer course with practical training.",
        iconName: "CheckCircle2",
        badgeGu: "Most Preferred",
        badgeEn: "Most Preferred"
      },
      {
        id: "tally-gst",
        titleGu: "Tally Prime with GST & Accounting",
        titleEn: "Tally Prime with GST & Accounting",
        descriptionGu: "Professional accounting, GST filing, billing, and Tally Prime software mastery.",
        descriptionEn: "Professional accounting, GST filing, billing, and Tally Prime software mastery.",
        iconName: "Calculator"
      },
      {
        id: "ms-office",
        titleGu: "MS Office Masterclass",
        titleEn: "MS Office Masterclass",
        descriptionGu: "Master MS Word formatting, Excel formulas, data entry, and PowerPoint slides.",
        descriptionEn: "Master MS Word formatting, Excel formulas, data entry, and PowerPoint slides.",
        iconName: "FileSpreadsheet"
      },
      {
        id: "typing-internet",
        titleGu: "English & Gujarati Typing + Internet Skills",
        titleEn: "English & Gujarati Typing + Internet Skills",
        descriptionGu: "High-speed typing practice in English & Gujarati for government exams.",
        descriptionEn: "High-speed typing practice in English & Gujarati for government exams.",
        iconName: "Keyboard"
      }
    ]
  },
  {
    id: "printing-services",
    titleGu: "Printing, Binding & Banking Services",
    titleEn: "Printing, Binding & Banking Services",
    iconName: "Printer",
    color: "from-cyan-600 to-blue-800",
    items: [
      {
        id: "xerox-lamination",
        titleGu: "High-Speed Xerox, Color Print & Lamination",
        titleEn: "High-Speed Xerox, Color Print & Lamination",
        descriptionGu: "Fast A4/A3 xerox, vivid color document printing, and heavy lamination.",
        descriptionEn: "Fast A4/A3 xerox, vivid color document printing, and heavy lamination.",
        iconName: "Copy"
      },
      {
        id: "pvc-photo",
        titleGu: "PVC Smart Card & Passport Size Photos",
        titleEn: "PVC Smart Card & Passport Size Photos",
        descriptionGu: "Instant PVC card printing and 10-minute passport photo creation.",
        descriptionEn: "Instant PVC card printing and 10-minute passport photo creation.",
        iconName: "Image"
      },
      {
        id: "banking-tickets",
        titleGu: "Money Transfer, Bill Payment & Tickets",
        titleEn: "Money Transfer, Bill Payment & Tickets",
        descriptionGu: "Domestic money transfer, utility bills, mobile recharge, and IRCTC train/bus tickets.",
        descriptionEn: "Domestic money transfer, utility bills, mobile recharge, and IRCTC train/bus tickets.",
        iconName: "Receipt"
      }
    ]
  }
];

export const COMPUTER_COURSES_LIST: CourseItem[] = [
  {
    id: "ccc",
    title: "CCC Course",
    titleGu: "CCC Computer Course (Govt Recognized)",
    duration: "2 to 3 Months",
    descriptionGu: "Essential computer concepts, Windows, MS Office, and Internet literacy for all Govt Job aspirants.",
    descriptionEn: "Essential computer concepts, Windows, MS Office, and Internet literacy for all Govt Job aspirants.",
    badgeGu: "Mandatory for Govt Jobs",
    highlightsGu: [
      "MS Windows & Operating Basics",
      "MS Word, Excel & PowerPoint Essentials",
      "Gujarati & English Typing Practice",
      "Internet, Email & Online Citizen Portals",
      "Certificate & Exam Guidance"
    ],
    highlightsEn: [
      "MS Windows & Operating Basics",
      "MS Word, Excel & PowerPoint Essentials",
      "Gujarati & English Typing Practice",
      "Internet, Email & Online Citizen Portals",
      "Certificate & Exam Guidance"
    ]
  },
  {
    id: "tally-gst",
    title: "Tally Prime with GST",
    titleGu: "Tally Prime with GST (Professional Accounting)",
    duration: "2 to 3 Months",
    descriptionGu: "Complete practical GST accounting, invoicing, inventory management, and tax returns for jobs.",
    descriptionEn: "Complete practical GST accounting, invoicing, inventory management, and tax returns for jobs.",
    badgeGu: "100% Job Oriented",
    highlightsGu: [
      "Voucher Entry & Chart of Accounts",
      "GST Setup & E-Way Bill Generation",
      "Inventory & Stock Management",
      "Financial Statements (P&L, Balance Sheet)",
      "Bank Reconciliation & GST Returns"
    ],
    highlightsEn: [
      "Voucher Entry & Chart of Accounts",
      "GST Setup & E-Way Bill Generation",
      "Inventory & Stock Management",
      "Financial Statements (P&L, Balance Sheet)",
      "Bank Reconciliation & GST Returns"
    ]
  },
  {
    id: "ms-office",
    title: "MS Office Masterclass",
    titleGu: "MS Office Masterclass (Advanced Excel)",
    duration: "1.5 Months",
    descriptionGu: "Master corporate administrative work, data analytics formulas, formatting, and slide presentations.",
    descriptionEn: "Master corporate administrative work, data analytics formulas, formatting, and slide presentations.",
    badgeGu: "Office Work Special",
    highlightsGu: [
      "Advanced Excel (VLOOKUP, Pivot Tables, Data Validation)",
      "Professional Document Design in MS Word",
      "Impactful PowerPoint Presentations",
      "Data Entry & Office Shortcuts",
      "Practical Project Assignments"
    ],
    highlightsEn: [
      "Advanced Excel (VLOOKUP, Pivot Tables, Data Validation)",
      "Professional Document Design in MS Word",
      "Impactful PowerPoint Presentations",
      "Data Entry & Office Shortcuts",
      "Practical Project Assignments"
    ]
  },
  {
    id: "typing-internet",
    title: "Typing & Internet Training",
    titleGu: "Typing & Internet Training",
    duration: "1 Month",
    descriptionGu: "Scientific finger placement practice for fast English & Gujarati typing speeds along with internet skills.",
    descriptionEn: "Scientific finger placement practice for fast English & Gujarati typing speeds along with internet skills.",
    highlightsGu: [
      "Touch Typing Technique (Key Placement)",
      "Gujarati Shruti / Indic Keyboard Layout",
      "WPM Speed Test Building",
      "Online Government Portal Navigation",
      "Safe Digital Payments & Scanning"
    ],
    highlightsEn: [
      "Touch Typing Technique (Key Placement)",
      "Gujarati Shruti / Indic Keyboard Layout",
      "WPM Speed Test Building",
      "Online Government Portal Navigation",
      "Safe Digital Payments & Scanning"
    ]
  }
];

export const STATS = [
  { labelGu: "Happy Clients", labelEn: "Happy Clients", value: "10,000+" },
  { labelGu: "Services Delivered", labelEn: "Services Delivered", value: "25,000+" },
  { labelGu: "Computer Trainees", labelEn: "Computer Trainees", value: "1,200+" },
  { labelGu: "Years Experience", labelEn: "Years Experience", value: "5+ Years" },
];
