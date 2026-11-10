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
if(frankeProduct){frankeProduct.classList.add('product-photo-window');frankeProduct.innerHTML='<div class="evidence-chrome">● ● ● <span>FRANKE / BOX PRO</span></div><img src="assets/franke-box-pro.jpg" alt="弗兰卡 Box Pro 水槽及厨房台面场景" width="4500" height="4500" loading="lazy">';}
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
const coverArt=[['.scene-photo .photo-placeholder','assets/franke-box-pro.jpg','弗兰卡 Box Pro 场景'],['.scene-device .photo-placeholder','assets/ai-marketing-tool.jpg','AI 营销工具界面'],['.scene-phone .photo-placeholder','assets/alinamin-autumn.png','合利他命官号设计']];
coverArt.forEach(([selector,src,alt])=>{const placeholder=hero.querySelector(selector);if(placeholder){const img=document.createElement('img');img.src=src;img.alt=alt;img.className='hero-project-image';placeholder.replaceWith(img)}});
const coverTools=[['.scene-tool1 .tool-tile','<img src="assets/chatgpt.svg" alt="ChatGPT" class="brand-icon">'],['.scene-tool2 .tool-tile','<img src="assets/douyin.svg" alt="抖音" class="brand-icon douyin-mark">'],['.scene-tool3 .tool-tile','<span class="xiaohongshu-mark">小红书</span>']];
coverTools.forEach(([selector,html])=>{const tile=hero.querySelector(selector);if(tile)tile.innerHTML=html});
