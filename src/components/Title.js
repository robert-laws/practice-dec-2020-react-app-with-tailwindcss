import React from 'react';

const Title = () => {
  const cStyles = {
    container: 'flex justify-center items-center h-screen bg-blue-100',
    card:
      'text-center text-blue-600 rounded-lg bg-gray-50 border p-8 shadow-sm',
    title: 'font-bold text-6xl',
    subTitle: 'text-2xl text-blue-400',
  };

  return (
    <div className={cStyles.container}>
      <div className={cStyles.card}>
        <h1 className={cStyles.title}>My New App</h1>
        <h2 className={cStyles.subTitle}>Subtitle Text</h2>
      </div>
    </div>
  );
};

export default Title;
