import React from 'react';
import DisplayCard from './DisplayCard';
import InputCard from './InputCard';
import mockData from '../../../flashcards.json';
import PredictionStatus from './PredictionStatus';

class PredictPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predictionStatus: PredictionStatus.ORIGINAL,
      translationId: 0,
      data: mockData,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.forwardPredictionStatus();
    }, 5000);
  }

  forwardPredictionStatus = () => {
    this.setState(previousState => {
      switch (previousState.predictionStatus) {
        case PredictionStatus.ORIGINAL:
          return { predictionStatus: PredictionStatus.ANSWER };
        case PredictionStatus.ANSWER:
          return {
            predictionStatus: PredictionStatus.ORIGINAL,
            translationId: previousState.translationId + 1,
          };
        default:
          return {};
      }
    });
  };

  render() {
    const { predictionStatus, translationId, data } = this.state;
    return (
      <React.Fragment>
        <DisplayCard
          predictionStatus={predictionStatus}
          original={data[translationId].original}
          translation={data[translationId].translation}
        />
        <InputCard />
      </React.Fragment>
    );
  }
}

export default PredictPage;
