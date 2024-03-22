'use client';

import ThemeSliderToggle from '../button/specifics/ThemeSliderToggle';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="flex items-center justify-end bg-vanilla dark:bg-tertiary_dark p-4 w-full h-[80px]">
      <div className="w-fit h-fit">
        <ThemeSliderToggle />
      </div>
    </header>
  );
};

export default Header;
