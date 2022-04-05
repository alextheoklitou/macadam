import PropTypes from 'prop-types';
import ScrollIntoView from './ScrollIntoView';
import Trophy from './Trophy';

const Progress = ({ kingsScore, gktScore, target }) => {
  function calcProgress(score) {
    return (score / target) * 100;
  }

  const hasStarted = kingsScore > 0 || gktScore > 0;

  return (
    <div className="px-4 max-w-6xl m-auto my-8 ">
      <ScrollIntoView>
        <div className="w-100 mb-4 flex content-center h-25">
          <div className="shadow stats w-40 md:w-40 mr-2">
            <div className="stat">
              <div className="stat-title text-gkt font-bold text-center overflow-hidden">
                GKT
              </div>
              <div className="stat-value text-center text-gkt overflow-hidden">
                {hasStarted ? gktScore : '0'}
              </div>
            </div>
          </div>

          <progress
            className="progress progress-accent h-4 w-100 self-center"
            value={hasStarted ? calcProgress(gktScore) : '10'}
            max="100"
            style={{ marginBottom: 0 }}
          />
          <div className="self-center text-3xl">
            <Trophy colour="#f4ba10" />
          </div>
        </div>
      </ScrollIntoView>
      <ScrollIntoView>
        <div className="w-100 mb-4 flex content-center h-25">
          <div className="shadow stats w-40 mr-2">
            <div className="stat overflow-hidden">
              <div className="stat-title text-center text-kings font-bold overflow-hidden">
                KINGS
              </div>
              <div className="stat-value text-center text-kings overflow-hidden">
                {hasStarted ? kingsScore : '0'}
              </div>
            </div>
          </div>
          <progress
            className="progress progress-warning h-4 w-100 self-center"
            value={hasStarted ? calcProgress(kingsScore) : '10'}
            max="100"
            style={{ marginBottom: 0 }}
          />
          <div className="self-center text-3xl">
            <Trophy colour="#e22319" />
          </div>
        </div>
      </ScrollIntoView>
    </div>
  );
};

Progress.propTypes = {
  kingsScore: PropTypes.number,
  gktScore: PropTypes.number,
  target: PropTypes.number,
};

export default Progress;
