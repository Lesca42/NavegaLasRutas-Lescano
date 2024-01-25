const products = [
    {
        id: '1',
        name: 'John Coltrane - Ballads',
        price: 10000,
        category: 'jazz',
        img: 'https://m.media-amazon.com/images/I/71+ZhpWip5L._UF1000,1000_QL80_.jpg',
        stock: 100,
        description: 'Alto disco'
    },
    {
        id: '2',
        name: 'Viejas Locas - Viejas Locas',
        price: 4000,
        category: 'rock',
        img: 'https://www.cmtv.com.ar/tapas-cd/viejasviejas.webp',
        stock: 400,
        description: 'Artesanal y de calidad'
    },
    {
        id: '3',
        name: 'Elis & Tom - Elis Regina / Tom Jobin',
        price: 10000,
        category: 'bossanova',
        img: 'https://http2.mlstatic.com/D_NQ_NP_615704-MLA50034379880_052022-O.webp',
        stock: 100,
        description: 'Bora la'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 1000)
    })
}