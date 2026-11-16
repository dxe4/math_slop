# Prove a dense continuity set for pointwise continuous limits

*Hard · [Real analysis](index.md)*

Let continuous real functions f\_n on \[a,b\], a&lt;b, converge pointwise to a finite f. Prove the continuity points of f form a dense $G_\delta$ subset of \[a,b\]. You may use the Baire category theorem on closed intervals and the relative oscillation omega\_f(x)=inf over delta&gt;0 of sup{\|f(u)-f(v)\|:u,v in \[a,b\], \|u-x\|,\|v-x\|&lt;delta}.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The sets where omega\_f is at least epsilon are closed.

</details>

<details>
<summary>Hint 2</summary>

On any smaller interval, the closed sets where all sufficiently late f\_n are mutually within epsilon/4 cover that interval; Baire supplies a uniform patch.

</details>

<details>
<summary>Model proof</summary>

Pointwise Cauchy control becomes uniform control on some patch, enough to make positive-oscillation sets nowhere dense.

1. For epsilon&gt;0 let E\_epsilon={x:omega\_f(x)&gt;=epsilon}. Its complement is relatively open: a neighborhood with range diameter below epsilon also works, after shrinking, at nearby points. Thus E\_epsilon is closed, and f is continuous exactly where every positive oscillation threshold is avoided.
2. Take any nonempty relatively open J in \[a,b\] and a nondegenerate closed interval I contained in J. The sets C\_N={x in I: \|f\_n(x)-f\_m(x)\|&lt;=epsilon/4 for all n,m&gt;=N} are closed and cover I by pointwise convergence. Baire gives some C\_N containing a relative open subinterval. On an interior smaller patch V this yields \|f\_N-f\|&lt;=epsilon/4 by taking m to infinity.
3. Continuity of f\_N supplies a still smaller nonempty open patch W within V where its range diameter is less than epsilon/4. The range diameter of f on W is then less than 3\*epsilon/4, so W avoids E\_epsilon. Hence the closed E\_epsilon has empty interior and is nowhere dense. The continuity set is the intersection over k&gt;=1 of the open dense complements of E\_(1/k); Baire makes this G-delta dense.

**Self-assessment rubric**

- Relate continuity to oscillation and prove the bad-threshold sets closed.
- Construct a closed countable cover and obtain valid uniform tail control on a patch.
- Shrink by continuity and conclude nowhere density at every threshold before applying Baire.

</details>
