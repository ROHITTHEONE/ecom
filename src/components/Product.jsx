const Product = ({ img, title, price }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden'>
      <img className='w-full' src={img} alt={title} />
      <div className='font-bold text-3xl mb-2 text-center mt-2'>{title}</div>
      <div className='font-bold text-3xl mb-2 text-center mt-1 text-orange-500'>
        ${price}
      </div>
    </div>
  );
};

export default Product;
