# Bound a cubic by a sum-of-squares identity

*Hard · [Original Putnam-style training](index.md)*

Find the maximum of $x^3-3xy^2$ over real x,y satisfying $x^2+y^2=1$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Look for a companion cubic that completes a sum of squares.

</details>

<details>
<summary>Hint 2</summary>

The real and imaginary parts of a cube suggest the required polynomial identity.

</details>

<details>
<summary>Worked solution</summary>

A cubic norm identity gives a bound with an immediate attaining point.

1. The identity is $(x^3-3xy^2)^2+(3x^2y-y^3)^2=(x^2+y^2)^3$.
2. On the unit circle the right side is one, so the first cubic is at most one in absolute value.
3. At (x,y)=(1,0) it equals one, hence the maximum is $1$.

</details>
