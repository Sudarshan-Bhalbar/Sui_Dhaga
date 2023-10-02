import { motion } from "framer-motion";

function AnimatedText(props) {
  const sentence = JSON.stringify(props.text); // convert prop to string
  const letters =  sentence.toString().split("");// split string into individual letters
  letters.shift(); // remove first letter
  letters.pop(); // remove last letter

  return (
    <motion.div
      transition={{delay:0.2}}
    >
      {letters.map((letter, index) => (
        <motion.span
          className="no-select"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
