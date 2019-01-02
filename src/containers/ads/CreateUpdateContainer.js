import {connect} from 'react-redux';
import {sendMessageToMainEndpoint} from "../../actions/websocketActions";
import CreateUpdate from "../../components/ads/CreateUpdate";
import {Actions} from "../../reducers/ad";

const mapStateToProps = (state, ownProps) => {
    return {
        adState: {
            ad: state.ad,
            adId: ownProps.match.params.id
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAd: (payload) => {
            dispatch(sendMessageToMainEndpoint(Actions.FETCH_AD, payload));
        }
    }
};

const CreateUpdateContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUpdate);

export default CreateUpdateContainer;