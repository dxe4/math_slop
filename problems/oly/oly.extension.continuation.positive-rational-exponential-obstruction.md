# Obstruct a rational-valued exponential addition law

*Hard · [Original olympiad-style problems](index.md)*

Prove no function $f:\mathbb Q_{>0}\to\mathbb Q_{>0}$ satisfies $f(x+y)=f(x)+f(y)+f(x)f(y)$ for all positive rational $x,y$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Add one to the function so its addition law becomes multiplication.

</details>

<details>
<summary>Hint 2</summary>

The value at one would have rational nth roots for every positive integer n; examine prime exponents in a reduced fraction.

</details>

<details>
<summary>Model proof</summary>

Use rational denominators to rule out a positive exponential homomorphism.

1. Let $g=1+f$, so $g(x)>1$ is rational and $g(x+y)=g(x)g(y)$. Repeated addition gives $g(1)=g(1/n)^n$ for every positive integer $n$.
2. Write $g(1)=A/B$ in lowest positive terms. For each prime, its signed exponent in this rational must be divisible by every positive integer $n$, because it is an nth power of a rational.
3. The only integer exponent with that property is zero: choose $n$ greater than its absolute value if it were nonzero. Thus every prime exponent vanishes and $A=B=1$.
4. This contradicts $g(1)>1$. Strict positivity of the original codomain is essential; permitting zero would admit the zero function.

**Self-assessment rubric**

- Transform the addition law and preserve the strict codomain information.
- Obtain rational nth-power representations for every n.
- Force every reduced prime exponent to vanish.
- Use strict positivity and identify its role.

</details>
