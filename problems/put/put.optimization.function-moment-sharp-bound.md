# Attain a sharp integral inequality

*Hard · [Original Putnam-style training](index.md)*

Among continuous real functions f on $[0,1]$ satisfying $\int_0^1f(x)^2\,dx=1$, find the maximum of $[\int_0^1xf(x)\,dx]^2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":3},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Apply the integral Cauchy-Schwarz inequality.

</details>

<details>
<summary>Hint 2</summary>

Check that a continuous function proportional to x meets the norm constraint.

</details>

<details>
<summary>Worked solution</summary>

An integral norm bound is sharp when the functions are proportional.

1. Cauchy-Schwarz gives the requested square at most $[\int_0^1x^2\,dx][\int_0^1f^2\,dx]=1/3$.
2. The continuous function f(x)=sqrt(3)x has squared integral norm one.
3. It attains the bound, so the maximum is $1/3$.

</details>
