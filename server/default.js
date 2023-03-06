import { products } from "./connstants/data.js";
import Connection from "./database/db.js";
import Product from "./model/product-schema.js";


const DefaultData = async () =>{
try{
    
 await Product.insertMany(products);
console.log('data imported suceesfully');
}catch (error) {
console.log('error while inserting default data',error.message);
}


}
export default DefaultData;