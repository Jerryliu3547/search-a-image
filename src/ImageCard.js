import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg mb-6'>
        <div className='relative h-60 overflow-hidden'>
            <img src={image.webformatURL} className='object-cover w-full h-full ' alt="shiba"/>
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              Photo by {image.user}
            </div>
            <ul>
              <li><strong>Views:</strong> {image.views}</li>
              <li><strong>Download</strong> {image.downloads}</li>
              <li><strong>Likes</strong> {image.likes}</li>
            </ul>


        </div>
        <div className='px-6 py-4'>
            {image.tags.split(',').map((tag, index) =>(
                <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2' >{tag}</span>
            ))}
              
            </div>

    </div>
    </div>
  )
}

export default ImageCard
