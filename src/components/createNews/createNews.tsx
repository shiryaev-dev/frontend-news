import React from 'react'

const createNews = () => {

  return (
    <div className="create-news">
        <input placeholder="Автор новости..." className="create-news__title" />
        <textarea
            placeholder="Напишите новость..."
            className="create-news__text"
            rows={5}
         />
        <button className="create-news__create">Создать</button>
    </div>
    
  )
}

export default createNews;