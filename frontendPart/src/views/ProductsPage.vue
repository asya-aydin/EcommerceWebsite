<template>
<div id="page-wrap">
    <ProductsGrid  :products="products"/>
    
</div>
</template>

<script>
import axios from 'axios';
import ProductsGrid from '@/components/ProductsGrid.vue';
//import { products } from '@/fake-data';
//import router from '@/router';
export default {
    name: 'ProductsPage',
    components: {
      ProductsGrid,
    },
    data(){
        return {
        products:[],    
        };
    },
    async created(){
    const result= await axios.get('/api/products');  
    const products = result.data;
    this.products = products;
  }
};

</script>

<style scoped>

.grid-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Ürünler arasına boşluk ekler */
    justify-content: space-between;
  }

  .product-item {
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: calc(33.333% - 16px); /* Üç sütunlu düzen için */
    box-sizing: border-box; /* Padding ve border'ı elementin genişliğine dahil eder */
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
    width: 100%;
  }
</style>




