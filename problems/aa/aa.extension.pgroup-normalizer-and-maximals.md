# Derive the normalizer condition and all maximal-subgroup indices

*Hard · [Abstract algebra problems](index.md)*

In a finite p-group G, prove every proper subgroup H is properly contained in its normalizer N\_G(H). Deduce every maximal proper subgroup is normal of index p. Use the action of H on G/H and the prime-order existence theorem for $G$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A fixed coset for H corresponds exactly to a normalizing element.

</details>

<details>
<summary>Hint 2</summary>

The coset set size is divisible by p and all nontrivial H-orbits have p-power size.

</details>

<details>
<summary>Model proof</summary>

A fixed-point congruence forces the normalizer to grow past every proper subgroup.

1. Let H act by left multiplication on G/H. A coset gH is fixed exactly when g inverse\*H\*g is contained in H, hence equals H by finiteness, so the fixed cosets are N\_G(H)/H.
2. The set G/H has p-divisible size, and every nonfixed orbit has size divisible by p. Therefore the fixed-point count is divisible by p. It is at least one because H itself is fixed, so it is at least p. Thus N\_G(H)&gt;H.
3. If H is maximal proper, its larger normalizer must equal G, making H normal. The quotient G/H is a nontrivial p-group with no nontrivial proper subgroup. A prime-order element in it forces its entire order to be p, giving index p.

**Self-assessment rubric**

- Identify fixed cosets precisely with normalizer cosets.
- Retain the known fixed point in the orbit-size divisibility argument.
- Use maximality, normality and prime-order existence to force the quotient size.

</details>
