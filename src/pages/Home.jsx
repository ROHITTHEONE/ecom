import Category from "../components/Category";
import Product from "../components/Product";
import Article from "../components/Article";
import kids from "../assets/kids.png";
import men from "../assets/men.png";
import women from "../assets/women.png";
import { Link } from "react-router-dom";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <>
      <div className=' max-w-7xl mx-auto'>
        <div className='flex justify-center space-x-12 my-16'>
          <Link to='/categories/kids'>
            <Category img={kids} title={"Kid's Collection"} />
          </Link>
          <Link to='/categories/men'>
            <Category img={men} title={"Men's Collection"} />
          </Link>
          <Link to='/categories/women'>
            <Category img={women} title={"Women's Collection"} />
          </Link>
        </div>
        <div className='grid grid-cols-4 gap-x-4 gap-y-6 my-16'>
          <Product img={women} title={"Adidas T-Shirt"} price={899} />
          <Product img={men} title={"Adidas T-Shirt"} price={899} />
          <Product img={kids} title={"Adidas T-Shirt"} price={899} />
          <Product img={women} title={"Adidas T-Shirt"} price={899} />
          <Product img={men} title={"Adidas T-Shirt"} price={899} />
          <Product img={kids} title={"Adidas T-Shirt"} price={899} />
          <Product img={women} title={"Adidas T-Shirt"} price={899} />
          <Product img={men} title={"Adidas T-Shirt"} price={899} />
        </div>
      </div>
      <img
        className='w-full max-h-72 my-14'
        src={banner}
        alt='20% Sale Banner'
      />
      <div className=' max-w-7xl mx-auto'>
        <div className='text-7xl font-bold text-center'>Featured Articles</div>
        <div className='flex justify-center space-x-12 my-16'>
          <Article
            img={kids}
            title={"Whom To Believe"}
            desc={
              "When you initially look into a healthy lifestyle or into going for a transformation, you get a lot of different advice and different information from various sources. How do you decide which one..."
            }
          />
          <Article
            img={men}
            title={"Whom To Belive"}
            desc={
              "When you initially look into a healthy lifestyle or into going for a transformation, you get a lot of different advice and different information from various sources. How do you decide which one..."
            }
          />
          <Article
            img={women}
            title={"Whom To Belive"}
            desc={
              "When you initially look into a healthy lifestyle or into going for a transformation, you get a lot of different advice and different information from various sources. How do you decide which one..."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home;
