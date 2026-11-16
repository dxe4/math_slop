# Least common multiple: use positive input identity

*Easy · [Number theory](index.md)*

For positive integers a,b, their greatest common divisor gcd(a,b) and least common multiple satisfy $\gcd (a,b) \times  \lcm (a,b) = ab$. Given $a = 9, b = 15$ and greatest common divisor $3$, find the lcm.

```answer
{"answer":{"kind":"integer","expected":45,"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Substitute the supplied values into the identity.

</details>

<details>
<summary>Hint 2</summary>

Divide the product by the gcd and verify divisibility by both inputs.

</details>

<details>
<summary>Worked solution</summary>

The gcd-lcm identity applies to the stated positive inputs.

1. The identity gives $3$ × lcm = $9 \times  15 = 135$.
2. Thus lcm = $45$, and $45$ is divisible by both $9$ and $15$.

</details>
