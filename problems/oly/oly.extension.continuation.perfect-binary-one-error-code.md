# A sharp packing bound with a parity construction

*Hard · [Original olympiad-style problems](index.md)*

For $r\ge2$ put $N=2^r-1$. A binary code is a set of length-$N$ zero-one words, any two differing in at least three positions. Prove its size is at most $2^{N-r}$ and construct a code attaining this bound. You may use linear algebra over the two-element field, but must explain the construction and its distance.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The radius-one Hamming balls around distinct codewords are disjoint, each containing $N+1=2^r$ words.

</details>

<details>
<summary>Hint 2</summary>

Label the $N$ coordinates by all nonzero vectors of $\mathbb F_2^r$ and take all words whose selected labels sum to zero.

</details>

<details>
<summary>Model proof</summary>

Sphere packing gives the upper bound, and distinct nonzero parity labels prevent one- and two-position differences.

1. If two radius-one Hamming balls shared a word, their centers would differ in at most two positions, contradicting the distance condition. Each ball has $1+N=2^r$ words, so the number of codewords is at most $2^N/2^r=2^{N-r}$.
2. Form a parity-check matrix $H$ whose columns are the $N$ distinct nonzero binary vectors of length $r$, and let $C=\{x:Hx=0\}$. The matrix includes the $r$ unit vectors, so it has rank $r$. Choosing the other $N-r$ bits freely uniquely determines those unit-vector-coordinate bits, giving exactly $2^{N-r}$ words.
3. A nonzero word in $C$ cannot have weight one, because no column is zero. It cannot have weight two, because two distinct nonzero columns do not sum to zero over the two-element field. Thus every nonzero codeword has weight at least three.
4. The difference of two codewords is another nonzero codeword, so their Hamming distance is at least three. This attains the bound. The proof concerns exact finite codes and does not claim automatic grading of a submitted construction argument.

**Self-assessment rubric**

- Count disjoint radius-one balls in the full binary word space.
- Specify every nonzero parity column and count the kernel via unit columns.
- Rule out both weight-one and weight-two nonzero kernel words.
- Transfer the weight bound to differences of arbitrary distinct codewords.

</details>
