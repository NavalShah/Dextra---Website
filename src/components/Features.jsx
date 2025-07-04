import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const FeatureCard = ({ index, title, description, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <div className='flex justify-center items-center w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl'>
          <span className='text-white text-[80px]'>{icon}</span>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{title}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Hand Detection",
      description: "Leverages MediaPipe's robust hand tracking to detect up to 2 hands simultaneously with 21 3D landmarks per hand.",
      icon: "✋"
    },
    {
      title: "Static Gestures",
      description: "Recognizes 5 static gestures including Open Palm, Closed Fist, Pointer, OK sign, and Peace Sign.",
      icon: "✌️"
    },
    {
      title: "Dynamic Movements",
      description: "Classifies 4 motion patterns: Stop, Clockwise, Counter-Clockwise, and Linear Movement.",
      icon: "🔄"
    },
    {
      title: "Data Collection",
      description: "Built-in interactive modes for collecting training data for both static gestures and dynamic movements.",
      icon: "📊"
    },
    {
      title: "Visual Feedback",
      description: "Real-time visualization of hand landmarks and gesture classifications with pointer trail effects.",
      icon: "👁️"
    },
    {
      title: "Lightweight Models",
      description: "TensorFlow Lite models optimized for edge deployment ensuring efficient performance.",
      icon: "⚡"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What Dextra Offers</p>
        <h2 className={styles.sectionHeadText}>Features.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Dextra combines state-of-the-art computer vision with machine learning to deliver 
        a comprehensive hand gesture recognition system. Each feature is designed to provide 
        maximum flexibility and performance for various applications.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} index={index} {...feature} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Features, "features");