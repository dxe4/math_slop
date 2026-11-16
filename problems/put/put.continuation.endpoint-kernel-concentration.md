# Endpoint kernel concentration

*Medium · [Original Putnam-style training](index.md)*

Prove $\lim_{n\to\infty}n\int_0^1 x^n/(1+x)\,dx=1/2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compare $1/(1+x)$ near the endpoint $x=1$ with its endpoint value.

</details>

<details>
<summary>Hint 2</summary>

Split the integral at $1-\delta$ and control the two pieces differently.

</details>

<details>
<summary>Worked solution</summary>

On $[0,1-\delta]$ the difference is bounded and $n\int_0^{1-\delta}x^n dx\le(1-\delta)^{n+1}\to0$. Thus the limit is $g(1)=1/2$.

1. Let $g(x)=1/(1+x)$, continuous with $g(1)=1/2$. Since $n\int_0^1x^n dx=n/(n+1)\to1$, it suffices to show $n\int_0^1x^n(g(x)-g(1))dx\to0$.
2. For any $\varepsilon>0$, choose $\delta$ so $|g(x)-g(1)|<\varepsilon$ on $[1-\delta,1]$. That piece is at most $\varepsilon n/(n+1)$.
3. On $[0,1-\delta]$ the difference is bounded and $n\int_0^{1-\delta}x^n dx\le(1-\delta)^{n+1}\to0$. Thus the limit is $g(1)=1/2$.

</details>
