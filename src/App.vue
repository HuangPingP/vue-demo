<template>
    <div id="app">
        <!-- 菜单视图 -->
        <!-- <header-view></header-view> -->
        <!-- 路由视图 -->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <controller></controller>
    </div>
</template>

<script>

import HeaderView from 'components/Header'
import Controller from 'components/Controller'
export default {
    name: 'share',
    components: {
        HeaderView,
        Controller
    },

}
</script>

<style>
html,body{
    height: 100%;
    font-family: "微软雅黑";
    /*background: url(http://res1.eqh5.com/o_1beermqetng27jr1ohe4mkoq99.gif?imageMogr2/auto-orient/thumbnail/347x564%3E);*/
}
*{
    margin: 0;
    box-sizing: border-box;
}
#app{
    height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.contnet{
    color: #333;
}
.content h3{
    font-size: 30px;
    line-height: 1.5;
}
.content h4{
    padding-top: 30px;
    font-size: 20px;
    line-height: 1.5;
    font-weight: normal;
}
.content p{
    font-size: 18px;
    line-height: 1.5;
    padding: 10px;
    text-indent: 2em;
    font-size: #666;
}

.content a{
    color: #099;
}

.content ul{
    list-style: none;
}

.content ul,
.content ol{
    padding: 20px 30px;
}

.content li{
    line-height: 1.5;
    padding: 5px 0;
}

</style>
