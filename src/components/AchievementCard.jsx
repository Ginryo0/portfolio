import { motion } from 'framer-motion';

const AchievementCard = ({ icon, value, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex items-center gap-4 p-4 border shadow-md bg-primary border-tertiary rounded-2xl md:w-[clamp(212px,20vw,240px)] w-full text-white hover:text-tertiary"
    >
      <div className="p-3 duration-100 rounded-full text-inherit bg-white/[0.02]">
        {icon}
      </div>
      <div className="flex flex-col items-center w-full gap-[2px]">
        <h3 className="text-lg font-bold text-white">{value}</h3>
        <p className="w-full text-xs text-center text-gray-300">{label}</p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
