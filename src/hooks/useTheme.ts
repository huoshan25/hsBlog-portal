import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) {
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    if (newTheme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  };

  // 修改切换主题的函数，添加动画支持
  const toggleTheme = async (event: React.MouseEvent) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // 获取点击位置
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 如果浏览器支持 View Transitions API
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      });

      // 设置动画起点
      document.documentElement.style.setProperty('--x', `${x}px`);
      document.documentElement.style.setProperty('--y', `${y}px`);
    } else {
      // 降级处理
      setTheme(newTheme);
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
};