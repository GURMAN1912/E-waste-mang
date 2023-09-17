import React from 'react';
import MapComponent from '../container/MapComponents.jsx';

function Nearestcenterpage() {
  return (
    <div className="p-10 bg-green-200 min-h-screen">
      <h1 className='text-center text-5xl mb-5'>Nearby Centres</h1>
      <div className=" p-4 flex justify-center">
        <div className='w-2/3 rounded-xl'>
      <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Nearestcenterpage;
