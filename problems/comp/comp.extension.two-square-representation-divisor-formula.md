# Evaluate a representation count with its sign and order convention

*Easy · [Computational arithmetic problems](index.md)*

Let r2(n) count all ordered integer pairs (a,b), with signs distinguished, satisfying a^2+b^2=n. Use $r_2(n)=4(d_1(n)-d_3(n))$, where d1,d3 count positive divisors congruent to one or three modulo four. Find r2(65).

```answer
{"answer":{"kind":"integer","expected":"16","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

List the positive divisors of sixty-five.

</details>

<details>
<summary>Hint 2</summary>

All four divisors fall in the same relevant residue class.

</details>

<details>
<summary>Worked solution</summary>

The divisor formula already includes ordering and sign multiplicities.

1. The positive divisors are 1,5,13,65.
2. Each is one modulo four, so d1=4 and d3=0.
3. The formula gives r2(65)=16, counting signed ordered pairs as specified.

</details>
