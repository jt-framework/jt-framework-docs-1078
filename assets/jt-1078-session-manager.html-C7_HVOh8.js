import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-5LVKShiE.js";const p={},e=t(`<h1 id="jt1078sessionmanager" tabindex="-1"><a class="header-anchor" href="#jt1078sessionmanager"><span>Jt1078SessionManager</span></a></h1><p>通过 <code>Jt1078SessionManager</code> 可以管理和当前服务端连接的客户端会话信息。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Jt1078SessionManager</span> <span class="token punctuation">{</span>

    <span class="token class-name">Jt1078TerminalIdConverter</span> <span class="token function">terminalIdConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">AttributeKey</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token constant">ATTR_KEY_SESSION</span> <span class="token operator">=</span> <span class="token class-name">AttributeKey</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token string">&quot;jt1078.session&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Logger</span> <span class="token constant">LOGGER</span> <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">Jt1078SessionManager</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">findBySessionId</span><span class="token punctuation">(</span><span class="token class-name">String</span> sessionId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">findBySimAndChannel</span><span class="token punctuation">(</span><span class="token class-name">String</span> sim<span class="token punctuation">,</span> <span class="token keyword">short</span> channelNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findBySimAndChannel</span><span class="token punctuation">(</span>sim<span class="token punctuation">,</span> channelNumber<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">findBySimAndChannel</span><span class="token punctuation">(</span><span class="token class-name">String</span> sim<span class="token punctuation">,</span> <span class="token keyword">short</span> channelNumber<span class="token punctuation">,</span> <span class="token keyword">boolean</span> updateLastCommunicateTime<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">generateSessionId</span><span class="token punctuation">(</span><span class="token class-name">String</span> sim<span class="token punctuation">,</span> <span class="token keyword">short</span> channelNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sim <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> channelNumber<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">default</span> <span class="token class-name">Jt1078Session</span> <span class="token function">generateSession</span><span class="token punctuation">(</span><span class="token class-name">Jt1078Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Channel</span> channel<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">final</span> <span class="token class-name">String</span> sessionId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">generateSessionId</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">sim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">channelNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token class-name">DefaultJt1078Session</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">sessionId</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">sim</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">sim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">channelNumber</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">channelNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">lastCommunicateTimestamp</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Jt1078Session</span> <span class="token function">persistenceIfNecessary</span><span class="token punctuation">(</span><span class="token class-name">Jt1078Request</span> request<span class="token punctuation">,</span> <span class="token class-name">Channel</span> channel<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">persistence</span><span class="token punctuation">(</span><span class="token class-name">Jt1078Session</span> session<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">removeBySessionId</span><span class="token punctuation">(</span><span class="token class-name">String</span> sessionId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">removeBySimAndThenClose</span><span class="token punctuation">(</span><span class="token class-name">String</span> sim<span class="token punctuation">,</span> <span class="token class-name">Jt1078SessionCloseReason</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">removeBySessionIdAndThenClose</span><span class="token punctuation">(</span><span class="token class-name">String</span> sessionId<span class="token punctuation">,</span> <span class="token class-name">Jt1078SessionCloseReason</span> reason<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">removeBySimAndChannelAndThenClose</span><span class="token punctuation">(</span><span class="token class-name">String</span> sim<span class="token punctuation">,</span> <span class="token keyword">short</span> channelNumber<span class="token punctuation">,</span> <span class="token class-name">Jt1078SessionCloseReason</span> closeReason<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> optionalSession <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findBySimAndChannel</span><span class="token punctuation">(</span>sim<span class="token punctuation">,</span> channelNumber<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        optionalSession<span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>session <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">//</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeBySessionIdAndThenClose</span><span class="token punctuation">(</span>session<span class="token punctuation">.</span><span class="token function">sessionId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> closeReason<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> optionalSession<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Jt1078SessionManager</span> <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token class-name">Jt1078SessionEventListener</span> listener<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078SessionEventListener</span><span class="token punctuation">&gt;</span></span> <span class="token function">getListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Jt1078Session</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">long</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","jt-1078-session-manager.html.vue"]]);export{r as default};
