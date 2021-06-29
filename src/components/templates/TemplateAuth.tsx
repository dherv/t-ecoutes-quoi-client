import { FC } from 'react';

export const TemplateAuth: FC = ({ children }) => {
  return (
    <div className="h-full">
      <main className="p-4">{children}</main>
    </div>
  );
};
