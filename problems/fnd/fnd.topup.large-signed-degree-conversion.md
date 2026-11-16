# Convert an angle without discarding complete turns

*Medium · [Foundations bridge](index.md)*

Write $-1500^\circ$ as $c\pi$ radians. Return c without reducing the angle modulo a full turn.

```answer
{"answer":{"kind":"rational","expected":{"numerator":-25,"denominator":3},"checker_scope":"Exact requested bounded result only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

One hundred eighty degrees equals pi radians.

</details>

<details>
<summary>Hint 2</summary>

This asks for the given signed angle itself, so do not replace it by a coterminal smaller angle.

</details>

<details>
<summary>Worked solution</summary>

Unit conversion preserves the signed total turn count.

1. The coefficient is $c=-1500/180$.
2. Dividing numerator and denominator by sixty gives $c=-25/3$.
3. Thus the original angle is $(-25/3)\pi$ radians.

</details>
