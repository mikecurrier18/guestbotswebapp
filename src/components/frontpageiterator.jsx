import React from 'react';

interface SlowTextProps {
  speed: number;
  text: string;
}

const SlowText = (props: SlowTextProps) => {
  const { speed, text } = props;
  const [placeholder, setPlaceholder] = React.useState(text[0]);


const index = React.useRef(0);

React.useEffect(() => {
  function tick() {
    index.current++;
    setPlaceholder((prev: string) => prev + text[index.current]);
  }
  if (index.current < text.length - 1) {
    let addChar = setInterval(tick, speed);
    return () => clearInterval(addChar);
  }
}, [placeholder, speed, text]);
return <span>{placeholder}</span>
}

const App = () => {
return (
  <div>
    <SlowText speed={100} text={"Hello World 1"} />
    <SlowText speed={200} text={"Hello World 2"}/>
    <SlowText speed={500} text={"Hello World 3"} />
  </div>
)
}

export default App;