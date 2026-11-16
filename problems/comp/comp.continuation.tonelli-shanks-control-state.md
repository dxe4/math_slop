# Carry a square-root algorithm through changing modular orders

*Hard · [Computational arithmetic problems](index.md)*

Work modulo $97$. Start $(R,t,c,m)=(47,79,28,5)$. While $t\ne1$, choose the least $i\ge1$ with $t^{2^i}\equiv1$, set $b=c^{2^{m-i-1}}$, and replace $(R,t,c,m)$ simultaneously by $(Rb,tb^2,b^2,i)$ modulo $97$ in the first three coordinates. Return $[R,s]$, where $R$ is the terminal value and $s$ the least positive square root of $12$ modulo $97$.

```answer
{"answer":{"kind":"vector","expected":["77","20"],"checker_scope":"Only the requested exact finite algorithmic result is checked. No learner program is executed and no unrestricted written proof is automatically certified. This original draft is ineligible for checkpoint evidence pending independent human review."}}
```

<details>
<summary>Hint 1</summary>

Find the least $i$ by successive squaring of $t$ afresh at each iteration.

</details>

<details>
<summary>Hint 2</summary>

Use the old $c$ and $m$ to form $b$ before the simultaneous replacement; compare the terminal root with its negative.

</details>

<details>
<summary>Worked solution</summary>

The changing order bound controls each correction; the final root certificate identifies the smaller branch.

1. Initially $79^2\equiv33$, $79^4\equiv22$, $79^8\equiv-1$, so $i=4$ and $b=28$. The next state is $(55,50,8,4)$.
2. Now $50^2\equiv75$, $50^4\equiv-1$, so $i=3$ and $b=8$. The next state is $(52,96,64,3)$.
3. For $t=96\equiv-1$, the least $i$ is $1$. Thus $b=64^2\equiv22$, and the terminal state is $(77,1,96,1)$.
4. The terminal square is $77^2\equiv12$. The other root is $97-77=20$, whose square is also $12$. Since $97$ is prime, factoring $(x-20)(x+20)$ shows these are the only residue roots, so the least positive one is $20$.

</details>
