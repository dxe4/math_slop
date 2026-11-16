# Classify a polynomial from a two-input product identity

*Hard · [Original olympiad-style problems](index.md)*

Classify real polynomials $f$ satisfying $f(x+y)f(x-y)=f(x)^2-f(y)^2$ for every real $x,y$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The case $y=0$ forces the constant value at zero to vanish.

</details>

<details>
<summary>Hint 2</summary>

Compare the coefficient of $y^2$: the left coefficient is $ff^{\prime\prime}-(f^\prime)^2$, and the right coefficient is constant in x.

</details>

<details>
<summary>Model proof</summary>

Compare a strategically low input degree against the polynomial’s highest degree.

1. At $y=0$, the identity forces $f(0)=0$. The zero polynomial works, so consider degree $n\ge1$ and nonzero leading coefficient $a$.
2. The coefficient of $y^2$ in the left product is $f(x)f^{\prime\prime}(x)-f^\prime(x)^2$, using formal polynomial derivatives as coefficient notation. The right coefficient is a constant in $x$, namely negative the $y^2$ coefficient of $f(y)^2$.
3. The leading coefficient of that left polynomial at degree $2n-2$ is $a^2[n(n-1)-n^2]=-na^2$, nonzero. If $n>1$, it is nonconstant, a contradiction.
4. Thus $n=1$ and the zero constant term gives $f(x)=ax$. Expansion verifies every real slope, including zero. The formal derivative comparison is an exact polynomial coefficient argument, not numerical sampling.

**Self-assessment rubric**

- Force the zero constant term and separate the zero polynomial.
- Obtain the correct y-squared coefficient as a polynomial in x.
- Use the nonzero highest coefficient to exclude higher degrees.
- Verify every linear homogeneous polynomial.

</details>
