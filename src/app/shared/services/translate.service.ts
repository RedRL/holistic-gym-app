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
  intro_tile_h: 'Intro to Daily Routine Exercises',
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
  welcome_to_routine: 'Welcome to Your Daily Routine',
  holistic_approach: 'Our holistic approach combines three key elements to support body, mind, and brain health.',
  music_session: 'Music Session',
  music_description: 'Calming music to help you relax and focus.',
  breathing: 'Breathing',
  breathing_description: 'Guided breathing exercises to center yourself.',
  movement_games: 'Movement & Games',
  movement_description: 'Feldenkrais movements, memory, and eye exercises.',
  how_ai_works: 'How Our AI Works',
  ai_description: 'For the MVP, the assistant provides general guidance with simple tips.',
  todays_activities: 'Today\'s Activities',
  todays_progress: 'Today\'s Progress',
  exercises_completed: 'exercises completed',
  start_exercise: 'Start',
  your_daily_goals: 'Your Daily Goals',
  track_progress: 'Track your progress and stay motivated with these achievable goals.',
  add_new_goal: 'Add New Goal',
  wellness_articles: 'Wellness Articles',
  learn_wellness: 'Learn about health, wellness, and techniques to support your daily routine.',
  read_full_article: 'Read Full Article',
  quick_tips: 'Quick Tips',
  get_in_touch: 'Get in Touch',
  help_support: 'We\'re here to help! Reach out to us for support, questions, or feedback.',
  send_message: 'Send Message',
  contact_email: 'Contact us directly via email',
  faq_title: 'Frequently Asked Questions',
  support_hours: 'Support Hours',
  ai_assistant: 'AI Assistant',
  goals_challenges: 'Goals & Challenges',
  health_knowledge: 'Health Knowledge',
  daily_routine_intro: 'Daily Routine Introduction',
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
  active_goals: 'active goals'
};

const he: Dict = {
  app_title: 'כוח המוח',
  language_title: 'בחר שפה',
  hebrew: 'עברית',
  english: 'English',
  register_title: 'השלמת הרשמה',
  full_name: 'שם מלא',
  age: 'גיל',
  email: 'אימייל',
  phone: 'טלפון',
  continue: 'המשך',
  continue_guest: 'המשך כאורח',
  welcome_title: 'ברוך הבא',
  continue_to_app: 'המשך לאפליקציה',
  level_title: 'בחר רמה',
  beginner: 'מתחיל',
  advanced: 'מתקדם',
  grand: 'מאסטר',
  intro_tile_h: 'היכרות עם תרגולי היומיום',
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
  welcome_to_routine: 'ברוכים הבאים לתרגול היומי שלכם',
  holistic_approach: 'הגישה ההוליסטית שלנו משלבת שלושה אלמנטים מרכזיים לתמיכה בבריאות הגוף, הנפש והמוח.',
  music_session: 'מושב מוזיקה',
  music_description: 'מוזיקה מרגיעה לעזרה בהרפיה וריכוז.',
  breathing: 'נשימה',
  breathing_description: 'תרגילי נשימה מודרכים למרכז את עצמכם.',
  movement_games: 'תנועה ומשחקים',
  movement_description: 'תנועות פלדנקרייז, משחקי זיכרון ותרגילי עיניים.',
  how_ai_works: 'איך ה-AI שלנו עובד',
  ai_description: 'לגרסת ה-MVP, העוזר מספק הכוונה כללית עם טיפים פשוטים.',
  todays_activities: 'הפעילויות של היום',
  todays_progress: 'התקדמות היום',
  exercises_completed: 'תרגילים הושלמו',
  start_exercise: 'התחל',
  your_daily_goals: 'היעדים היומיים שלכם',
  track_progress: 'עקבו אחר ההתקדמות שלכם והישארו מוטיבציה עם היעדים הניתנים להשגה האלה.',
  add_new_goal: 'הוסף יעד חדש',
  wellness_articles: 'מאמרי בריאות',
  learn_wellness: 'למדו על בריאות, אורח חיים בריא וטכניקות לתמיכה בתרגול היומי שלכם.',
  read_full_article: 'קרא מאמר מלא',
  quick_tips: 'טיפים מהירים',
  get_in_touch: 'צרו קשר',
  help_support: 'אנחנו כאן לעזור! פנו אלינו לתמיכה, שאלות או משוב.',
  send_message: 'שלח הודעה',
  contact_email: 'צרו איתנו קשר ישירות דרך אימייל',
  faq_title: 'שאלות נפוצות',
  support_hours: 'שעות תמיכה',
  ai_assistant: 'עוזר AI',
  goals_challenges: 'יעדים ואתגרים',
  health_knowledge: 'ידע בריאותי',
  daily_routine_intro: 'היכרות עם תרגול יומי',
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
  active_goals: 'יעדים פעילים'
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

  private applyDir() {
    const dir = this.lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.body.classList.toggle('lang-he', this.lang === 'he');
  }
}
