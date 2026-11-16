# Characterize separability by all field base changes

*Hard · [Abstract algebra problems](index.md)*

For a finite extension L/K prove it is separable exactly when $E\otimes_K L$ is reduced for every field extension E/K. In the separable case identify it as a finite product of fields. In the inseparable case exhibit a nonzero nilpotent after an algebraic-closure base change.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A primitive separable polynomial stays squarefree after field extension.

</details>

<details>
<summary>Hint 2</summary>

An inseparable simple subextension yields repeated linear factors over an algebraic closure, and tensoring vector-space injections stays injective.

</details>

<details>
<summary>Model proof</summary>

Field base change turns distinct conjugates into field factors and repeated conjugates into nilpotents.

1. If L=K(theta) is separable with minimal polynomial f, then E tensor L is E\[X\]/(f). The polynomial f stays squarefree because its gcd with fprime is one already over K. Factor it into distinct irreducibles over E; the Chinese remainder theorem gives a finite product of fields, hence a reduced algebra.
2. If L/K is inseparable, choose alpha in L with inseparable minimal polynomial f. Over an algebraic closure E of K this polynomial has repeated linear factors. Its distinct-root product r has smaller degree than f and is nonzero modulo f, but a sufficiently high power of r is divisible by f, giving a nonzero nilpotent in E\[X\]/(f)=E tensor K(alpha).
3. The injection K(alpha) to L remains injective after tensoring with E, since vector spaces over a field are flat, so this nilpotent survives in E tensor L. That algebra is not reduced, proving the converse.

**Self-assessment rubric**

- Use primitive generation, persistent squarefreeness and CRT to obtain field factors.
- Construct a genuinely nonzero nilpotent in the simple subalgebra after base change.
- Justify why tensoring preserves the subalgebra injection.

</details>
