# Construct an irreducible real action with a four-dimensional commutant

*Hard · [Linear algebra problems](index.md)*

Let $\mathbb H$ be the real quaternion algebra with $i^2=j^2=k^2=-1$, $ij=k=-ji$. On its four-dimensional real space, let $L_i,L_j$ be left multiplication. Prove their action is irreducible and their common real commutant consists exactly of right multiplications. Identify the commutant dimension and its division-algebra property.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific semantic rubric reflection only. No automatic proof verdict, demonstration or checkpoint evidence is awarded."}}
```

<details>
<summary>Hint 1</summary>

Left multiplication by i and j generates all quaternionic left actions, including multiplication by k.

</details>

<details>
<summary>Hint 2</summary>

A commuting real map is determined by its value at one. For irreducibility, use invertibility of a nonzero quaternion to expand any nonzero orbit.

</details>

<details>
<summary>Model proof</summary>

Real irreducibility need not force a scalar real commutant.

1. A subspace invariant under $L_i,L_j$ is invariant under their products and real linear combinations, hence under every left multiplication $L_h$. If it contains nonzero u, the set $\{hu:h\in\mathbb H\}$ is the whole algebra because $u^{-1}=\overline u/|u|^2$ exists. Thus the action is irreducible.
2. If T commutes with the two generators, it commutes with every $L_h$. Putting $q=T(1)$ gives $T(h)=T(L_h1)=L_hT(1)=hq$. Hence T is right multiplication $R_q$.
3. Conversely associativity gives $L_hR_q=R_qL_h$, so every right multiplication is admitted. The map q to $R_q$ is a real-linear bijection, giving dimension four.
4. Every nonzero right multiplication has inverse $R_{q^{-1}}$. Composition reverses the quaternion parameter order, $R_qR_p=R_{pq}$, so the commutant is the opposite quaternion division algebra. This is not merely the real scalar line.

**Self-assessment rubric**

- Show invariance under the generators gives all left actions and a full nonzero orbit.
- Determine every commuting real map from its image of one.
- Verify every right action belongs to the commutant.
- Compute its real dimension, inverse property and opposite multiplication order.

</details>
