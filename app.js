const laptop=document.querySelector('#laptop'),toggle=document.querySelector('#laptop-toggle'),profile=document.querySelector('#profile');
function setOpen(open){laptop.classList.toggle('is-open',open);profile.hidden=!open;toggle.setAttribute('aria-expanded',String(open));if(open)document.querySelector('#close-laptop').focus({preventScroll:true});else toggle.focus({preventScroll:true})}
toggle.addEventListener('click',()=>setOpen(true));document.querySelector('#close-laptop').addEventListener('click',()=>setOpen(false));
const ids=['ruc','franke','alinamin','ai'];
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function copy(c){return `<div class="case-copy"><h3>背景与挑战</h3><p>${c.bg}</p><h3>策略与解决方案</h3><p>${c.strategy}</p><h3>个人核心贡献</h3><p>${c.role}</p><h3>项目成果</h3><p>${c.result}</p></div>`}
function media(labels){return `<div class="case-media">${labels.map(l=>`<div class="media-placeholder">${l}<br>素材待补充</div>`).join('')}</div>`}
const stats=[['140万+|年度曝光','26万+|总点击量','9.67%|互动率','43.89%|留资转化率'],['145.3万|Q3 整体曝光','3篇|10万+曝光笔记','6.15%|水槽功能类封面点击率'],['+1121%|AIPS 渗透增长','＜16|CPUV'],['已商业化|参与共创工具正式推出','约67%|月度内容产出量增长','0→1|无实拍条件下视频生产']];
const mediaLabels=[['反向留学代表笔记','申请 FAQ / 校友活动截图'],['Box Pro 产品图与三层功能区','客户采纳 / KFS / 达人传播证据'],['产品与官号笔记','达人内容示例']];
document.querySelector('#case-pages').innerHTML=ids.map((id,i)=>{let c=cases[i],isAI=i===3;return `<section id="${id}" class="page case-page"><div class="section-label">0${i+3} / PROJECT 0${i+1}</div><div class="case-heading"><p class="case-sub">${isAI?'AI 产品共创 / 内容工作流 / 视频探索':c.sub}</p><h2>${isAI?'AI 相关：从业务经验到流程创新':c.brand+'<br>'+c.title}</h2></div><div class="result-strip">${stats[i].map(s=>{let [n,l]=s.split('|');return `<div><strong>${n}</strong><span>${l}</span></div>`}).join('')}</div>${isAI?`<div class="ai-part"><h3>A / 小红书 AI 营销工具共创</h3><div class="case-layout">${copy(cases[3])}${media(['产品界面 / 六步能力链路','业务 SOP / 测试与调优记录'])}</div></div><div class="ai-part"><h3>B / AI 工作流提效与视频探索</h3><div class="case-layout">${copy(cases[4])}${media(['AI 辅助内容工作流','▷ AI 视频与成片 · 客户认可，尚未公开发布'])}</div></div>`:`<div class="case-layout">${copy(c)}${media(mediaLabels[i])}</div><p class="case-note">数据与归属说明：${c.note}</p>`}<div class="case-nav"><a href="#projects">↑ 返回项目总览</a><a href="#${ids[i+1]||'personal'}">${i===3?'个人作品':'下一个项目'} ↓</a></div></section>`}).join('');
// Homepage: native UI artwork; real portfolio images remain clearly marked placeholders.
const hero=document.querySelector('.hero');
const chrome='<div class="window-top"><i></i><i></i><i></i></div>';
const scene=(cls,html)=>`<div class="scene-item ${cls}" aria-hidden="true"><div class="float-inner">${html}</div></div>`;
hero.insertAdjacentHTML('beforeend',scene('scene-browser',`<div class="window">${chrome}<div class="window-body"><div><div class="skeleton-avatar"></div><div class="skeleton-line"></div><div class="skeleton-line short"></div></div><div class="skeleton-grid"><i></i><i></i><i></i><i></i></div></div></div>`)+scene('scene-list',`<div class="window">${chrome}<div class="list-lines"><span></span><span></span><span></span><span></span></div></div>`)+scene('scene-code',`<div class="window">${chrome}<pre>&lt;idea&gt;消费者洞察&lt;/idea&gt;\n&lt;strategy&gt;品牌内容&lt;/strategy&gt;\n&lt;create&gt;让想法发生&lt;/create&gt;\n&lt;impact&gt;持续生长&lt;/impact&gt;</pre></div>`)+scene('scene-tool1','<div class="tool-tile" style="color:#1687c9">⌘</div>')+scene('scene-tool2','<div class="tool-tile"><div class="figma-mark"><i></i><i></i><i></i><i></i><i></i></div></div>')+scene('scene-tool3','<div class="tool-tile"><span class="tool-letter">N</span></div>')+scene('scene-tool4','<div class="tool-tile"><span class="tool-orb">↗</span></div>')+scene('scene-toggle','<div class="ai-toggle">AI Mode <span class="switch"></span></div>')+scene('scene-notification','<div class="notification"><span class="tool-orb">↗</span><div><strong>若凌</strong><small>刚刚</small><p>让好想法，成为品牌的下一步。</p></div></div>')+scene('scene-notification2','<div class="notification"><span class="tool-orb">↗</span><div><strong>灵感已上线</strong><small>刚刚</small><p>洞察 × 内容 × 创造力</p></div></div>')+scene('scene-photo','<div class="photo-frame"><div class="photo-placeholder">作品图片待替换</div></div>')+scene('scene-device','<div class="device"><div class="device-screen"><div class="photo-placeholder">视觉作品待替换</div></div><div class="device-base"></div></div>')+scene('scene-phone','<div class="phone"><div class="photo-placeholder">作品图<br>待替换</div></div>')+'<div class="selection-box" aria-hidden="true"><i></i><i></i><i></i><i></i></div>'+['内容策略','创意策划','品牌营销','AI 探索'].map((x,i)=>`<div class="collab collab${i+1}" aria-hidden="true"><svg viewBox="0 0 24 30"><path d="M3 2L21 16L12 17L8 26Z"/></svg><span>${x}</span></div>`).join(''));
// Independent, bounded cursor wandering. No pointer tracking.
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const walkers=[...hero.querySelectorAll('.collab')].map((el,i)=>({el,x:0,y:0,fromX:0,fromY:0,toX:0,toY:0,start:0,duration:0,seed:i}));
let cursorFrame=0,heroVisible=true;
function chooseTarget(w,now){
 const width=hero.clientWidth,height=hero.clientHeight;
 const maxX=Math.max(12,width-w.el.offsetWidth-16),maxY=Math.max(12,height-w.el.offsetHeight-30);
 let x=16+Math.random()*Math.max(0,maxX-16),y=20+Math.random()*Math.max(0,maxY-20);
 // Keep the title and name band clear; roam through upper and lower areas.
 const bandTop=height*.39,bandBottom=height*.72;
 if(y+w.el.offsetHeight>bandTop&&y<bandBottom)y=Math.random()<.5?Math.max(20,bandTop-w.el.offsetHeight-12):Math.min(maxY,bandBottom+12);
 w.fromX=w.x;w.fromY=w.y;w.toX=x;w.toY=y;w.start=now;w.duration=3800+Math.random()*4200;
}
function resetWalkers(){const now=performance.now();walkers.forEach((w,i)=>{w.x=hero.clientWidth*([.32,.4,.78,.55][i]);w.y=hero.clientHeight*([.08,.25,.76,.82][i]);chooseTarget(w,now);w.el.style.transform=`translate(${w.x}px,${w.y}px)`})}
function animateCursors(now){cursorFrame=0;if(reduceMotion.matches||!heroVisible||document.hidden)return;
 walkers.forEach(w=>{let t=Math.min(1,(now-w.start)/w.duration),ease=t*t*(3-2*t);w.x=w.fromX+(w.toX-w.fromX)*ease;w.y=w.fromY+(w.toY-w.fromY)*ease;w.el.style.transform=`translate(${w.x}px,${w.y}px)`;if(t===1)chooseTarget(w,now)});
 cursorFrame=requestAnimationFrame(animateCursors);
}
function resumeCursors(){if(!cursorFrame&&!reduceMotion.matches&&heroVisible&&!document.hidden)cursorFrame=requestAnimationFrame(animateCursors)}
resetWalkers();new IntersectionObserver(entries=>{heroVisible=entries[0].isIntersecting;resumeCursors()}).observe(hero);
window.addEventListener('resize',()=>{resetWalkers();resumeCursors()});document.addEventListener('visibilitychange',resumeCursors);reduceMotion.addEventListener('change',resumeCursors);resumeCursors();
// Decorative cards respond to the pointer; collaborator cursors keep wandering independently.
let decorFrame=0;
hero.addEventListener('pointermove',event=>{
 if(event.pointerType==='touch'||reduceMotion.matches)return;
 cancelAnimationFrame(decorFrame);
 const clientX=event.clientX,clientY=event.clientY;
 decorFrame=requestAnimationFrame(()=>{
  const bounds=hero.getBoundingClientRect();
  const x=(clientX-bounds.left)/bounds.width-.5,y=(clientY-bounds.top)/bounds.height-.5;
  hero.querySelectorAll('.scene-item').forEach((element,index)=>{
   const depth=8+(index%4)*5;
   element.style.setProperty('--mx',`${x*depth}px`);
   element.style.setProperty('--my',`${y*depth}px`);
  });
 });
});
function resetDecor(){
 cancelAnimationFrame(decorFrame);
 hero.querySelectorAll('.scene-item').forEach(element=>{
  element.style.setProperty('--mx','0px');element.style.setProperty('--my','0px');
 });
}
hero.addEventListener('pointerleave',resetDecor);
reduceMotion.addEventListener('change',event=>{if(event.matches)resetDecor()});
// Editorial case layouts: each case gets its own narrative structure.
const pane=(label,body,cls='')=>`<article class="story-pane ${cls}"><div class="pane-tab">${label} <span>↗</span></div><div class="pane-content">${body}</div></article>`;
const storyMedia=(label,wide=false)=>`<div class="evidence-slot ${wide?'landscape':''}"><div class="evidence-chrome">● ● ● <span>PROJECT EVIDENCE</span></div><div class="evidence-empty"><span>＋</span><strong>${label}</strong><small>真实素材待补充</small></div></div>`;
const steps=(items)=>`<div class="strategy-steps">${items.map((x,i)=>`<div><b>0${i+1}</b><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join('')}</div>`;
const contributions=(items)=>`<div class="contribution-list">${items.map((x,i)=>`<div><small>0${i+1}</small><p>${x}</p></div>`).join('')}</div>`;
const bodyLayouts=[
`<div class="editorial-grid"><div>${pane('THE CHALLENGE / 项目命题','<h3>相似的院校表达，<br>如何建立不同的认知？</h3><p>中加合作办学优势，需要转化为目标人群可感知的教育与职业价值。</p><div class="challenge-tags"><span>认知同质化</span><span>人群需求分化</span><span>决策链路长</span></div>')}${storyMedia('反向留学代表笔记 / 校友活动')}</div><div>${pane('STRATEGY / 两阶段策略','<div class="strategy-timeline"><div><small>2025 / 品牌认知期</small><h3>「反向留学」</h3><p>独立提出并推动客户采纳，以无需出国的国际硕士教育建立差异化切口。</p></div><div><small>2026 / 招生转化期</small><h3>从泛种草到人群分层</h3><p>根据招生目标，迭代细分人群与差异化内容承接。</p></div></div>')}${pane('AUDIENCE / 三类人群',steps([['海外本科回国','本土连接、就业衔接、行业与校友资源'],['国内应届毕业生','学历提升、就业竞争与长期职业价值'],['在职提升人群','周末授课、工学平衡与职业进阶']]))}</div></div>${pane('CONTENT JOURNEY / 从触达到留资','<div class="journey">'+['话题触达','价值解释','案例与院校背书','FAQ / 私信咨询','留资承接'].map((s,i)=>`<span><small>0${i+1}</small>${s}</span>`).join('')+'</div>')}${pane('MY ROLE / 我的核心贡献',contributions(['原创「反向留学」概念，主导阶段策略与人群规划。','统筹客户沟通、内容策划、设计制作、交付与复盘。','结合咨询数据与高意向需求，优化 FAQ 和私信承接。']))}`,
`<div class="concept-spread"><div><small>THE CREATIVE IDEA</small><h3>向垂直空间<br>要面积。</h3><p>将 Box Pro「三层功能区」转译为<br><strong>弗兰卡厨房的立体工作站。</strong></p><div class="challenge-tags"><span>功能场景化</span><span>概念资产化</span></div></div>${storyMedia('Box Pro 产品大图 / 三层功能区',true)}</div><div class="editorial-grid">${pane('01 / 从功能到价值','<h3>技术参数 → 厨房体验</h3><p>复杂的结构与功能介绍，转化为消费者能想象的厨房动线和空间解决方案。</p><p>解决产品难理解、表达同质化、传播资产难沉淀的问题。</p>')}${pane('02 / 从创意到资产','<div class="asset-chain"><span>官号内容</span><b>→</b><span>客户采纳</span><b>→</b><span>KFS / 达人复用</span></div><p>客户主动要求将概念延伸至达人传播，让单次新品创意成为可反复调用的沟通资产。</p>')}</div><div class="editorial-grid">${pane('DATA INSIGHT / 数据判断','<div class="insight-number">6.15%<small>水槽功能类封面点击率</small></div><p>对 Q3 内容按六类主题进行归因分析。水槽功能类封面点击率约为节点类两倍，为下一阶段选题与资源配置提供依据。</p>')}</div>${pane('MY ROLE / 我的核心贡献',contributions(['原创「立体工作站」概念，完成产品价值的场景化转译。','推动客户采纳与传播复用，负责官号规划、产出及设计审核交付。','建立内容分类归因，支持后续策略优化。']))}`,
`<div class="editorial-grid"><div>${storyMedia('产品与官号内容')}${pane('MARKET CHALLENGE / 中国市场命题','<h3>让专业成分，<br>与日常生活建立联系。</h3><p>在建立品牌基础认知的同时，将 TTFD 差异化价值转化为可理解、可感知的内容。</p><div class="challenge-tags"><span>品牌信任</span><span>成分教育</span><span>场景关联</span></div>')}</div><div>${pane('COMMUNICATION / 双线协同','<div class="dual-strategy"><div><small>OWNED CONTENT</small><h3>IP 开路</h3><strong>成分教育</strong><p>以官号科普与生活化表达，解释 TTFD 及品牌差异化价值。</p></div><div><small>CREATOR CONTENT</small><h3>KFS 接力</h3><strong>场景种草</strong><p>以「痛点场景 × 核心人群 × 产品价值」组织达人内容。</p></div></div>')}${pane('SCENARIOS / 生活触点','<div class="scenario-row"><span>通勤</span><span>差旅</span><span>熬夜</span><span>工作压力</span></div>')}${storyMedia('达人内容与场景种草示例')}</div></div>${pane('MY ROLE / 三个协作环节',steps([['官号内容创作','负责选题策划与创作，连接成分、品牌价值与生活情境。'],['达人筛选','参与评估受众画像、账号风格与品牌适配性。'],['达人内容审核','审核产品信息、卖点与场景表达，反馈修改建议。']]))}`,
`<div class="ai-editorial"><div class="ai-chapter"><div class="chapter-title"><b>A</b><div><small>PRODUCT CO-CREATION</small><h3>把一线经验，变成产品能力。</h3></div><span class="status-tag">已商业化推出</span></div><div class="editorial-grid">${pane('BUSINESS → PRODUCT / 业务共创','<p>品牌代运营环节多、重复工作多，运营经验需要转化为可复用的产品能力。</p>'+steps([['SOP 输入','提供月度规划、选题、制作、发布与复盘的业务规则。'],['测试与调优','评估选题质量、品牌调性、文案逻辑与视觉适配。'],['跨团队协同','将一线痛点转化为产品团队可理解的需求。']]))}${storyMedia('AI 营销工具界面 / 测试记录')}</div>${pane('PRODUCT FLOW / 产品能力链路','<div class="journey compact">'+['账号特征','月度规划','文案生成','图片生成','一键发布','数据追踪'].map((s,i)=>`<span><small>0${i+1}</small>${s}</span>`).join('')+'</div>')}</div><div class="ai-chapter"><div class="chapter-title"><b>B</b><div><small>WORKFLOW & VIDEO EXPLORATION</small><h3>从单点应用，到流程协同。</h3></div></div><div class="editorial-grid">${pane('CONTENT WORKFLOW / 内容生产','<div class="insight-number">约67%<small>相同月度周期内容产出量增长</small></div><p>将 AI 用于素材整理、选题构思与初稿，保留人工判断、品牌事实校验及成稿审核。</p><div class="asset-chain"><span>AI 辅助</span><b>＋</b><span>人工判断</span><b>→</b><span>稳定交付</span></div>')}${pane('VIDEO / 无实拍素材的生产探索','<h3>0 → 1</h3><p>针对细节失真、动作异常、字幕错误与返工困难，将生产拆为可控环节。</p><div class="journey compact">'+['脚本规划','画面生成','剪辑组装','人工检查'].map(s=>`<span>${s}</span>`).join('')+'</div>')}</div>${storyMedia('▷ AI 视频素材与成片',true)}</div></div>`
];
ids.forEach((id,i)=>{const section=document.getElementById(id),heading=section.querySelector('.case-heading'),stats=section.querySelector('.result-strip'),nav=section.querySelector('.case-nav'),note=section.querySelector('.case-note');const contents=document.createElement('div');contents.className='case-sheet';contents.innerHTML=`<div class="sheet-toolbar"><span>● ● ●　 CASE STUDY / 0${i+1}</span><span>RUOLING — SELECTED WORK</span></div><div class="sheet-header"><span class="sheet-kicker">${['EDUCATION / BRAND STRATEGY','KITCHEN / CREATIVE STRATEGY','HEALTH / LOCAL COMMUNICATION','AI / WORKFLOW INNOVATION'][i]}</span>${heading.outerHTML}</div><div class="sheet-body">${stats.outerHTML}${bodyLayouts[i]}${nav.outerHTML}</div>`;section.querySelectorAll(':scope > :not(.section-label)').forEach(el=>el.remove());section.append(contents)});
// User-supplied RUC–Queen's project reference; external playback until a video asset is supplied.
const rucEvidence=document.querySelector('#ruc .evidence-slot');
if(rucEvidence){rucEvidence.classList.add('xiaohongshu-evidence');rucEvidence.innerHTML=`<div class="evidence-chrome">● ● ● <span>PROJECT VIDEO / 小红书</span></div><a class="xhs-project-link" href="https://www.xiaohongshu.com/explore/6a340cec0000000022015992?xsec_token=ABjehZmAAyFWhSY2t3UUlukxouBKT2-PrmET8U7Y67-z4%3D&amp;xsec_source=pc_user" target="_blank" rel="noopener noreferrer" aria-label="在小红书打开人大—女王项目视频笔记（新窗口）"><span class="xhs-badge">小红书</span><span class="external-play" aria-hidden="true">↗</span><strong>人大—女王金融硕士</strong><span>项目视频笔记</span><small>在小红书查看原笔记 ↗</small></a>`;}
const rucCoverLink=document.querySelector('#ruc .xhs-project-link');
if(rucCoverLink){rucCoverLink.classList.add('has-cover');rucCoverLink.innerHTML='<img class="xhs-cover" src="assets/ruc-episode-01.jpg" alt="非典型留学指南第1期：学历和面包我都要，周末全日制硕士了解一下" width="1200" height="1600" loading="lazy"><span class="cover-link-caption">非典型留学指南 · 第 1 期<span>点击查看小红书原笔记 ↗</span></span>';}

const frankeProduct=document.querySelector('#franke .concept-spread .evidence-slot');
if(frankeProduct){frankeProduct.classList.add('product-photo-window');frankeProduct.innerHTML='<div class="evidence-chrome">● ● ● <span>FRANKE / BOX PRO</span></div><img src="assets/franke-box-pro-light.jpeg" alt="弗兰卡 Box Pro 水槽及厨房台面场景" width="4500" height="4500" loading="lazy">';}
document.querySelectorAll('#franke .editorial-grid').forEach(grid=>{if(grid.children.length===1)grid.classList.add('single-pane')});

const alinaminSlots=document.querySelectorAll('#alinamin .evidence-slot');
if(alinaminSlots[0])alinaminSlots[0].innerHTML='<div class="evidence-chrome">● ● ● <span>OWNED CONTENT / 官号内容</span></div><a class="alinamin-note" href="https://www.xiaohongshu.com/explore/6a9fac72000000001001cda6?xsec_token=ABjWEzkPDWVvKuo3OA12xtdE_Fh4CwcZJsBudiWzZyAx0%3D&amp;xsec_source=pc_user" target="_blank" rel="noopener noreferrer" aria-label="在新窗口打开合利他命官号原笔记"><img src="assets/alinamin-autumn.png" alt="合利他命官号内容：和夏日告别，丝滑入秋指南" width="1200" height="1600" loading="lazy"><span>点击查看小红书原笔记 ↗</span></a>';
if(alinaminSlots[1])alinaminSlots[1].innerHTML='<div class="evidence-chrome">● ● ● <span>CREATOR CONTENT / 达人内容</span></div><img class="creator-evidence" src="assets/alinamin-creators.jpg" alt="合利他命达人内容展示合集" width="1412" height="955" loading="lazy">';

const aiEvidence=document.querySelectorAll('#ai .evidence-slot');
if(aiEvidence[0])aiEvidence[0].innerHTML='<div class="evidence-chrome">● ● ● <span>AI MARKETING / 产品界面</span></div><img class="ai-tool-image" src="assets/ai-marketing-tool.jpg" alt="AI 内容营销工具：客户方案规划与笔记生成界面" width="2514" height="1410" loading="lazy">';
if(aiEvidence[1]){aiEvidence[1].classList.add('ai-video-gallery');aiEvidence[1].innerHTML='<div class="evidence-chrome">● ● ● <span>AI VIDEO / 视频作品</span></div><div class="video-grid"><figure><video controls playsinline preload="metadata" aria-label="致态 AI 视频作品"><source src="assets/ai-zhitai.mp4" type="video/mp4">您的浏览器暂不支持视频播放。</video><figcaption>01 / 致态</figcaption></figure><figure><video controls playsinline preload="metadata" aria-label="排毛小鱼 AI 视频作品"><source src="assets/ai-cat-fish.mp4" type="video/mp4">您的浏览器暂不支持视频播放。</video><figcaption>02 / 排毛小鱼</figcaption></figure></div>';}

const personalGrid=document.querySelector('.personal-grid');
const designGroups=[{name:'标志设计',label:'01 / LOGO',images:[['design-logo.png','律渐标志设计']]},{name:'宣传海报',label:'02 / POSTER',images:[['design-poster-01.png','直播与短视频获客主题海报'],['design-poster-02.png','非典型法律人第六期主题海报']]},{name:'活动长图',label:'03 / EVENT DESIGN',images:[['design-event-01.png','律所人才品牌创新交流会 · 活动主题与嘉宾'],['design-event-02.jpg','律所人才品牌创新交流会 · 嘉宾与议程'],['design-event-03.png','律所人才品牌创新交流会 · 地址与合作单位']]}];
personalGrid.className='design-collection';personalGrid.innerHTML=designGroups.map((g,i)=>`<article class="design-group group-${i}"><div class="design-group-heading"><small>${g.label}</small><h3>${g.name}</h3><span>点击图片放大 ↗</span></div><div class="design-images">${g.images.map(([file,title])=>`<figure><button type="button" class="design-zoom" data-file="assets/${file}" data-title="${title}" aria-label="放大查看${title}"><img src="assets/${file}" alt="${title}" loading="lazy"></button><figcaption>${title}</figcaption></figure>`).join('')}</div></article>`).join('');
const designDialog=document.createElement('dialog');designDialog.className='design-dialog';designDialog.innerHTML='<div class="design-dialog-bar"><span></span><button type="button" aria-label="关闭作品大图">关闭 ×</button></div><div class="design-dialog-body"><img alt=""></div>';document.body.append(designDialog);
document.querySelectorAll('.design-zoom').forEach(button=>button.addEventListener('click',()=>{const img=designDialog.querySelector('img');img.src=button.dataset.file;img.alt=button.dataset.title;designDialog.querySelector('.design-dialog-bar span').textContent=button.dataset.title;designDialog.showModal();designDialog.querySelector('.design-dialog-body').scrollTop=0}));designDialog.querySelector('button').addEventListener('click',()=>designDialog.close());designDialog.addEventListener('click',e=>{if(e.target===designDialog)designDialog.close()});
// Cover uses the same real project assets as the case studies.
const coverArt=[['.scene-photo .photo-placeholder','assets/franke-box-pro-light.jpeg','弗兰卡 Box Pro 场景'],['.scene-device .photo-placeholder','assets/ai-marketing-tool.jpg','AI 营销工具界面'],['.scene-phone .photo-placeholder','assets/alinamin-autumn.png','合利他命官号设计']];
coverArt.forEach(([selector,src,alt])=>{const placeholder=hero.querySelector(selector);if(placeholder){const img=document.createElement('img');img.src=src;img.alt=alt;img.className='hero-project-image';placeholder.replaceWith(img)}});
const coverTools=[['.scene-tool1 .tool-tile','<img src="assets/chatgpt.svg" alt="ChatGPT" class="brand-icon">'],['.scene-tool2 .tool-tile','<img src="assets/douyin.svg" alt="抖音" class="brand-icon douyin-mark">'],['.scene-tool3 .tool-tile','<span class="xiaohongshu-mark">小红书</span>']];
coverTools.forEach(([selector,html])=>{const tile=hero.querySelector(selector);if(tile)tile.innerHTML=html});
// FRANKE content revision supplied by the portfolio owner.
const frankeIndex=document.querySelector('.metrics a[href="#franke"]');
frankeIndex.innerHTML='<strong>+230%</strong><span>弗兰卡阶段性账号阅读量增长 ↗</span>';
const frankeIndexSummary=document.createElement('div');frankeIndexSummary.className='franke-index-summary';frankeIndexSummary.innerHTML='<h4>FRANKE弗兰卡｜瑞士厨电品牌内容营销</h4><p>基于品牌定位与历史内容分析优化新品传播策略，独立提出「立体工作站」原创概念，获客户采纳并复用于KFS及达人内容。</p>';document.querySelector('.metrics').after(frankeIndexSummary);
const revisedFranke=document.querySelector('#franke');
revisedFranke.querySelector('.sheet-header').innerHTML='<span class="sheet-kicker">FRANKE / BRAND CONTENT STRATEGY</span><div class="case-heading"><p class="case-sub">瑞士厨电品牌｜品牌内容策略｜新品营销</p><h2>FRANKE弗兰卡<br>从品牌形象建设到新品传播，<br>以内容策略驱动品牌增长</h2><div class="franke-meta"><p>项目周期：2025.07–10、2026.06–09</p><p>个人职责：品牌内容规划、创意策划、客户对接、项目执行及数据复盘</p></div></div>';
const retainedProduct=revisedFranke.querySelector('.product-photo-window').outerHTML;
revisedFranke.querySelector('.sheet-body').innerHTML=`<div class="result-strip revised-results"><div><strong>+230%</strong><span>阶段性账号阅读量增长</span></div><div><strong class="result-statement">原创传播概念获客户采纳</strong><span>应用于新品推广、KFS 及达人内容，跨渠道复用</span></div></div>
${pane('01 / 营销背景','<h3>阶段性营销合作，持续性的品牌表达。</h3><p>FRANKE弗兰卡是瑞士厨房设备品牌，旗下产品覆盖水槽、龙头、烟机、灶具及洗碗机等多个品类。</p><p>品牌主要围绕新品上市及电商大促等关键节点开展阶段性社交媒体营销合作，日常则由内部团队维护账号。</p><p>在阶段性营销需求下，既要延续品牌长期定位，又要针对新品上市等不同业务目标制定具有传播针对性的内容策略，实现品牌形象与产品推广的协同。</p>')}
${pane('02 / 营销挑战',steps([['品牌形象如何保持一致？','面对阶段性营销合作与日常内容维护交替的运营模式，需要建立统一、具有辨识度的品牌内容表达。'],['专业产品卖点如何转化为消费价值？','高客单价厨电产品涉及复杂技术参数与功能设计，需要让消费者直观理解产品能够解决什么问题。'],['有限的内容资源如何实现有效分配？','针对不同新品和营销节点，需要基于历史内容表现识别传播机会，合理规划产品种草、品牌理念及品类科普等内容方向。']]))}
${pane('03 / 解决方案：品牌定位 × 内容策略 × 新品创意','<div class="strategy-timeline"><div><small>第一阶段 / 品牌形象建设</small><h3>从定位出发，统一内容表达</h3><p>结合品牌定价、目标消费人群及产品定位，围绕品质厨房、空间美学与整体厨房解决方案，重新规划品牌社交媒体内容表达，建立更统一的品牌形象。</p></div><div><small>第二阶段 / 新品传播策略优化</small><h3>用历史内容，识别传播机会</h3><p>延续既有品牌定位，回溯历史笔记表现，对内容按传播主题和产品品类进行分类分析。</p><p>根据不同内容类型的传播特点，结合当期新品推广目标，调整选题方向及内容组合，明确功能种草、品牌理念和节点内容在传播中的不同作用。</p></div><div><small>第三阶段 / 原创传播概念打造</small><h3>「立体工作站」</h3><p>针对Box Pro新品水槽的三层功能结构，独立提出「立体工作站」创意概念。</p><p>将原本专业的功能参数转化为更直观的厨房空间解决方案，以「向垂直空间要面积」作为沟通切口，帮助消费者理解产品在空间利用和使用体验上的价值。</p><p>该概念获得客户采纳，并进一步应用于新品推广、KFS及达人内容，形成可持续复用的传播表达。</p></div></div>')}
<div class="concept-spread"><div><small>THE CREATIVE IDEA</small><h3>向垂直空间<br>要面积。</h3><p>Box Pro · 厨房的立体工作站</p></div>${retainedProduct}</div>
${pane('04 / 数据分析与内容策略迭代','<p>通过对不同类型内容进行归因分析，形成三项策略判断：</p>'+steps([['功能场景型内容','通过具体使用问题与解决方案激发产品兴趣，适合承担新品功能种草任务。'],['品牌理念型内容','围绕厨房空间、美学及生活方式建立品牌形象，承担互动沉淀与品牌价值沟通任务。'],['品类科普型内容','根据产品品类与目标受众的匹配程度调整选题角度，避免不同品类采用同质化传播方式。']])+'<p>基于内容表现与营销目标，为后续选题规划和内容资源配置提供策略依据。</p>')}
${pane('05 / 个人核心贡献','<div class="franke-contributions">'+[['品牌内容策略','连续参与品牌两个阶段的内容建设，根据品牌定位及营销目标调整社交媒体传播方向。'],['数据分析与规划','回溯历史内容表现，开展内容分类归因，提出针对性的内容结构及选题优化建议。'],['原创创意策划','独立提出Box Pro「立体工作站」传播概念，推动客户采纳并跨渠道复用。'],['项目统筹与落地','独立负责客户日常沟通、月度内容规划、内部设计制作协调、内容交付及效果复盘。']].map(([h,p])=>'<div><h4>'+h+'</h4><p>'+p+'</p></div>').join('')+'</div>')}
${pane('06 / 项目价值总结','<h3>阶段性增长 × 长期内容资产</h3><p>围绕成熟国际品牌的阶段性营销需求，建立从品牌定位、内容分析到新品创意落地的策略方法。</p><p>在账号整体阅读表现增长的同时，推动原创产品传播概念转化为品牌可持续复用的内容资产，兼顾阶段性传播需求与品牌长期内容建设。</p>')}
<div class="case-nav"><a href="#projects">↑ 返回项目总览</a><a href="#alinamin">下一个项目 ↓</a></div>`;
document.querySelector('.project-links a[href="#franke"] p').textContent='从品牌形象建设到新品传播';
// Condensed FRANKE narrative approved by the portfolio owner.
revisedFranke.querySelector('.sheet-header').innerHTML='<span class="sheet-kicker">FRANKE / BRAND CONTENT STRATEGY</span><div class="case-heading"><p class="case-sub">瑞士厨电品牌｜品牌内容策略 × 新品营销</p><h2>FRANKE弗兰卡<br>从品牌内容建设到新品创意资产沉淀</h2></div>';
revisedFranke.querySelector('.sheet-body').innerHTML=`<div class="result-strip revised-results concise-results"><div><strong>+230%</strong><span>阶段性账号阅读量增长</span></div></div>
${pane('01 / 项目背景与挑战','<p>弗兰卡主要围绕新品上市及电商大促开展阶段性社媒合作，日常账号由品牌内部维护。面对高客单价、专业功能复杂的厨房产品，项目既需要维持品牌表达的一致性，也需要在有限的营销周期内，让新品价值被消费者快速理解。</p>')}
${pane('02 / 核心策略一','<h3>从品牌定位到差异化内容布局</h3><div class="franke-contributions"><div><h4>2025年｜确立品牌内容形象</h4><p>基于产品定价及目标客群，围绕品质厨房、空间美学与整体厨房解决方案，重新梳理社媒内容定位，建立统一的品牌表达。</p></div><div><h4>2026年｜围绕新品目标优化内容结构</h4><p>延续既有品牌定位，回溯历史笔记表现，通过内容分类与效果分析，重新调整产品功能、品牌理念及品类内容的选题配比，让不同内容承担明确的传播任务。</p></div></div>')}
<div class="editorial-grid franke-concept-compact">${pane('03 / 核心策略二','<h3>把三层功能区<br>变成品牌传播概念</h3><p>针对Box Pro水槽的三层功能结构，独立提出<strong>「立体工作站」</strong>原创传播概念。</p><p>将传统的产品功能介绍转化为<strong>「向垂直空间要面积」</strong>的空间解决方案，让消费者直观理解新品如何提升厨房操作效率及空间利用体验。</p><p>这一概念获得客户采纳，成为新品推广的统一表达，并进一步复用于KFS及达人内容，实现从单篇内容创意到跨渠道传播资产的延伸。</p>')}${retainedProduct}</div>
${pane('04 / 项目成果',steps([['传播表现','合作期间，账号阶段性阅读量增长约230%。'],['策略沉淀','形成基于历史内容表现与当期营销目标的分类分析及选题规划方法。'],['创意价值','「立体工作站」概念获客户采纳并跨渠道复用，成为新品传播的核心表达之一。']]))}
${pane('05 / 我的贡献','<p>参与两阶段品牌内容策略建设，独立负责内容规划、历史内容分析及客户项目统筹；原创提出「立体工作站」概念并推动落地，负责客户沟通、设计制作协调与项目复盘。</p>')}
<div class="case-nav"><a href="#projects">↑ 返回项目总览</a><a href="#alinamin">下一个项目 ↓</a></div>`;
// Latest owner-supplied FRANKE positioning and case copy.
frankeIndexSummary.innerHTML='<h4>FRANKE弗兰卡｜从0到1打造弗兰卡中国市场声量</h4><p>针对瑞士高端厨电品牌阶段性传播需求，通过品牌定位、内容策略优化与新品创意策划，推动账号从低频维护向体系化传播升级，助力品牌实现社媒声量快速增长。</p>';
revisedFranke.querySelector('.sheet-header').innerHTML='<span class="sheet-kicker">FRANKE / BRAND CONTENT STRATEGY</span><div class="case-heading"><p class="case-sub">瑞士厨电品牌｜品牌内容策略 × 新品营销</p><h2>FRANKE弗兰卡<br>海外高端家居品牌社媒声量增长</h2></div>';
revisedFranke.querySelector('.sheet-body').innerHTML=`
${pane('01 / 项目背景与挑战','<p>弗兰卡以新品上市及电商大促为主要营销节点，日常社媒账号由品牌内部低频维护。</p><p>项目需要在有限的合作周期内，建立统一的品牌内容形象，将专业产品卖点转化为消费者易于理解的价值表达，并提升中国社媒平台的传播声量。</p>')}
${pane('02 / 核心策略','<div class="franke-contributions"><div><h4>品牌定位｜从零散内容到体系化表达</h4><p>2025年结合品牌定价与目标客群，围绕品质厨房、空间美学及整体厨房解决方案，重新梳理品牌内容定位，建立统一的传播风格。</p></div><div><h4>内容优化｜以数据洞察指导新品传播</h4><p>2026年围绕新品上市需求，回溯历史笔记表现，按内容类型进行归因分析，调整功能种草、品牌理念及品类科普的内容配比，优化阶段性传播规划。</p></div></div><div class="editorial-grid franke-concept-compact"><div><h3>创意突破｜打造「立体工作站」传播概念</h3><p>针对Box Pro水槽的三层功能结构，独立提出「立体工作站」概念，以「向垂直空间要面积」将专业卖点转化为直观的厨房空间价值。</p><p>概念获客户采纳，并复用于新品推广、KFS及达人内容。</p></div>'+retainedProduct+'</div>')}
${pane('03 / 项目成果','<div class="result-strip franke-final-results"><div><strong>145.3万</strong><span>季度累计曝光</span></div><div><strong>+230%</strong><span>阶段性账号阅读量增长</span></div></div><div class="creative-result"><h4>创意资产沉淀</h4><p>「立体工作站」获客户采纳并跨渠道复用</p></div>')}
${pane('04 / 个人贡献','<p>负责品牌内容定位、历史内容分析与新品传播策略规划；独立提出并推动「立体工作站」创意落地，统筹客户沟通、设计制作、内容交付及数据复盘。</p>')}
<div class="case-nav"><a href="#projects">↑ 返回项目总览</a><a href="#alinamin">下一个项目 ↓</a></div>`;
document.querySelector('.project-links a[href="#franke"] p').textContent='海外高端家居品牌社媒声量增长';
// AI Xiaodun: product evolution replaces the former productivity case.
const aiIndex=document.querySelector('.metrics a[href="#ai"]');aiIndex.innerHTML='<strong>已商业化</strong><span>AI小敦 · 社媒营销业务产品化探索 ↗</span>';
const aiIndexSummary=document.createElement('div');aiIndexSummary.className='franke-index-summary';aiIndexSummary.innerHTML='<h4>AI小敦｜社媒营销业务产品化探索</h4><p>参与将小红书代运营SOP转化为AI产品能力，协同研发团队完成业务场景测试与功能调优，支持AI社媒营销工具从内容生成向口碑营销、账号运营拓展，并实现商业化落地。</p>';frankeIndexSummary.after(aiIndexSummary);
const aiPage=document.querySelector('#ai');const videosForWall=aiPage.querySelector('.ai-video-gallery');
aiPage.querySelector('.sheet-header').innerHTML='<span class="sheet-kicker">AI XIAODUN / PRODUCT CO-CREATION</span><div class="case-heading"><p class="case-sub">营销SOP × 产品共创 × 商业化落地</p><h2>AI小敦<br>从内部运营流程到商业化AI产品</h2><p class="ai-core-theme">将一线营销经验产品化，探索社媒营销服务的规模化复制</p></div>';
const evolution=[['小红书营销AI助手','内容生产标准化','通过行业模板、AI文案生成、内容优化及合规预审，将运营经验转化为标准化内容生产能力。','ai-assistant.jpg'],['商家种草码','用户口碑营销规模化','将AI内容生成能力延伸至消费场景，通过商家配置、用户扫码生成及发布笔记，拓展UGC内容生产与口碑营销服务。','ai-seeding-code.jpg'],['客户中心','社媒运营全流程产品化','围绕品牌账号需求，整合月度内容规划、图文生成、发布及数据追踪，实现从单点内容生产到持续性账号运营的流程衔接。','ai-marketing-tool.jpg']];
aiPage.querySelector('.sheet-body').innerHTML=`${pane('01 / 项目背景','<p>传统社媒代运营依赖人工经验与定制化服务，内容策划、生产、发布及复盘等环节标准化程度有限，难以实现规模化复制。</p><p>为突破传统服务模式的限制，公司探索将运营SOP与AI技术结合，推动社媒营销能力从人工交付向产品化服务延伸。</p>')}
${pane('02 / 产品演进：从内容工具到营销服务体系','<div class="product-evolution">'+evolution.map(([name,theme,description,file],i)=>`<article><small>PHASE 0${i+1}</small><h3>${name}</h3><h4>${theme}</h4><p>${description}</p><button class="product-image-zoom" data-file="assets/${file}" data-title="${name}" aria-label="放大查看${name}"><img src="assets/${file}" alt="${name}产品展示" loading="lazy"><span>查看大图 ↗</span></button></article>`).join('')+'</div>')}
${pane('03 / 个人核心贡献',steps([['运营流程标准化','梳理小红书账号运营SOP，将内容规划、创作、发布、复盘等一线经验转化为产品业务需求。'],['产品测试与优化','参与产品功能测试，从品牌调性、内容质量及实际使用场景出发，反馈问题并配合研发团队调优。'],['跨团队业务协同','连接内容运营与产品研发，推动实际运营经验应用于AI工具的功能设计与迭代。']])+'<div class="ai-role-flow">运营SOP沉淀 → 产品测试调优 → 业务经验产品化</div>')}
${pane('04 / 项目成果','<h3>AI营销产品实现商业化落地</h3><p>相关产品从内容辅助工具逐步拓展至用户口碑营销及品牌账号运营场景，形成可面向外部客户提供的标准化营销产品与服务能力。</p><p class="ai-value"><strong>个人价值：</strong>将实际营销经验抽象为标准化流程，并参与推动其转化为可复制的AI产品能力。</p>')}
<div class="case-nav"><a href="#projects">↑ 返回项目总览</a><a href="#personal">个人作品 ↓</a></div>`;
document.querySelector('.project-links a[href="#ai"] h3').textContent='AI小敦';document.querySelector('.project-links a[href="#ai"] p').textContent='社媒营销业务产品化探索';
document.querySelector('#personal>p').textContent='设计与影像作品选集 / 标志 · 宣传海报 · 活动长图 · AI视频';
if(videosForWall){const videoGroup=document.createElement('article');videoGroup.className='design-group wall-videos';videoGroup.innerHTML='<div class="design-group-heading"><small>04 / AI VIDEO</small><h3>AI视频作品</h3></div>';videoGroup.append(videosForWall);personalGrid.append(videoGroup)}
document.querySelectorAll('.product-image-zoom').forEach(button=>button.addEventListener('click',()=>{const img=designDialog.querySelector('img');img.src=button.dataset.file;img.alt=button.dataset.title;designDialog.querySelector('.design-dialog-bar span').textContent=button.dataset.title;designDialog.showModal();designDialog.querySelector('.design-dialog-body').scrollTop=0}));
// Compact masonry wall with individual artwork cards, including original WeChat stickers.
frankeIndex.querySelector('span').textContent='从0到1打造弗兰卡中国市场声量 ↗';
const existingVideoCards=[...document.querySelectorAll('#personal .video-grid figure')];
const wallWorks=[['design-logo.png','律渐标志设计','标志设计'],['cat-stickers-01.png','椰子全球后援会','原创微信表情包 · 已上线'],['design-poster-01.png','直播与短视频获客主题海报','宣传海报'],['cat-stickers-02.png','女咪星和萝卜保镖','原创微信表情包 · 已上线'],['design-poster-02.png','非典型法律人第六期','宣传海报'],['design-event-01.png','人才品牌创新交流会 · 主题与嘉宾','活动长图'],['design-event-02.jpg','人才品牌创新交流会 · 嘉宾与议程','活动长图'],['design-event-03.png','人才品牌创新交流会 · 活动信息','活动长图']];
personalGrid.className='masonry-wall';personalGrid.innerHTML=wallWorks.map(([file,title,category])=>`<article class="work-tile"><button type="button" class="wall-zoom" data-file="assets/${file}" data-title="${title}" aria-label="放大查看${title}"><img src="assets/${file}" alt="${title}" loading="lazy"></button><div class="work-tile-caption"><small>${category}</small><h3>${title}</h3></div></article>`).join('');
existingVideoCards.forEach(figure=>{const tile=document.createElement('article');tile.className='work-tile work-video';tile.append(figure);personalGrid.append(tile)});
document.querySelector('#personal>p').textContent='设计与影像作品选集 / 标志 · 海报 · 活动长图 · 原创微信表情包 · AI视频';
document.querySelectorAll('.wall-zoom').forEach(button=>button.addEventListener('click',()=>{const img=designDialog.querySelector('img');img.src=button.dataset.file;img.alt=button.dataset.title;designDialog.querySelector('.design-dialog-bar span').textContent=button.dataset.title;designDialog.showModal();designDialog.querySelector('.design-dialog-body').scrollTop=0}));
// Overview headline replaces the old numeric FRANKE card.
frankeIndex.classList.add('franke-headline-card');frankeIndex.innerHTML='<strong>从0到1打造弗兰卡中国市场声量</strong><span>FRANKE弗兰卡｜瑞士厨电品牌内容营销 ↗</span>';
// Remove redundant event continuation images; keep the principal event design.
document.querySelectorAll('.work-tile').forEach(tile=>{const image=tile.querySelector('img');if(image&&/design-event-0[23]\./.test(image.getAttribute('src')))tile.remove()});
const stickerPair=document.createElement('div');stickerPair.className='sticker-pair';
const stickerTiles=[...personalGrid.querySelectorAll('.work-tile')].filter(tile=>tile.querySelector('img')?.getAttribute('src').includes('cat-stickers-'));
if(stickerTiles.length){personalGrid.prepend(stickerPair);stickerTiles.forEach(tile=>stickerPair.append(tile))}
personalGrid.querySelectorAll('.work-tile').forEach(tile=>{const caption=tile.querySelector('.work-tile-caption');if(caption)tile.prepend(caption);const figure=tile.querySelector('figure');if(figure){const oldCaption=figure.querySelector('figcaption');if(oldCaption){const heading=document.createElement('div');heading.className='work-tile-caption';heading.innerHTML='<small>AI视频作品</small><h3>'+oldCaption.textContent+'</h3>';tile.prepend(heading);oldCaption.remove()}}});
// Final presentation refinements and contact closing page.
personalGrid.querySelectorAll('.work-tile').forEach(tile=>{if(tile.querySelector('img')?.getAttribute('src').includes('design-poster-02'))tile.remove()});
const videoStack=document.createElement('div');videoStack.className='video-stack';personalGrid.querySelectorAll('.work-video').forEach(tile=>videoStack.append(tile));personalGrid.append(videoStack);personalGrid.append(stickerPair);
const closing=document.createElement('section');closing.id='contact';closing.className='contact-closing page';closing.innerHTML='<div class="section-label">NEXT CHAPTER / LET’S CONNECT</div><div class="closing-window closing-window-one" aria-hidden="true"><span>● ● ●</span><p>洞察 → 创意 → 行动</p></div><div class="closing-window closing-window-two" aria-hidden="true"><span>NEW MESSAGE</span><p>下一段品牌故事，<br>期待与你一起创造。↗</p></div><div class="closing-copy"><p class="closing-eyebrow">WANG RUOLING / BRAND CONTENT STRATEGY</p><h2>让好想法，<br>有下一步。</h2><p class="closing-description">从品牌洞察到内容表达，让创意走向真实的生长。<br>期待一起，写下下一个有影响力的故事。</p><div class="contact-methods"><a href="tel:13100639721"><small>CALL ME ↗</small><span>13100639721</span></a><a href="mailto:w2080544164@163.com"><small>EMAIL ME ↗</small><span>w2080544164@163.com</span></a></div><p class="closing-signature">王若凌 · 品牌内容策略 / 社交媒体营销</p></div>';document.querySelector('main').append(closing);
// Remove duplicated overview paragraphs, keeping the four project entry cards.
frankeIndexSummary.remove();aiIndexSummary.remove();
// Mobile browsers use same-tab navigation; keep complete original share parameters.
const noteLinks=[document.querySelector('.xhs-project-link'),document.querySelector('.alinamin-note')].filter(Boolean);
const mobileNotes=matchMedia('(max-width: 800px), (pointer: coarse)');
function updateNoteTargets(){noteLinks.forEach(link=>{link.target=mobileNotes.matches?'_self':'_blank';link.setAttribute('aria-label',mobileNotes.matches?'查看小红书原笔记':'在新窗口查看小红书原笔记')})}
updateNoteTargets();mobileNotes.addEventListener('change',updateNoteTargets);
noteLinks.forEach(link=>{const fallback=document.createElement('div');fallback.className='note-link-help';const copyButton=document.createElement('button');copyButton.type='button';copyButton.textContent='复制笔记链接';const hint=document.createElement('small');hint.textContent='无法跳转时，可复制链接到系统浏览器打开';fallback.append(copyButton,hint);link.after(fallback);copyButton.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(link.href);copyButton.textContent='已复制';setTimeout(()=>copyButton.textContent='复制笔记链接',2200)}catch{copyButton.textContent='请长按下方链接复制';hint.textContent=link.href}})});
// App-generated share links supplied by the owner for mobile handoff.
const queensAppShare=document.querySelector('.xhs-project-link');if(queensAppShare)queensAppShare.href='https://xhslink.cn/o/OxMIVgvTPc';
const alinaminAppShare=document.querySelector('.alinamin-note');if(alinaminAppShare)alinaminAppShare.href='https://xhslink.cn/o/7c43W8ddvWv';
