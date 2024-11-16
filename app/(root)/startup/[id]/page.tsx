// /startup/23456  for new dynamic details page 
import React from 'react'

const Page =async ({params}:{params:Promise<{id:string}>}) => {

    const id=(await params).id;

  return 
    <>
    <h1 className='text-3xl'> startup number :{id}</h1>
    </>;
};

export default Page;