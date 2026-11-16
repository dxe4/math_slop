# Compute a nonzero Massey product and the formality obstruction

*Hard · [Topology problems](index.md)*

Work over Q in the graded-commutative DGA $A=\Lambda(a,b,c)$ with all generators in degree one, da=db=0 and dc=ab, a rational model of the compact Heisenberg nilmanifold. Compute H¹, H² and the triple Massey product ⟨\[a\],\[a\],\[b\]⟩. Use the convention that dx=aa, dy=ab and the representative is ay+xb. Compute its indeterminacy and deduce nonformality using quasi-isomorphism invariance of defined Massey products.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

In degree two, ab is exact, while ac and bc are closed; no degree-one differential hits them.

</details>

<details>
<summary>Hint 2</summary>

Take x=0 and y=c. The indeterminacy is \[a\]H¹+H¹\[b\], and every product of degree-one cohomology classes vanishes.

</details>

<details>
<summary>Model proof</summary>

A secondary product detects information invisible in the ordinary cohomology ring with zero differential.

1. A degree-one combination ua+vb+wc is closed precisely when w=0, so H¹ has basis \[a\],\[b\]. In degree two the exterior basis is ab,ac,bc. All three are closed, ab=dc is exact, and ac,bc are not degree-one coboundaries. Thus H² has basis \[ac\],\[bc\]. Every product of H¹ classes is zero because a²=b²=0 and ab is exact.
2. The two products needed for ⟨\[a\],\[a\],\[b\]⟩ vanish in cohomology. Choose x=0 with dx=a²=0 and y=c with dy=ab. Under the stated sign convention the representing cocycle is ac. Its differential is −a(ab)=0, and its H² class is nonzero by the preceding computation.
3. The indeterminacy is \[a\]H¹+H¹\[b\], which is zero since all H¹ products vanish. Therefore the Massey product is the singleton {\[ac\]}, and in particular does not contain zero.
4. In the cohomology DGA (H\*(A),0), the same pairwise products vanish as elements, so one can choose both defining primitives zero and obtain the zero triple product; with zero indeterminacy its value is {0}. Quasi-isomorphisms preserve these defined products and their indeterminacy. Thus no zigzag of quasi-isomorphisms connects A to its cohomology DGA: A, and the manifold with this rational model, is not formal.

**Self-assessment rubric**

- Computes closed generators and exact degree-two classes correctly.
- Uses the stated Massey sign convention and explicit primitives to obtain the cocycle ac.
- Computes zero indeterminacy and proves the resulting singleton is nonzero.
- Compares with the zero-differential cohomology DGA and uses quasi-isomorphism invariance with the relevant hypotheses.

</details>
