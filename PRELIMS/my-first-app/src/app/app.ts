import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

interface EducationEntry {
  level: string;
  school: string;
  years: string;
  note?: string;
  current?: boolean;
}

interface PosterItem {
  title: string;
  description: string;
  imageUrl: string; // path inside public/posters/
}

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Adrian Meldrich Jose';
  location = 'Pampanga, Philippines'; // <-- change to your city if you want
  email = 'meldrich.jose@gmail.com';
  phone = '0908 619 0328';

  profile = 'I am a 3rd year BS Information Technology student majoring in Web Development. I enjoy learning new technologies, building useful applications, and designing posters in Canva.';

  facts = [
    { label: 'Age', value: '20 years old' },
    { label: 'Course', value: 'BS Information Technology (Web Development)' },
    { label: 'Year level', value: '3rd Year' },
    { label: 'School', value: 'Holy Angel University' }
  ];

  // Navigation bar links (id = the section id in app.html / the child templates).
  links = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'posters', label: 'Posters' },
    { id: 'tools', label: 'Tools' },
    { id: 'contact', label: 'Contact' }
  ];

  // Years are estimated from your age (20) and the usual school calendar. Edit if any are off.
  education: EducationEntry[] = [
    { level: 'Kindergarten', school: 'Mabalacat Elementary School', years: '2011 – 2012' },
    { level: 'Elementary', school: 'Don Bosco Academy', years: '2012 – 2018', note: 'Grades 1 to 6' },
    { level: 'Junior High School', school: 'Don Bosco Academy', years: '2018 – 2022', note: 'Grades 7 to 10' },
    { level: 'Senior High School', school: 'Don Bosco Academy', years: '2022 – 2024', note: 'Grades 11 to 12' },
    { level: 'College', school: 'Holy Angel University', years: '2024 – Present',
      note: 'BS Information Technology, Web Development (now 3rd year)', current: true }
  ];

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Poster Design in Canva',
    'Typography and Layout'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  // Posters: the image files live in public/posters/ (copy your 4 PNG files there).
  posters: PosterItem[] = [
    { title: 'Thomas Shelby', description: 'Typography poster with a vintage newspaper background.', imageUrl: 'posters/Thomas_Shelby.png' },
    { title: 'Cristiano Ronaldo', description: 'Manchester United "The Red Devil" sports poster.', imageUrl: 'posters/Cristiano_Ronaldo.png' },
    { title: 'Rae Sremmurd', description: 'Hip-hop duo poster with bold distressed lettering.', imageUrl: 'posters/Rae_Sremmurd.png' },
    { title: 'The Kid LAROI', description: 'Music poster with a sound-wave typography design.', imageUrl: 'posters/The_Kid_LAROI.png' }
  ];

  message = 'Click any skill above to select it.';

  theme: 'dark' | 'light' = 'dark';

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  // Smooth scroll for the navigation bar.
  go(event: Event, id: string) {
    event.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
