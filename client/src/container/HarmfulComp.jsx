import React from 'react'
import ewaste2 from "../assests/e-waste-2.png";
import { motion } from "framer-motion";

export default function HarmfulComp() {
  return (
    <div  className="flex justify-between mb-20">
    <div className="flex justify-ceter w-auto ">
      <img src={ewaste2} alt="" />
    </div>
    <div  className="flex flex-col p-5 w-2/3 justify-center">
      <motion.h2 initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="text-5xl mb-5 flex justify-center">
        Harmful components of E-waste
      </motion.h2>
      <ul className="text-2xl font-light flex-col justify-center mt-3 ">
        <motion.li initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="p-2">
          <strong>Heavy Metals:</strong> E-waste often contains heavy metals
          such as lead, mercury, cadmium, and chromium. When these metals
          leach into the soil and water, they can contaminate ecosystems,
          harm aquatic life, and pose health risks to humans.
        </motion.li>
        <motion.li initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="p-2">
          <strong>Flame Retardants:</strong> Flame retardant chemicals are
          commonly used in electronics to reduce the risk of fires. However,
          these chemicals can be persistent and toxic when released into the
          environment, potentially causing harm to wildlife and humans.
        </motion.li>
        <motion.li initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="p-2">
          <strong>Brominated Flame Retardants (BFRs):</strong> BFRs are
          commonly found in the plastic housings of electronics. These
          chemicals can persist in the environment, accumulate in organisms,
          and disrupt ecosystems.
        </motion.li>
        <motion.li initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} className="p-2">
          <strong>CFCs and HCFCs:</strong> Some older electronics,
          particularly refrigeration and air conditioning units, contain
          chlorofluorocarbons (CFCs) or hydrochlorofluorocarbons (HCFCs).
          These substances deplete the ozone layer when released into the
          atmosphere.
        </motion.li>
      </ul>
    </div>
  </div>

  )
}
