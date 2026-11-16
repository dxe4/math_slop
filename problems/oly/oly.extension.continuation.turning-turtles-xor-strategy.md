# A coin game whose invariant is restored by one move

*Hard · [Original olympiad-style problems](index.md)*

Coins occupy positions $1,\ldots,n$, each showing heads or tails. A move turns a head at position $j$ to tails and may also flip one coin at any position $i<j$. A player unable to move loses. Prove that a position is losing exactly when the bitwise xor of its head positions is zero, and give a winning move from every other position.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

The binary integer $\sum_{j\text{ head}}2^{j-1}$ decreases at every move, proving finiteness.

</details>

<details>
<summary>Hint 2</summary>

If the xor is $S\ne0$, choose a head index $j$ having the highest set bit of $S$, and put $i=j\mathbin{\mathrm{xor}}S$.

</details>

<details>
<summary>Model proof</summary>

Binary leading bits ensure the correcting flip lies strictly to the left of the required head.

1. Turning off head $j$ removes $2^{j-1}$ from the binary potential; the optional earlier flip changes it by at most $2^{j-2}$ when $j>1$. Thus it strictly decreases. For $j=1$ there is no optional flip and the decrease is one. Play is finite.
2. A legal move changes the head-index xor by $j$ if there is no second flip, or by $j\mathbin{\mathrm{xor}}i$ with $0<i<j$. Both are nonzero, so a zero-xor position never moves to another zero-xor position.
3. If $S\ne0$, its highest set bit occurs in an odd number of current head indices. Choose one such index $j$. The integer $i=j\mathbin{\mathrm{xor}}S$ has that bit cleared and all higher bits unchanged, so $0\le i<j$. Turn off head $j$ and, if $i>0$, flip coin $i$ regardless of its current face.
4. The new xor is $S\mathbin{\mathrm{xor}}j\mathbin{\mathrm{xor}}i=0$, with the same formula when $i=0$ means no optional flip. Finite backward induction now proves zero-xor positions losing and all others winning, and supplies the required strategy.

**Self-assessment rubric**

- Verify a strictly decreasing binary potential including the j=1 case.
- Compute the nonzero xor change of every legal move.
- Choose a legal correcting index strictly below the selected head.
- Use the two move properties and finite play to establish both directions.

</details>
