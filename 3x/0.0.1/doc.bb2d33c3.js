import{e as t,o as d,y as n}from"./vendor.1904cf4f.js";const e={class:"markdown-body"},o=[n('<h1>Temp Lucknine 九宫格翻牌抽奖</h1><h3>介绍</h3><p>用于翻牌抽奖场景</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\nimport { Lucknine } from &#39;@nutui/nutui&#39;;\n\nconst app = createApp();\napp.use(Lucknine);\n\n</code></pre><h2>代码演示</h2><h3>基础用法1</h3><p><code>Icon</code> 的 <code>name</code> 属性支持传入图标名称或图片链接。</p><pre><code class="language-html">&lt;nut-bingo-lucknine\n      :prize-list=&quot;dataArr&quot;\n      :prize-id=&quot;prizeId&quot;\n      :cardImg=&quot;cardImg&quot;\n      @click=&quot;click&quot;\n    &gt;\n&lt;/nut-bingo-lucknine&gt;\n</code></pre><pre><code class="language-javascript"> setup() {\n    const dataArr = reactive([\n      {\n        name: &quot;商品名称名称&quot;,\n        id:1,\n        pictureUrl:\n          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/174906/19/10256/188436/60a242afE89a800c9/801b64e5b80fde9a.jpg!q70.jpg&quot;,\n      },\n      {\n       name: &quot;没有中奖哦&quot;,\n        id:2,\n        pictureUrl:\n          &quot;https://img14.360buyimg.com/imagetools/jfs/t1/213369/13/5346/13899/619b60e5E2761162e/dca9b64e09bb2fed.png&quot;,\n      },\n      {\n        name: &quot;商品名称名称&quot;,\n        id:3,\n        pictureUrl:\n          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/17279/28/13940/140479/60b984f4E723b9981/d007711aa1cdc358.jpg!q70.jpg&quot;,\n      },\n      {\n        name: &quot;商品名称名称&quot;,\n        id:4,\n        pictureUrl:\n          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/190452/2/84/116077/608627ecEef11d11e/e0a93f09eca31ddf.jpg!q70.jpg&quot;,\n      },\n      {\n        name: &quot;商品名称名称&quot;,\n        id:5,\n        pictureUrl:\n          &quot;https://img10.360buyimg.com/n5/s54x54_jfs/t1/164065/10/8839/39628/603ee7edE9dee283f/e56acfa461919177.jpg&quot;,\n      },\n      {\n        name: &quot;祥禾饽饽铺京东自营旗舰店&quot;,\n        id:6,\n        pictureUrl:\n          &quot;//m.360buyimg.com/babel/s66x66_jfs/t1/195378/33/9432/145698/60d0400eE0520ca9f/2283995f6c6176e7.jpg!q50.jpg&quot;,\n      },\n      {\n        name: &quot;鲜花4+1束 鲜花速递 &quot;,\n        id:7,\n        pictureUrl:\n          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/185809/36/6800/181830/60b4fdaaEa74ddfdf/7f3776e9a493ec20.jpg!q70.jpg&quot;,\n      },\n      {\n        name: &quot;大连萨米托爱心樱桃&quot;,\n        id:8,\n        pictureUrl:\n          &quot;//m.360buyimg.com/babel/s180x180_jfs/t1/191656/26/7699/116921/60c1ed9eE933be59e/5c77c8eabda19d0d.jpg!q70.jpg&quot;,\n      },\n    ]);\n    const prizeId = ref();\n    const cardImg= ref(&#39;//img11.360buyimg.com/imagetools/jfs/t1/73511/35/17197/9388/613852cdE75dc6822/ddb31e0f3cfdcb81.png&#39;);\n    const click = () =&gt; {\n      prizeId.value=2\n    };\n    return {\n      dataArr,\n      prizeId,\n      cardImg,\n      click,\n    };\n  },\n</code></pre><h3>自定义开始游戏按钮</h3><p><code>Icon</code> 的 <code>name</code> 属性支持传入图标名称或图片链接。</p><pre><code class="language-html"> &lt;nut-bingo-lucknine\n      :data=&quot;dataArr&quot;\n      :prize-id=&quot;prizeId&quot;\n      :cardImg=&quot;cardImg&quot;\n      @click=&quot;click&quot;\n    &gt;\n     &lt;template #startBtn&gt;\n       &lt;div&gt;自定义&lt;/div&gt;\n     &lt;/template&gt;\n    &lt;/nut-bingo-lucknine&gt;\n</code></pre><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>prize-list</td><td>奖品列表</td><td>Array</td><td>[]</td></tr><tr><td>prize-id</td><td>中奖id</td><td>Number</td><td>5</td></tr><tr><td>card-img</td><td>卡牌背面图片</td><td>String</td><td>-</td></tr></tbody></table><h3>prize-list</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>奖品名称</td><td>String</td><td>-</td></tr><tr><td>id</td><td>奖品id</td><td>Number</td><td>-</td></tr><tr><td>pictureUrl</td><td>奖品图片</td><td>String</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td>用户翻牌时触发，此时可以更改中奖id</td><td>-</td></tr><tr><td>start</td><td>用户点击开始时触发</td><td>-</td></tr><tr><td>return</td><td>用户点击返回时触发</td><td>-</td></tr></tbody></table>',19)],r={setup:n=>(n,r)=>(d(),t("div",e,o))};export{r as default};
