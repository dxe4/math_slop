# Recover an explicit branch from a potential

*Medium · [Differential equations problems](index.md)*

For $(y+1)\,dx+x\,dy=0$ on $x>0$, take the integral curve through $(1,1)$. Find its value $y$ at $x=2$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Requested bounded solution observation or polynomial representation only, with the stated tolerance where applicable; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The left side is a product differential.

</details>

<details>
<summary>Hint 2</summary>

Fix that product using the initial point before solving for the dependent coordinate.

</details>

<details>
<summary>Worked solution</summary>

The exact potential is a conserved product.

1. The equation is $d(x(y+1))=0$, so $x(y+1)=C$.
2. The initial point gives $C=2$ and hence $y=2/x-1$ on $x>0$. Its substitution gives $(y+1)+xy^{\prime}=2/x-2/x=0$.
3. At $x=2$ the value is $0$.

</details>
