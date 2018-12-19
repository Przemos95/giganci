import React from 'react';
import {connect} from 'react-redux';
import { PacmanLoader } from 'react-spinners';

class Spinner extends React.Component {
    render() {
        var backgroundClassName = this.props.loading ? 'background-loading' : '';
        return (
            <div className={backgroundClassName}>
                <div className='sweet-loading'>
                    <PacmanLoader
                        className='pacman'
                        size={50}
                        sizeUnit={"px"}
                        color="blue"
                        loading={this.props.loading}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

const mapStateToProps = state => {
    return{
        loading: state.loading.showLoader,
    };
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Spinner);