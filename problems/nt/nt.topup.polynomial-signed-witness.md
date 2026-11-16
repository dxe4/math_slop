# Construct a signed divisibility witness as an identity

*Medium · [Number theory](index.md)*

For each integer $x$, write an integer polynomial k(x) satisfying -14 k(x)=98x+42. Enter that polynomial in x.

```answer
{"answer":{"kind":"expression","expected":"-7*x-3","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Factor out the signed divisor from both terms.

</details>

<details>
<summary>Hint 2</summary>

Divide each coefficient by negative fourteen.

</details>

<details>
<summary>Worked solution</summary>

A polynomial integer witness proves divisibility at every integer input.

1. The coefficient quotient is $98/(-14)=-7$ and the constant quotient is $42/(-14)=-3$.
2. Thus $k(x)=-7x-3$, which is an integer for every integer x.
3. Multiplying gives $-14(-7x-3)=98x+42$, establishing the requested identity.

</details>
