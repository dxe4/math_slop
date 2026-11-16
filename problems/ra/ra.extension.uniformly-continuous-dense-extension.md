# Construct a unique extension through completeness

*Medium · [Real analysis](index.md)*

Let D be dense in R and f:D to R uniformly continuous. Prove f has a unique uniformly continuous extension $F:\mathbb R\to\mathbb R$. Do not assume f is bounded or that D is closed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For x outside D, approximate x by a sequence from D.

</details>

<details>
<summary>Hint 2</summary>

Uniform continuity turns input Cauchy sequences into output Cauchy sequences; compare two approximating sequences before defining the value.

</details>

<details>
<summary>Model proof</summary>

Completeness supplies missing output limits while uniformity makes them independent of the approximation.

1. For any x choose d\_n in D tending to x. The input sequence is Cauchy, so uniform continuity makes f(d\_n) Cauchy; completeness of R gives a finite limit. If e\_n is another approximation, \|d\_n-e\_n\| tends to zero, and uniform continuity gives f(d\_n)-f(e\_n) tending to zero. Thus define F(x) independently, and constant approximations show F=f on D.
2. Given epsilon&gt;0 choose delta&gt;0 so inputs in D within delta have output distance below epsilon/2. If \|x-y\|&lt;delta/2, choose approximations d\_n to x and e\_n to y; eventually \|d\_n-e\_n\|&lt;delta. Passing to limits gives \|F(x)-F(y)\|&lt;=epsilon/2&lt;epsilon. Thus F is uniformly continuous.
3. Any continuous extension must at x equal the limit along every approximating sequence from the dense set. Hence the extension is unique. Neither boundedness of f nor closedness of D was needed.

**Self-assessment rubric**

- Prove existence and independence of the proposed extension values.
- Pass a valid uniform radius to the extension with strict tolerance handled.
- Recover extension agreement and uniqueness from density.

</details>
