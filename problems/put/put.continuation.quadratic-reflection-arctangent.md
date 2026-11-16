# Quadratic reflection arctangent

*Medium · [Original Putnam-style training](index.md)*

Find $c\in\mathbb Q$ such that $\int_0^1 x/[x^2+(1-x)^2]\,dx=c\pi$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":4},"checker_scope":"Checks only the exact bounded result; derivation and domain assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Reflect $x$ about $1/2$ before integrating.

</details>

<details>
<summary>Hint 2</summary>

Complete the square in the symmetric denominator.

</details>

<details>
<summary>Worked solution</summary>

The last integral is $\arctan(1)-\arctan(-1)=\pi/2$, so $I=\pi/4$ and $c=1/4$.

1. Let $I$ be the integral. Substituting $u=1-x$ gives the same integral with numerator $1-u$ and the unchanged denominator.
2. Thus $2I=\int_0^1 1/[x^2+(1-x)^2]\,dx$. Since the denominator is $[1+(2x-1)^2]/2$, set $t=2x-1$ to get $2I=\int_{-1}^{1}dt/(1+t^2)$.
3. The last integral is $\arctan(1)-\arctan(-1)=\pi/2$, so $I=\pi/4$ and $c=1/4$.

</details>
