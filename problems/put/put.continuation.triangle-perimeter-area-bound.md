# Triangle perimeter area bound

*Hard · [Original Putnam-style training](index.md)*

For a triangle of perimeter $p>0$, prove its area is at most $p^2/(12\sqrt3)$, with equality exactly for an equilateral triangle. You may use Heron’s formula.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Write the area using semiperimeter $s=p/2$.

</details>

<details>
<summary>Hint 2</summary>

Apply AM–GM to $s-a,s-b,s-c$ under their fixed sum.

</details>

<details>
<summary>Model proof</summary>

Hence $K\le s^2/(3\sqrt3)=p^2/(12\sqrt3)$. Equality forces $s-a=s-b=s-c$, equivalently $a=b=c$.

1. Heron gives $K^2=s(s-a)(s-b)(s-c)$ for sides $a,b,c$ and $s=p/2$. The three positive factors sum to $3s-(a+b+c)=s$.
2. AM–GM yields $(s-a)(s-b)(s-c)\le(s/3)^3$, so $K^2\le s^4/27$.
3. Hence $K\le s^2/(3\sqrt3)=p^2/(12\sqrt3)$. Equality forces $s-a=s-b=s-c$, equivalently $a=b=c$.

**Self-assessment rubric**

- Apply Heron with a fixed semiperimeter and the three complementary side factors.
- Bound the product of complementary factors with their fixed sum.
- Convert the bound to p²/(12√3) and characterize equilateral equality.

</details>
