# Explain the unit factor in a degree-based derivative

*Hard · [Calculus](index.md)*

Define $s(x)=\sin(\pi x/180)$, so x is an angle measured numerically in degrees. Derive sprime(0) and explain why it is not 1, unlike the radian sine derivative at zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The standard derivative formula applies to the radian-valued inner argument.

</details>

<details>
<summary>Hint 2</summary>

Changing angular units changes the input rate scale.

</details>

<details>
<summary>Model proof</summary>

The standard trigonometric derivative includes a unit convention.

1. The chain rule gives sprime(x)=(pi/180)cos(pi x/180).
2. At zero the cosine is one, so sprime(0)=pi/180 rather than one.
3. The radian formula has inner multiplier one; degree inputs introduce the conversion factor pi/180. Omitting it confuses numerical angle units.

**Self-assessment rubric**

- State the radian argument corresponding to a numerical degree input.
- Differentiate with the conversion multiplier included.
- Evaluate at zero and explain the difference from the radian-input formula.

</details>
