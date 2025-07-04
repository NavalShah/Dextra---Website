import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Usage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get Started</p>
        <h2 className={styles.sectionHeadText}>Usage & Installation.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col gap-8'>
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px] mb-4'>Portable Package Installation</h3>
          <div className='space-y-4'>
            <p className='text-secondary'>
              Download and use Dextra without any complex setup! The portable package includes everything you need.
            </p>
            
            <div className='bg-black-100 p-4 rounded-lg'>
              <h4 className='text-white font-semibold text-[18px] mb-3'>Quick Start (3 Easy Steps)</h4>
              <ol className='list-decimal list-inside text-secondary space-y-2'>
                <li>Download <code className='text-green-500'>HandGestureRecognition_Portable.zip</code></li>
                <li>Extract the zip file to any folder</li>
                <li>Double-click <code className='text-green-500'>setup.bat</code> (first time only) then <code className='text-green-500'>run.bat</code></li>
              </ol>
            </div>

            <div className='bg-black-100 p-4 rounded-lg'>
              <h4 className='text-white font-semibold text-[18px] mb-3'>Package Contents</h4>
              <ul className='list-disc list-inside text-secondary space-y-1'>
                <li>All Python code and trained models</li>
                <li><code className='text-green-500'>setup.bat</code> - Automatic dependency installer</li>
                <li><code className='text-green-500'>run.bat</code> - Application launcher</li>
                <li><code className='text-green-500'>requirements.txt</code> - Python package list</li>
                <li><code className='text-green-500'>PORTABLE_README.txt</code> - Detailed instructions</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.75, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px] mb-4'>Manual Installation</h3>
          <div className='space-y-4'>
            <p className='text-secondary'>
              For developers who prefer manual setup or want to modify the source code.
            </p>
            <div className='bg-black-100 p-4 rounded-lg'>
              <code className='text-green-500'>git clone https://github.com/NavalShah/dextra.git</code><br/>
              <code className='text-green-500'>cd dextra</code><br/>
              <code className='text-green-500'>pip install -r requirements.txt</code><br/>
              <code className='text-green-500'>python app.py</code>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px] mb-4'>Command Line Arguments</h3>
          <div className='space-y-3'>
            <div className='bg-black-100 p-3 rounded'>
              <code className='text-green-500'>--device</code>
              <span className='text-secondary ml-3'>Camera device index (default: 0)</span>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <code className='text-green-500'>--width</code>
              <span className='text-secondary ml-3'>Capture width in pixels (default: 960)</span>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <code className='text-green-500'>--height</code>
              <span className='text-secondary ml-3'>Capture height in pixels (default: 540)</span>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <code className='text-green-500'>--min_detection_confidence</code>
              <span className='text-secondary ml-3'>Min confidence for hand detection (default: 0.7)</span>
            </div>
            <div className='bg-black-100 p-3 rounded'>
              <code className='text-green-500'>--min_tracking_confidence</code>
              <span className='text-secondary ml-3'>Min confidence for hand tracking (default: 0.5)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1.25, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px] mb-4'>Keyboard Controls</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='bg-black-100 p-4 rounded'>
              <kbd className='bg-gray-700 px-2 py-1 rounded text-white'>ESC</kbd>
              <span className='text-secondary ml-3'>Exit the application</span>
            </div>
            <div className='bg-black-100 p-4 rounded'>
              <kbd className='bg-gray-700 px-2 py-1 rounded text-white'>n</kbd>
              <span className='text-secondary ml-3'>Normal mode (inference only)</span>
            </div>
            <div className='bg-black-100 p-4 rounded'>
              <kbd className='bg-gray-700 px-2 py-1 rounded text-white'>k</kbd>
              <span className='text-secondary ml-3'>Keypoint logging mode</span>
            </div>
            <div className='bg-black-100 p-4 rounded'>
              <kbd className='bg-gray-700 px-2 py-1 rounded text-white'>h</kbd>
              <span className='text-secondary ml-3'>History logging mode</span>
            </div>
            <div className='bg-black-100 p-4 rounded'>
              <kbd className='bg-gray-700 px-2 py-1 rounded text-white'>0-9</kbd>
              <span className='text-secondary ml-3'>Class label for data collection</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1.5, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px] mb-4'>Data Collection</h3>
          
          <div className='mb-6'>
            <h4 className='text-white font-semibold text-[20px] mb-3'>Collecting Static Gestures</h4>
            <ol className='list-decimal list-inside text-secondary space-y-2'>
              <li>Press 'k' to enter keypoint logging mode</li>
              <li>Make the desired hand gesture</li>
              <li>Press the corresponding number (0-4) to save the sample</li>
              <li>Data is saved to model/keypoint_classifier/keypoint.csv</li>
            </ol>
          </div>

          <div>
            <h4 className='text-white font-semibold text-[20px] mb-3'>Collecting Movement Patterns</h4>
            <ol className='list-decimal list-inside text-secondary space-y-2'>
              <li>Press 'h' to enter history logging mode</li>
              <li>Make the pointer gesture to start tracking</li>
              <li>Perform the desired movement pattern</li>
              <li>Press the corresponding number (0-3) to save the sample</li>
              <li>Data is saved to model/point_history_classifier/point_history.csv</li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 1.75, 0.75)}
          className='bg-tertiary p-8 rounded-2xl'
        >
          <h3 className='text-white font-bold text-[24px] mb-4'>Requirements</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='bg-black-100 p-3 rounded text-center'>
              <span className='text-white'>Python 3.7+</span>
            </div>
            <div className='bg-black-100 p-3 rounded text-center'>
              <span className='text-white'>OpenCV</span>
            </div>
            <div className='bg-black-100 p-3 rounded text-center'>
              <span className='text-white'>MediaPipe</span>
            </div>
            <div className='bg-black-100 p-3 rounded text-center'>
              <span className='text-white'>TensorFlow</span>
            </div>
            <div className='bg-black-100 p-3 rounded text-center'>
              <span className='text-white'>NumPy</span>
            </div>
            <div className='bg-black-100 p-3 rounded text-center'>
              <span className='text-white'>Pandas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Usage, "usage");