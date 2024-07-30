import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionText = ({ children, className, onMouseEnter, onMouseLeave, trigger = true, ...props }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView && trigger ? 1 : 0, y: inView && trigger ? 0 : 50 }}
      transition={{ duration: 1 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionText
