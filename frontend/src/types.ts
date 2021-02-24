import { connect } from 'redux-thunk'
import { DiceState } from './store/dice/types';
import { dispatchSetDice } from './store/dice/actions';

export default connector = connect(mapStateToProps, mapDispatchToProps)

export interface AppProps {

}

const mapStateToProps = (state: DiceState) => ({

});

const mapDispatchToProps = () => {
    setDice: () => (dispatchSetDice())
};