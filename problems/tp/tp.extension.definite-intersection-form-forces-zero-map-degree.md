# Obstruct degree by an isotropic class and a definite form

*Hard · [Topology problems](index.md)*

Prove every continuous map $f:\mathbb{CP}^2\#\mathbb{CP}^2\to S^2\times S^2$ has degree zero, using the usual positive complex orientations on both summands. Use the rational intersection forms diag(1,1) in the source and the hyperbolic form with u²=v²=0, ⟨uv,\[S²×S²\]⟩=1 in the target. Supply the nonzero-degree injectivity argument you need.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

If degree were nonzero, a nonzero cohomology class could not pull back to zero, by pairing it with its Poincaré dual.

</details>

<details>
<summary>Hint 2</summary>

Pull back the nonzero square-zero class u and compare with the positive-definite source form.

</details>

<details>
<summary>Model proof</summary>

The target has isotropic classes that a positive-definite source cannot receive under a nonzero-degree pullback.

1. Assume deg f=d≠0. For any nonzero target class α, choose a complementary β with nonzero evaluation. The identity ⟨f\*α f\*β,\[M\]⟩=d⟨αβ,\[N\]⟩ forces f\*α≠0. Thus f\* is injective over Q.
2. In particular u≠0 gives f\*u=ae+bf≠0 for rational a,b, with e,f the two positive generators in the source. Naturality gives (f\*u)²=f\*(u²)=0.
3. But evaluation of that square on the source fundamental class is a²+b². Over Q this vanishes only when a=b=0, contrary to injectivity. Therefore no nonzero degree is possible.
4. The sign of d is irrelevant: the square-zero relation is already impossible for any nonzero pullback in the positive-definite form. The conclusion is not obtained merely by comparing the equal second Betti numbers.

**Self-assessment rubric**

- Proves the rational pullback injection from degree and Poincaré pairing.
- Uses u²=0 and u≠0 to obtain a nonzero square-zero source class.
- Evaluates the positive-definite form and concludes degree zero for both possible degree signs.

</details>
