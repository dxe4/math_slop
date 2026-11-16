# Control an intersection filtration through a finite graded module

*Hard · [Abstract algebra problems](index.md)*

Let R be Noetherian, I an ideal, M finitely generated and N a submodule. Prove there is k such that for n&gt;=k, $I^nM\cap N=I^{n-k}(I^kM\cap N)$. Use the Rees algebra and justify the finite homogeneous-generation step.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The Rees algebra is finitely generated over R by a finite generating set of I times t.

</details>

<details>
<summary>Hint 2</summary>

The intersection filtration is a graded submodule of the finite Rees module.

</details>

<details>
<summary>Model proof</summary>

Noetherian graded generation supplies a uniform degree after which all intersections propagate.

1. Write A=direct sum\_(n&gt;=0) I^n\*t^n, a finitely generated R-algebra, hence Noetherian by Hilbert's basis theorem. The graded module T=direct sum I^nM\*t^n is finitely generated over A by a finite set of generators of M in degree zero.
2. Its graded submodule U=direct sum(I^nM intersect N)\*t^n is finitely generated because T is a finite module over a Noetherian ring. Replacing a finite generating set by its finitely many homogeneous components gives homogeneous generators of degrees at most some k.
3. In degree n&gt;=k, a generator of degree j&lt;=k contributes I^(n-j) times an element of I^jM intersect N. This lies in I^(n-k)(I^kM intersect N), since multiplying that element by I^(k-j) places it in the degree-k intersection. The opposite containment follows directly from N being a submodule and ideal-power multiplication. Thus equality holds.

**Self-assessment rubric**

- Prove the Rees algebra and ambient graded module are Noetherian and finite as required.
- Choose a genuine finite degree bound for the graded submodule.
- Prove both inclusions using the precise exponent shift.

</details>
