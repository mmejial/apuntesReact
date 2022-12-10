import axios from "axios";


(async()=>{

    function delay(time:number){
        const promise = new Promise<boolean> ((resolve)=>{
            setTimeout(() => {
                resolve(true)
            }, time);
        });
        return promise
    }

    function getProducts(){
        const promise = axios.get('https://api.escuelajs.co/api/v1/products')
        return promise
    }

    async function getProductsAsync(){
        const dta = await axios.get('https://api.escuelajs.co/api/v1/products')
        return dta.data
    }
    console.log('-----'.repeat(10));
    const rta = await delay(3000)
    console.log(rta);

   /*  console.log('----'.repeat(10));
    const products = await getProducts();

    console.log(products.data); */
    console.log('----'.repeat(10));
    const products2 = await getProductsAsync()
    console.log(products2);




})();