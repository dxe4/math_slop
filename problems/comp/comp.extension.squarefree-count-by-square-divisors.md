# Evaluate a squarefree counting formula on a complete finite range

*Easy · [Computational arithmetic problems](index.md)*

Use $Q(N)=\sum_{d\le\sqrt N}\mu(d)\lfloor N/d^2\rfloor$ for the number of squarefree positive integers through N. With mu(1)=1,mu(2)=mu(3)=mu(5)=-1 and mu(4)=0, find Q(30).

```answer
{"answer":{"kind":"integer","expected":"19","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The index range ends at five because five squared is at most thirty and six squared is not.

</details>

<details>
<summary>Hint 2</summary>

Use floor after dividing by the square, not by d.

</details>

<details>
<summary>Worked solution</summary>

Square-divisor exclusion is encoded by the supplied Mobius weights.

1. The needed floor values for d=1,2,3,4,5 are 30,7,3,1,1.
2. Multiplying by the supplied Mobius values gives 30,-7,-3,0,-1.
3. Their sum is nineteen, the squarefree count including one.

</details>
