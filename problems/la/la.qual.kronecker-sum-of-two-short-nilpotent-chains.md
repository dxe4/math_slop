# Identify a nontrivial tensor-sum Jordan decomposition

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb C$, let $N_2a_1=a_0$, $N_2a_0=0$ and $N_3b_2=b_1$, $N_3b_1=b_0$, $N_3b_0=0$. For $K=N_2\otimes I+I\otimes N_3$, return its Jordan block sizes in descending order. Preparation: tensor operator modules and Jordan chains.

```answer
{"answer":{"kind":"vector","expected":["4","2"],"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Begin a long chain at $a_1\otimes b_2$.

</details>

<details>
<summary>Hint 2</summary>

In the next weight level combine $a_0\otimes b_2$ and $a_1\otimes b_1$ so its second image cancels.

</details>

<details>
<summary>Worked solution</summary>

Construct two complementary chains rather than only finding a nilpotency upper bound.

1. For $v=a_1\otimes b_2$, the next images are $Kv=a_0\otimes b_2+a_1\otimes b_1$, $K^2v=2a_0\otimes b_1+a_1\otimes b_0$, $K^3v=3a_0\otimes b_0$ and $K^4v=0$.
2. For $w=2a_0\otimes b_2-a_1\otimes b_1$, one has $Kw=a_0\otimes b_1-a_1\otimes b_0\ne0$ and $K^2w=0$.
3. The two vectors at each shared weight level have coefficient determinants minus three, hence are independent over the complex field. Together with the extreme chain vectors they give a six-vector basis. Thus the chain sizes are four and two.

</details>
