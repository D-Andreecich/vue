var List = Vue.component('list',{
	template: '#product-list',
	data:function () {
		return {products: books};
	},
})

var books = [
{id: 1, name: 'Book1', description: 'Description of Book1', price : 100},
{id: 2, name: 'Book2', description: 'Description of Book2', price : 200},
{id: 3, name: 'Book3', description: 'Description of Book3', price : 300}
];

var Add_new = Vue.component('Add_new',{
template: '#Add_new_product',
})

/*var Book = Vue.component('Book',{
template: '#view-product',
})*/

var Edit = Vue.component('Edit',{
template: '#Edit_product',
})

var Delete = Vue.component('Delete',{
template: '#Delete_product_Book1',
})

var viewProduct = Vue.component('view-product',{
	template: '#view-product',
	data:function(){
		return {product: books[this.$route.params.product_id]};
	},
})

var editProduct = Vue.component('Edit_product',{
	template: '#Edit_product',
	data:function(){
		return {product: books[this.$route.params.product_id]};
	},
	methods: {
		update: function() {
			books[this.$route.params.product_id]={
				id: this.product.id+1,
				name: this. product. name,
				description: this.product.description,
				price: this.product.price
			}
		router.push('/list');
		}
	}
})

var router = new VueRouter({routes:[
	{ path: '/list', component: List },
	{ path: '/Add_new', component: Add_new },
	/*{ path: '/Book', component: Book },*/
	{ path: '/Edit', component: Edit },
	{ path: '/Delete', component: Delete },
	{ path:'/view/:product_id', component:viewProduct },
	{ path:'/edit/:product_id', component:editProduct },
]})


var vm = new Vue({
	el: '#app',
	router:router
})