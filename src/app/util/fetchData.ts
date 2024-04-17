import { Product, ProductServer } from "./dataTypes"

export async function getCategories() {
    const res = await fetch(process.env.URL + '/api/categories', {cache: 'no-cache'})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export async function getProducts() {
    const res = await fetch(process.env.URL + '/api/products', {cache: 'no-cache'})
    // The return value is *not* serialized
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const {products} : {products: ProductServer[]} = await res.json()
   
    return products
}