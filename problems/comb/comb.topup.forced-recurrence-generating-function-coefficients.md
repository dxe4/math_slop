# Keep the constant forcing series in a generating-function equation

*Hard · [Combinatorics](index.md)*

Let $a_0=2$ and a\_n=3a\_(n-1)+1 for n&gt;=1. For the formal series F(x)=sum a\_n x^n, write F=(u+v x)/(1+p x+q x^2) after multiplying out (1-x)(1-3x). Return (u,v,p,q).

```answer
{"answer":{"kind":"vector","expected":["2","-1","-4","3"],"checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

Sum the recurrence only from index one onward.

</details>

<details>
<summary>Hint 2</summary>

The forcing terms contribute x/(1-x), while the missing initial term contributes two.

</details>

<details>
<summary>Worked solution</summary>

Initial and forcing corrections determine the numerator as well as the denominator.

1. Summing gives F-2=3xF+x/(1-x).
2. Multiplying by 1-x yields (1-x)(1-3x)F=2(1-x)+x=2-x.
3. The expanded denominator is 1-4x+3x^2, giving vector (2,-1,-4,3).

</details>
