// Reader code never runs in the reading page's JavaScript context.
export function execute(code, receive) {
  const runId = Array.from(crypto.getRandomValues(new Uint32Array(4)), value => value.toString(16)).join('-');
  const frame = document.createElement('iframe');
  frame.hidden = true;
  frame.title = 'Isolated code execution';
  frame.setAttribute('sandbox', 'allow-scripts');
  const frameUrl = new URL('./coding-frame.html', import.meta.url);
  frameUrl.hash = runId;
  frame.src = frameUrl.href;
  let closed = false;
  let started = false;
  let count = 0;
  let timer;
  const stop = () => {
    if (closed) return;
    closed = true;
    clearTimeout(timer);
    window.removeEventListener('message', handle);
    frame.remove();
  };
  const handle = event => {
    if (closed || event.source !== frame.contentWindow) return;
    if (++count > 110) { stop(); receive({type:'error',text:'Output limit reached.'}); return; }
    const data = event.data;
    if (!data || typeof data !== 'object' || data.runId !== runId) return;
    if (data.type === 'ready') {
      if (started) return;
      started = true;
      clearTimeout(timer);
      // This execution deadline is installed once and never extended by output.
      timer = setTimeout(() => { stop(); receive({type:'error',text:'Stopped after 3 seconds. Reduce the work or check your loop.'}); }, 3000);
      frame.contentWindow.postMessage({type:'run',runId,code}, '*');
      return;
    }
    if (!started) return;
    if (data.type === 'plot') {
      if (!Array.isArray(data.points) || data.points.length < 2 || data.points.length > 2000 ||
          !data.points.every(p => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite))) return;
      receive({type:'plot',points:data.points,label:String(data.label).slice(0,200)});
    } else if (['log','error','done'].includes(data.type)) {
      receive({type:data.type,text:String(data.text ?? '').slice(0,4000)});
      if (data.type !== 'log') stop();
    }
  };
  window.addEventListener('message', handle);
  timer = setTimeout(() => { stop(); receive({type:'error',text:'Code runner could not start in this browser.'}); }, 5000);
  document.body.append(frame);
  return stop;
}
