const Category = ({ img, title }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden'>
      <img className='w-full' src={img} alt={title} />
      <div className='font-bold text-3xl mb-2 text-center mt-2'>{title}</div>
    </div>
  );
};

export default Category;
