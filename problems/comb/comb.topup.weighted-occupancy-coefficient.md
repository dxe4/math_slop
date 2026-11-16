# Interpret one finite choice and one unrestricted arithmetic progression

*Medium · [Combinatorics](index.md)*

As a formal power series, find the coefficient of $x^7$ in (1+x^2+x^4)/(1-x^3).

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact finite count, coefficient, set or declared representation only. Worked counting arguments and recurrence derivations are not automatically proof-checked; no new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The denominator series has exponents zero, three, six and so on.

</details>

<details>
<summary>Hint 2</summary>

For each of the three numerator exponents, test whether the remaining exponent is a nonnegative multiple of three.

</details>

<details>
<summary>Worked solution</summary>

A product coefficient counts valid decompositions of the target exponent.

1. The denominator expands formally as 1+x^3+x^6+..., each coefficient one.
2. The target seven can be written as four plus three, but neither seven minus zero nor seven minus two is a multiple of three.
3. Exactly one exponent pair contributes, so the coefficient is one.

</details>
