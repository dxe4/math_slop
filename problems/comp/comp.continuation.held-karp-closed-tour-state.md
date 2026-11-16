# Close a subset-DP tour only after all cities are visited

*Hard · [Computational arithmetic problems](index.md)*

Five cities $A,B,C,D,E$ have symmetric distances $AB=10$, $AC=8$, $AD=9$, $AE=7$, $BC=10$, $BD=5$, $BE=6$, $CD=8$, $CE=9$, $DE=6$. Find the minimum length of a closed tour starting at $A$, visiting each other city exactly once, and returning to $A$.

```answer
{"answer":{"kind":"integer","expected":"34","checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

For each subset of nonstart cities, retain the shortest path ending at each member.

</details>

<details>
<summary>Hint 2</summary>

Add the return edge to $A$ only at the full-set stage; including it earlier changes the state meaning.

</details>

<details>
<summary>Worked solution</summary>

Held-Karp states avoid repeatedly enumerating the same partial tour in different final orders.

1. Let $D(S,j)$ be the shortest path from $A$ through exactly $S$ ending at $j$. Start $D(\{j\},j)=d(A,j)$ and use $D(S,j)=\min_{i\in S\setminus\{j\}}D(S\setminus\{j\},i)+d(i,j)$.
2. The triple-subset endpoint vectors, in their displayed vertex orders, are $BCD:[21,23,23]$, $BCE:[23,23,24]$, $BDE:[18,18,20]$ and $CDE:[21,23,22]$.
3. The full-subset costs ending at $B,C,D,E$ are $[28,26,28,27]$. Adding return edges yields $[38,34,37,34]$.
4. The minimum is $34$, attained for example by $A\to C\to D\to B\to E\to A$, of length $8+8+5+6+7=34$.

</details>
