// import styles from './ThemeSliderToggle.module.css';

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

import ThemeSliderToggleStyle from '../../../../../styles/components/button/specifics/ThemeSliderToggleStyle';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export interface IThemeSliderToggle {}

const ThemeSliderToggle: React.FC<
  IThemeSliderToggle
> = () => {
  const [mounted, setMounted] = useState<boolean>();

  const { theme, setTheme } = useTheme();

  // If the page is not mounted, return null to avoid the theme switcher
  // to be rendered with the wrong theme
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === 'dark';
  }

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${ThemeSliderToggleStyle} ${
          theme === 'light'
            ? 'text-white'
            : 'text-slate-300'
        }`}
        onClick={() => {
          setTheme(isDark() ? 'light' : 'dark');
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${ThemeSliderToggleStyle} ${
          theme === 'dark' ? 'text-white' : 'text-slate-800'
        }`}
        onClick={() => {
          setTheme(isDark() ? 'light' : 'dark');
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === 'dark' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 250,
          }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default ThemeSliderToggle;
