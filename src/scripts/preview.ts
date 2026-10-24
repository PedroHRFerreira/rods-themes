import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { themePalettes } from '../palettes/collection.ts'

const themes = themePalettes.map((palette) => ({
  ...palette, output: JSON.parse(readFileSync(`themes/${palette.id}-color-theme.json`, 'utf8'))
}))
const html = `<!doctype html>
<html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Rods Themes — cinco temas</title>
<style>
*{box-sizing:border-box}body{margin:0;background:#111319;color:#e8eaf0;font:15px system-ui,sans-serif}
main{max-width:1280px;margin:auto;padding:44px 24px}h1{margin:4px 0 12px;font-size:36px;letter-spacing:-1.5px}
.eyebrow{font-size:12px;letter-spacing:2px;color:#a8afbd}p{color:#a8afbd;line-height:1.6}
nav{display:flex;gap:8px;flex-wrap:wrap;margin:26px 0}button{cursor:pointer;background:#1c2029;
border:1px solid #343b49;color:#c9cfdb;padding:11px 14px;border-radius:8px;font:inherit}
button[aria-pressed="true"]{color:var(--primary);border-color:var(--primary);background:#202631}
button:focus-visible{outline:2px solid #fff;outline-offset:3px}
.window{border:1px solid var(--border);border-radius:12px;overflow:hidden;background:var(--editor);color:var(--fg)}
.title,.status{background:var(--chrome);padding:14px 18px;display:flex;justify-content:space-between;gap:12px}
.title{font-size:13px}.dots{color:var(--muted)}.content{display:grid;grid-template-columns:180px 1fr;min-height:445px}
aside{background:var(--panel);border-right:1px solid var(--border);padding:24px 18px;font:13px ui-monospace,monospace}
aside p{color:var(--fg);line-height:2.1}aside strong{color:var(--primary)}.work{min-width:0}
.tab{background:var(--chrome);border-bottom:1px solid var(--border);font:13px ui-monospace,monospace}
.tab span{display:inline-block;padding:13px 20px;background:var(--editor);border-top:2px solid var(--primary)}
pre{font:15px/1.8 ui-monospace,SFMono-Regular,Consolas,monospace;padding:24px;margin:0;overflow-x:auto}
.keyword{color:var(--keyword)}.string{color:var(--string)}.number,.type{color:var(--number)}
.function{color:var(--function)}.comment{color:var(--comment);font-style:italic}
.selection{background:var(--selection)}.line{background:var(--line);display:block}
.bottom{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--border);background:var(--panel)}
.bottom>div{padding:18px 24px}.bottom>div+div{border-left:1px solid var(--border)}
.bottom h3{font:11px system-ui;letter-spacing:1.5px;margin:0 0 12px;color:var(--muted)}
.bottom code{font:13px/1.8 ui-monospace,monospace}.added{color:var(--success)}.removed{color:var(--error)}
.warning{color:var(--warning)}.status{font-size:12px;color:var(--secondary)}
.palette{display:flex;gap:8px;margin-top:20px;flex-wrap:wrap}.swatch{display:flex;gap:7px;align-items:center;
font:12px ui-monospace,monospace;padding:8px 10px;border:1px solid #343b49;border-radius:6px;color:#c9cfdb}
.swatch i{width:12px;height:12px;border-radius:3px;background:var(--color)}.note{font-size:12px;margin-top:20px}
@media(max-width:650px){main{padding:25px 14px}h1{font-size:29px}.content{grid-template-columns:1fr;min-height:0}
aside{display:none}pre{padding:20px 14px;font-size:12px}.bottom{grid-template-columns:1fr}
.bottom>div+div{border-left:0;border-top:1px solid var(--border)}.title{font-size:11px}nav button{font-size:12px}}
</style>
<main><div class="eyebrow">RODS THEMES · 0.1.0</div><h1>Escolha a sua atmosfera.</h1>
<p>Três temas com preto absoluto. Dois com grafite e contraste mais suave.</p>
<nav aria-label="Escolher tema"></nav>
<section class="window" aria-label="Prévia do tema">
<div class="title"><span class="dots">● ● ●</span><span id="theme-name"></span><span>rods-themes</span></div>
<div class="content"><aside><strong>EXPLORADOR</strong><p>▾ src<br>&nbsp; ▾ palettes<br>&nbsp; &nbsp; collection.ts<br>&nbsp; ▾ theme<br>&nbsp; &nbsp; colors.ts<br>&nbsp; ▾ zed<br>&nbsp; &nbsp; build.ts</p></aside>
<div class="work"><div class="tab"><span>themePreview.ts</span></div><pre><span class="comment">// Uma paleta para cada momento.</span>
<span class="keyword">interface</span> <span class="type">Task</span> {
  title: <span class="type">string</span>
  complete: <span class="type">boolean</span>
}

<span class="keyword">const</span> title = <span class="string">'Construir algo incrível'</span>
<span class="keyword">const</span> progress = <span class="number">5</span>

<span class="line"><span class="keyword">function</span> <span class="function">formatTask</span>(task: <span class="type">Task</span>) {</span>
  <span class="keyword">return</span> <span class="selection">task.title</span>
}

console.<span class="function">info</span>(title, progress)</pre></div></div>
<div class="bottom"><div><h3>TERMINAL</h3><code><span class="added">✓</span> Cinco temas gerados<br><span class="warning">●</span> Pronto para sua próxima ideia</code></div>
<div><h3>ALTERAÇÕES</h3><code><span class="removed">− const total = 30</span><br><span class="added">+ const total = 5</span></code></div></div>
<div class="status"><span>main · UTF-8</span><span>TypeScript · Rods Themes</span></div></section>
<div class="palette" aria-label="Cores do tema"></div>
<p class="note">Prévia ilustrativa usando as cores geradas. A renderização final varia entre VS Code, JetBrains e Zed.</p>
</main><script>
const themes=${JSON.stringify(themes).replaceAll('<', '\\u003c')};
const nav=document.querySelector('nav');
for(const theme of themes){const button=document.createElement('button');button.textContent=theme.name;
button.className='theme-choice';button.dataset.id=theme.id;button.onclick=()=>select(theme);nav.append(button)}
function select(theme){const c=theme.output.colors,s=theme.output.semanticTokenColors;
const values={...theme.surfaces,fg:theme.foreground,primary:theme.primary,secondary:theme.secondary,
muted:theme.muted,success:theme.success,error:theme.error,warning:theme.warning,line:theme.surfaces.lineHighlight,
keyword:s.keyword,string:s.string,number:s.number,function:s.function,comment:s.comment.foreground,selection:c['editor.selectionBackground']};
for(const [key,value] of Object.entries(values))document.documentElement.style.setProperty('--'+key,value);
document.getElementById('theme-name').textContent=theme.name;
for(const button of nav.children)button.setAttribute('aria-pressed',String(button.dataset.id===theme.id));
document.querySelector('.palette').innerHTML=['editor','panel','chrome','primary','secondary'].map(key=>
'<span class="swatch"><i style="--color:'+values[key]+'"></i>'+values[key]+'</span>').join('')}
select(themes.find(theme=>theme.id==='dark-graphite'));
</script></html>`

mkdirSync('build/preview', { recursive: true })
writeFileSync('build/preview/index.html', html)
console.log('Generated color preview: build/preview/index.html')
