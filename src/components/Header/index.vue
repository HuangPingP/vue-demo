<template lang="html">
    <header class="header">
        <nav>
            <ul>
                <router-link
                    tag="li"
                    v-for="menu in menuList"
                    :to="menu.to"
                    :exact="menu.exact"
                >
                    {{menu.title}}
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'headerView',
    data () {
        return {
            menuList: [
                {
                    title: '首页',
                    to: '/',
                    exact: true,
                },
                {
                    title: '动画',
                    to: '/animate',
                    exact: false
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
body{
    /*padding-top: 60px;*/
}
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
    display: flex;
    align-items: center;
}
.header ul{
    display: flex;
    align-items: center;
    list-style: none;
}
.header ul li{
    padding: 0px 20px;
    height: 60px;
    color: #ccc;
    font-size: 20px;
    line-height: 60px;
    transition: all .1s;
    cursor: pointer;
}
.header ul li.router-link-active{
    color: #ee61a5;
    height: 63px;
}
</style>
