# Send a finite input net to a finite output net

*Medium · [Real analysis](index.md)*

Prove a uniformly continuous image of a totally bounded metric space $(X,d)$ is totally bounded. Do not replace total boundedness by compactness or assume completeness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose the input radius from the output tolerance using uniform continuity.

</details>

<details>
<summary>Hint 2</summary>

Use finitely many input centers lying in the domain and map them.

</details>

<details>
<summary>Model proof</summary>

Uniformity lets one finite input net work for every image point.

1. Let f:X to Y be uniformly continuous, and fix epsilon&gt;0. Choose delta&gt;0 so input distances below delta give output distances below epsilon.
2. Total boundedness gives a finite cover of X by balls of radius delta/2 with centers x\_1,...,x\_m in X. Every x lies within delta/2&lt;delta of one center.
3. Therefore f(x) lies in the epsilon-ball about the corresponding f(x\_j). These finitely many output balls cover f(X). No completeness assumption or compact closure was needed.

**Self-assessment rubric**

- Choose one input tolerance valid over the whole domain.
- Use total boundedness with legitimate domain centers.
- Produce a finite output cover without extra compactness assumptions.

</details>
