const Article = ({ img, title, desc }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden'>
      <img className='w-full' src={img} alt={title} />
      <div className='font-bold text-3xl mb-2 text-center mt-2 text-orange-500'>
        {title}
      </div>
      <div className='font-normal text-base mb-2 mt-1'>{desc}</div>
    </div>
  );
};

export default Article;
