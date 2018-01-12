<template lang="html">
    <div class="smooth-view">
      <img class="myImg" src="../../assets/02.png" alt="">
        <h3>动画的性能优化</h3>
        <div class="smooth-wrapper">
            <!-- <div class="smooth-content" :class="{
                'active': $route.params.p == 1
            }">
                <h4>量化动画的流畅程度</h4>
                <p>
                    动画的实现原理，是利用了人眼的“视觉暂留”现象，在短时间内连续播放一系列静止的画面，是肉眼因视觉残像产生错觉，而误以为画面在“动”。
                </p>
            </div> -->
            <div class="smooth-content" :class="{
                'active': $route.params.p == 1
            }">
                <h4>动画相关的几个概念</h4>
                <p>
                    <strong>帧：</strong>在动画过程中，每一幅静止画面即为一：帧。
                </p>
                <p>
                    <strong>帧率：</strong>即每秒钟播放的静止画面的数量，单位是FPS。
                </p>
                <p>
                    <strong>帧时长：</strong>即每幅静止画面的停留时间，单位一般是ms（毫秒）。
                </p>
                <p>
                    <strong>跳帧：</strong>在帧率固定的动画中，某一帧的时长远高于平均时长，倒是其后续的数帧被挤压而丢失的现象。
                </p>
            </div>
            <div class="smooth-content" :class="{
                'active': $route.params.p == 2
            }">
                <h4>帧率能反应动画的流畅程度</h4>
                <p>
                    在网页中，帧率能够达到 50~60fps 的动画将会相当流畅，让人倍感舒适。
                </p>
                <p>
                    帧率在30~50fps 之间的动画，因各人敏感程度不同，舒适度因人而异。
                </p>
                <p>
                    帧率在30fps以下的动画，让人感觉到明显的卡顿课不适感。
                </p>
            </div>
            <!-- <div class="smooth-content" :class="{
                'active': $route.params.p == 4
            }">
                <h4>流畅的动画，具有的特点：</h4>
                <p>
                    帧率高（接近60fps最佳）
                </p>
                <p>
                    帧率稳定，波动少。
                </p>
            </div> -->
            <div class="smooth-content" :class="{
                'active': $route.params.p == 3
            }">
                <h4>浏览器渲染引擎基本工作流程</h4>
                <p>
                    <img src="http://cdn.w3cplus.com/cdn/farfuture/V06XqUU7X9ktub7WVkoVG6SKtXjv9-7wSZ39mTeD6AY/mtime:1453474039/sites/default/files/blogs/2016/1601/render-flow-abstract.png" alt="" />
                </p>
                <!-- <p>
                    由图可见，浏览器在加载页面过程中，会开始解析HTML构造DOM模型和解析CSS生成样式规则，而后构造渲染模型，进而排版/重排，绘图/重绘。
                </p>
                <p>
                    所以，通过修改HTML元素CSS样式实现的动画，每一次修改CS，渲染引擎就会进行CSS解析及其之后的流程。
                </p>
                <p>
                    但是，并不是每一次对CSS的修改都会触发重排和重绘。
                </p> -->
            </div>
            <div class="smooth-content" :class="{
                'active': $route.params.p == 4
            }">
                <p>
                    当你改变一个元素的时候，浏览器可能需要计算布局，而这个改变会造成其他元素的几何结构需要重新计算，甚至由于元素溢出和相互之间的影响，导致文档树的布局自下而上地被重新计算。 那么，文档树越大，计算布局花费的时间久越长。
                </p>
                <p>
                    如果动画的过程中每帧都会导致布局重新计算，那么帧时长往往会超过16ms,甚至超过很多，帧率无法保持在30fps以上，甚至出现跳帧情况，那么动画就会出现卡顿等现象，所以应该尽量避免对那些影响布局的属性设置动画
                </p>
            </div>
            <!-- <div class="smooth-content" :class="{
                'active': $route.params.p == 7
            }">
                <h4>哪些属性会影响布局？</h4>
                <p>
                    width、height、padding、margin、display、border-width、border、top、position、font-size、float、text-align、overflow、overflow-y、font-weight、let、font-family、line-height、vertical-align、right、clear、white-space、bottom、min-height 等。
                </p>
                <h3>
                    哪些属性会影响绘制？
                </h3>
                <p>
                    color、border-style、visibility、background、text-decoration、background-image、background-position、background-repeat、outline-color、outline、outline-style、border-radius、outline-width、box-shadow、background-size
                </p>
                <p>
                    如果对元素用以上属性设置动画，那么将会引起重绘，并且元素所属图层将交由GPU进行处理。这对于移动端设备的待嫁是非常昂贵的，移动端的GPU处理能力弱于桌面端，这意味着任务将用更长的时间来远程。
                </p>
            </div> -->
            <!-- <div class="smooth-content" :class="{
                'active': $route.params.p == 8
            }">
                <p>
                    那么，哪些CSS属性用于动画时，消耗成本较低呢？
                </p>
                <p>
                    1.<strong>opacity</strong> , 这个属性你可能会认为它会引起重排/重绘，但有时候并不会。 当GPU在合成元素的纹理结构的时候，会以一个较低的alpha值去处理 opacity 的改变。但它是有条件的，元素必须是图层中唯一的一个元素，如果它和其它元素组合使用，opacity 的改变也会让GPU淡化其它元素。
                </p>
                <p>
                    2. <strong>position</strong>，位置属性，实际上这里特指的是 tranform的 translate函数及其子函数。
                </p>
                <p>
                    3.<strong>scale</strong>, 缩放，也是 transform 的 scale函数
                </p>
                <p>
                    4.<strong>rotation</strong>，旋转，也是transform的rotate函数及其子函数。
                </p>
                <p>
                    Chrome、Firefox、Safari、Opera 都对 tranform 和 opacity 进行硬件加速。
                </p>
            </div> -->
            <!-- <div class="smooth-content" :class="{
                'active': $route.params.p == 9
            }">
                <h4>那么，一直所说的图层是什么鬼？</h4>
                <p>
                    层模型的概念，大家都懂。。。这里我就不再赘述。
                </p>
                <p>
                    事实上，在webkit内核的浏览器中，transition 或 animation 中有 opacity 的改变的元素，将会为期创建一个图层，或者 使用 translateZ(0) 或 translate3d(0,0,0)来强制创建一个图层。这样可以确保图层被绘制完毕并且可以在动画开始的时候，马上进入就绪状态。
                </p>
                <p>
                    为什么需要对动画元素进行创建图层呢？ 首先，绘制的过程，是针对于改变的元素的所在图层，也就是说，改变元素旁边的其他元素，也可能需要被重新绘制，那么浏览器计算的工作量就无形中变大了。通过对改变元素创建一个图层，使其脱离不需要发生改变的图层，可以有效的减少计算的工作量，而且由于反锯齿的改变，动画中将不会出现唐突的变化。
                </p>
                <p>
                    但是，任何的事情，都需要有一个度！我们需要有节制的创建图层，如果为了提升动画的性能，而过分的增加图层，反而不会提升动画性能，还有可能会导致闪烁，同时，也会增加应用的内存消耗。
                </p>
            </div> -->
            <div class="smooth-content" :class="{
                'active': $route.params.p == 5
            }">
                <h4>动画优化关键</h4>
                <p>
                    动画的优化，其实就是一个提高帧率，缩短帧时长，保证帧率稳定的过程，而这个过程，就是尽可能的减少浏览器在动画过程中的计算工作量，尽可能的将时间压缩在10-12ms之下。
                </p>
                <ul>
                    <li>1.避免频繁的重排。</li>
                    <li>2.避免大面积的重绘。</li>
                    <li>优化JS的运行性能。</li>
                    <li>避免在连续的动画过程中进行高消耗的操作。</li>
                </ul>
                <p>
                    具体到实际的场景中。
                </p>
                <ul>
                    <li>通过层的变化效果，实现位移、缩放等动画，避免重绘</li>
                    <li>合理划分层，动静分离，避免大面积重绘</li>
                    <li>图层分离，可以利用 position:relative;z-index:[Number];人为提升动画元素的层级，使浏览器明白元素的层排序，从而将原先层级较高的元素与改变元素从复合层中分离。</li>
                    <li>控制分层数量，留意内存消耗。</li>
                </ul>
            </div>
            <div class="smooth-content" :class="{
                'active': $route.params.p == 6
            }">
                <h4>如何让H5的动画，逼近甚至优于原生动画呢？</h4>
            </div>
            <div class="smooth-content" :class="{
                'active': $route.params.p == 7
            }">
                <h4>很简单啊，高端机，Android 7.0，完美自然的动画不是梦！</h4>
                <p class="text-center">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Smooth',
}
</script>

<style lang="css" scoped>
.smooth-view{
    width: 100%;
    height: 100%;
}
@keyframes myMo {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}
.myImg{
  position: absolute;
  right: 50px;
  bottom: 100px;
  z-index: 100;
  animation: myMo 1.5s linear 0.2s infinite normal both;
}
.smooth-view h3{
    font-size: 36px;
    margin: 10px 0;
}
.smooth-wrapper{
    position: relative;
    width: 80%;
    height: 70%;
    margin: 50px auto 0;
    padding: 30px;
    overflow: hidden;
}
.smooth-content{
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;

    background-color: #fff;
    opacity: 0;
    transition: all .6s ease;
}
.smooth-content.active{
    opacity: 1;
}
.smooth-content h4{
    font-size: 30px;
    padding: 10px 0;
}
.smooth-content p {
    padding: 5px 20px;
    line-height: 1.5;
    font-size: 20px;
}
.smooth-content li{
    font-size: 20px;
    padding: 5px;
}
img{
    max-width: 100%;
}
.text-center{
    text-align: center;
}
</style>
