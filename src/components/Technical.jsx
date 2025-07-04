import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Technical = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How It Works</p>
        <h2 className={styles.sectionHeadText}>Technical Architecture.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-10'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[28px] mb-4'>Hand Detection Pipeline</h3>
          <p className='text-secondary text-[16px] mb-4'>
            The system uses MediaPipe's hand detection model to extract 21 3D landmarks from each detected hand:
          </p>
          <ul className='list-disc list-inside text-secondary text-[14px] space-y-2'>
            <li>Wrist (landmark 0)</li>
            <li>Thumb joints (landmarks 1-4)</li>
            <li>Index finger joints (landmarks 5-8)</li>
            <li>Middle finger joints (landmarks 9-12)</li>
            <li>Ring finger joints (landmarks 13-16)</li>
            <li>Pinky joints (landmarks 17-20)</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.75, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[28px] mb-4'>Static Gesture Classifier</h3>
          <div className='bg-black-100 p-4 rounded-lg mb-4'>
            <code className='text-green-500 text-[14px]'>
              Input(42) → Dropout(0.2) → Dense(20, ReLU) → Dropout(0.4) → Dense(10, ReLU) → Dense(5, Softmax)
            </code>
          </div>
          <p className='text-secondary text-[16px] mb-4'>
            <strong>Input:</strong> 42 normalized landmark coordinates (21 points in 2D)
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>0: Open Palm</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>1: Closed Fist</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>2: Pointer</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>3: OK Sign</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>4: Peace Sign</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 1, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[28px] mb-4'>Dynamic Movement Classifier</h3>
          <div className='bg-black-100 p-4 rounded-lg mb-4'>
            <code className='text-green-500 text-[14px]'>
              Input(32) → Dropout(0.2) → Dense(24, ReLU) → Dropout(0.5) → Dense(10, ReLU) → Dense(4, Softmax)
            </code>
          </div>
          <p className='text-secondary text-[16px] mb-4'>
            <strong>Input:</strong> 32 values representing 16 consecutive movement vectors
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>0: Stop (no movement)</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>1: Clockwise</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>2: Counter-Clockwise</p>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <p className='text-white text-[14px]'>3: Linear Movement</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 1.25, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[28px] mb-4'>Data Preprocessing</h3>
          <div className='space-y-4'>
            <div>
              <h4 className='text-white font-semibold text-[20px] mb-2'>Landmark Normalization</h4>
              <ul className='list-disc list-inside text-secondary text-[14px] space-y-1'>
                <li>Coordinates converted to relative positions from wrist</li>
                <li>Values normalized by maximum absolute value</li>
                <li>Scale invariant to different hand sizes and distances</li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold text-[20px] mb-2'>Movement History Processing</h4>
              <ul className='list-disc list-inside text-secondary text-[14px] space-y-1'>
                <li>Raw pixel coordinates converted to relative movements</li>
                <li>Normalized by image dimensions for resolution independence</li>
                <li>Temporal context maintained through sliding window</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Technical, "technical");