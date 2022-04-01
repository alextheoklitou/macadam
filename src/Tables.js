import PropTypes from 'prop-types';
import Results from './Results';
import Schedule from './Schedule';

const Tables = ({ isDesktop, results }) => {
  const showCountDown = results.length === 0;

  if (!isDesktop)
    return (
      <div className="w-full">
        <kclsu-tabs variant="primary" style={{ margin: 0 }}>
          <tab-title active="schedule" name="schedule">
          Schedule
          </tab-title>
          <tab-area active name="schedule">
            <Schedule isDesktop={isDesktop} />
          </tab-area>
          <tab-title name="2021">Results</tab-title>
          <tab-area name="2021">
            {showCountDown && (
              <kclsu-countdown
                width="280px"
                margin="0.5em auto"
                text="17-21 March 2022"
                date="March 17, 2022, 22:00:00"
              />
            )}
            <Results results={results} />
          </tab-area>
        </kclsu-tabs>
      </div>
    );
  return (
    <div className="w-full">
      <kclsu-tabs variant="primary" style={{ margin: 0 }}>
        <tab-title active="2021" name="2021">
          Results
        </tab-title>
        <tab-area active name="2021">
          {showCountDown && (
            <kclsu-countdown
              width="280px"
              margin="0.5em auto"
              text="6 April 2022"
              date="April 6, 2022, 11:00:00"
            />
          )}
          <Results results={results} />
        </tab-area>
      </kclsu-tabs>
    </div>
  );
};

Tables.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      ImageUrl: PropTypes.string,
      Url: PropTypes.string,
      StartDate: PropTypes.string,
      Id: PropTypes.string,
      Gkt: PropTypes.string,
      Kings: PropTypes.string,
    })
  ),
  events: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      ImageUrl: PropTypes.string,
      Url: PropTypes.string,
      StartDate: PropTypes.string,
    })
  ),
};

export default Tables;
