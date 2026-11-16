# Use a longest path to force a cycle

*Hard · [Discrete mathematics](index.md)*

Prove that a nonempty finite simple undirected graph in which every vertex has degree at least $2$ contains a cycle.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Choose a simple path of greatest possible length.

</details>

<details>
<summary>Hint 2</summary>

Every neighbor of an endpoint must already lie on that path; its second neighbor cannot merely be its one predecessor.

</details>

<details>
<summary>Model proof</summary>

Finiteness supplies a longest path, and the degree condition closes a nontrivial cycle.

1. Suppose for contradiction that the graph has no cycle. Choose a longest simple path. It has an endpoint v with at least two distinct neighbors because the graph is simple and every degree is at least two.
2. No neighbor of v lies outside the path, since otherwise the path could be extended.
3. One neighbor is the preceding path vertex. Another lies earlier still, so its edge to v closes a cycle along the existing path segment.
4. Assuming no cycle therefore contradicts the minimum-degree condition.

**Self-assessment rubric**

- Use finiteness and simplicity to choose and describe the path.
- Justify that endpoint neighbors must already lie on it.
- Use a distinct second neighbor to obtain a genuine cycle rather than an immediate edge retracing.

</details>
