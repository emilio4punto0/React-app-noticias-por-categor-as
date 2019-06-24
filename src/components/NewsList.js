import React from 'react';
import New from './New';

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

export default NewsList;