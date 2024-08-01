<template>
    <div class="product-item">
        <img v-bind:src="product.imageUrl"/>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">{{ product.price }}TL</p>
        <router-link v-bind:to="'/products/' + product.id">
            <button>View Details</button>    
        </router-link>        
    </div>

</template>

<script>
export default{
    name: 'ProductsGridItem',
    props: ['product'],
}
</script>


<style scoped>
 
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
