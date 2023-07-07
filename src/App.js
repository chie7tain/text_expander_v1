import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  className,
  onExpand = () => {},
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  // create a component that renders the text as the children of the component
  // create a button that toggles the text between collapsed and expanded
  // create a state to toggle the text between collapsed and expanded
  // create a prop to set the number of words to display when collapsed
  // convert children to an array of words by splitting on spaces
  const words = children.split(" ");
  // slice the array of words based on the number of words to display when collapsed
  const collapsedWords = words.slice(0, collapsedNumWords);
  // join the array of words back into a string
  const collapsedText = collapsedWords.join(" ") + "...";
  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
    onExpand((exp) => !exp);
  };
  return (
    <div className={className}>
      {isExpanded ? children : collapsedText}
      <button
        onClick={handleExpansion}
        style={{
          color: buttonColor,
          backgroundColor: "white",
          borderRadius: "4px",
          padding: "5px",
          border: "none",
          cursor: "pointer",
          font: "inherit",
        }}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
