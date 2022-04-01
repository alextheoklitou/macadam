import { useEffect, useState } from 'react';
import Hero from './Hero';
import useResults from './hooks/useResults';
import Progress from './Progress';
import Schedule from './Schedule';
import Tables from './Tables';
import TextContainer from './TextContainer';
import { Events } from './Events';

function App() {
  const windowSize = window.matchMedia('(min-width: 800px)');
  const [isDesktop, setIsDesktop] = useState(windowSize.matches);
  const { scoreTally, results } = useResults();

  useEffect(() => {
    windowSize.addEventListener('change', (e) => {
      setIsDesktop(e.matches);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { kings, gkt } = scoreTally;

  const target = process.env.REACT_APP_TARGET || Math.floor(Events.length / 2);

  return (
    <div data-theme="kclsu">
      <Hero />
      <TextContainer>
        <h2 className="text-center"> Results and Upcoming Matches</h2>
        <Progress kingsScore={+kings} gktScore={+gkt} target={+target} />
        <div className="flex w-full mt-16">
          {isDesktop && <Schedule isDesktop={isDesktop} />}
          <Tables isDesktop={isDesktop} results={results} />
        </div>
      </TextContainer>
    </div>
  );
}

export default App;
