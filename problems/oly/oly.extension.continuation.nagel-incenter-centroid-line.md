# Locate a tangency concurrency point on a center line

*Hard · [Original olympiad-style problems](index.md)*

In triangle $ABC$, the excircle opposite $A$ touches segment $BC$ at $D_A$; define $D_B,D_C$ cyclically. Prove that $AD_A,BD_B,CD_C$ concur at $N$ and that, as vectors, $N=3G-2I$, where $G$ is the centroid and $I$ the incenter. Thus identify the directed ratio on their common line, including the equilateral case.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Write $s=(a+b+c)/2$ and compute $BD_A=s-c$, $CD_A=s-b$ using equal tangent lengths.

</details>

<details>
<summary>Hint 2</summary>

The positive barycentric coordinates of the concurrency point are $(s-a:s-b:s-c)$; compare them with $(a:b:c)$ for $I$.

</details>

<details>
<summary>Model proof</summary>

Excontact lengths determine barycentrics whose normalized weights complement those of the incenter.

1. Let the tangent length from $A$ to the $A$-excircle along either extended adjacent side be $t$. The segment relations on $BC$ give $BD_A=t-c$, $CD_A=t-b$ and their sum $a$, whence $t=s$. Thus the asserted positive lengths are $s-c,s-b$.
2. The point with barycentrics $(s-a:s-b:s-c)$ lies inside the triangle. Its trace from $A$ divides $BC$ in ratio $(s-c)/(s-b)$, exactly the contact ratio. Cyclically it lies on the other two cevians, proving concurrency.
3. The sum of these three barycentric entries is $s$. Hence $N=((s-a)A+(s-b)B+(s-c)C)/s=A+B+C-(aA+bB+cC)/s=3G-2I$, since $I=(aA+bB+cC)/(2s)$.
4. Therefore $N-I=3(G-I)$: if $G\ne I$, then $I,G,N$ occur in that order with $IG:GN=1:2$. If $G=I$, the formula gives $N=G=I$; no ratio between zero-length segments is asserted.

**Self-assessment rubric**

- Derive the two correct positive contact lengths on BC.
- Verify all three cevian ratios using one positive point.
- Normalize the weights and compute N=3G-2I.
- State the directed ratio only for distinct centers.

</details>
