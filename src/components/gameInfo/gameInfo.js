import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import {
   activePlayerSelector,
   gameOverSelector,
   winnerSelector
} from '../../redux/selectors';

const GameInfo = ({ gameOver, activePlayer, winner }) => (
  <div>
    {
       gameOver ? `Игра окончена, победил ${winner}` : `Ход игрока ${activePlayer}`
    }
  </div>
);

GameInfo.defaultProps = {
   gameIsOver: false
};

GameInfo.propTypes = {
   gameIsOver: PropTypes.bool,
   activeMarker: PropTypes.string,
   winner: PropTypes.string,
};
const mapStateToProps = createStructuredSelector({
   activePlayer: activePlayerSelector,
   gameOver: gameOverSelector,
   winner: winnerSelector
});

export default connect(mapStateToProps)(GameInfo);
