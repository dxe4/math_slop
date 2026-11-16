# Determine the integral closure using traces and parity

*Hard · [Abstract algebra problems](index.md)*

Prove that the integral closure of Z in $\mathbb Q(i)$ is Z\[i\]. You may use closure of algebraic integers under sums and products and integrality of conjugates.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For alpha=a+bi, use traces of both alpha and i alpha.

</details>

<details>
<summary>Hint 2</summary>

The integral norm then restricts the parities of the two doubled coordinates.

</details>

<details>
<summary>Model proof</summary>

Trace and norm conditions rule out possible half-integer coordinates in this quadratic field.

1. If alpha=a+bi is integral, its trace 2a is a rational algebraic integer and hence an integer. Since i alpha is integral, its trace -2b is also an integer. Write a=m/2,b=n/2 with integers m,n.
2. The norm a^2+b^2 is a rational algebraic integer and hence an integer. Thus m^2+n^2 is divisible by four; squares modulo four are zero or one, so both m,n are even. Therefore alpha belongs to Z\[i\].
3. Conversely each a+bi with integer a,b satisfies the monic polynomial X^2-2aX+(a^2+b^2), proving it is integral. Both inclusions give the integral closure.

**Self-assessment rubric**

- Use integrality and rational traces for both alpha and i alpha.
- Apply the integral norm and the square residues modulo four to exclude half-integers.
- Provide a monic integer polynomial for every Gaussian integer.

</details>
