import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';

import AchievementCard from './AchievementCard';
import Delivery from './icons/Delivery';
import { Bug, CoffeeIcon, Zap } from 'lucide-react';

const Achievements = () => {
  return (
    <>
      <motion.div
        variants={slideIn('right', 'spring', 0.2, 2)}
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col flex-wrap justify-center w-full gap-2 p-4 md:items-center text-tertiary"
      >
        <AchievementCard
          icon={<Zap size={20} />}
          value="5+"
          label="Full Stack Projects"
        />
        <AchievementCard
          icon={<Delivery className={'w-6 h-6'} />}
          value="2+"
          label="Years of Experience"
        />
        <AchievementCard
          icon={<Bug size={20} />}
          value="999+"
          label="Bugs Squashed"
        />
        <AchievementCard
          icon={<CoffeeIcon size={20} />}
          value="567+"
          label="Cups of Coffee"
        />
      </motion.div>
    </>
  );
};

export default Achievements;
