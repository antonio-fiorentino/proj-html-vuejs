var app = new Vue({
 el: '#root',
 data:{
   active: false,
   deactivate: true,
   active2: false,
   deactivate2: true,
   active3: false,
   deactivate3: true,
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

   ],
 },

 methods:{
   mouseOverFries: function(){
     this.active = !this.active;
     this.deactivate = !this.deactivate;
   },
   mouseOverFrappe: function(){
     this.active2 = !this.active2;
     this.deactivate2 = !this.deactivate2;
   },
   mouseOverDonut: function(){
     this.active3 = !this.active3;
     this.deactivate3 = !this.deactivate3;
   }

 }
});
Vue.config.devtools = true
