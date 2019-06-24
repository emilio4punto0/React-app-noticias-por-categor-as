import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

 const NewsList = ({news}) => (
        <div className="row">
            {news.map(news => (
                <New
                    key={news.url}
                    news={news}
                />
                ))}
            
        </div>
    );

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}
export default NewsList;