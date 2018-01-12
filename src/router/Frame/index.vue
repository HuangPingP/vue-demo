<template>
    <div class="frame-view">
        <div class="frame-wrapper"
        :style="{
            'transform': 'translateY(-'+$route.params.p * 100+'%)'
        }">
        <img class='myLOve' src="../../assets/33.png" alt="">
            <div class="frame-content">
                <h3>逐帧动画</h3>
                <p>
                    在连续的“关键帧”中分解动作，也就是在时间轴的每一帧上逐帧绘制不同的内容，使其连续播放而成动画。
                </p>
                <p>
                    前端如何实现逐帧动画？
                </p>
            </div>
            <div class="frame-content">
                <h3>通过CSS实现逐帧动画</h3>
                <p>
                    <span class="code">animation: steps()</span>。 steps 能够指定一个阶跃函数，第一个参数指定了时间函数中的数量，第二个参数可选，接受start 和 end 两个值，指定在每个间隔的起点或是重点发生阶跃变化，默认为end。
                </p>
            </div>
            <div class="frame-content">
              <h3>通过JS实现逐帧动画</h3>
              <p>
                  原理还是以实现图片切换的方式连续播放图片而呈现动画。
              </p>
              <iframe height='265' scrolling='no' title='动画' src='//codepen.io/doubleWong/embed/preview/MvmwLa/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/doubleWong/pen/MvmwLa/'>动画</a> by 公子岳 (<a href='https://codepen.io/doubleWong'>@doubleWong</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
            <div class="frame-content">
              <h3>我们来分解一下动作，看看背后的变化</h3>
      				<iframe height='265' scrolling='no' title='NvjGwG' src='//codepen.io/doubleWong/embed/preview/NvjGwG/?height=265&theme-id=light&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/doubleWong/pen/NvjGwG/'>NvjGwG</a> by 公子岳 (<a href='https://codepen.io/doubleWong'>@doubleWong</a>) on <a href='https://codepen.io'>CodePen</a>.
              </iframe>
            </div>
            <div class="frame-content">
              <h3>总结</h3>
              <p>
                  优势：逐帧动画由于是使用连续的播放图片而形成动画，所以几乎能表现任何形式的动画，灵活多变。
              </p>
              <p>
                  劣势：但同样的，由于是使用一系列图片形成动画，一方面需要绘制大量的图片，大量消耗时间和人力，同时，图片的数量也增加了请求流量的开销。
              </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Frame',

}
</script>

<style lang="css" scoped>
.frame-view{
    width: 100%;
    height: 100%;
    background: url('../../assets/10.gif');
    color: #333;
    overflow: hidden;
}
@keyframes frMove
{
from {transform: scale(0)}
to {transform: scale(1)}
}
.myLOve{
  position: absolute;
  top: 300px;
  left:300px;
  animation: frMove 3.2s linear 0.2s infinite normal both;
}
.frame-wrapper {
    width: 100%;
    height: 100%;
    transform: translateY(0);
    transition: all .5s cubic-bezier(0.18, 0.89, 0.43, 1.15);
}
.frame-content{
    width: 100%;
    height: 100%;
    color: #FFF;
}
.frame-content h3{
    font-size: 40px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
}
.frame-content p{
    text-indent: 2em;
    font-size: 24px;
    padding: 10px;
    text-align: center;

}
.frame-content iframe{
    /*margin-top: 30px;*/
}
.code{
    color: #ccc;
    /*background-color: #333;*/
    padding: 0 4px;
}
</style>
