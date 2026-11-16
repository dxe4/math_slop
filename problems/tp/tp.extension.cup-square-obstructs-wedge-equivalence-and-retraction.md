# Use a cup square to obstruct equivalence and retraction

*Hard · [Topology problems](index.md)*

Prove CP² is not homotopy equivalent to $S^2\vee S^4$, although their integral homology groups agree. Also prove the standard inclusion CP¹→CP² admits no continuous retraction. You may use $H^*(\mathbb{CP}^2;\mathbb Z)=\mathbb Z[h]/(h^3)$, \|h\|=2, with h restricting to the generator on CP¹.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the square of a generator in degree two, not just the additive groups.

</details>

<details>
<summary>Hint 2</summary>

A retraction would pull the degree-two generator of CP¹ back to h while preserving its zero square.

</details>

<details>
<summary>Model proof</summary>

Naturality of a nonzero cup square obstructs maps that additive homology alone would permit.

1. Both spaces have Z in homology degrees 0,2,4 and zero in other degrees, so additive homology gives no distinction. In CP² the generator h∈H² has nonzero square generating H⁴.
2. For W=S²∨S⁴ let p:W→S² collapse the four-sphere. The generator u of H²(W) is p\*s, where s generates H²(S²), so u²=p\*(s²)=0. A homotopy equivalence would induce a cohomology ring isomorphism carrying h to ±u, impossible because it would send the nonzero h² to zero.
3. If r:CP²→CP¹ retracted the standard inclusion i, then i\*r\*=id on H²(CP¹). Since i\*h=s, this forces r\*s=h. But s²=0 on CP¹ whereas h²≠0 on CP², contradicting r\*(s²)=(r\*s)².
4. The same argument rules out a homotopy retraction with r∘i homotopic to the identity. The obstruction is multiplicative and is unchanged by choices of generator signs.

**Self-assessment rubric**

- Checks why additive homology does not distinguish the two spaces.
- Computes the wedge generator’s zero square using the collapse map and contradicts a ring isomorphism.
- Uses the inclusion’s generator restriction and cup-product naturality to obstruct a retraction.

</details>
