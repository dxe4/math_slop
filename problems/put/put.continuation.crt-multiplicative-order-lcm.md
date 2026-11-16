# Crt multiplicative order lcm

*Hard · [Original Putnam-style training](index.md)*

If $\gcd(m,n)=1$ and $\gcd(a,mn)=1$, prove $\operatorname{ord}_{mn}(a)=\operatorname{lcm}(\operatorname{ord}_m(a),\operatorname{ord}_n(a))$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use CRT to convert congruence modulo $mn$ to two congruences.

</details>

<details>
<summary>Hint 2</summary>

A positive exponent yields one modulo a modulus exactly when it is divisible by the corresponding order.

</details>

<details>
<summary>Model proof</summary>

The least positive integer divisible by both orders is their least common multiple, proving the identity.

1. CRT gives $a^k\equiv1\pmod{mn}$ iff $a^k\equiv1\pmod m$ and $a^k\equiv1\pmod n$.
2. By the definition of finite multiplicative order, these conditions are equivalent to $\operatorname{ord}_m(a)\mid k$ and $\operatorname{ord}_n(a)\mid k$.
3. The least positive integer divisible by both orders is their least common multiple, proving the identity.

**Self-assessment rubric**

- Convert the modulus mn congruence into simultaneous congruences.
- Translate each congruence into divisibility by its local order.
- Identify the least positive common multiple as the global order.

</details>
