export const questions = [
  // { id: 0, title: "General questions" },
  // { id: 1, question: "What is your name?", input: "text" },
  // { id: 2, question: "What is your email?", input: "text" },
  // {
  //   id: 3,
  //   question: "When is your birthday?",
  //   subtext: "(mm/dd/yr)",
  //   input: "text",
  // },
  {
    id: 4,
    question: "How would you describe your gender?",
    options: ["Male", "Female", "Other"],
  },
  {
    id: 5,
    question: "What are your health goals?",
    subtext: "select your top 3 in no particular order",
    options: [
      "Reduce Stress",
      "Elevate Fitness",
      "Boost Immunity",
      "Better Sleep",
      "Sharpen Focus + Memory",
      "Improve Energy + Mood",
      "Improve Digestion + Metabolism",
    ],
  },
  {
    id: 6,
    question:
      "Out of the three health goals you selected, which one is your top priority?",
    options: ["(from before)", "(from before)", "(from before)"],
  },
  {
    id: 7,
    question: "What are your personal goals?",
    subtext: "select your top 2 in no particular order",
    options: [
      "Productivity + Time Management",
      "Professional Performance",
      "Improve Mental Health",
      "Better Financial Management",
      "Academic Performance",
      "Get into Fitness Routine",
      "Build Healthy Food Habits",
    ],
  },
  {
    id: 8,
    question: "Do you strictly follow any of the following diets?",
    options: ["None", "Vegetarian", "Vegan", "Pescatarian", "Ketogenic"],
  },
  {
    id: 9,
    question: "Do you have any of the following allergies",
    options: ["Milk", "Treenuts", "fish", "Eggs", "None"],
  },
  {
    id: 10,
    question:
      "What is holding you back from achieving your health and personal goals?",
    subtext: "Select ALL that apply",
    options: [
      "Taking the First step",
      "Lack of Motivation",
      "Trouble Staying Consistent",
      "Lack of Accountability",
      "Too Overwhelming",
      "Lack of Guidance",
      "Fear of Faliure",
    ],
  },
  { id: 11, title: "Non-Veg Men" },
  {
    id: 12,
    question: "On average, how many servings of fruits do you have per day?",
    example: "Serving Size Examples: 1 medium-sized apple or banana",
    options: ["0-1 Servings", "2-3 Servings", "4+ Servings"],
  },
  {
    id: 13,
    question:
      "On average, how many servings of vegetables do you have per day?",
    example:
      "Serving Size Examples: 2 cups of raw spinach or 1 medium sized bell pepper",
    options: ["0-1 Servings", "2-3 Servings", "4+ Servings"],
  },
  {
    id: 14,
    question:
      "On average, how many servings of dairy products do you have per day?",
    example: "Serving Size Examples: 1 cup of milk or 3/4 cup of greek yogurt",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 15,
    question:
      "On average, how many servings of animal free proteins do you have per day?",
    example:
      "Serving Size Examples: 1/2 cup of lentils, 1/2 cup tofu, or 1/4 cup of almonds",
    options: ["0-2 Servings", "3-5 Servings", "6+ Servings"],
  },
  {
    id: 16,
    question: "On average, how often do you consume meat products?",
    example:
      "Portion Size Examples: 3 ounces of beef or chicken (deck of cards sized)",
    options: ["Rarely/Never", "Couple times a week", "Almost Everyday"],
  },
  {
    id: 17,
    question: "On average, how often do you eat fatty fish?",
    example:
      "Portion Size Examples: 6 ounces / 1 filet of salmon, tuna, cod (size of palm)",
    options: ["Rarely/Never", "Once or twice a week", "Several times a week"],
  },
  {
    id: 18,
    question:
      "On average, how many servings of high-fiber foods do you have per day?",
    example:
      "Serving Size Examples: 1 cup of raspberries, green peas, or wheat cereal",
    options: ["0-2 Servings", "3-5 Servings", "6+ Servings"],
  },
  {
    id: 19,
    question: "Do you currently have low iron levels?",
    options: ["Yes", "No"],
  },
  {
    id: 20,
    question: "On average, how much sunlight do you get per day?",
    options: ["Little to none", "5-15 mins", "15+ mins"],
  },
  { id: 21, title: "N Veg Women" },
  {
    id: 22,
    question: "On average, how many servings of fruits do you have per day?",
    example: "Serving Size Examples: 1 medium-sized apple or banana",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 23,
    question:
      "On average, how many servings of vegetables do you have per day?",
    example:
      "Serving Size Examples: 2 cups of raw spinach or 1 medium-sized bell pepper",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 24,
    question:
      "On average, how many servings of dairy products do you have per day?",
    example: "Serving Size Examples: 1 cup of milk or 3/4 cup of Greek yogurt",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 25,
    question:
      "On average, how many servings of animal free proteins do you have per day?",
    example:
      "Serving Size Examples: 1/2 cup of lentils, 1/2 cup tofu, or 1/4 cup almonds",
    options: ["0-2 Servings", "3-4 Servings", "5+ Servings"],
  },
  {
    id: 26,
    question: "On average, how often do you eat meat products?",
    example:
      "Portion Size Examples: 3 ounces of beef or chicken (deck of cards sized)",
    options: ["Rarely/Never", "Couple times a week", "Almost Everyday"],
  },
  {
    id: 27,
    question: "On average, how often do you eat fatty fish?",
    example:
      "Portion Size Examples: 6 ounces / 1 filet of salmon, tuna, cod (size of palm)",
    options: ["Rarely/Never", "Once or twice a week", "Several times a week"],
  },
  {
    id: 28,
    question:
      "On average, how many servings of high-fiber foods do you have per day?",
    example:
      "Serving Size Examples: 1 cup of raspberries, green peas, or wheat cereal",
    options: ["0-2 Servings", "3-5 Servings", "6+ Servings"],
  },
  {
    id: 29,
    question: "Do you currently have low iron levels?",
    options: ["Yes", "No"],
  },
  {
    id: 30,
    question: "On average, how much sunlight do you get per day?",
    options: ["Little to none", "5-15 mins", "15+ mins"],
  },
  { id: 31, title: "Veg Women" },
  {
    id: 32,
    question: "On average, how many servings of fruits do you have per day?",
    example: "Serving Size Examples: 1 medium-sized apple or banana",
    options: ["0-1 Servings", "2-3 Servings", "4+ Servings"],
  },
  {
    id: 33,
    question:
      "On average, how many servings of vegetables do you have per day?",
    example:
      "Serving Size Examples: 2 cups of raw spinach or 1 medium-sized bell pepper",
    options: ["0-2 Servings", "3-4 Servings", "5+ Servings"],
  },
  {
    id: 34,
    question:
      "On average, how many servings of fortified foods do you have per day?",
    example:
      "Serving Size Examples: 1 cup of soy milk, fortified cereal, fortified orange juice",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 35,
    question: "On average, how many servings of legumes do you have per day?",
    example: "Serving Size Examples: 1/2 cup of peas, lentils, or peanuts",
    options: ["0-1 Servings", "2-3 Servings", "4+ Servings"],
  },
  {
    id: 36,
    question:
      "On average, how many servings of whole grains do you have per day?",
    example:
      "Serving Size Examples: 1 Slice of whole wheat bread or 3/4 cup cooked quinoa",
    options: ["0-2 Servings", "3-5 Servings", "6+ Servings"],
  },
  {
    id: 37,
    question:
      "On average, how many servings of nuts/seeds do you have per day?",
    example:
      "Serving Size Example: 1/4 cup almonds, sunflower seeds, or cashews",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 38,
    question: "On average, how much sunlight do you get per day?",
    options: ["Little to none", "5-15 mins", "15+ mins"],
  },
  { id: 39, title: "Veg Men" },
  {
    id: 40,
    question: "On average, how many servings of fruits do you have per day?",
    example: "Serving Size Examples: 1 medium-sized apple or banana",
    options: ["0-1 Servings", "2-3 Servings", "4+ Servings"],
  },
  {
    id: 41,
    question:
      "On average, how many servings of vegetables do you have per day?",
    example:
      "Serving Size Examples: 2 cups of raw spinach or 1 medium-sized bell pepper",
    options: ["0-2 Servings", "3-5 Servings", "6+ Servings"],
  },
  {
    id: 42,
    question:
      "On average, how many servings of fortified foods do you have per day?",
    example:
      "Serving Size Examples: 1 cup of soy milk, fortified cereal, fortified orange juice",
    options: ["0-1 Servings", "2-3 Servings", "4+ Servings"],
  },
  {
    id: 43,
    question: "On average, how many servings of legumes do you have per day?",
    example: "Serving Size Examples: 1/2 cup of peas, lentils, or peanuts",
    options: ["0-2 Servings", "3-4 Servings", "5+ Servings"],
  },
  {
    id: 44,
    question:
      "On average, how many servings of whole grains do you have per day?",
    example:
      "Serving Size Examples: 1 Slice of whole wheat bread or 3/4 cup cooked quinoa",
    options: ["0-3 Servings", "4-6 Servings", "7+ Servings"],
  },
  {
    id: 45,
    question:
      "On average, how many servings of nuts/seeds do you have per day?",
    example:
      "Serving Size Example: 1/4 cup almonds, sunflower seeds, or cashews",
    options: ["0-1 Servings", "1-2 Servings", "3+ Servings"],
  },
  {
    id: 46,
    question: "On average, how much sunlight do you get per day?",
    options: ["Little to none", "5-15 mins", "15+ mins"],
  },
  { id: 47, title: "Supplement Q's" },
  { id: 48, subtitle: "Better sleep" },
  {
    id: 49,
    question: "Do you have issues falling asleep or staying asleep",
    options: ["Falling asleep", "Staying asleep"],
  },
  {
    id: 50,
    question: "Are you okay with taking a melatonin supplement",
    options: ["Yes", "No"],
  },
  { id: 51, subtitle: "Energy / Mood" },
  {
    id: 52,
    question:
      "On an average day do you experience low energy/brain fog or a lack of motivation?",
    options: ["Low energy or brain fog", "Lack of motivation", "Both"],
  },
  {
    id: 53,
    question:
      "Would you want a caffeine aided energy boost or a natural supplement? ",
    options: ["Caffeine", "Natural"],
  },
  { id: 54, subtitle: "Focus / Memory" },
  {
    id: 55,
    question: "Do you struggle more with focus or memory?",
    options: ["Focus", "Memory", "Both"],
  },
  {
    id: 56,
    question:
      "Would you want a caffeine aided energy boost or a natural supplement? ",
    options: ["Caffeine", "Natural"],
  },
  { id: 57, subtitle: "Reduce Stress" },
  {
    id: 58,
    question:
      "Which of the following factors do you think your stress comes from?",
    boldsubtext: "Select all that apply",
    options: [
      "Lack of organization",
      "Overwhelmed by work (school, career, etc)",
      "Dealing with a traumatic event",
      "worried about something out of your control",
      "Chronic issues (depression, anxiety,low self-esteem)",
    ],
  },
  {
    id: 59,
    question: "Do you feel more overwhelmed by your stress or drained by it?",
    options: ["Overwhelmed", "drained"],
  },
  { id: 60, subtitle: "Digestion / Metabolism" },
  {
    id: 61,
    question: "Which of the following do you struggle with the most?",
    options: [
      "Bloating and Gas",
      "Indigestion (feels like a brick in your stomach)",
      "Both",
    ],
  },
  {
    id: 62,
    question: "Do you have any issues with bowel movements? ",
    subtext: "(going too much, not going enough, irregular patterns)",
    options: ["Yes", "No"],
  },
  {
    id: 63,
    question: "Do you have any skin issues? ",
    subtext: "(acne, redness, dryness, etc)",
    options: ["Yes", "No"],
  },
  { id: 64, subtitle: "Fitness" },
  {
    id: 65,
    question: "Which of the following best describes your fitness goal?",
    options: [
      "Lose weight (fat)",
      "Lose fat and build muscle / toning",
      "Gain weight (muscle building)",
    ],
  },
  {
    id: 66,
    question:
      "Which of the following best describes your current fitness routine?",
    options: [
      "Resistance weight training",
      "High intensity cardio",
      "Low intensity cardio",
    ],
  },
  {
    id: 67,
    question: "On average, how often do you workout every week?",
    options: ["Under 3 times", "3+ times"],
  },
  {
    id: 68,
    question: "Which best describes your goal?",
    options: [
      "Building muscle mass while cutting fat",
      "Losing fat to get more toned",
    ],
  },
  {
    id: 69,
    question: "Which of the following do you struggle with more?",
    options: [
      "Difficulty building muscle despite exercising",
      "Low energy levels during workouts",
    ],
  },
  { id: 70, subtitle: "Boost Immunity" },
  {
    id: 71,
    question: "Do you experience any of the following? ",
    subtext:
      "Elevated Stress, Frequent Illnesses/Infections, Slow Wound Healing, Fatigue",
    options: ["Yes", "Not Really (just looking to enhance overall immunity)"],
  },
  {
    id: 72,
    question:
      "On average, how many times per year do you get sick? (flu, infection, common cold)",
    options: ["Almost never", "2-3 times", "4+ times"],
  },
];
