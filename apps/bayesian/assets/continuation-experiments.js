/* Progressive native forms. No legacy controls, storage, or network access. */
(function () {
  'use strict';
  const math=window.BayesContinuationMath;
  if (!math) return;
  const fmt=x=>Number.isInteger(x) ? String(x) : Math.abs(x)<1e-6 ? x.toExponential(5) : x.toFixed(9).replace(/0+$/,'').replace(/\.$/,'');
  function table(headers,rows,caption) {
    return `<caption>${caption}</caption><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((c,i)=>i===0?`<th scope="row">${c}</th>`:`<td>${typeof c==='number'?fmt(c):c}</td>`).join('')}</tr>`).join('')}</tbody>`;
  }
  function svg(content,title) {return `<svg viewBox="0 0 760 330" role="img" aria-label="${title}"><rect width="760" height="330" fill="white"/>${content}</svg>`;}
  function covariancePlot(rho) {
    const xy=(x,y)=>[175+48*(x-1),160-48*(y+.5)];
    function ellipse(corr,sd) {
      return Array.from({length:181},(_,i)=>{const a=2*Math.PI*i/180,r=Math.sqrt(4.605170185988092);return xy(1+r*sd*Math.cos(a),-.5+r*sd*(corr*Math.cos(a)+Math.sqrt(1-corr*corr)*Math.sin(a))).join(',');}).join(' ');
    }
    const result=math.covarianceContrasts({rho});
    let content='<text x="22" y="25">90% joint ellipses</text><line x1="25" y1="160" x2="325" y2="160" stroke="#aaa"/><line x1="175" y1="35" x2="175" y2="285" stroke="#aaa"/>';
    content+=`<polyline points="${ellipse(rho,1)}" fill="none" stroke="#176b7a" stroke-width="3"/><polyline points="${ellipse(0,Math.sqrt(1-rho*rho))}" fill="none" stroke="#a34b1f" stroke-dasharray="7 4" stroke-width="3"/>`;
    content+='<text x="25" y="308">Offset 1 →; Offset 2 ↑; center (1, −0.5)</text><text x="350" y="30">Contrast variances (squared units)</text>';
    [['Sum',result.exact.sumVariance],['Difference',result.exact.differenceVariance]].forEach(([name,v],i)=>{
      const y=85+i*100;content+=`<text x="350" y="${y-18}">${name}</text><rect x="350" y="${y}" width="${v*75}" height="22" fill="#176b7a"/><text x="${360+v*75}" y="${y+17}">${fmt(v)}</text><rect x="350" y="${y+26}" width="${result.meanField.sumVariance*75}" height="22" fill="#a34b1f"/><text x="${360+result.meanField.sumVariance*75}" y="${y+43}">${fmt(result.meanField.sumVariance)}</text>`;
    });
    return svg(content+'<text x="350" y="300">Teal / solid: exact; rust / dashed: mean field</text>','Covariance ellipses and exact versus mean-field variances');
  }
  function studyPlot(r) {
    let content='<text x="25" y="25">Approval probabilities: prior average versus fixed truth</text>';
    [['Sequential assurance',r.assurance],['Fixed-cap assurance',r.fixed.assurance],['Sequential at fixed truth',r.fixedTruthApproval],['Fixed cap at fixed truth',r.fixed.fixedTruthApproval]].forEach(([label,v],i)=>{
      const y=55+i*60;content+=`<text x="20" y="${y+18}">${label}</text><rect x="270" y="${y}" width="${v*380}" height="26" fill="${i<2?'#176b7a':'#a34b1f'}"/><text x="${280+v*380}" y="${y+19}">${fmt(v)}</text>`;
    });
    content+='<line x1="270" y1="295" x2="650" y2="295" stroke="#555"/><text x="267" y="318">0</text><text x="642" y="318">1</text>';
    return svg(content,'Approval probabilities, on a common zero to one scale');
  }
  for (const id of ['covariance','study-design']) {
    const prefix='continuation-'+id,form=document.getElementById(prefix+'-form');if(!form) continue;
    const get=s=>document.getElementById(prefix+'-'+s),status=get('status');
    function run(message='Updated') {
      const args={};let bad=null;
      for(const input of form.querySelectorAll('input')) {
        input.removeAttribute('aria-invalid');
        if(input.value.trim()==='' || !input.validity.valid || !Number.isFinite(input.valueAsNumber)) {input.setAttribute('aria-invalid','true');bad ||= input;}
        args[input.name]=input.valueAsNumber;
      }
      if(bad) {status.textContent=`Enter a valid value for ${bad.labels[0].textContent}. Results still show the previous valid settings.`;bad.focus();return;}
      try {
        const r=id==='covariance'?math.covarianceContrasts(args):math.studyDesign(args);
        if(id==='covariance') {
          get('table').innerHTML=table(['Quantity','Exact joint','Mean field'],[['Sum mean',r.exact.sumMean,r.meanField.sumMean],['Sum variance',r.exact.sumVariance,r.meanField.sumVariance],['Difference mean',r.exact.differenceMean,r.meanField.differenceMean],['Difference variance',r.exact.differenceVariance,r.meanField.differenceVariance],[`P(sum > ${args.threshold})`,r.exact.sumTail,r.meanField.sumTail],[`P(difference > ${args.threshold})`,r.exact.differenceTail,r.meanField.differenceTail]],`Current correlation ${args.rho}; event threshold ${args.threshold}`);
          get('detail').innerHTML='';get('plot').innerHTML=covariancePlot(args.rho);
          status.textContent=`${message}: correlation ${args.rho}; sum variance ${fmt(r.exact.sumVariance)}, difference variance ${fmt(r.exact.differenceVariance)}. Exact sum tail ${fmt(r.exact.sumTail)}.`;
        } else {
          get('table').innerHTML=table(['Quantity','Sequential','Fixed cap'],[['Assurance (uniform design prior)',r.assurance,r.fixed.assurance],['Expected size (design prior)',r.expectedSize,r.fixed.expectedSize],[`Approval at fixed truth ${args.fixedTruth}`,r.fixedTruthApproval,r.fixed.fixedTruthApproval],['Expected size at fixed truth',r.fixedTruthExpectedSize,args.cap]],`Looks ${args.firstLook}, ${args.cap}; success ≥ ${args.successThreshold}; futility ≤ ${args.futilityThreshold}; p₀ = ${args.p0}`);
          get('detail').innerHTML=table(['Terminal (n,s)','Decision','Posterior P(p > p₀)','Design mass','Fixed-truth mass'],r.terminal.map(t=>[`(${t.n}, ${t.s})`,t.decision,t.posteriorSuccess,t.designMass,t.truthMass]),'Terminal states: zero mass means the policy cannot reach this state');
          get('plot').innerHTML=studyPlot(r);
          status.textContent=`${message}: assurance ${fmt(r.assurance)}, expected size ${fmt(r.expectedSize)}; approval at fixed truth ${args.fixedTruth}: ${fmt(r.fixedTruthApproval)}. Terminal design mass ${fmt(r.terminalMass)}.`;
        }
        get('current').hidden=false;
      } catch(error) {
        if(!(error instanceof RangeError)) throw error;
        const name=args.firstLook>=args.cap?'firstLook':'futilityThreshold';const input=form.elements.namedItem(name);
        if(input){input.setAttribute('aria-invalid','true');input.focus();}
        status.textContent=error.message+' Results still show the previous valid settings.';
      }
    }
    form.hidden=false;form.querySelector('fieldset').disabled=false;
    form.addEventListener('submit',event=>{event.preventDefault();run();});
    form.addEventListener('reset',()=>setTimeout(()=>run('Reset to defaults'),0));
    run('Default calculation');
  }
})();
