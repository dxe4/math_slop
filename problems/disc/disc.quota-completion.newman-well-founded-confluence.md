# Join arbitrary reductions from local confluence and termination

*Hard · [Discrete mathematics](index.md)*

Let → be a well-founded reduction relation on a set X: induction over proper descendants is valid. Assume local confluence, meaning every fork $x\to y,\ x\to z$ admits w with y→\*w and z→\*w, where →\* permits zero steps. Prove confluence: any y,z reached from the same x by finitely many steps have a common descendant. Handle zero-length paths explicitly.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use well-founded induction on the common starting point, not on the total lengths of two chosen reductions.

</details>

<details>
<summary>Hint 2</summary>

After joining the first steps, apply the induction hypothesis to join each endpoint to that first join, and then join those two later descendants.

</details>

<details>
<summary>Model proof</summary>

Local forks can be joined globally because every new comparison occurs strictly below the original start.

1. Induct on x in the proper-descendant relation, assuming confluence at every strict descendant. If one of x→\*y or x→\*z has zero length, say y=x, then z itself is a common descendant of y and z.
2. Otherwise write first steps x→x₁→\*y and x→x₂→\*z. By local confluence, x₁ and x₂ reach a common u. Each of x₁,x₂,u is a proper descendant of x; well-foundedness rules out returning to x.
3. Apply confluence at x₁ to its descendants y,u, obtaining v with y→\*v and u→\*v. Apply confluence at x₂ to z,u, obtaining w with z→\*w and u→\*w.
4. Finally apply confluence at u to v,w to get t reached from both. Concatenation gives y→\*v→\*t and z→\*w→\*t, the desired common descendant. All induction uses were strictly below x, completing the well-founded induction.

**Self-assessment rubric**

- Inducts on the common start and handles either zero-step reduction.
- Joins the two first-step successors and checks that the joining point is a proper descendant.
- Uses the hypotheses at x₁,x₂ and u in the correct order to build a final common descendant.
- Finishes both complete reduction paths without an unjustified bound on their lengths.

</details>
