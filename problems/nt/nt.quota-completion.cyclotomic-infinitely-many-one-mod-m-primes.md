# Construct infinitely many primes in the residue class one

*Hard · [Number theory](index.md)*

For every integer m&gt;1 prove infinitely many primes are congruent to 1 mod m. You may use monic integer cyclotomic polynomials with $X^m-1=\prod_{d\mid m}\Phi_d(X)$ and Φ\_m(0)=1. Prove the exact-order claim needed for a prime divisor, including why it cannot divide m.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a large A divisible by m and all primes in a proposed finite list.

</details>

<details>
<summary>Hint 2</summary>

A prime dividing Φ\_m(A) avoids A; separability of Xᵐ−1 modulo that prime prevents its order from being a proper divisor of m.

</details>

<details>
<summary>Model proof</summary>

Cyclotomic values force a genuinely new exact-order prime when the argument absorbs every forbidden prime.

1. Assume a finite complete list of primes 1 mod m. Choose A a sufficiently large positive multiple of m and their product, so \|Φ\_m(A)\|&gt;1; its positive degree and monic leading term permit this.
2. Since Φ\_m(0)=1, Φ\_m(A)≡1 mod A. Any prime q dividing this value is therefore prime to A, so it divides neither m nor any prime from the proposed list.
3. The residue A mod q is a root of Xᵐ−1 and has order d dividing m. Because q∤m and A≠0 mod q, the derivative mA^{m−1} is nonzero, so this root is simple in Xᵐ−1.
4. If d&lt;m, A is also a root of Xᵈ−1, hence of one of its cyclotomic factors Φ\_e with e\|d. That is a different factor from Φ\_m in the factorization of Xᵐ−1, making A a repeated root, a contradiction. Thus its order is exactly m.
5. The order divides q−1 by Fermat or the finite unit-group theorem. Hence q≡1 mod m, yet q is not in the list. This contradiction proves infinitude with all exclusions justified.

**Self-assessment rubric**

- Chooses A divisible by m and the finite list and ensures a nonunit cyclotomic value.
- Uses constant term one to prove q∤A, in particular q∤m.
- Rules out every proper order by the cyclotomic factorization and simple-root property.
- Concludes m divides q−1 and q is a new prime in the required class.

</details>
