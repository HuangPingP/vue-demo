<template lang="html">
    <div class="basis-view">
      <!-- <img class='my' src="../../assets/77.png" alt=""> -->
        <div class="basis-wrapper" :style="{
            'transform': 'rotateY(-' + ($route.params.p - 1) * 120 +'deg)'
            }">
            <div class="basis-content">
                <h3>什么是动画 ？</h3>
                <p>
                    动画是通过连续的播放一系列画面，给视觉造成连续变化的图画集合。
                </p>
            </div>
            <div class="basis-content">
                <h3>动画原理</h3>
                <p>
                    人类具有“视觉暂留”的特性，就是说人的眼睛看到一幅画或一个物体之后，在 <span>1/24秒</span> 内不会消失。 利用这个原理，在一幅画还未消失前播放下一幅画面，就会给人造成一种流畅的视觉效果。
                </p>
            </div>
            <div class="basis-content">
                <h3>动画实现方式</h3>
                <p>
                    以电脑技术而言，动画的实现方式，主要分为两种，一是逐帧动画，二是补间动画。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'basis',
}
</script>

<style lang="css" scoped>
.basis-view{
    width: 100%;
    height: 100%;
    background: url('../../assets/11.gif');
    display: flex;;
    justify-content: center;
    align-items: center;
}
@keyframes myMove
{
from {
  transform: translate(0) scale(0)
}
to {
  transform: translate(300px, 200px) scale(1)
}
}
.my{
  position: absolute;
  left: 20px;
  top: 100px;
  animation: myMove 3.2s linear 0.2s infinite normal both;
}
.basis-wrapper{
    width: 400px;
    height: 250px;
    position: relative;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform-style: preserve-3d;
    transform-origin: center center;
    transition: all .5s ease-out;
}
.basis-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    color: #fff;
    backface-visibility: hidden;
}
.basis-content:nth-of-type(1){
    transform: translateZ(115px);
    z-index: 3;
}
.basis-content:nth-of-type(2){
    transform: translateZ(115px)  rotateY(120deg);
    z-index: 2;
}
.basis-content:nth-of-type(3){
    transform: translateZ(115px)  rotateY(240deg);
    z-index: 1;
}
.basis-content h3{
    text-align: center;
    font-size: 40px;
}
.basis-content p{
    font-size: 20px;
    padding-top: 20px;
    line-height: 30px;
    text-indent: 2em;
}
.basis-content p span{
    color: #088;
    font-weight: bold;
}
</style>
