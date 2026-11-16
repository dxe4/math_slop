# Construct a constant-sum uniform coupling outside the affine class

*Hard · [Probability problems](index.md)*

Construct three random variables $X_1,X_2,X_3$, each uniform on $[0,1]$, such that $X_1+X_2+X_3=3/2$ almost surely. Also prove that no construction with $X_i=a_iU+b_i$ for one uniform $U$ on $[0,1]$ and fixed real coefficients can satisfy these requirements.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Find three coordinates with a constant sum whose separate distributions cover different parts of the interval.

</details>

<details>
<summary>Hint 2</summary>

Randomly permute the coordinates to repair the marginals, then examine the slopes forced by an affine uniform image.

</details>

<details>
<summary>Model proof</summary>

A symmetrised mixed-scale construction attains zero sum variance, while an odd number of affine uniform slopes cannot cancel.

1. Let $V$ be uniform on $[0,1/2]$ and form $(V,V+1/2,1-2V)$. Its sum is exactly $3/2$. Independently apply a uniformly random permutation of its three coordinates to obtain $X_1,X_2,X_3$.
2. Each coordinate law is the equally weighted mixture of uniforms on $[0,1/2]$, $[1/2,1]$ and $[0,1]$. Its density on either half interval is $(2+1)/3=1$, so every marginal is uniform on the full interval.
3. For an affine image $a_iU+b_i$ to have exactly that marginal, its interval range must be $[0,1]$. Thus it is either $U$ or $1-U$, with slope $+1$ or $-1$.
4. A constant sum would require the three slopes to sum to zero. An odd number of signs cannot do so, ruling out the entire stated affine class despite the existence of the permuted coupling.

**Self-assessment rubric**

- Give a well-defined random vector with the required constant total.
- Prove every marginal is uniform, including the unequal-scale pieces.
- Characterise affine maps of one uniform variable that retain its full marginal.
- Use the constant-sum requirement to prove impossibility in that affine class.

</details>
