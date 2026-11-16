# Compute an isogonal map without a diagram

*Hard · [Original olympiad-style problems](index.md)*

In triangle $ABC$ with opposite side lengths $a,b,c$, an interior point $P$ has positive barycentric coordinates $(x:y:z)$. Reflect the three lines $AP,BP,CP$ in their respective internal angle bisectors. Prove that the reflected lines concur at the interior point with barycentrics $(a^2/x:b^2/y:c^2/z)$. Show the transformation is an involution.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If $AP$ meets $BC$ at $D$, the sine-area formula gives $BD/DC=c\sin\angle BAP/(b\sin\angle PAC)$.

</details>

<details>
<summary>Hint 2</summary>

Reflection exchanges the two sine factors, so the product of the original and reflected side ratios is $c^2/b^2$.

</details>

<details>
<summary>Model proof</summary>

Positive barycentrics turn angle reflection into reciprocal side weights.

1. For $D=AP\cap BC$, barycentrics give $BD/DC=z/y$. Area comparison in $ABD,ACD$ also gives this ratio as $c\sin\angle BAD/(b\sin\angle DAC)$. Both angles are strictly between zero and $A$.
2. If the reflected ray meets $BC$ at $D\prime$, the sine factors exchange. Thus $(BD/DC)(BD\prime/D\prime C)=c^2/b^2$, and the reflected ratio is $c^2y/(b^2z)$.
3. The proposed point $Q=(a^2/x:b^2/y:c^2/z)$ is interior since all entries are positive. Its trace on $BC$ has exactly the ratio $Q_C/Q_B=c^2y/(b^2z)$, so $AQ$ is the reflected ray. Cyclic repetition proves concurrency of all three at $Q$.
4. Applying the same coordinate operation again gives $(a^2/(a^2/x):b^2/(b^2/y):c^2/(c^2/z))=(x:y:z)$. The argument establishes both existence and involution without a separate concurrency assumption.

**Self-assessment rubric**

- Derive the cevian side ratio with the correct adjacent side factors.
- Exchange the half-angles to obtain the squared-side ratio product.
- Verify the three proposed positive barycentric traces.
- Apply the coordinate transformation twice.

</details>
