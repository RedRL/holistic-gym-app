import { Injectable } from '@angular/core';

type Dict = Record<string, string>;
const en: Dict = {
  app_title: 'Brain Power',
  language_title: 'Choose Language',
  hebrew: 'Hebrew',
  english: 'English',
  register_title: 'Complete Registration',
  full_name: 'Full Name',
  age: 'Age',
  weight: 'Weight (kg)',
  height: 'Height (m)',
  email: 'Email',
  phone: 'Phone',
  continue: 'Continue',
  continue_guest: 'Continue as Guest',
  welcome_title: 'Welcome',
  continue_to_app: 'Continue to App',
  level_title: 'Choose Your Level',
  beginner: 'Beginner',
  advanced: 'Advanced',
  grand: 'Grand Master',
  intro_tile_h: 'Introduction',
  intro_tile_s: 'Learn about our holistic approach',
  begin_tile_h: 'Let\'s Begin – Daily Routine',
  begin_tile_s: 'Start your daily exercises',
  ai_tile_h: 'Automated AI Answer Engine',
  ai_tile_s: 'Ask a question, get guidance',
  goals_tile_h: 'Goals & Challenges',
  goals_tile_s: 'Track progress and achievements',
  knowledge_tile_h: 'Health Knowledge',
  knowledge_tile_s: 'Learn about wellness and health',
  contact_support: 'Contact & Support',
  start_demo: 'Start Demo Routine',
  // Additional translations
  welcome_to_routine: 'Daily Routine Exercises Breakdown',
  holistic_approach: 'Each daily routine is broken into 3 sections of daily activities:',
  music_session: 'Music Session',
  music_description: 'Calming music to help you relax and focus.',
  breathing: 'Breathing',
  breathing_description: 'Guided breathing exercises to center yourself.',
  movement_games: 'Movement & Games',
  movement_description: 'Feldenkrais movements, memory, and eye exercises.',
  how_ai_works: 'How the Automated AI Answering Engine Works',
  ai_description: 'The AI system provides personalized guidance and answers questions about your health and wellness journey. It analyzes your progress and offers tailored recommendations based on your daily routine activities.',
  health_knowledge_content: 'Health Knowledge Content',
  health_knowledge_description: 'Access articles and resources covering nutrition pacing, anxiety relaxation techniques, sleep hygiene, and Feldenkrais movement basics to support your daily routine.',
  todays_activities: 'Today\'s Activities',
  todays_progress: 'Today\'s Progress',
  exercises_completed: 'exercises completed',
  start_exercise: 'Start',
  your_daily_goals: 'Your Daily Goals',
  track_progress: 'Track your progress and stay motivated with these achievable goals.',
  add_new_goal: 'Add New Goal',
  // Goal titles
  goal_family_call: 'Call a family member today',
  goal_memory_game: 'Practice memory game 3 this week',
  goal_breathing: '5-minute breathing after breakfast',
  // Article translations
  article_nutrition_title: 'Nutrition Pacing',
  article_nutrition_excerpt: 'Learn how to maintain steady energy throughout the day...',
  article_nutrition_body: 'Proper nutrition pacing involves eating smaller, balanced meals throughout the day rather than large meals. This helps maintain steady blood sugar levels and provides consistent energy for your brain and body.',
  article_anxiety_title: 'Anxiety Relaxation',
  article_anxiety_excerpt: 'Simple techniques to manage stress and anxiety...',
  article_anxiety_body: 'When feeling anxious, try the 4-7-8 breathing technique: inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system and helps calm your mind.',
  article_sleep_title: 'Sleep Hygiene',
  article_sleep_excerpt: 'Tips for better sleep quality and rest...',
  article_sleep_body: 'Good sleep hygiene includes maintaining a consistent bedtime, avoiding screens before bed, keeping your bedroom cool and dark, and establishing a relaxing bedtime routine.',
  article_feldenkrais_title: 'Feldenkrais Basics',
  article_feldenkrais_excerpt: 'Gentle movement exercises for body awareness...',
  article_feldenkrais_body: 'Feldenkrais exercises focus on slow, mindful movements that improve body awareness and reduce tension. These gentle exercises can help with flexibility, balance, and overall well-being.',
  wellness_articles: 'Wellness Articles',
  learn_wellness: 'Learn about health, wellness, and techniques to support your daily routine.',
  read_full_article: 'Read Full Article',
  quick_tips: 'Quick Tips',
  get_in_touch: 'Get in Touch',
  help_support: 'We\'re here to help! Reach out to us for support, questions, or feedback.',
  send_message: 'Send Message',
  contact_email: 'Contact us directly via email',
  contact_whatsapp: 'Contact us directly via WhatsApp',
  whatsapp: 'WhatsApp',
  faq_title: 'Frequently Asked Questions',
  support_hours: 'Support Hours',
  ai_assistant: 'AI Assistant',
  goals_challenges: 'Goals & Challenges',
  health_knowledge: 'Health Knowledge',
  daily_routine_intro: 'Introduction',
  lets_begin: 'Let\'s Begin',
  // FAQ Content
  faq_exercise_frequency: 'How often should I do the exercises?',
  faq_exercise_answer: 'We recommend doing the daily routine exercises once per day, preferably at the same time each day to establish a consistent habit. Start with 5-10 minutes and gradually increase as you feel comfortable.',
  faq_seniors: 'Is this app suitable for seniors?',
  faq_seniors_answer: 'Yes! Brain Power is specifically designed with seniors in mind. We use large, accessible UI elements, clear typography, and gentle exercises that are safe for all ages. The app includes accessibility features like large text mode.',
  faq_offline: 'Can I use this app without internet?',
  faq_offline_answer: 'Yes, Brain Power works offline! All exercises, articles, and features are available without an internet connection. Your progress is saved locally on your device.',
  // Quick Tips
  tip_breaks: 'Take breaks every hour to stretch and breathe',
  tip_hydration: 'Stay hydrated throughout the day',
  tip_gratitude: 'Practice gratitude daily',
  tip_sleep: 'Get adequate sleep (7-9 hours)',
  tip_connection: 'Connect with loved ones regularly',
  // Support Hours
  support_monday_friday: 'Monday - Friday: 9:00 AM - 5:00 PM',
  support_saturday: 'Saturday: 10:00 AM - 2:00 PM',
  support_sunday: 'Sunday: Closed',
  // Stats Labels
  completed: 'Completed',
  total_goals: 'Total Goals',
  complete: 'Complete',
  due: 'Due',
  // AI Assistant
  quick_questions: 'Quick Questions:',
  sleep_tips: 'Sleep tips',
  breathing_basics: 'Breathing basics',
  pain_relief_basics: 'Pain relief basics',
  ask_anything: 'Ask me anything about your health...',
  general_guidance: 'General guidance only. Not medical advice.',
  // Micro-feedback text
  of_done_today: 'of 2 done today',
  active_goals: 'active goals',
  // Personal Info
  personal_info: 'Personal Information',
  update_personal_info: 'Update Personal Information',
  personal_info_description: 'Update your personal details below',
  first_name: 'First Name',
  last_name: 'Last Name',
  enter_first_name: 'Enter your first name',
  enter_last_name: 'Enter your last name',
  enter_age: 'Enter your age',
  enter_weight: 'Enter your weight in kg',
  enter_height: 'Enter your height in meters',
  enter_email: 'Enter your email',
  enter_phone: 'Enter your phone number',
  save_changes: 'Save Changes',
  cancel: 'Cancel',
  field_required: 'This field is required',
  field_too_short: 'This field is too short',
  field_too_long: 'This field is too long',
  invalid_email: 'Please enter a valid email',
  invalid_name: 'Only letters, apostrophes, and hyphens are allowed',
  invalid_phone: 'Only numbers are allowed',
  invalid_age: 'Please enter a valid age (1-120)',
  invalid_weight: 'Please enter a valid weight in kg (1-300)',
  invalid_height: 'Please enter a valid height in meters (0.5-3.0)',
  // Exercise content
  breathing_exercise: 'Breathing Exercise',
  exercise_breathing_description: '5 minute guided breathing session',
  memory_game: 'Memory Game',
  exercise_memory_description: 'Pattern matching exercise',
  minutes: 'min'
};

const he: Dict = {
  app_title: 'כוח המוח',
  language_title: 'בחרו שפה',
  hebrew: 'עברית',
  english: 'English',
  register_title: 'השלמת הרשמה',
  full_name: 'שם מלא',
  age: 'גיל',
  weight: 'משקל (ק"ג)',
  height: 'גובה (מ\')',
  email: 'אימייל',
  phone: 'טלפון',
  continue: 'המשך',
  continue_guest: 'המשך כאורח',
  welcome_title: 'ברוך הבא',
  continue_to_app: 'המשך לאפליקציה',
  level_title: 'בחרו רמה',
  beginner: 'מתחיל',
  advanced: 'מתקדם',
  grand: 'מאסטר',
  intro_tile_h: 'מבוא',
  intro_tile_s: 'הגישה ההוליסטית שלנו',
  begin_tile_h: 'בואו נתחיל – תרגול יומי',
  begin_tile_s: 'התחל את התרגול היומי',
  ai_tile_h: 'מנוע מענה AI',
  ai_tile_s: 'שאל שאלה וקבל הכוונה',
  goals_tile_h: 'יעדים ואתגרים',
  goals_tile_s: 'עקב התקדמות והישגים',
  knowledge_tile_h: 'ידע בריאותי',
  knowledge_tile_s: 'למידה על בריאות ואורח חיים',
  contact_support: 'צור קשר ותמיכה',
  start_demo: 'התחל תרגול דמו',
  // Additional translations
  welcome_to_routine: 'פירוק תרגילי יומיום',
  holistic_approach: 'כל תרגול יומי מחולק ל-3 חלקים של פעילויות יומיות:',
  music_session: 'סשן מוזיקה',
  music_description: 'מוזיקה מרגיעה לעזרה בהרפיה וריכוז.',
  breathing: 'נשימה',
  breathing_description: 'תרגילי נשימה מודרכים למרכז את עצמכם.',
  movement_games: 'תנועה ומשחקים',
  movement_description: 'תנועות פלדנקרייז, משחקי זיכרון ותרגילי עיניים.',
  how_ai_works: 'איך מנוע מענה AI אוטומטי עובד',
  ai_description: 'מערכת ה-AI מספקת הכוונה אישית ועונה על שאלות על מסע הבריאות והרווחה שלכם. היא מנתחת את ההתקדמות שלכם ומציעה המלצות מותאמות אישית בהתבסס על פעילויות התרגול היומי.',
  health_knowledge_content: 'תוכן ידע בריאותי',
  health_knowledge_description: 'גישה למאמרים ומשאבים המכסים קצב תזונה, טכניקות הרפיה מחרדה, היגיינת שינה ויסודות תנועת פלדנקרייז לתמיכה בתרגול היומי.',
  todays_activities: 'הפעילויות של היום',
  todays_progress: 'התקדמות היום',
  exercises_completed: 'תרגילים הושלמו',
  start_exercise: 'התחל',
  your_daily_goals: 'היעדים היומיים שלכם',
  track_progress: 'עקבו אחר ההתקדמות שלכם:',
  add_new_goal: 'הוסף יעד חדש',
  // Goal titles
  goal_family_call: 'התקשר עם בן משפחה היום',
  goal_memory_game: 'תרגל משחק זיכרון 3 השבוע',
  goal_breathing: '5 דקות נשימה אחרי ארוחת בוקר',
  // Article translations
  article_nutrition_title: 'קצב תזונה',
  article_nutrition_excerpt: 'למדו כיצד לשמור על אנרגיה יציבה לאורך היום...',
  article_nutrition_body: 'קצב תזונה נכון כולל אכילת ארוחות קטנות ומאוזנות לאורך היום במקום ארוחות גדולות. זה עוזר לשמור על רמות סוכר יציבות ומספק אנרגיה עקבית למוח ולגוף.',
  article_anxiety_title: 'הרפיה מחרדה',
  article_anxiety_excerpt: 'טכניקות פשוטות לניהול לחץ וחרדה...',
  article_anxiety_body: 'כשמרגישים חרדה, נסו את טכניקת הנשימה 4-7-8: שאפו למשך 4 ספירות, החזיקו למשך 7, נשפו למשך 8. זה מפעיל את מערכת העצבים הפאראסימפתטית ועוזר להרגיע את הנפש.',
  article_sleep_title: 'היגיינת שינה',
  article_sleep_excerpt: 'טיפים לאיכות שינה טובה יותר ומנוחה...',
  article_sleep_body: 'היגיינת שינה טובה כוללת שמירה על שעת שינה קבועה, הימנעות ממסכים לפני השינה, שמירה על חדר השינה קריר וחשוך, וקביעת שגרת שינה מרגיעה.',
  article_feldenkrais_title: 'יסודות פלדנקרייז',
  article_feldenkrais_excerpt: 'תרגילי תנועה עדינים למודעות גוף...',
  article_feldenkrais_body: 'תרגילי פלדנקרייז מתמקדים בתנועות איטיות ומודעות שמשפרות את המודעות הגופנית ומפחיתות מתח. התרגילים העדינים האלה יכולים לעזור עם גמישות, שיווי משקל ורווחה כללית.',
  wellness_articles: 'מאמרי בריאות',
  learn_wellness: 'למדו על בריאות, אורח חיים בריא וטכניקות לתמיכה בתרגול היומי שלכם.',
  read_full_article: 'קרא מאמר מלא',
  quick_tips: 'טיפים מהירים',
  get_in_touch: 'צרו קשר',
  help_support: 'אנחנו כאן לעזור! פנו אלינו לתמיכה, שאלות או משוב.',
  send_message: 'שלח הודעה',
  contact_email: 'צרו איתנו קשר ישירות דרך אימייל',
  contact_whatsapp: 'צרו איתנו קשר ישירות דרך WhatsApp',
  whatsapp: 'WhatsApp',
  faq_title: 'שאלות נפוצות',
  support_hours: 'שעות תמיכה',
  ai_assistant: 'עוזר AI',
  goals_challenges: 'יעדים ואתגרים',
  health_knowledge: 'ידע בריאותי',
  daily_routine_intro: 'מבוא',
  lets_begin: 'בואו נתחיל',
  // FAQ Content
  faq_exercise_frequency: 'כמה פעמים ביום כדאי לעשות את התרגילים?',
  faq_exercise_answer: 'אנו ממליצים לעשות את תרגילי היומיום פעם אחת ביום, רצוי באותה שעה כדי ליצור הרגל קבוע. התחילו עם 5-10 דקות והגדילו בהדרגה ככל שתרגישו בנוח.',
  faq_seniors: 'האם האפליקציה מתאימה לקשישים?',
  faq_seniors_answer: 'כן! Brain Power תוכננה במיוחד עבור קשישים. אנו משתמשים באלמנטי ממשק גדולים ונגישים, טיפוגרפיה ברורה ותרגילים עדינים שהם בטוחים לכל הגילאים. האפליקציה כוללת תכונות נגישות כמו מצב טקסט גדול.',
  faq_offline: 'האם אני יכול להשתמש באפליקציה ללא אינטרנט?',
  faq_offline_answer: 'כן, Brain Power עובדת במצב לא מקוון! כל התרגילים, המאמרים והתכונות זמינים ללא חיבור לאינטרנט. ההתקדמות שלכם נשמרת מקומית במכשיר.',
  // Quick Tips
  tip_breaks: 'קחו הפסקות כל שעה למתיחות ונשימות',
  tip_hydration: 'שמרו על לחות לאורך היום',
  tip_gratitude: 'תרגלו הכרת תודה יומית',
  tip_sleep: 'שנו מספיק (7-9 שעות)',
  tip_connection: 'התחברו עם יקיריכם באופן קבוע',
  // Support Hours
  support_monday_friday: 'יום שני - שישי: 9:00-17:00',
  support_saturday: 'שבת: 10:00-14:00',
  support_sunday: 'יום ראשון: סגור',
  // Stats Labels
  completed: 'הושלם',
  total_goals: 'סה"כ יעדים',
  complete: 'הושלם',
  due: 'תאריך יעד',
  // AI Assistant
  quick_questions: 'שאלות מהירות:',
  sleep_tips: 'טיפים לשינה',
  breathing_basics: 'יסודות הנשימה',
  pain_relief_basics: 'יסודות הקלת כאבים',
  ask_anything: 'שאל אותי כל דבר על הבריאות שלך...',
  general_guidance: 'הכוונה כללית בלבד. לא ייעוץ רפואי.',
  // Micro-feedback text
  of_done_today: 'מתוך 2 הושלמו היום',
  active_goals: 'יעדים פעילים',
  // Personal Info
  personal_info: 'מידע אישי',
  update_personal_info: 'עדכון מידע אישי',
  personal_info_description: 'עדכנו את הפרטים האישיים שלכם למטה',
  first_name: 'שם פרטי',
  last_name: 'שם משפחה',
  enter_first_name: 'הזינו את השם הפרטי שלכם',
  enter_last_name: 'הזינו את שם המשפחה שלכם',
  enter_age: 'הזינו את הגיל שלכם',
  enter_weight: 'הזינו את המשקל שלכם בקילוגרמים',
  enter_height: 'הזינו את הגובה שלכם במטרים',
  enter_email: 'הזינו את האימייל שלכם',
  enter_phone: 'הזינו את מספר הטלפון שלכם',
  save_changes: 'שמור שינויים',
  cancel: 'ביטול',
  field_required: 'שדה זה נדרש',
  field_too_short: 'שדה זה קצר מדי',
  field_too_long: 'שדה זה ארוך מדי',
  invalid_email: 'אנא הזינו אימייל תקין',
  invalid_name: 'רק אותיות, גרשיים ומקפים מותרים',
  invalid_phone: 'רק מספרים מותרים',
  invalid_age: 'אנא הזינו גיל תקין (1-120)',
  invalid_weight: 'אנא הזינו משקל תקין בקילוגרמים (1-300)',
  invalid_height: 'אנא הזינו גובה תקין במטרים (0.5-3.0)',
  // Exercise content
  breathing_exercise: 'תרגיל נשימה',
  exercise_breathing_description: 'תרגול נשימה מודרך של 5 דקות',
  memory_game: 'משחק זיכרון',
  exercise_memory_description: 'תרגיל התאמת דפוסים',
  minutes: 'דק'
};

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private dicts = { en, he };
  lang: 'en' | 'he' = (localStorage.getItem('lang') as any) || 'en';

  constructor() { this.applyDir(); }

  setLang(lang: 'en' | 'he') {
    this.lang = lang;
    localStorage.setItem('lang', lang);
    this.applyDir();
  }

  t(key: string): string {
    const d = this.dicts[this.lang] || en;
    return d[key] ?? key;
  }

  applyDir() {
    const dir = this.lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.body.classList.toggle('lang-he', this.lang === 'he');
    
    // Set CSS variables for Hebrew styling
    if (this.lang === 'he') {
      document.documentElement.style.setProperty('--hebrew-arrow', '◀');
      document.documentElement.style.setProperty('--hebrew-margin-right', '0px');
      document.documentElement.style.setProperty('--hebrew-margin-left', '8px');
      document.documentElement.style.setProperty('--hebrew-transform', 'scaleX(-1)');
      document.documentElement.style.setProperty('--hebrew-transform-open', 'scaleX(-1) rotate(90deg)');
    } else {
      document.documentElement.style.setProperty('--hebrew-arrow', '▶');
      document.documentElement.style.setProperty('--hebrew-margin-right', '8px');
      document.documentElement.style.setProperty('--hebrew-margin-left', '0px');
      document.documentElement.style.setProperty('--hebrew-transform', 'scaleX(1)');
      document.documentElement.style.setProperty('--hebrew-transform-open', 'rotate(90deg)');
    }
  }
}
