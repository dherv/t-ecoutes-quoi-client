import { FC } from 'react';
import { Header } from '../base/Header';

export const TemplateApp: FC = ({ children }) => {
  return (
    <div className="h-full">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};
