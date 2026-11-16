# Include both initial corrections in a generating function

*Hard · [Combinatorics](index.md)*

Let $a_0=1$, a1=0 and a\_n=2a\_(n-1)+a\_(n-2) for n&gt;=2. Write its formal generating function as (u+v x)/(1+p x+q x^2). Return (u,v,p,q).

```answer
{"answer":{"kind":"vector","expected":["1","-2","-2","-1"],"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Remove both initial coefficients before summing the recurrence.

</details>

<details>
<summary>Hint 2</summary>

The first shifted sum also needs its missing a0 correction.

</details>

<details>
<summary>Worked solution</summary>

Second-order recurrence sums require two initial-index corrections.

1. Writing F=sum a\_n x^n, the sum over n&gt;=2 gives F-1=2x(F-1)+x^2F.
2. Thus (1-2x-x^2)F=1-2x.
3. The requested vector is (1,-2,-2,-1), including the negative linear numerator correction.

</details>
