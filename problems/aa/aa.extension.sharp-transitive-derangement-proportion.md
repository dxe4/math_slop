# Prove a quantitative derangement bound with a sharp family

*Hard · [Abstract algebra problems](index.md)*

A finite group $G$ acts transitively on n&gt;1 points. Prove at least \|G\|/n elements fix no point. Use the first and second moments of the fixed-point count F(g), and show equality occurs for the affine group x-&gt;a\*x+b over a finite field.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The mean of F is one and the mean of F squared is the number r&gt;=2 of ordered-pair orbits.

</details>

<details>
<summary>Hint 2</summary>

For F&gt;=1 use F(F-1)&lt;=n(F-1); the expected positive part of F-1 is the derangement probability.

</details>

<details>
<summary>Model proof</summary>

A second orbit count sharpens existence of derangements to an exact proportion bound.

1. By the orbit-counting lemma on points, E F=1. On ordered pairs the fixed count is F^2, so E F^2=r, the number of G-orbits on Omega^2. There is at least the diagonal orbit and a distinct off-diagonal orbit, so r&gt;=2.
2. Let d be the proportion with F=0. On F&gt;=1, F(F-1)&lt;=n\*(F-1). The expectation of (F-1) restricted to F&gt;=1 is E F-Pr(F&gt;=1)=1-(1-d)=d. Thus r-1=E F(F-1)&lt;=n\*d, giving d&gt;=(r-1)/n&gt;=1/n.
3. For the affine group of a field with q elements, the q-1 nonidentity translations have no fixed point. Every map with a different from one has exactly one fixed point, and the identity fixes all q. Hence precisely q-1 of q\*(q-1) elements are derangements, proportion 1/q, attaining the bound.

**Self-assessment rubric**

- Justify both moment identities and the off-diagonal rank lower bound.
- Handle the zero-fixed-point case correctly in the positive-part expectation.
- Count fixed points for every affine parameter type and verify equality.

</details>
