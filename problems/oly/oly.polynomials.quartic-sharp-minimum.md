# Recover a quartic then complete a hidden square

*Hard · [Original olympiad-style problems](index.md)*

A monic quartic $P$ satisfies $P(0)=P(1)=P(2)=P(3)=4$. Find its global minimum on the real line.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

The four roots of P-4 determine that monic quartic exactly.

</details>

<details>
<summary>Hint 2</summary>

Group the factors x(x-3) and (x-1)(x-2), which differ by a constant.

</details>

<details>
<summary>Worked solution</summary>

The interpolation structure produces a quadratic expression in one repeated factor.

1. We have $P(x)=4+x(x-1)(x-2)(x-3)$. Put t=x^2-3x to obtain $P=4+t(t+2)=(t+1)^2+3$.
2. This gives the global lower bound three.
3. The equation t=-1 is $x^2-3x+1=0$, which has real roots, so the bound is attained and the minimum is $3$.

</details>
