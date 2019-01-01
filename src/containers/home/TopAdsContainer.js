import {connect} from 'react-redux';
import {sendMessageToMainEndpoint} from "../../actions/websocketActions";
import {Actions} from "../../reducers/topAds";
import TopAds from "../../components/home/TopAds";

const mapStateToProps = state => {
    return {
        topAds: state.topAds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTopAds: () => {
            dispatch(sendMessageToMainEndpoint(Actions.FETCH_TOP_ADS));
        }
    }
};

const TopAdsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopAds);

export default TopAdsContainer;