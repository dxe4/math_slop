# Pass Darboux control through the absolute value map

*Medium · [Real analysis](index.md)*

Prove that if real bounded f is Riemann integrable on \[a,b\], then $|f|$ is Riemann integrable there. Use cell oscillations and do not assume a priori that the new function is integrable.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Absolute value changes two output values by no more than their original difference.

</details>

<details>
<summary>Hint 2</summary>

Compare Darboux gaps before invoking any integral theorem.

</details>

<details>
<summary>Model proof</summary>

A Lipschitz output transformation preserves the integrability criterion.

1. For any cell I and x,y in I, \|\|f(x)\|-\|f(y)\|\|&lt;=\|f(x)-f(y)\|. Taking suprema over pairs gives osc\_I \|f\|&lt;=osc\_I f.
2. Thus for every partition, U(P,\|f\|)-L(P,\|f\|)&lt;=U(P,f)-L(P,f). The function \|f\| is bounded because f is bounded.
3. Given any positive tolerance, choose a partition making f's gap smaller than it. The same partition controls the new gap, so Darboux's criterion proves integrability of \|f\|. The degenerate interval is immediate.

**Self-assessment rubric**

- Derive the whole-cell comparison from the pointwise reverse triangle inequality.
- Keep boundedness and partition weights in the Darboux estimate.
- Apply the criterion without assuming the conclusion during the proof.

</details>
