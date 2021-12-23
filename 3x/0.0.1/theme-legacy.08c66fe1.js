System.register(["./vendor-legacy.97cc0974.js"],(function(s){"use strict";var t,e,o;return{setters:[function(s){t=s.e,e=s.o,o=s.y}],execute:function(){const n={class:"markdown-body"},a=[o('<h1>主题定制</h1><p>NutUI 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。</p><br><img src="https://img12.360buyimg.com/imagetools/jfs/t1/157759/16/13989/142151/6052efc7Ef8f4bff4/f3dd6422949ba4b7.jpg" width="700" alt="NutUI 主题定制"><h2>样式变量</h2><p>NutUI 的样式是基于 <strong><a href="https://sass-lang.com/">SCSS</a></strong> 开发的，定义了一套默认样式变量，定制主题就是编辑这个变量列表。</p><blockquote><p>现阶段需要开发者手动配置，可视化生成配置目前正在开发中。</p></blockquote><p>以下是一些与颜色相关基本样式变量，所有可用的变量请参考<a href="https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss">配置文件 variables.scss</a>。</p><pre><code class="language-scss">// 主色调\n$primary-color: #fa2c19;\n$primary-color-end: #fa6419;\n...\n</code></pre><blockquote><p>在主题定制场景下，项目中引用组件时，需要引入 <strong>SCSS</strong> 文件，而不是 <strong>CSS</strong> 文件。</p></blockquote><p>需要引入 <strong>nutui.scss</strong> 文件</p><pre><code class="language-javascript">import NutUI from &#39;@nutui/nutui&#39;;\nimport &quot;@nutui/nutui/dist/styles/themes/default.scss&quot;;\n</code></pre><h2>定制主题</h2><h3>第一步：新建自定义变量 SCSS 文件</h3><p>在本地项目中新建一个 <strong>SCSS</strong> 文件 <code>custom_theme.scss</code>，自定义变量值。</p><pre><code class="language-scss">$primary-color: #478EF2;\n$primary-color-end: #496AF2;\n</code></pre><h3>第二步：修改本地项目 webpack 或者 vite 的配置文件</h3><p>修改 vite 或者 webpack 配置文件中 <strong>sass-loader</strong> 的配置。如下示例</p><h4>vite 演示</h4><pre><code class="language-javascript">// https://vitejs.dev/config/\nexport default defineConfig({\n  //...\n  css: {\n    preprocessorOptions: {\n      scss: {\n        additionalData: `@import &quot;./assets/custom_theme.scss&quot;;`\n      }\n    }\n  }\n})\n</code></pre><h4>vue/cli 2版本</h4><pre><code class="language-javascript">{\n    test: /\\.(sa|sc)ss$/,\n    use: [\n        {\n            loader: &#39;sass-loader&#39;,\n            options: {\n                data: `@import &quot;./assets/custom_theme.scss&quot;;`,\n            }\n        }\n    ]\n}\n</code></pre><h4>vue/cli 3 以上版本修改 <strong>vue.config.js</strong> 进行配置</h4><pre><code class="language-javascript">module.exports = {\n    css: {\n        loaderOptions: {\n            // 给 sass-loader 传递选项\n            scss: {\n                // @/ 是 src/ 的别名\n                // 注意：在 sass-loader v7 中，这个选项名是 &quot;data&quot;\n                prependData: `@import &quot;@/assets/custom_theme.scss&quot;;`,\n            }\n        },\n    }\n}\n</code></pre><blockquote><p>@nutui/nutui 多种模式（vite 、vue/cli、cdn、ts）使用示例 <a href="https://github.com/jdf2e/nutui-demo">Demo</a></p></blockquote>',25)];s("default",{setup:s=>(s,o)=>(e(),t("div",n,a))})}}}));
