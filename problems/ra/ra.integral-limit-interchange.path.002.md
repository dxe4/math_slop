# Construct a moving error witness and an integral-error tail

*Hard · [Real analysis](index.md)*

Let q0 have heights $2,-1,2$ on the three OPEN thirds of $[0,1]$, and value $0$ at $0,1/3,2/3,1$ and outside $[0,1]$. Now REMOVE the vertical amplification: $g_n(x)=q_0(nx)$ on $[0,1]$, for every positive integer n. Construct BOTH an exact rational r and a positive integer N. In the declared moving-input family $x_{n}=r/n$, require $x_{n}\in [0,1]$ and \|$g_{n}(x_{n})$\|≥$1$ for EVERY positive n; separately require $\left|\int_0^1g_n(x)\,dx\right|<1/10$ for EVERY $n\geq N$. Equality is allowed in the FUNCTION-error requirement, while the INTEGRAL-error bound is strict. These are different quantities and different quantifiers. Each field permits at most $80$ digits and $2,048$ characters. In your optional explanation, distinguish the moving witness against uniform convergence from successful integral control and justify the pointwise limit. This signed-step and moving-input interaction is newly authored; the general interchange theorem and standard shrinking-support discussion are in Jiří Lebl, Basic Analysis §6.2.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §6.2, Example 6.2.3 (https://www.jirka.org/ra/html/sec\_liminter.html). Mathematical mechanism reference: the source uses triangular shrinking support. Euler authors the signed-step profile, moving-input and integral-tail interaction and explanations; the source figure is not reproduced. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"moving_input_integral_tail_with_open_reasoning","expected_constraints":{"model":"signed_thirds"},"checker_scope":"Checks the whole declared reciprocal moving-input rule and the whole integral tail for this fixed signed-thirds sequence. Exactly rational 0<r<1 excluding 1/3 and 2/3, and integers N≥11, are accepted. The negative middle cell qualifies at absolute-value equality 1; every cut has value 0. Existing integer-witness roles remain unchanged. Well-formed insufficient pairs are incorrect; malformed or resource-excess fields are invalid. Optional writing and general proof competence remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

For the moving input, simplify $g_{n}(r/n)$ using the actual definition of q0. Retain its zero values at every cut and the absolute value in the requested error.

</details>

<details>
<summary>Hint 2</summary>

For the integral, use the signed heights and the widths of all three scaled cells. The support shrinks even though there is no shrinking uniform height bound.

</details>

<details>
<summary>Worked solution</summary>

A moving point can keep the function error large while the signed integral error becomes small.

1. The fixed profile is a valid unit-area example from the previous family: its signed area is $(2-1+2)/3=1$. Each $g_{n}$ is Riemann integrable, and its integral is this area divided by n, namely $1/n$.
2. At $x=0$ every value is $0$. For each fixed $x>0, nx$ eventually exceeds 1, so the pointwise limit is $0$. However $||g_{n}|| \infty =2$ for every n, so convergence is not uniform.
3. For $x_{n}=r/n$, cancellation gives $g_{n}(x_{n})$=q0(r) for EVERY positive n. The complete permitted scales are $0<r<1$ except $r=1/3$ and $r=2/3$. They give inputs in $[0,1]$, and the fixed profile value has absolute value at least $1$. At every cut, including $0$ and 1, it is $0$ and fails.
4. Any r in the middle open third works: q0(r)=$-1$ and $|-1|=1$ meets the non-strict FUNCTION-error requirement exactly. For example $r=1/2$ works just as $r=1/4$ and $r=3/4$ do. This moving rule defeats any proposed uniform tail: for any tail start T choose a positive $n\geq T$ and use $x_{n}$, whose error is at least $1$.
5. The INTEGRAL-error condition is instead $1/n<1/10$ for every $n\geq N$. Exactly integers $N\geq 11$ work. $N=10$ fails at equality, while all $n\geq 11$ have integral error at most $1/11<1/10$; any smaller positive N still includes the failing term $n=10$.
6. Thus $r=1/2,N=11$ is one valid pair, with many other exact scales and larger conservative thresholds also accepted. The reciprocal family is the assessed moving-rule family; it is not claimed to exhaust all possible moving witnesses.
7. The functions do not converge uniformly, yet their integrals tend to $0$, the integral of their pointwise limit. Uniform convergence is a sufficient guarantee for interchange; its absence alone does not decide whether the integral outcome succeeds. The optional general arguments remain unassessed.

</details>
