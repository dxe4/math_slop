# Optimize using a pointwise Lipschitz envelope

*Hard · [Original Putnam-style training](index.md)*

Let f range over all real functions on $[0,1]$ with f(0)=f(1)=0 and $|f(x)-f(y)|\leq|x-y|$ for all x,y. Find the maximum of $\int_0^1f(x)\,dx$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Each endpoint provides a pointwise upper bound.

</details>

<details>
<summary>Hint 2</summary>

The smaller of the two bounds is itself an admissible function.

</details>

<details>
<summary>Worked solution</summary>

Endpoint Lipschitz bounds determine a sharp tent-shaped envelope.

1. Comparing with zero at each endpoint gives $f(x)\leq x$ and $f(x)\leq1-x$. Hence $f(x)\leq\min(x,1-x)$.
2. The tent function min(x,1-x) is one-Lipschitz, continuous and zero at both endpoints, so it is allowed.
3. Its area is $2\int_0^{1/2}x\,dx=1/4$, which is therefore the maximum.

</details>
