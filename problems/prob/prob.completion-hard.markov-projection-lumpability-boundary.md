# Separate universal Markov projection from stationary coincidence

*Hard · [Probability problems](index.md)*

Let $P$ be a finite Markov transition matrix and $\mathcal B$ a partition of its states. Characterise when the block process is a Markov chain with one fixed transition matrix for every initial law of the original chain. Prove necessity and sufficiency. Then construct an irreducible aperiodic chain and partition failing that condition for which, under the stationary initial law, the block process is nevertheless iid. Specify all transition probabilities and verify each claim.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the next-block distributions starting at two states in the same block.

</details>

<details>
<summary>Hint 2</summary>

For the counterexample, store two consecutive iid bits as the hidden state and observe only the first coordinate.

</details>

<details>
<summary>Model proof</summary>

Blockwise transition consistency is a universal condition, while a special initial distribution can hide its failure.

1. The condition is that for each pair of blocks $B,C$, $\sum_{j\in C}P_{ij}$ is constant over $i\in B$. Necessity follows by starting from each point mass in $B$: the fixed projected transition from $B$ to $C$ must equal each of these one-step probabilities.
2. For sufficiency call the common sum $\overline P_{BC}$. Conditional on any hidden current state in $B$ and any observed past, the next-block probability is $\overline P_{BC}$. Averaging over the conditional hidden state given the entire observed past therefore yields the Markov property with transition matrix $\overline P$ for every initial law.
3. For the example use states $(a,b)\in\{0,1\}^2$ with transitions $(a,b)\to(b,0)$ and $(a,b)\to(b,1)$, each with probability $1/2$. Partition by the first coordinate. From $(0,0)$ the next observed block is zero surely, but from $(0,1)$ it is one surely, so the condition fails.
4. The chain is irreducible because any desired pair can be reached in two steps, and is aperiodic because $(0,0)$ has a self-loop. The uniform law on four states is invariant: each target has two predecessors, each contributing $1/8$. Under that initial law, realise the hidden process as $(\xi_t,\xi_{t+1})$ for iid fair bits $(\xi_t)_{t\ge0}$. The observed first coordinates are then iid fair bits. Thus stationary Markov behaviour of this projection does not imply the universal condition.

**Self-assessment rubric**

- Derive the exact constancy condition from all point-mass initial laws.
- Average over hidden states to prove the projected Markov property.
- Specify the hidden transition matrix and exhibit the inconsistent block rows.
- Verify irreducibility, aperiodicity, stationarity and the iid representation.

</details>
