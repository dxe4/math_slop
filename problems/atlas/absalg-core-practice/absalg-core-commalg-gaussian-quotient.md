# A quotient of the Gaussian integers

*Difficulty 4 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 10 of 12*

Prove that the ideal $(2+i)$ in $\mathbb{Z}[i]$ is prime, and show that $\mathbb{Z}[i]/(2+i)$ is a field with exactly $5$ elements. Exhibit an explicit isomorphism with $\mathbb{F}_5$.

<details>
<summary>Hint 1</summary>

Compute the norm $N(2+i)$ and recall that if the norm is a rational prime, the element is irreducible in $\mathbb{Z}[i]$.

</details>

<details>
<summary>Hint 2</summary>

Use that $\mathbb{Z}[i]$ is a PID, so irreducible elements generate maximal ideals.

</details>

<details>
<summary>Hint 3</summary>

In the quotient $2+i=0$, so $i=-2$. Try $\phi(a+bi)=a-2b\pmod 5$; prove it preserves products and show both inclusions of its kernel.

</details>

<details>
<summary>Worked solution</summary>

In $\mathbb{Z}[i]/(2+i)$ we have $i=-2$, and $(-2)^2=4\equiv-1\pmod5$. Define $\phi:\mathbb{Z}[i]\to\mathbb{F}_5$ by $\phi(a+bi)=a-2b\pmod5$. It preserves addition and $1$. For $z=a+bi$ and $w=c+di$, $\phi(zw)=ac-bd-2ad-2bc$, whereas $\phi(z)\phi(w)=ac-2ad-2bc+4bd$; their difference is $5bd$, so multiplication is preserved modulo $5$. Every residue class is the image of an integer, so $\phi$ is surjective. As $\phi(2+i)=2-2=0$, the ideal $(2+i)$ lies in $\ker\phi$. Conversely, if $\phi(a+bi)=0$, write $a-2b=5k$. Then $a+bi=b(2+i)+5k=(2+i)\bigl(b+k(2-i)\bigr)$, using $5=(2+i)(2-i)$. Thus $\ker\phi=(2+i)$. The first isomorphism theorem gives $\mathbb{Z}[i]/(2+i)\cong\mathbb{F}_5$, a field of exactly five elements. Therefore $(2+i)$ is maximal and hence prime.

**Answer.** $\mathbb{Z}[i]/(2+i)\cong\mathbb{F}_5$ via $a+bi\mapsto a-2b\pmod5$; the kernel is exactly $(2+i)$, so this ideal is maximal and prime.

</details>

*Tags: commutative-algebra, rings-ideals, gaussian-integers, quotient-rings, finite-fields*
