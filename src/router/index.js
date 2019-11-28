import Vue from 'vue'
import Router from 'vue-router'
import "@/assets/css/reset.css"
import "@/assets/css/header.css"

Vue.use(Router)
import Shop from "@/views/shop"
import Item from "@/views/item"
import Cart from "@/views/cart"
import CheckOut from "@/views/checkout"
import Payment from "@/views/payment"
import Account from "@/views/Account"
import Order from "@/views/account/order"


export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: 'Shop',
      component: Shop
    },
    {
      path: "/item",
      name: 'Item',
      component: Item
    },
    {
      path: "/cart",
      name: 'Cart',
      component: Cart
    },
    {
      path: "/checkout",
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: "/payment",
      name: 'Payment',
      component: Payment
    },
    {
      path: "/account",
      component: Account,
      children: [{
        path: "",
        name: 'Account',
        component: Order,
      }]
    }
  ]
})
