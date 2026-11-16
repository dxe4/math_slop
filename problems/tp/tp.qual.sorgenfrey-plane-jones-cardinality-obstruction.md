# Prove the Sorgenfrey plane is not normal using separability

*Hard · [Topology problems](index.md)*

Let $S$ be the real line with basis $[a,b)$, a&lt;b, and give $S\times S$ the product topology. Prove it is separable but not normal. Derive the needed cardinality obstruction for a closed discrete anti-diagonal; do not merely cite that obstruction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The rational pairs are dense, and the anti-diagonal D={(x,−x):x∈R} is closed and discrete.

</details>

<details>
<summary>Hint 2</summary>

In a normal space separate each subset A of D from D minus A by open sets. A countable dense set determines the closure of every open set.

</details>

<details>
<summary>Model proof</summary>

Too many closed subsets of a discrete anti-diagonal would require too many distinct traces on a countable dense set.

1. Every nonempty basic rectangle \[a,b)×\[c,d) contains a pair of rationals, so E=Q² is countable dense. For (a,b) off D, the sum a+b has a fixed nonzero sign on a sufficiently small right-hand rectangle; hence D is closed. At (x,−x), a rectangle \[x,x+ε)×\[−x,−x+ε) meets D only there, so D is discrete.
2. Because D is closed discrete, each subset A⊂D is closed in the whole plane, as is D∖A. If the plane were normal, there would be open U\_A containing A with closure(U\_A)∩(D∖A)=∅; therefore closure(U\_A)∩D=A.
3. For any open U in a space with dense E, closure(U∩E)=closure(U). Indeed, every neighborhood meeting U meets the nonempty open intersection with U and thus meets E. Consequently equal traces U\_A∩E=U\_B∩E force equal closures and hence A=B.
4. This injects P(D) into P(E). But \|D\| is the continuum c, so \|P(D)\|=2^c&gt;c=2^{aleph\_0}=\|P(E)\| by Cantor’s theorem. Contradiction: the Sorgenfrey plane is not normal.

**Self-assessment rubric**

- Proves both rational-pair density and closed discreteness of the anti-diagonal in the stated lower-limit product.
- Obtains open neighborhoods whose closures recover every subset of D.
- Proves an open set has the same closure as its trace on the countable dense set.
- Constructs the injection and applies Cantor’s strict cardinal inequality.

</details>
