import { connect } from 'redux-thunk'
import { DiceState } from './store/dice/types';

export default connector = connect(mapStateToProps, mapDispatchToProps)

export interface AppProps {

}

const mapStateToProps = (state: DiceState) => ({

});

const mapDispatchToProps = () => {
};