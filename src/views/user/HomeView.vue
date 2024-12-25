<script setup>
import UserLayout from '@/layouts/UserLayout.vue'

import {useProductStore} from '@/stores/user/product'
const productStore = useProductStore()
</script>
<template>
    <UserLayout>
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">Welcome to Shop</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
        <!-- Product  -->
        <section class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
            <div v-for="product in productStore.list" class="card  bg-base-100 w-full shadow-xl">
                <figure>
                    <img class="w-full" :src="product.imageURL"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ product.name }}</h2>
                    <p>{{ product.about }}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    </UserLayout>
</template>