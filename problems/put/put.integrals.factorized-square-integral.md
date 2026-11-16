# Separate a disguised product integral

*Hard · [Original Putnam-style training](index.md)*

Let $I=\int_0^1\int_0^1\frac1{1+x+y+xy}\,dx\,dy$. Find $I/(\log2)^2$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Factor the denominator into one factor for each variable.

</details>

<details>
<summary>Hint 2</summary>

The integrand is continuous on the rectangle, so the iterated product separates.

</details>

<details>
<summary>Worked solution</summary>

A simple factorization exposes two independent logarithmic integrals.

1. The denominator is $(1+x)(1+y)$, positive on the whole square.
2. The integral separates as $[\int_0^1dx/(1+x)][\int_0^1dy/(1+y)]$.
3. Each factor is log2, so the requested ratio is $1$.

</details>
