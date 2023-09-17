import React from "react";

import WhatEwaste from "../container/WhatEwaste";
import HarmfulComp from "../container/HarmfulComp";
import Effects from "../container/Effects";
import EwasteMang from "../container/EwasteMang";
export default function Homepage() {

   
  return (
    <div className="bg-green-100 p-10 ">
        <WhatEwaste></WhatEwaste>
        <HarmfulComp></HarmfulComp>
        <Effects></Effects> 
        <EwasteMang></EwasteMang>
    </div>
  );
}
