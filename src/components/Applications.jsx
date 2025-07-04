import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ApplicationCard = ({ index, title, description }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className='bg-tertiary p-6 rounded-2xl flex-1 min-w-[300px]'
    >
      <h4 className='text-white font-bold text-[20px] mb-2'>{title}</h4>
      <p className='text-secondary text-[14px]'>{description}</p>
    </motion.div>
  );
};

const Applications = () => {
  const applications = [
    {
      title: "Gesture-Based Control Systems",
      description: "Control smart home devices, presentations, or media players with intuitive hand gestures."
    },
    {
      title: "Sign Language Recognition",
      description: "Extend the gesture vocabulary to support basic sign language communication."
    },
    {
      title: "Virtual Mouse/Pointer",
      description: "Use hand movements for touchless computer interaction and navigation."
    },
    {
      title: "Gaming Interface",
      description: "Create immersive gesture-based controls for interactive gaming experiences."
    },
    {
      title: "Accessibility Tools",
      description: "Provide alternative input methods for users with mobility limitations."
    },
    {
      title: "AR/VR Interaction",
      description: "Enable natural hand gesture input for augmented and virtual reality environments."
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Possibilities</p>
        <h2 className={styles.sectionHeadText}>Applications.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Dextra opens up a world of possibilities for human-computer interaction. 
        From accessibility solutions to immersive gaming experiences, the applications 
        are limited only by imagination.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-6'>
        {applications.map((app, index) => (
          <ApplicationCard key={app.title} index={index} {...app} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 2, 0.75)}
        className='mt-10 bg-tertiary p-8 rounded-2xl'
      >
        <h3 className='text-white font-bold text-[24px] mb-4'>Future Enhancements</h3>
        <ul className='list-disc list-inside text-secondary space-y-2'>
          <li>Support for more complex gestures and combinations</li>
          <li>Two-hand gesture recognition</li>
          <li>Gesture sequence recognition for commands</li>
          <li>Integration with voice commands</li>
          <li>Export to mobile platforms (Android/iOS)</li>
          <li>Real-time gesture customization without retraining</li>
        </ul>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Applications, "applications");