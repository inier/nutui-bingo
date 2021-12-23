import{e as t,o as n,y as o}from"./vendor.1904cf4f.js";const r={class:"markdown-body"},u=[o('<h1>LuckGiftbox 神秘大礼盒</h1><h3>介绍</h3><p>用于礼盒抽奖，可配置图片、开始结束回调等。</p><h3>安装</h3><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;;\n// vue\nimport { Luckgiftbox } from &#39;@nutui/nutui-bingo&#39;;\n// taro\nimport { Luckgiftbox } from &#39;@nutui/nutui-bingo-taro&#39;;\n\nconst app = createApp();\napp.use(Luckgiftbox);\n</code></pre><h2>代码示例</h2><h2>基本用法</h2><pre><code class="language-html">&lt;nut-bingo-Luckgiftbox\n  ref=&quot;refChild&quot;\n  @start-turns=&quot;startTurns&quot;\n  @end-turns=&quot;endTurns&quot;\n&gt;\n&lt;/nut-bingo-Luckgiftbox&gt;\n&lt;nut-button type=&quot;primary&quot; @click=&quot;initBox&quot;&gt;再来一次&lt;/nut-button&gt;\n</code></pre><pre><code class="language-javascript">export default {\n  setup() {\n    const refChild = ref();\n    const initBox = () =&gt; {\n      refChild.value.init();\n    }\n    const startTurns = () =&gt; {\n      console.log(&#39;开始&#39;);\n    }\n    const endTurns = () =&gt; {\n      console.log(&#39;结束&#39;);\n    }\n    return {\n      refChild,\n      initBox,\n      startTurns,\n      endTurns\n    };\n  }\n}\n</code></pre><h3>Events</h3><table><thead><tr><th>字段</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>init</td><td>礼盒初始化</td><td>-</td></tr><tr><td>start-turns</td><td>礼盒打开时候的回调函数</td><td>-</td></tr><tr><td>end-turns</td><td>礼盒打开后的回调函数</td><td>-</td></tr></tbody></table>',11)],e={setup:o=>(o,e)=>(n(),t("div",r,u))};export{e as default};
