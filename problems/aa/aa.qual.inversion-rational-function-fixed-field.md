# Determine the fixed field of a rational-function involution

*Hard · [Abstract algebra problems](index.md)*

Let t be transcendental over Q and sigma the automorphism of $\mathbb Q(t)$ sending t to 1/t. Prove its fixed field is Q(t+1/t), rather than just showing that this subfield is fixed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The element t satisfies a quadratic over the proposed fixed subfield.

</details>

<details>
<summary>Hint 2</summary>

A basis 1,t expresses every rational function using two coefficients from that subfield.

</details>

<details>
<summary>Model proof</summary>

A degree bound and a nontrivial involution control all invariant rational functions.

1. Set s=t+1/t. Then t satisfies X^2-sX+1 over Q(s), so the extension degree is at most two. The involution fixes s but not t, proving the degree is exactly two and 1,t form a basis.
2. Every element is a(s)+t b(s). Inversion sends it to a(s)+(s-t)b(s).
3. Equality of these expressions gives (2t-s)b(s)=0. Since 2t-s=t-1/t is nonzero for transcendental t, b(s)=0. Thus every invariant lies in Q(s), and the reverse inclusion is already fixed.

**Self-assessment rubric**

- Give the quadratic relation and use the nontrivial automorphism to prove degree two.
- Express an arbitrary element in the two-term basis and compute its image.
- Force the second coefficient to vanish and prove both fixed-field inclusions.

</details>
