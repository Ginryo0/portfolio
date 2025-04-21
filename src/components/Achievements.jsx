import { motion } from 'framer-motion';

import { slideIn } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';

import AchievementCard from './AchievementCard';
import Delivery from './icons/Delivery';
import { Bug, CoffeeIcon, Zap } from 'lucide-react';

const Achievements = () => {
  return (
    <>
      <motion.div
        variants={slideIn('right', 'spring', 0.2, 2)}
        transition={{ staggerChildren: 0.5 }}
      >
        <div className="flex flex-col flex-wrap items-center justify-center gap-2 p-4 text-tertiary">
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
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(
  Achievements,
  'tech',
  'w-full text-center h-full flex flex-col items-center justify-center overflow-hidden justify-self-start'
);
