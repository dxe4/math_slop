# Classify integer polynomials permuting all integers

*Hard · [Original olympiad-style problems](index.md)*

Classify all $P\in\mathbb Z[x]$ whose restriction is a bijection from $\mathbb Z$ to $\mathbb Z$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Preimages of consecutive output integers must themselves differ by one because input difference divides output difference.

</details>

<details>
<summary>Hint 2</summary>

The signs of consecutive preimage steps cannot change without revisiting a preimage.

</details>

<details>
<summary>Model proof</summary>

Use polynomial divisibility to rigidify an infinite permutation.

1. For integers $u,v$, $u-v$ divides $P(u)-P(v)$ by the difference-of-powers identity. Let $q(k)$ be the unique preimage of integer $k$ under the bijection.
2. Consecutive outputs differ by one, so $q(k+1)-q(k)$ is either one or negative one. If adjacent steps changed sign, $q(k+2)=q(k)$, contradicting distinct outputs.
3. Thus all steps have one common sign on the connected integer line, giving $q(k)=c+k$ for every k or $q(k)=c-k$ for every k.
4. Inverting gives $P(n)=n-c$ or $P(n)=c-n$ on every integer. A polynomial agreeing with a linear polynomial on infinitely many inputs agrees identically.
5. Consequently all and only $P(x)=x+b$ or $P(x)=-x+b$ with integer b work. Their bijectivity is immediate.

**Self-assessment rubric**

- Prove the input-difference divisor property.
- Use bijectivity to obtain unit steps and rule out sign changes.
- Extend the integer identity to a polynomial identity.
- Verify every stated integer affine polynomial.

</details>
