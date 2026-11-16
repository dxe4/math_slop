// Shared browser math-flow controller for the reader and static book.
export const mathFlowCSS = `
.math-flow-candidate .math-phrase{display:inline;white-space:normal}
.math-flow-candidate .inline-math,.math-flow-candidate .inline-math.scrollable{display:inline;white-space:normal;overflow:visible}
.math-flow-candidate .inline-math .katex{white-space:normal}
.math-flow-candidate .inline-math.math-flow-compact{display:inline-block;max-width:100%;white-space:nowrap}
.math-flow-candidate .inline-math.math-flow-compact .katex{white-space:nowrap}
.math-flow-candidate .math-flow-original-punctuation{position:absolute;left:0;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.math-flow-candidate .math-flow-visible-punctuation{font-family:Georgia,Cambria,"Times New Roman",serif;font-size:calc(1em / 1.21);user-select:none}
.math-flow-candidate .inline-math.math-flow-atomic{display:inline-block;max-width:100%;min-width:0;overflow-x:auto;white-space:nowrap;outline-offset:2px;padding-block:.4em}
.math-flow-candidate .inline-math.math-flow-atomic .katex{white-space:nowrap}
.math-flow-candidate .math-phrase:has(>.math-flow-atomic){display:inline-flex;max-width:100%;min-width:0;flex-wrap:wrap;align-items:baseline}
.math-flow-candidate .math-phrase:has(>.math-flow-scroll)::after{content:"↔ Scroll formula";display:block;flex-basis:100%;font:0.75em/1.4 system-ui,sans-serif;color:inherit;opacity:.85}
.math-flow-candidate .math-phrase:has(>.math-flow-scroll-y:not(.math-flow-scroll-x))::after{content:"↕ Scroll formula"}
.math-flow-candidate .math-phrase:has(>.math-flow-scroll-x.math-flow-scroll-y)::after{content:"↔ ↕ Scroll formula"}
.math-flow-candidate .inline-math:not(:has(.katex)){overflow-wrap:anywhere}
.math-flow-candidate .key-result:has(>.typeset-equation.math-flow-scroll-block)::after{content:"↔ Scroll equation";display:block;font:0.75em/1.4 system-ui,sans-serif;color:inherit;opacity:.85}
.math-flow-candidate .key-result:has(>.typeset-equation.math-flow-scroll-y:not(.math-flow-scroll-x))::after{content:"↕ Scroll equation"}
.math-flow-candidate .key-result:has(>.typeset-equation.math-flow-scroll-x.math-flow-scroll-y)::after{content:"↔ ↕ Scroll equation"}
@media print{
.math-flow-candidate .inline-math.math-flow-atomic{display:inline;max-width:none;overflow:visible;white-space:normal;padding:0}
.math-flow-candidate .inline-math.math-flow-atomic .katex{white-space:normal}
.math-flow-candidate .math-phrase:has(>.math-flow-atomic){display:inline;max-width:none}
.math-flow-candidate .math-phrase:has(>.math-flow-scroll)::after,.math-flow-candidate .key-result:has(>.typeset-equation.math-flow-scroll-block)::after{display:none}
}
`;

export function installMathFlow(root, instructionsId, observeRootResize = true) {
  root.classList.add('math-flow-candidate');
  let frame = 0, disconnected = false;
  function decorate() {
    // Formulas without trailing punctuation have no phrase wrapper in the
    // existing renderer. Give them the same layout and visible cue surface.
    for (const math of root.querySelectorAll('.inline-math')) {
      if (math.parentElement.classList.contains('math-phrase')) continue;
      const phrase = document.createElement('span');
      phrase.className = 'math-phrase';
      math.before(phrase);
      phrase.append(math);
    }
    for (const phrase of root.querySelectorAll('.math-phrase')) {
      const math = phrase.querySelector('.inline-math');
      const punctuation = phrase.querySelector('.math-punctuation');
      const last = [...(math?.querySelectorAll('.katex-html > .base') || [])].at(-1);
      if (!last || !punctuation || last.querySelector('.math-flow-visible-punctuation')
          || math.classList.contains('math-flow-error-fallback') || math.querySelector('.katex-error')) continue;
      const copy = document.createElement('span');
      copy.className = 'math-flow-visible-punctuation';
      copy.textContent = punctuation.textContent;
      copy.setAttribute('aria-hidden', 'true');
      last.append(copy);
      punctuation.classList.add('math-flow-original-punctuation');
    }
  }
  function update() {
    frame = 0;
    if (disconnected || !root.isConnected) return;
    decorate();
    const plans=[];
    // DOM rectangles and KaTeX base rectangles share painted coordinates.
    // clientWidth and computed padding are CSS pixels, so convert them with
    // the element's own layout scale before comparing widths under CSS zoom.
    const contentWidth = element => {
      const style=getComputedStyle(element);
      const scale=element.offsetWidth ? element.getBoundingClientRect().width/element.offsetWidth : 1;
      return Math.max(0,(element.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight))*scale);
    };
    // Read the geometry of every formula before changing any layout class.
    // A full chapter contains many bases; alternating reads and writes would
    // force a complete chapter layout once for each formula.
    for (const math of root.querySelectorAll('.inline-math')) {
      if (!math.getClientRects().length) { plans.push({math,hidden:true}); continue; }
      let block=math.closest('.math-phrase')?.parentElement||math.parentElement;
      while(block&&['inline','contents'].includes(getComputedStyle(block).display))block=block.parentElement;
      if(!block)continue;
      // A shrink-wrapped block can report a slightly smaller content width
      // than a formula it already contains. Count that painted space only
      // when the formula stays inside the block's actual border box.
      const blockRect=block.getBoundingClientRect(),mathRect=math.getBoundingClientRect();
      const contained=mathRect.left>=blockRect.left&&mathRect.right<=blockRect.right;
      let available=Math.max(contentWidth(block),contained?mathRect.width:0);
      const parent=block.parentElement;
      const parentStyle=parent&&getComputedStyle(parent);
      if(parentStyle?.display.startsWith('flex')){
        // A flex item can shrink-wrap a formula to an integer-width box.
        // Its parent has more real line space; account for siblings and gaps
        // instead of feeding the formula's own scrollport back into fitting.
        const siblings=[...parent.children].filter(child=>child!==block&&child.getClientRects().length);
        const gap=parseFloat(parentStyle.columnGap)||0;
        const parentScale=parent.offsetWidth ? parent.getBoundingClientRect().width/parent.offsetWidth : 1;
        const remaining=contentWidth(parent)-siblings.reduce((sum,child)=>sum+child.getBoundingClientRect().width,0)-gap*parentScale*siblings.length;
        available=Math.max(available,remaining);
      }
      const widths=[...math.querySelectorAll('.katex-html > .base')].map(base=>base.getBoundingClientRect().width);
      const intrinsic=widths.reduce((sum,width)=>sum+width,0);
      const mathScale=math.offsetWidth ? math.getBoundingClientRect().width/math.offsetWidth : block.offsetWidth ? block.getBoundingClientRect().width/block.offsetWidth : 1;
      const compact=widths.length>0&&intrinsic<=Math.min(available,8*parseFloat(getComputedStyle(math).fontSize)*mathScale);
      plans.push({math,compact,atomic:Math.max(0,...widths)>available});
    }
    for(const plan of plans)if(!plan.hidden){
      plan.math.classList.toggle('math-flow-compact',plan.compact);
      plan.math.classList.toggle('math-flow-atomic',plan.atomic);
    }
    // Read hidden overflow only after all width-affecting writes are done.
    for(const plan of plans)if(!plan.hidden){
      const math=plan.math;
      const style=getComputedStyle(math);
      plan.horizontal=style.overflowX!=='visible'&&math.clientWidth>0&&math.scrollWidth>math.clientWidth;
      plan.vertical=style.overflowY!=='visible'&&math.clientHeight>0&&math.scrollHeight>math.clientHeight;
    }
    for(const {math,hidden,horizontal,vertical} of plans){
      if(hidden){math.tabIndex=-1;continue;}
      const overflowing=horizontal||vertical;
      math.classList.toggle('math-flow-scroll',overflowing);
      math.classList.toggle('math-flow-scroll-x',horizontal);
      math.classList.toggle('math-flow-scroll-y',vertical);
      if(overflowing){
        math.tabIndex=0;math.setAttribute('role','region');math.setAttribute('aria-label','Scrollable formula');math.setAttribute('aria-describedby',horizontal&&vertical?instructionsId+'-formula-both':horizontal?instructionsId:instructionsId+'-formula-vertical');
      }else{
        math.tabIndex=-1;math.removeAttribute('role');math.removeAttribute('aria-label');math.removeAttribute('aria-describedby');
      }
    }
    const equationPlans=[];
    // Overflow classes add a cue after the equation. Finish every geometry
    // read before those cues or accessibility attributes can invalidate layout.
    for (const equation of root.querySelectorAll('.key-result > .typeset-equation')) {
      const visible=equation.getClientRects().length>0&&equation.clientWidth>0;
      const horizontal=visible&&equation.scrollWidth>equation.clientWidth;
      const vertical=visible&&equation.scrollHeight>equation.clientHeight;
      equationPlans.push({equation,horizontal,vertical});
    }
    for (const {equation,horizontal,vertical} of equationPlans) {
      const overflowing=horizontal||vertical;
      equation.classList.toggle('math-flow-scroll-block',overflowing);
      equation.classList.toggle('math-flow-scroll-x',horizontal);
      equation.classList.toggle('math-flow-scroll-y',vertical);
      equation.tabIndex=overflowing?0:-1;
      if (overflowing) {
        equation.setAttribute('role','region');
        equation.setAttribute('aria-label','Scrollable equation');
        equation.setAttribute('aria-describedby',horizontal&&vertical?instructionsId+'-both':horizontal?instructionsId:instructionsId+'-vertical');
      } else {
        equation.removeAttribute('role');
        equation.removeAttribute('aria-label');
        equation.removeAttribute('aria-describedby');
      }
    }
  }
  function schedule() {
    if (!disconnected && !frame) frame = requestAnimationFrame(update);
  }
  const resize = new ResizeObserver(schedule);
  if (observeRootResize) resize.observe(root);
  // The static book has fixed authored content. Its root resize can be caused
  // by this controller's own overflow cues, so refresh on CSS zoom instead.
  const zoom = observeRootResize ? null : new MutationObserver(schedule);
  zoom?.observe(document.documentElement, {attributes: true, attributeFilter: ['style']});
  const mutation = new MutationObserver(records => {
    if (records.some(record => record.type === 'attributes' || record.type === 'childList' && [...record.addedNodes].some(node =>
      node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('math-flow-visible-punctuation')))) schedule();
  });
  mutation.observe(root, {childList: true, attributes: true, attributeFilter: ['hidden', 'open'], subtree: true});
  root.addEventListener('toggle', schedule, true);
  window.addEventListener('reader-settings-change', schedule);
  window.addEventListener('resize', schedule);
  document.fonts.addEventListener('loadingdone', schedule);
  document.fonts.ready.then(schedule);
  schedule();
  return {
    refresh: schedule,
    disconnect() {
      disconnected = true;
      if (frame) cancelAnimationFrame(frame);
      resize.disconnect();
      zoom?.disconnect();
      mutation.disconnect();
      root.removeEventListener('toggle', schedule, true);
      window.removeEventListener('reader-settings-change', schedule);
      window.removeEventListener('resize', schedule);
      document.fonts.removeEventListener('loadingdone', schedule);
    }
  };
}
