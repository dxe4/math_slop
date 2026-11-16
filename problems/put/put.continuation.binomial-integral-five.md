# Binomial integral five

*Medium · [Original Putnam-style training](index.md)*

Find $\sum_{k=0}^{4}(-1)^k\binom4k/(k+1)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Represent $1/(k+1)$ as an integral over $[0,1]$.

</details>

<details>
<summary>Hint 2</summary>

Use the binomial theorem before evaluating the integral.

</details>

<details>
<summary>Worked solution</summary>

Its integral on $[0,1]$ is $1/5$.

1. The sum is finite, so integrating termwise is immediate: it equals $\int_0^1\sum_{k=0}^4\binom4k(-x)^k\,dx$.
2. The binomial theorem turns the integrand into $(1-x)^4$.
3. Its integral on $[0,1]$ is $1/5$.

</details>
