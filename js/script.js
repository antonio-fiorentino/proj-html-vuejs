var app = new Vue({
 el: '#root',
 data:{
   menuCategories:[
     {
       name: 'APPETIZERS',
       image: 'img/bg-appetizers.jpg',
     },
     {
       name: 'BURGERS',
       image: 'img/bg-burgers.jpg',
     },
     {
       name: 'PIZZAS',
       image: 'img/bg-pizza.jpg',
     },
     {
       name: 'FRIES',
       image: 'img/bg-chips.jpg',
     },
     {
       name: 'SIDES',
       image: 'img/bg-sides.jpg',
     },
     {
       name: 'DESSERTS',
       image: 'img/bg-desserts.jpg',
     },
     {
       name: 'BEVERAGES',
       image: 'img/bg-beverages.jpg',
     },
     {
       name: 'SPECIALS',
       image: 'img/bg-specials.jpg',
     },

   ]
 }
});
Vue.config.devtools = true
