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
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //所有商铺列表页
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        //特色商铺列表页
        {
            path: '/food',
            component: food
        },
        //搜索页
        {
            path: '/search/:geohash',
            component: search
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //食品详情页
                component: foodDetail,
            }, {
                path: 'shopDetail', //商铺详情页
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //商铺安全认证页
                    component: shopSafe,
                }, ]
            }]
        },
        //确认订单页
        {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [{
                path: 'remark', //订单备注
                component: remark,
            }, {
                path: 'invoice', //发票抬头
                component: invoice,
            }, {
                path: 'payment', //付款页面
                component: payment,
            }, {
                path: 'userValidation', //用户验证
                component: userValidation,
            }, {
                path: 'chooseAddress', //选择地址
                component: chooseAddress,
                children: [{
                    path: 'addAddress', //添加地址
                    component: addAddress,
                    children: [{
                        path: 'searchAddress', //搜索地址
                        component: searchAddress,
                    }]
                }, ]
            }, ]
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
        //个人信息页
        {
            path: '/profile',
            component: profile,
            children: [{
                path: 'info', //个人信息详情页
                component: info,
                children: [{
                    path: 'setusername',
                    component: setusername,
                },{
                    path: 'address',
                    component: address,     //编辑地址
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
                path: 'service', //服务中心
                component: service,
            },]
        },
        //修改密码页
        {
            path: '/forget',
            component: forget
        },
        //订单列表页
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }, ]
        },
        //vip卡页
        {
            path: '/vipcard',
            component: vipcard,
            children: [{
                path: 'invoiceRecord', //开发票
                component: invoiceRecord,
            }, {
                path: 'useCart', //购买会员卡
                component: useCart,
            }, {
                path: 'vipDescription', //会员说明
                component: vipDescription,
            },]
        },
        //发现页
        {
            path: '/find',
            component: find
        },
        //下载页
        {
            path: '/download',
            component: download
        },
        //服务中心
        {
            path: '/service',
            component: service,
             children: [{
                path: 'questionDetail', //订单详情页
                component: questionDetail,
            }, ]
        },
        //余额
        {
            path: 'balance',
            component: balance,
            children: [{
                path: 'detail', //余额说明
                component: balanceDetail,
            }, ]
        },
        //我的优惠页
        {
            path: 'benefit',
            component: benefit,
            children: [{
                path: 'coupon', //代金券说明
                component: coupon,
            }, {
                path: 'hbDescription', //红包说明
                component: hbDescription,
            }, {
                path: 'hbHistory', //历史红包
                component: hbHistory,
            }, {
                path: 'exchange', //兑换红包
                component: exchange,
            }, {
                path: 'commend', //推荐有奖
                component: commend,
            },]
        },
        //我的积分页
        {
            path: 'points',
            component: points,
            children: [{
                path: 'detail', //积分说明
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
