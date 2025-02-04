import React from 'react';

export const EMAIL_TEMPLATES = {
  HELLO_WORLD: 'HELLO_WORLD',
};

const EMAIL_TEMPLATES_MAP: Record<string, React.FC> = {
  [EMAIL_TEMPLATES.HELLO_WORLD]: React.lazy(
    () => import('../emails/HelloWorld'),
  ),
};

export const getEmailTemplate = (templateName: string): React.JSX.Element => {
  const Component = EMAIL_TEMPLATES_MAP[templateName];
  return Component ? <Component /> : <>Template not found</>;
};

export const templateNameExists = (templateName: string): boolean => {
  return Object.keys(EMAIL_TEMPLATES).includes(templateName);
};
