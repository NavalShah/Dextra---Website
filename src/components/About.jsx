import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Dextra.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Dextra is a cutting-edge real-time hand gesture recognition system that leverages 
        MediaPipe's powerful hand tracking capabilities combined with custom-trained neural 
        networks. This innovative system can accurately classify both static hand gestures 
        and dynamic finger movements with an impressive ~95% accuracy while maintaining 
        real-time performance suitable for interactive applications.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className='w-full md:w-[48%] bg-tertiary p-5 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px]'>Real-time Performance</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            Processes hand gestures in real-time with minimal latency, making it perfect 
            for interactive applications and live demonstrations.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className='w-full md:w-[48%] bg-tertiary p-5 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px]'>High Accuracy</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            Achieves approximately 95% accuracy in gesture recognition through 
            carefully designed neural network architectures and preprocessed data.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 0.75, 0.75)}
          className='w-full md:w-[48%] bg-tertiary p-5 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px]'>Dual Classification</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            Features both static gesture recognition (5 gestures) and dynamic 
            movement classification (4 motion patterns) for comprehensive hand tracking.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.75, 0.75)}
          className='w-full md:w-[48%] bg-tertiary p-5 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px]'>Edge Deployment</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            Utilizes lightweight TensorFlow Lite models optimized for edge deployment, 
            ensuring efficient performance on various devices.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");