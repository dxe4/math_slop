# A terminating proposal process with a sharp optimality property

*Hard · [Original olympiad-style problems](index.md)*

There are $n$ proposers and $n$ receivers, each with a strict ranking of every member of the other group. Unmatched proposers propose to their best receiver not yet tried; each receiver keeps its favorite proposal so far and rejects any other. Prove termination in a perfect stable matching and that each proposer gets its best partner among all stable matchings. A blocking pair means both strictly prefer one another to their assigned partners.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Each ordered proposer–receiver pair is tried at most once. If a proposer exhausted the list while unmatched, every receiver would already be holding a proposal.

</details>

<details>
<summary>Hint 2</summary>

For optimality, suppose a rejection of a pair occurring in some stable matching happens for the first time. Examine the receiver\'s preferred held proposer at that moment.

</details>

<details>
<summary>Model proof</summary>

First-rejection analysis connects a local holding rule to global stable-partner optimality.

1. There are at most $n^2$ proposals. A receiver never becomes empty after holding its first proposal. If an unmatched proposer had tried every receiver, all $n$ receivers would hold distinct other proposers, impossible with only $n-1$ others. Thus the process ends with everyone matched.
2. If proposer $p$ prefers receiver $r$ to its final partner, it proposed to $r$ earlier and was rejected. Receivers only improve their held choice, so $r$ prefers its final partner to $p$. Therefore no such pair blocks, proving stability.
3. Suppose any rejected pair occurs in any stable matching, and choose the first such rejection in the proposal history, say $r$ rejects $p$ while holding $q$ it prefers. Take a stable matching $M$ pairing $p$ with $r$, and let $q$ have partner $r\prime$ there. If $q$ preferred $r\prime$ to $r$, it would already have proposed to and been rejected by $r\prime$, an earlier rejection of a pair belonging to the stable matching $M$, contradicting the choice of the first event.
4. Thus $q$ prefers $r$ to $r\prime$, and $r$ prefers $q$ to $p$, so $(q,r)$ blocks $M$, another contradiction. No rejected pair can occur in a stable matching. Every receiver a proposer ranks above its final partner has rejected it, so none can be that proposer\'s partner in any stable matching. The output is therefore proposer-optimal, irrespective of the order of available proposals.

**Self-assessment rubric**

- Bound proposals and rule out an unmatched proposer with an exhausted list.
- Use previous rejection and improving held choices to exclude blocking pairs.
- Choose the earliest rejection of any pair appearing in a stable matching.
- Construct the blocking pair in that matching and deduce proposer optimality.

</details>
