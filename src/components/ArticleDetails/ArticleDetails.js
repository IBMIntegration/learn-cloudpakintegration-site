import React from 'react'

const ArticleDetails = ({name, lastUpdated, created, readTimeMinutes, profilePic}) => (
  <div className="article-details">
    {name && <p>{name}</p>}
    {created && <p>Created: {created}</p>}
    {lastUpdated && <p>Last updated: {lastUpdated}</p>}
    {readTimeMinutes && <p>{readTimeMinutes} min read</p>}
  </div>
)

export default ArticleDetails
