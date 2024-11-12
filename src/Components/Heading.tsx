import React from 'react';

type HeadingProps = {
  title: string;
};

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className='text-center text-4xl pb-8'>
      <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  );
}

export default Heading;
