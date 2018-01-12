<template>
    <div class="menu-view">
        <dl v-for="menu in menuList">
            <router-link
                tag="dt"
                :to="root + '/' + menu.path"
                exact
            >
                {{menu.title}}
            </router-link>
            <router-link
                v-for="child in menu.children"
                tag="dd"
                :to="root + '/' + menu.path + '/'+ child.path"
                exact
            >
                {{child.title}}
            </router-link>
        </dl>
    </div>
</template>
<script>
export default {
    props: {
        menuList: Array,
        root: String,
    }
}
</script>
<style>
.menu-view{
    width: 200px;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    border-right: solid 1px #ccc;
}
.menu-view dl dt{
    line-height: 40px;
    padding-left: 10px;
    font-size: 16px;
}
.menu-view dl dd{
    line-height: 40px;
    padding-left: 40px;
    font-size: 14px;
}
.menu-view dl dt.router-link-active,
.menu-view dl dd.router-link-active{
    color: #099;
}
</style>
