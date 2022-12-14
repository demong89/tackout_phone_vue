import App from '../App'
import {createRouter, createWebHistory} from 'vue-router'

import home from '../page/home/home'
import city from '../page/city/city'
import msite from '../page/msite/msite'
import search from '../page/search/search'
import shop from '../page/shop/shop'
import login from '../page/login/login'
import profile from '../page/profile/profile'
import forget from '../page/forget/forget'

import order from '../page/order/order'
import orderDetail from '../page/order/children/orderDetail'
import vipcard from '../page/vipcard/vipcard'
import invoiceRecord from '../page/vipcard/children/invoiceRecord'
import useCart from '../page/vipcard/children/useCart'
import vipDescription  from  '../page/vipcard/children/vipDescription'  
import food  from  '../page/food/food'  
import confirmOrder  from  '../page/confirmOrder/confirmOrder'  
import remark  from  '../page/confirmOrder/children/remark'  
import payment  from  '../page/confirmOrder/children/payment'   
import userValidation  from  '../page/confirmOrder/children/userValidation'  
import invoice  from  '../page/confirmOrder/children/invoice' 
import chooseAddress  from  '../page/confirmOrder/children/chooseAddress' 
import addAddress  from  '../page/confirmOrder/children/children/addAddress'  
import searchAddress  from  '../page/confirmOrder/children/children/children/searchAddress'  
import foodDetail  from  '../page/shop/children/foodDetail'   
import shopDetail  from  '../page/shop/children/shopDetail'  
import shopSafe  from  '../page/shop/children/children/shopSafe'   
import info  from  '../page/profile/children/info'  
import setusername  from  '../page/profile/children/children/setusername'   
import address  from  '../page/profile/children/children/address'   
import add  from  '../page/profile/children/children/children/add'   
import addDetail  from  '../page/profile/children/children/children/children/addDetail'   
import balance  from  '../page/balance/balance'   
import balanceDetail  from  '../page/balance/children/detail'   
import benefit  from  '../page/benefit/benefit'   
import coupon  from  '../page/benefit/children/coupon'   
import hbDescription  from  '../page/benefit/children/hbDescription'   
import hbHistory  from  '../page/benefit/children/hbHistory'   
import exchange  from  '../page/benefit/children/exchange'   
import commend  from  '../page/benefit/children/commend'   
import points  from  '../page/points/points'  
import pointsDetail  from  '../page/points/children/detail'   
import service  from  '../page/service/service'  
import questionDetail  from  '../page/service/children/questionDetail'  
import find  from  '../page/find/find'  
import download  from  '../page/download/download'  




const routes = [{
    path: '/',
    component: App, //?????????????????????index.html
    children: [ //?????????????????????App.vue
        //?????????????????????home??????
        {
            path: '',
            redirect: '/home'
        },
        //?????????????????????
        {
            path: '/home',
            component: home
        },
        //?????????????????????
        {
            path: '/city/:cityid',
            component: city
        },
        //?????????????????????
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        //?????????????????????
        {
            path: '/food',
            component: food
        },
        //?????????
        {
            path: '/search/:geohash',
            component: search
        },
        //???????????????
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //???????????????
                component: foodDetail,
            }, {
                path: 'shopDetail', //???????????????
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //?????????????????????
                    component: shopSafe,
                }, ]
            }]
        },
        //???????????????
        {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [{
                path: 'remark', //????????????
                component: remark,
            }, {
                path: 'invoice', //????????????
                component: invoice,
            }, {
                path: 'payment', //????????????
                component: payment,
            }, {
                path: 'userValidation', //????????????
                component: userValidation,
            }, {
                path: 'chooseAddress', //????????????
                component: chooseAddress,
                children: [{
                    path: 'addAddress', //????????????
                    component: addAddress,
                    children: [{
                        path: 'searchAddress', //????????????
                        component: searchAddress,
                    }]
                }, ]
            }, ]
        },
        //???????????????
        {
            path: '/login',
            component: login
        },
        //???????????????
        {
            path: '/profile',
            component: profile,
            children: [{
                path: 'info', //?????????????????????
                component: info,
                children: [{
                    path: 'setusername',
                    component: setusername,
                },{
                    path: 'address',
                    component: address,     //????????????
                    children:[{
                        path:'add',
                        component:add,
                        children:[{
                            path:'addDetail',
                            component:addDetail
                        }]
                    }]
                }]
            },
            {
                path: 'service', //????????????
                component: service,
            },]
        },
        //???????????????
        {
            path: '/forget',
            component: forget
        },
        //???????????????
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //???????????????
                component: orderDetail,
            }, ]
        },
        //vip??????
        {
            path: '/vipcard',
            component: vipcard,
            children: [{
                path: 'invoiceRecord', //?????????
                component: invoiceRecord,
            }, {
                path: 'useCart', //???????????????
                component: useCart,
            }, {
                path: 'vipDescription', //????????????
                component: vipDescription,
            },]
        },
        //?????????
        {
            path: '/find',
            component: find
        },
        //?????????
        {
            path: '/download',
            component: download
        },
        //????????????
        {
            path: '/service',
            component: service,
             children: [{
                path: 'questionDetail', //???????????????
                component: questionDetail,
            }, ]
        },
        //??????
        {
            path: 'balance',
            component: balance,
            children: [{
                path: 'detail', //????????????
                component: balanceDetail,
            }, ]
        },
        //???????????????
        {
            path: 'benefit',
            component: benefit,
            children: [{
                path: 'coupon', //???????????????
                component: coupon,
            }, {
                path: 'hbDescription', //????????????
                component: hbDescription,
            }, {
                path: 'hbHistory', //????????????
                component: hbHistory,
            }, {
                path: 'exchange', //????????????
                component: exchange,
            }, {
                path: 'commend', //????????????
                component: commend,
            },]
        },
        //???????????????
        {
            path: 'points',
            component: points,
            children: [{
                path: 'detail', //????????????
                component: pointsDetail,
            }, ]
        },
    ]
}]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})
export default router
