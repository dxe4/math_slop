# Remove an apparent endpoint singularity

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^1\frac{1-x^7}{1-x}\,dx$, interpreting the integrand at x=1 by its continuous extension.

```answer
{"answer":{"kind":"rational","expected":{"numerator":363,"denominator":140},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

The numerator is a difference of powers.

</details>

<details>
<summary>Hint 2</summary>

Cancel it as a finite geometric sum before integrating term by term.

</details>

<details>
<summary>Worked solution</summary>

A finite polynomial identity makes the removable singularity explicit.

1. For x not equal to one, $(1-x^7)/(1-x)=1+x+x^2+\cdots+x^6$. Its extension at one is seven.
2. Integration gives $1+1/2+1/3+1/4+1/5+1/6+1/7$.
3. With denominator 420 the numerator is 1089, reducing to $363/140$.

</details>
