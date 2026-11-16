# Exhibit the failure of the converse to a reduction irreducibility test

*Hard · [Abstract algebra problems](index.md)*

Prove $x^4+1$ is irreducible over Q but reducible modulo every prime. For odd p, use p^2 congruent to one modulo eight and finite-field multiplicative groups. Explain why this does not contradict the valid one-prime irreducibility test.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Its translate by one is Eisenstein at two.

</details>

<details>
<summary>Hint 2</summary>

Every root modulo an odd prime lies in the degree-two extension, so no irreducible factor can have degree four.

</details>

<details>
<summary>Model proof</summary>

An irreducible rational polynomial need not have any irreducible prime reduction.

1. The translated polynomial(x+1)^4+1=x^4+4x^3+6x^2+4x+2 is Eisenstein at two, so x^4+1 is irreducible over Q.
2. Modulo two it is(x+1)^4. For an odd p, p^2-1 is divisible by eight, so F\_(p^2) contains all eighth roots of unity. The roots of x^4+1 are primitive eighth roots and are distinct in odd characteristic; all therefore lie in this degree-two field, making every irreducible factor over F\_p have degree at most two.
3. Thus every prime reduction is reducible. The usual test says one irreducible good-degree reduction is sufficient for rational irreducibility, not necessary, so its converse is what fails here.

**Self-assessment rubric**

- Prove the characteristic-zero assertion by the valid translation criterion.
- Handle two and every odd prime with the correct root-degree reasoning.
- Distinguish sufficiency of one reduction from the false converse.

</details>
