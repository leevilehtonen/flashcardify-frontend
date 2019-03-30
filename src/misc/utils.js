import airplane from './quizImages/airplane.jpg';
import balloon from './quizImages/balloon.jpg';
import beer from './quizImages/beer.jpg';
import bicycle from './quizImages/bicycle.jpg';
import clock from './quizImages/clock.jpg';
import drinks from './quizImages/drinks.jpg';
import lamp from './quizImages/lamp.jpg';
import mountainsDark from './quizImages/mountains-dark.jpg';
import mountains from './quizImages/mountains.jpg';
import neihgbourhood from './quizImages/neihgbourhood.jpg';
import planets from './quizImages/planets.jpg';
import rocketNightV2 from './quizImages/rocket-night-v2.jpg';
import rocketNight from './quizImages/rocket-night.jpg';
import sheep from './quizImages/sheep.jpg';
import spaceEarth from './quizImages/space-earth.jpg';
import spaceshipNight from './quizImages/spaceship-night.jpg';
import tools from './quizImages/tools.jpg';
import traffic from './quizImages/traffic.jpg';
import weights from './quizImages/weights.jpg';

export const importImages = () => ({
  'airplane.jpg': airplane,
  'balloon.jpg': balloon,
  'clock.jpg': clock,
  'mountains-dark.jpg': mountainsDark,
  'planets.jpg': planets,
  'sheep.jpg': sheep,
  'tools.jpg': tools,
  'beer.jpg': beer,
  'drinks.jpg': drinks,
  'mountains.jpg': mountains,
  'rocket-night-v2.jpg': rocketNightV2,
  'space-earth.jpg': spaceEarth,
  'traffic.jpg': traffic,
  'bicycle.jpg': bicycle,
  'lamp.jpg ': lamp,
  'neihgbourhood.jpg': neihgbourhood,
  'rocket-night.jpg': rocketNight,
  'spaceship-night.jpg': spaceshipNight,
  'weights.jpg': weights,
});

export const importImage = async name =>
  new Promise(async (resolve, reject) => {
    try {
      const result = await import(`./quizImages/${name}`);
      resolve(result.default);
    } catch (error) {
      reject(error);
    }
  });
