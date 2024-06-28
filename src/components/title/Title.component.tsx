import React from 'react';
import { useTranslation } from 'react-i18next';

const TitleComponent = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'components.title' });

  return <div>{t('application-title')}</div>;
};

export default TitleComponent;
