import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as n}from"./app-5LVKShiE.js";const c={},t=n(`<h1 id="编码解码相关" tabindex="-1"><a class="header-anchor" href="#编码解码相关"><span>编码解码相关</span></a></h1><h2 id="jt808msgdecoder" tabindex="-1"><a class="header-anchor" href="#jt808msgdecoder"><span>Jt808MsgDecoder</span></a></h2><p><code>Jt1078MsgDecoder</code> 负责将请求中的 <strong>字节流</strong> 初步解析为 <code>Jt1078Request</code> 对象。</p><p>如果内置的实现不符合要求 或者 内置实现返回的 <code>Jt1078Request</code> 不符合要求，你可以自定义一个解码器。</p><p>声明一个 <code>Jt1078MsgDecoder</code> 类型的 <code>Bean</code> 就可以替换内置实现。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt1078MsgDecoder</span> <span class="token punctuation">{</span>

    <span class="token class-name">Jt1078Request</span> <span class="token function">decode</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> byteBuf<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function d(i,p){return s(),a("div",null,o)}const u=e(c,[["render",d],["__file","codec-config.html.vue"]]);export{u as default};
