# Track the leading Frobenius exponent through a recurrence

*Medium · [Differential equations problems](index.md)*

For $t^2y''+ty'+(t-1)y=0$, use the Frobenius form y=t\*sum from n=0 to infinity of a\_n\*t^n with a\_0=1. Find a\_3.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-1,"denominator":360},"checker_scope":"Exact requested indicial or series coefficient only; formal and analytic justification are not automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The exponent of the nth coefficient is n+1, not n.

</details>

<details>
<summary>Hint 2</summary>

The shifted t\*y term couples each coefficient to its predecessor.

</details>

<details>
<summary>Worked solution</summary>

A Frobenius shift changes every denominator in the recurrence.

1. The coefficient equation for n&gt;=1 is ((n+1)^2-1)\*a\_n+a\_(n-1)=0, or n\*(n+2)\*a\_n=-a\_(n-1).
2. Thus a\_1=-1/3 and a\_2=1/(3\*8)=1/24.
3. Then a\_3=-(1/24)/(3\*5)=-1/360.

</details>
