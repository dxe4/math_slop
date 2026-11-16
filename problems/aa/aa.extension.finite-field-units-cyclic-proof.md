# Combine order exponents and a polynomial root bound

*Hard · [Abstract algebra problems](index.md)*

Prove every finite subgroup $G$ of the multiplicative group of a field is cyclic, without invoking classification of finite abelian groups. Construct an element with the group exponent as its order and compare root counts.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Extract the maximal power of each prime occurring among element orders.

</details>

<details>
<summary>Hint 2</summary>

Products of commuting elements of pairwise coprime orders have product order.

</details>

<details>
<summary>Model proof</summary>

An element realizing the exponent exhausts the group because a polynomial cannot have too many roots.

1. Let e be the least common multiple of element orders. For each prime ell dividing e, some element has an order with the maximal ell-power ell^a. Taking a suitable power of that element removes the coprime part and produces h\_ell of exact order ell^a.
2. All these elements commute in a field's multiplicative group. Their product has order the product of those pairwise coprime prime powers, namely e, by the elementary coprime-order argument.
3. Every element of G is a root of X^e-1, so the polynomial root bound gives \|G\|&lt;=e. The constructed cyclic subgroup already has e elements, so \|G\|=e and it is the whole G.

**Self-assessment rubric**

- For each prime dividing the group exponent, extract an element whose order is the maximal power of that prime.
- Use commutativity and pairwise coprime orders to construct one element of order equal to the exponent.
- Apply the root bound to X^e-1 and compare it with the constructed cyclic subgroup to conclude that the subgroup is all of G.

</details>
