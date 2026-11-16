# Exact does not mean split

*Difficulty 4 of 5 · [Abstract algebra through structure-preserving maps](index.md) · exercise 4 of 7*

For an integer $n\ge 2$, prove that $0\to\mathbb{Z}\xrightarrow{\times n}\mathbb{Z}\xrightarrow{\pi}\mathbb{Z}/n\mathbb{Z}\to 0$ is a short exact sequence of $\mathbb{Z}$-modules, and prove that it does not split.

<details>
<summary>Hint 1</summary>

Identify the kernel of reduction modulo n

</details>

<details>
<summary>Hint 2</summary>

If a section s existed, examine s([1])

</details>

<details>
<summary>Hint 3</summary>

Z has no nonzero element killed by n

</details>

<details>
<summary>Worked solution</summary>

Multiplication by n is injective on Z, reduction π is surjective, and ker $\pi=nZ$, exactly the image of multiplication by n. Hence the sequence is short exact. Suppose it split, so there were a Z-linear section $s:Z/nZ\to Z$ with $\pi∘s=id$. Because $n[1]=[0]$, linearity gives $n\cdot s([1])=s(n[1])=s([0])=0$. The additive group Z is torsion-free, so $s([1])=0$. But then $\pi(s([1]))=[0]$, contradicting $(\pi∘s)([1])=[1]$. Therefore no section exists and the sequence is nonsplit.

**Answer.** The sequence is exact because ker $\pi=nZ=im(\times n)$, but it cannot split because any proposed section would send [1] to an n-torsion integer.

</details>

*Tags: exact sequence, module, nonsplitting*
