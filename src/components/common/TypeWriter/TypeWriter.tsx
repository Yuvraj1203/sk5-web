'use client'
import { useEffect, useState } from "react";

type TypeWriterProps = {
    words: string[];
}

const TypeWriter = (props:TypeWriterProps) => {
  const words = props.words;
  const [currentText, setCurrentText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 200; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const delayBeforeDelete = 1000; // Delay before deleting the word

    const handleTypeWriter = () => {
      if (deleting) {
        // Deleting text
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        if (currentText.length === 0) {
          setDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
        }
      } else {
        // Typing text
        setCurrentText(words[currentWordIndex].slice(0, textIndex + 1));
        if (textIndex === words[currentWordIndex].length - 1) {
          setTimeout(() => {
            setDeleting(true);
          }, delayBeforeDelete); // Delay before deleting the word
        }
      }

      if (!deleting && textIndex < words[currentWordIndex].length - 1) {
        setTextIndex((prev) => prev + 1);
      } else if (deleting && textIndex > 0) {
        setTextIndex((prev) => prev - 1);
      }
    };

    const interval = setInterval(handleTypeWriter, deleting ? deletingSpeed : typingSpeed);
    
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentText, textIndex, currentWordIndex, deleting, words]);

  return <h2 className="text-center text-2xl md:text-3xl mb-4 font-semibold leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-teal to-primary">{currentText}<span className="border-r-1 animate-[blinkCaret_1s_ease-in-out_infinite]">{' '}</span></h2>;
};

export default TypeWriter;
