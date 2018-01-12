<template lang="html">
    <div class="pause-view">
        <div class="pause-wrapper">
            <div class="pause-content" :class="{'active': $route.params.p == 0}">
                <h3>以上就是关于动画基础的全部内容了！</h3>
                <h3>谢谢大家！</h3>
            </div>
            <div class="pause-content" :class="{'active': $route.params.p == 1}">
                <h3>但是！</h3>
            </div>
            <div class="pause-content" :class="{'active': $route.params.p == 2}">
                <h3>我的分享还没有结束！</h3>
                <h4>下面进入下一个课题！</h4>
            </div>
            <div class="pause-content" :class="{'active': $route.params.p == 3}">
                <h3>如何做好动画？</h3>
                <h4>自然？</h4>
                <h4>流畅？</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pause'
}
</script>

<style lang="css" scoped>
.pause-view{
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/pp.gif');
}
.pause-wrapper{
    width: 100%;
    /*height: 400px;*/
    position: relative;
}
.pause-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 100;*/
    /*background-color: #fff;*/
    opacity: 0;
    text-align: center;
    color: #099;
    transition: all .6s;
}
.pause-content.active{
    opacity: 1;
}
.pause-content h3{
    font-size: 36px;
    margin: 10px 0;
}
.pause-content h4{
    font-size: 30px;
    margin: 10px 0;
}
</style>
