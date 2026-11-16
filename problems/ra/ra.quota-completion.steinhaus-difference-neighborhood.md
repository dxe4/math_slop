# Build a neighborhood from a positive-measure difference set

*Hard · [Real analysis](index.md)*

For Lebesgue-measurable A⊂R with μ(A)&gt;0, prove A−A contains an open interval about zero. You may use translation invariance and approximation of any finite-measure measurable set in symmetric-difference measure by a finite union of bounded intervals. Derive the needed $L^1$ translation estimate instead of assuming the difference set is open.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

First replace A by a bounded positive-measure subset.

</details>

<details>
<summary>Hint 2</summary>

Approximate that subset by interval unions to show its indicator is continuous under L1 translations, then compute the overlap measure.

</details>

<details>
<summary>Model proof</summary>

Small translations of a finite positive-measure set retain overlap, and every overlap produces a difference.

1. Some bounded B=A∩\[−M,M\] has positive finite measure; otherwise the increasing union A would have measure zero. It is enough to prove a neighborhood lies in B−B.
2. Given η&gt;0 choose a finite union J of m bounded intervals with μ(B△J)&lt;η. Translation invariance and the triangle inequality give μ((B+h)△B)≤2η+μ((J+h)△J)≤2η+2m\|h\|. The final bound follows by summing the symmetric-difference bounds for the individual intervals.
3. First choose η small, then h small. This proves μ((B+h)△B)→0 as h→0. Since μ(B+h)=μ(B), the identity μ(B∩(B+h))=μ(B)−μ((B+h)△B)/2 makes the intersection positive for all sufficiently small \|h\|.
4. For each such h choose z∈B∩(B+h). Then z∈B and z−h∈B, so h=z−(z−h)∈B−B⊂A−A. The single small-radius condition works for every h in that interval, proving the required neighborhood containment.

**Self-assessment rubric**

- Finds a bounded positive-measure subset without assuming A itself has finite measure.
- Derives the symmetric-difference estimate from finite interval unions.
- Uses equal translated measures to obtain uniformly positive small-translation overlaps.
- Turns every such overlap into the corresponding signed difference and gets a whole neighborhood.

</details>
