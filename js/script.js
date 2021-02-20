var app = new Vue({
 el: '#root',
 data:{
   menuCategories:[
     {
       name: 'APPETIZERS',
       image: `$bg-appetizers`,
     },
     {
       name: 'BURGERS',
       image: `$bg-burgers`,
     },
     {
       name: 'PIZZAS',
       image: `$bg-pizzas`,
     },
     {
       name: 'FRIES',
       image: `$bg-fries`,
     },
     {
       name: 'SIDES',
       image: `$bg-sides`,
     },
     {
       name: 'DESSERTS',
       image: `$bg-desserts`,
     },
     {
       name: 'BEVERAGES',
       image: `$bg-beverages`,
     },
     {
       name: 'SPECIALS',
       image: `$bg-specials`,
     },

   ]
 }
});
Vue.config.devtools = true
