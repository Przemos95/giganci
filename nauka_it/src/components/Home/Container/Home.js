import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import * as actionCreators from '../../../actions/index';
import Article from '../Presentational/Article';

class Home extends React.Component {   
    constructor(props) {
        super(props);

        this.getArticles();
    }

    getArticles = () => {
        this.props.onGetArticles();
    };

    render() {
        let articleBody = (
            this.props.articleList.map((row, index) => (
                <Article 
                    key={_.uniqueId('article_')}
                    title={row.title}
                    shortcut={row.shortcut}
                    imgSrc={row.imgUrl}
                    url={'/article/' + row.id} />
            ))
        );
        return(
            <div>
                {articleBody}
                <div style={{clear: 'both'}} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetArticles: () => dispatch(actionCreators.onGetAllArticles())
    };
};

const mapStateToProps = state => {
    return{
        articleList: state.articles.articleList
    };
};
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Home);