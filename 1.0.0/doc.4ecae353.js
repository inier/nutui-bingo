import{e as t,o as d,y as e}from"./vendor.da7cad2a.js";const r={class:"markdown-body"},a=[e('<h1>Luckrain 组件</h1><h3>介绍</h3><p>摇骰子</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &quot;vue&quot;;\nimport { shakeDice } from &quot;@nutui/nutui&quot;;\n\nconst app = createApp();\napp.use(shakeDice);\n</code></pre><h2>代码演示</h2><h3>基础用法</h3><pre><code class="language-html"> &lt;nut-bingo-luckdice ref=&quot;dice&quot;&gt;&lt;/nut-bingo-luckdice&gt;\n&lt;div @click=&quot;jump&quot; class=&quot;demoBtn&quot;&gt;摇动&lt;/div&gt;\n</code></pre><pre><code class="language-javascript">setup() {\n    const dice = ref();\n    const jump = () =&gt; {\n      dice.value.jump();\n    };\n    return {\n      jump,\n      dice,\n    };\n  },\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>time</td><td>旋转时间 ms</td><td>String</td><td>3000</td></tr><tr><td>speed</td><td>旋转速度 几秒一圈</td><td>Number</td><td>1</td></tr><tr><td>id</td><td>中奖的id(依据下标处理 0对应骰子1，依次类推)</td><td>Number</td><td>1</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>shake</td><td>骰子开始摇动</td><td>-</td></tr><tr><td>end</td><td>骰子摇动结束</td><td>-</td></tr></tbody></table>',14)],o={setup:e=>(e,o)=>(d(),t("div",r,a))};export{o as default};
