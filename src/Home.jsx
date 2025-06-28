import Card from "./Card"
import Product from './Product.json'

function Home(){
    return(
        <>
        <div className="flex justify-center flex-wrap gap-10">
            {Product.map((p)=>(
                 <Card 
                 name={p.name}
                 description={p.description}
                 />
            ))}
           
            
             
            

            

        </div>
        </>
    )
}
export default Home
