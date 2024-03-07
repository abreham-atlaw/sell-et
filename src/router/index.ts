import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/apps/auth/presentation/views/LoginView.vue'
import SplashViewVue from '@/apps/core/presentation/views/SplashView.vue'
import SellerSignupView from '@/apps/auth/presentation/views/SellerSignupView.vue'
import SellerBaseViewVue from '@/apps/seller/presentation/views/SellerBaseViewVue.vue'
import PublishProductView from '@/apps/seller/presentation/views/PublishProductView.vue'
import CustomerSignupViewVue from '@/apps/auth/presentation/views/CustomerSignupViewVue.vue'
import HomeView from '@/apps/customer/presentation/views/HomeView.vue'
import ListProductsView from '@/apps/customer/presentation/views/ListProductsView.vue'
import OrderProductView from '@/apps/customer/presentation/views/OrderProductView.vue'
import OrderSuccessfullViewVue from '@/apps/customer/presentation/views/OrderSuccessfullViewVue.vue'
import LogoutViewVue from '@/apps/auth/presentation/views/LogoutViewVue.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "splash",
      component: SplashViewVue
    },
    {
      path: "/auth/login",
      name: "login",
      component: LoginViewVue
    },
    {
      path: "/auth/logout",
      name: "login",
      component: LogoutViewVue
    },
    {
      path: "/auth/signup/seller",
      name: "seller-signup",
      component: SellerSignupView
    },
    {
      path: "/auth/signup/customer",
      name: "customer-signup",
      component: CustomerSignupViewVue
    },
    {
      path: "/customer/home",
      name: "customer-home",
      component: HomeView
    },
    {
      path: "/customer/list",
      name: "list-products",
      component: ListProductsView
    },
    {
      path: "/customer/order/success",
      name: "order-success",
      component: OrderSuccessfullViewVue
    },
    {
      path: "/customer/order",
      name: "order-products",
      component: OrderProductView
    },
    {
      path: "/seller",
      name: "seller",
      component: SellerBaseViewVue,
      children: [
        {
          path: "publish",
          name: "Publish",
          component: PublishProductView
        }
      ]
    }
    // {
    //   path: "/admin",
    //   name: "admin",
    //   component: DashboardBaseViewVue,
    //   children: [
    //     {
    //       path: "dashboard",
    //       name: "Dashboard",
    //       component: DashboardViewVue
    //     },
    //     {
    //       path: "inventory/list",
    //       name: "List Inventory",
    //       component: ListInventoryViewVue
    //     },
    //     {
    //       path: "inventory/transact",
    //       name: "Trasact Inventory",
    //       component: TransactInventoryItemViewVue
    //     },
    //     {
    //       path: "inventory/edit",
    //       name: "Edit Inventory",
    //       component: EditInventoryItemViewVue
    //     },
    //     {
    //       path: "inventory/track",
    //       name: "Track Inventory",
    //       component: TrackInventoryItemViewVue
    //     },
    //     {
    //       path: "product/list",
    //       name: "List Product",
    //       component: ListProductViewVue
    //     },
    //     {
    //       path: "product/edit",
    //       name: "Edit Product",
    //       component: EditProductItemViewVue
    //     },
    //     {
    //       path: "product/track",
    //       name: "Track Product",
    //       component: TrackProductVIewVue
    //     },
    //     {
    //       path: "report",
    //       name: "Report",
    //       component: ReportViewVue
    //     }
    //   ]
    // },
    // {
    //   path: "/cashier",
    //   name: "cashier",
    //   component: CashierViewVue,
    //   children: [
    //     {
    //       path: "sell",
    //       name: "Sell",
    //       component: SellViewVue
    //     },
    //     {
    //       path: "produce",
    //       name: "Produce",
    //       component: ProduceViewVue
    //     }
    //   ]
    // }
  ]
})

export default router
