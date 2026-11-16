# Classify every positive integer representable by two squares

*Hard · [Number theory](index.md)*

Prove a positive integer N is a sum of two integer squares iff every prime q≡3 mod4 occurs to an even exponent in N. You may use the prime two-square theorem. Give the necessity at the level of valuations and a constructive sufficiency argument using $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

For q≡3 mod4, a congruence a²+b²≡0 forces both coordinates divisible by q.

</details>

<details>
<summary>Hint 2</summary>

After removing the common q-power, the remaining sum cannot acquire one extra factor q.

</details>

<details>
<summary>Model proof</summary>

Local parity of a norm valuation supplies the obstruction, and norm multiplication combines all allowed prime factors.

1. For q≡3 mod4, −1 is not a square mod q by Euler criterion. If q divides a²+b² and one coordinate is a unit, dividing by its square would make −1 a square. Thus q divides both coordinates.
2. Let t=min(v\_q(a),v\_q(b)), allowing a zero coordinate to have infinite valuation while N&gt;0 guarantees at least one finite one. Divide both by qᵗ; at least one new coordinate is a unit, so their squared sum is not divisible by q. Therefore v\_q(N)=2t is even.
3. Conversely factor N. The factor 2 is 1²+1²; each prime p≡1 mod4 has a two-square representation by the allowed prime theorem; and every even power q^{2e} is (qᵉ)²+0². These represent all prime-power factors allowed by the criterion.
4. Repeatedly apply the displayed integer composition identity to combine those factors, with 1=1²+0² for the empty product. This constructs an integer representation of N and proves sufficiency.

**Self-assessment rubric**

- Proves divisibility by a 3-mod-4 prime forces both coordinates divisible.
- Removes the minimum coordinate valuation and proves the remaining norm is a unit.
- Represents each allowed type of prime-power factor.
- Combines the factors constructively and includes N=1.

</details>
