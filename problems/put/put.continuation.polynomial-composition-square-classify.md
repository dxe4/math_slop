# Polynomial composition square classify

*Hard · [Original Putnam-style training](index.md)*

Classify all complex polynomials $P$ satisfying $P(x^2)=P(x)^2$ for every complex $x$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Compare the leading and next-highest nonzero coefficients of a nonconstant solution.

</details>

<details>
<summary>Hint 2</summary>

Use the gap between its largest two exponents to rule out a second term.

</details>

<details>
<summary>Model proof</summary>

Hence $P$ has one term, $P=x^d$ for some integer $d\ge1$. Direct substitution verifies $0$, $1$, and every such monomial.

1. The zero polynomial works. For a nonzero polynomial, comparison of leading coefficients in $P(x^2)=P(x)^2$ makes the leading coefficient equal to its square, hence one; a nonzero constant solution is therefore $1$.
2. Suppose a nonconstant $P$ has a next-highest nonzero term $b x^k$ below leading $x^d$, $k<d$. In $P(x)^2$, the coefficient at degree $d+k$ is $2b$; in $P(x^2)$ a term of that degree would require a term of degree $(d+k)/2$, strictly between $k$ and $d$, which is absent (or the degree is odd). Thus $b=0$, contradiction.
3. Hence $P$ has one term, $P=x^d$ for some integer $d\ge1$. Direct substitution verifies $0$, $1$, and every such monomial.

**Self-assessment rubric**

- Handle zero/constant cases and force leading coefficient one.
- Compare the degree d+k coefficient from the two highest nonzero terms.
- Conclude only monomials remain and verify all listed solutions.

</details>
