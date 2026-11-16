# Equal internal bisectors force equal sides

*Hard · [Original olympiad-style problems](index.md)*

In a nondegenerate triangle $ABC$, suppose the lengths of the internal angle bisectors from $B$ and $C$ are equal. Prove $AB=AC$. Your argument must compare the actual bisector lengths, rather than assume equality of the angles they bisect.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Derive $l_B=2ac\cos(B/2)/(a+c)$ and $l_C=2ab\cos(C/2)/(a+b)$, where $a=BC,b=CA,c=AB$.

</details>

<details>
<summary>Hint 2</summary>

If $b>c$, both factors $c/(a+c)$ and $\cos(B/2)$ are strictly smaller than their corresponding factors for $C$.

</details>

<details>
<summary>Model proof</summary>

The side ordering simultaneously orders a rational factor and a half-angle cosine in the same direction.

1. For a bisector of an angle between adjacent sides $u,v$, compare the whole triangle area $uv\sin\theta/2$ with the two smaller areas $(u+v)l\sin(\theta/2)/2$. This gives $l=2uv\cos(\theta/2)/(u+v)$, since the half-angle sine is positive.
2. Applying this at $B,C$ gives the two formulas in the hint. If $b>c$, then $B>C$, so $\cos(B/2)<\cos(C/2)$ because both half-angles lie in $(0,90^\circ)$. Also $c/(a+c)<b/(a+b)$ by cross multiplication using $a>0$.
3. Multiplying these strict positive inequalities yields $l_B<l_C$, contradicting the hypothesis. If $b<c$, exchange the labels to obtain the opposite contradiction.
4. Therefore $b=c$, equivalently $AC=AB$. Conversely, an isosceles triangle has the equal bisectors by the same formulas, so the rigidity is exact.

**Self-assessment rubric**

- Derive the internal bisector formula from areas.
- Compare both the rational side factor and the cosine under b&gt;c.
- Multiply only positive factors and rule out both unequal orders.
- Translate b=c into the requested equality of sides.

</details>
