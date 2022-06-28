import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
     id: '1',
     title: 'Coffee Mug - Card',
     img: './coffee-mug.png'
}

const ShoppingPage = () => {

     return (
          <div>

               <h1>ShoppingPage</h1>
               <hr />

               <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
               }}>
                    <ProductCard
                         product={product}
                         className="gb-dark text-white"
                    >
                         <ProductCard.Image className="custom-img" />
                         <ProductCard.Title title={'Cafee'} />
                         <ProductCard.Buttons className="custom-btn" />
                    </ProductCard>

                    <ProductCard
                         product={product}
                         className="gb-dark text-white"
                    >
                         <ProductImage className="custom-img" />
                         <ProductTitle className="text-white" />
                         <ProductButtons className="custom-btn" />
                    </ProductCard>

                    <ProductCard
                         product={product}
                         style={{
                              backgroundColor: '#70D1F8'
                         }}
                    >
                         <ProductImage style={{
                              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                         }}/>
                         <ProductTitle style={{
                              display: 'flex',
                              fontWeight: 'bold',
                              justifyContent: 'center'
                         }} />
                         <ProductButtons style={{
                              display: 'flex',
                              justifyContent: 'end'
                         }} />
                    </ProductCard>

               </div>

          </div>
     );
};

export default ShoppingPage;