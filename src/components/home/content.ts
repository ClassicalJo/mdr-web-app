import {
  CalendarDays,
  Heart,
  MoonStar,
  Sparkles,
  Sunrise,
  Target,
  Wind,
} from "lucide-react";

export const APP_STORE_URL = "https://apps.apple.com/au/app/my-daily-ritual/id6742334874";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mydailyritual.mydailyritual&hl=en";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Contact", href: "https://www.mydailyritual.app/contact" },
  { label: "Privacy Policy", href: "https://www.mydailyritual.app/privacy-policy" },
];

export const toolkit = [
  { title: "Mindset", text: "Mantras and prompts that set the tone before the day begins.", icon: Sparkles },
  { title: "Planning", text: "A gentle to-do flow that keeps intention ahead of busywork.", icon: CalendarDays },
  { title: "Habits", text: "Small daily rituals, tracked softly so consistency feels light.", icon: Heart },
  { title: "Wellness", text: "Breathwork, movement and sleep sounds, ready when you need them.", icon: Wind },
];

export const reasons = [
  { title: "All-in-One Toolkit", text: "Mindset, planning, and habits seamlessly integrated into one beautiful space.", number: "01" },
  { title: "Designed to Be Used", text: "Less navigating, more doing. We've eliminated decision fatigue so you can focus on what matters.", number: "02" },
  { title: "Your Daily Flow, Sorted", text: "From morning gratitude to nighttime reflection, we guide you through your day with ease.", number: "03" },
  { title: "Instant Feel-Good Dopamine", text: "Smart breath-work, gratitude practices and mood-boosting tools for when you need them most.", number: "04" },
  { title: "Fresh Start Every Day", text: "Auto-refresh means no falling off the bandwagon! Every day is a new opportunity to feel your best.", number: "05" },
];

export const ritualAreas = [
  { time: "Morning", title: "Morning Rituals", text: "Start your day with intention through guided gratitude practices, mantras, and gentle movement.", icon: Sunrise },
  { time: "Midday", title: "Productivity Tools", text: "Smart to-do lists, goal setting, and progress tracking that actually work with your life.", icon: Target },
  { time: "Pause", title: "Wellness Practices", text: "Breathwork, stretching, meditation, and sleep sounds — transforming your phone into your ultimate self-care tool.", icon: Wind },
  { time: "Evening", title: "Evening Reflection", text: "Wind down with journaling prompts and routines that prepare you for restorative sleep.", icon: MoonStar },
];

export const testimonials = [
  "The app I've been waiting for! Having everything in one place has made it so much more achievable to build my dream routine.",
  "Game-changing for my wellbeing and productivity! After just a few weeks I already feel happier, more focused, less stressed and in control of my day.",
  "It's like it was designed exactly for me",
];