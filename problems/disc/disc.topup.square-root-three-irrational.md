# Use reduced fractions in an irrationality contradiction

*Medium · [Discrete mathematics](index.md)*

Prove that $\sqrt3$ is irrational by contradiction, explaining the integer divisibility fact used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Assume a reduced fraction with positive denominator represents the root.

</details>

<details>
<summary>Hint 2</summary>

If an integer square is divisible by three, its root must be divisible by three; justify that with residues.

</details>

<details>
<summary>Model proof</summary>

A reduced-fraction assumption conflicts with the prime divisibility forced by the equation.

1. If an integer is not divisible by three, its residue is one or minus one, so its square is one modulo three. Thus divisibility of a square by three forces divisibility of its root.
2. Assume sqrt(3)=a/b with integers a,b, b&gt;0 and gcd(a,b)=1. Then $a^2=3b^2$, so a=3c for an integer c.
3. Substitution gives $b^2=3c^2$, so b is also divisible by three.
4. This contradicts the reduced fraction assumption, proving irrationality.

**Self-assessment rubric**

- Start with a rational representation in lowest terms.
- Justify the square-divisibility implication rather than merely asserting it.
- Force a common factor of numerator and denominator and connect it to the assumption.

</details>
