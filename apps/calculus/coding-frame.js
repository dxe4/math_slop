// Opaque sandbox bridge; learner code stays in its bounded worker.
function bootstrap(runId) {
  let worker;
  let started = false;
  let count = 0;
  const send = data => parent.postMessage({...data, runId}, '*');
  window.addEventListener('message', event => {
    if (event.source !== parent || started || event.data?.type !== 'run' || event.data.runId !== runId) return;
    started = true;
    const source = `
      let lines = 0, plots = 0;
      const send = self.postMessage.bind(self);
      const render = value => {
        if (typeof value === 'string') return value;
        if (typeof value === 'number') return Object.is(value, -0) ? '-0' : String(value);
        if (value === undefined) return 'undefined';
        try {
          return JSON.stringify(value, (_key, item) =>
            typeof item === 'number' && !Number.isFinite(item) ? String(item) : item);
        } catch { return String(value); }
      };
      const console = { log: (...args) => {
        if (lines++ < 100) send({type:'log',text:args.map(render).join(' ').slice(0,4000)});
      }};
      const plot = (points, label = 'Plot') => {
        if (++plots > 8) throw new Error('At most 8 plots are allowed.');
        if (!Array.isArray(points) || points.length < 2 || points.length > 2000 ||
            !points.every(p => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite)))
          throw new Error('plot expects 2–2000 finite [x, y] pairs.');
        send({type:'plot',points,label:String(label).slice(0,200)});
      };
      self.onmessage = event => {
        try {
          new Function('console','plot',event.data)(console,plot);
          send({type:'done'});
        } catch(error) { send({type:'error',text:String(error.message).slice(0,4000)}); }
      };
    `;
    const url = URL.createObjectURL(new Blob([source], {type:'text/javascript'}));
    worker = new Worker(url);
    URL.revokeObjectURL(url);
    worker.onmessage = e => {
      if (++count > 110) {
        worker.terminate();
        send({type:'error',text:'Output limit reached.'});
        return;
      }
      const data = e.data;
      if (!data || typeof data !== 'object' || !['log','plot','error','done'].includes(data.type)) return;
      // Worker output cannot impersonate the iframe's bootstrap handshake.
      send(data.type === 'plot'
        ? {type:data.type,points:data.points,label:data.label}
        : {type:data.type,text:data.text});
    };
    worker.onerror = e => send({type:'error',text:e.message});
    worker.postMessage(event.data.code);
  });
  send({type:'ready'});
}

const runId = location.hash.slice(1);
if (/^[a-f0-9]{1,8}(?:-[a-f0-9]{1,8}){3}$/.test(runId)) bootstrap(runId);
