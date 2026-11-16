# Prove Noetherianity by finite degree-by-degree cancellation

*Hard · [Abstract algebra problems](index.md)*

Prove that if R is a commutative Noetherian ring then $R[x]$ is Noetherian. Use the ideals of possible degree-n coefficients of ideal elements of degree at most n, and do not assume R is a domain.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Multiplication by x makes the coefficient ideals an ascending chain.

</details>

<details>
<summary>Hint 2</summary>

After that chain stabilizes, finitely many chosen polynomials cancel every leading term.

</details>

<details>
<summary>Model proof</summary>

Noetherian coefficient control turns arbitrary polynomial degrees into finitely many generators.

1. Let I be an ideal of R\[x\]. For n&gt;=0 let A\_n be the set of coefficients of x^n in members of I of degree at most n. This is an ideal of R, and A\_n is contained in A\_(n+1) by multiplying a witness polynomial by x.
2. The chain stabilizes at some N. For each0&lt;=n&lt;=N choose finitely many generators of A\_n and polynomials f\_(n,j) in I of degree at most n realizing them. There are finitely many chosen polynomials in total; omit zero generators.
3. For a nonzero f in I of degree d, its leading coefficient belongs to A\_min(d,N). Express it using that ideal's selected generators and subtract the corresponding combination of f\_(n,j) multiplied by x^(d-n), where n=min(d,N). The x^d coefficient cancels, leaving smaller degree; this argument remains valid with zero divisors.
4. Repeat until the remainder is zero. Thus the chosen polynomials generate I. Every ideal of R\[x\] is finitely generated, proving Noetherianity.

**Self-assessment rubric**

- Define genuine ideals and prove their ascending relationship.
- Choose actual polynomial witnesses for finitely many coefficient generators.
- Cancel leading terms over a possibly non-domain coefficient ring and terminate.

</details>
