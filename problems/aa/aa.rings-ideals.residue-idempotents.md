# Find all idempotents in a composite residue ring

*Hard · [Abstract algebra problems](index.md)*

Find all $a\in\mathbb Z/12\mathbb Z$ satisfying $a^2=a$, using canonical residue representatives.

```answer
{"answer":{"kind":"set","expected":[0,1,4,9],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The condition factors into a product of two consecutive integers.

</details>

<details>
<summary>Hint 2</summary>

Analyze it modulo the two coprime prime-power factors of the modulus, then combine the possibilities.

</details>

<details>
<summary>Worked solution</summary>

Chinese remaindering turns one composite-modulus condition into independent local conditions.

1. The condition is $12\mid a(a-1)$, equivalent to the same vanishing modulo $3$ and modulo $4$.
2. Modulo $3$, an idempotent is $0$ or $1$. Modulo $4$, direct inspection of four residues likewise gives only $0$ or $1$.
3. The Chinese remainder theorem gives one residue for each pair of these local choices.
4. The pairs $(0,0),(1,1),(1,0),(0,1)$ modulo $(3,4)$ correspond respectively to $0,1,4,9$.
5. Thus the complete idempotent set is $\{0,1,4,9\}$.

</details>
