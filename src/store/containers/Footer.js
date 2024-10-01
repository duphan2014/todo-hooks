import { connect } from 'react-redux';
import { saveTheme } from '../actions/changeThemeAction';
import Footer from '../../components/layout/Footer';

const mapDispatchToProps = dispatch => ({
    dispatch,
    saveColorTheme: color => dispatch(saveTheme(color)), // map dispatch on the right of : to prop on the left of :
});

function mapStateToProps(state){
    return {
        themeColor: state.color
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);