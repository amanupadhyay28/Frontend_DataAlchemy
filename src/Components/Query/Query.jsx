import React from "react";
import ReactMarkdown from 'react-markdown';
function QueryComponent({ query }) {
  return (
    
    <div>
        <ReactMarkdown>
</ReactMarkdown>
      <ReactMarkdown><b>Query</b>:{query.sql}</ReactMarkdown>
      <ReactMarkdown><b>Description:</b>{query.description}</ReactMarkdown>
      
    </div>


  );
}

export default QueryComponent;
