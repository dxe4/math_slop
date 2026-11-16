var e=`---
parent_id: course-abstract-algebra-proof
chapter_id: modules-and-the-limits-of-vector-space-intuition
---

# Module 8 — Modules and the limits of vector-space intuition

**Question.** What remains of linear algebra when scalars need not have inverses? Modules retain addition and scalar multiplication, but expose exactly where familiar vector-space proofs used division.

**Entry check.** Solve $2r=3$ first in $\\mathbb Q$ and then in $\\mathbb Z$. The rational solution is $3/2$; there is no integer solution. If you silently used $1/2$ in the integer calculation, mark where the proposed scalar leaves the ring.

For a unital ring $R$, a **left $R$-module** $M$ is an abelian group under addition with $r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$, and $1m=m$. Over a noncommutative ring, specifying “left” matters. A submodule is an additive subgroup closed under the scalar action; an $R$-linear map preserves addition and scalar multiplication. Every abelian group is a $\\mathbb Z$-module via repeated addition. Every left ideal is a left module over its ring, and a module over a field is a vector space.

A nonzero scalar can act differently in two modules. Multiplication by 2 on the $\\mathbb Q$-vector space $\\mathbb Q$ is invertible, with inverse multiplication by $1/2$. Multiplication by 2 on the $\\mathbb Z$-module $\\mathbb Z$ is injective but not surjective: no integer maps to 1. In $\\mathbb Z/6\\mathbb Z$, the nonzero element $[2]$ is torsion since $3[2]=[0]$. These facts do not contradict the vector-space rule: only nonzero **field** scalars are required to act invertibly.

## A submodule without a complement

The submodule $2\\mathbb Z\\subset\\mathbb Z$ has no complementary submodule $K$ with $\\mathbb Z=2\\mathbb Z\\oplus K$. If $K=0$, the proposed sum misses 1. If $K$ contains a nonzero $k$, it also contains $2k$, while $2k\\in2\\mathbb Z$ and $2k\\ne0$. Thus $K\\cap2\\mathbb Z\\ne0$, contradicting a direct sum. This concrete failure shows why the vector-space complement theorem cannot be transferred to arbitrary modules.

The same information appears in a **short exact sequence** of $\\mathbb Z$-modules:
$$
0\\longrightarrow\\mathbb Z\\xrightarrow{\\;\\times2\\;}\\mathbb Z\\xrightarrow{\\;\\pi\\;}\\mathbb Z/2\\mathbb Z\\longrightarrow0,
\\qquad \\pi(n)=[n]_2.
$$
“Exact” means the image of each incoming map equals the kernel of the outgoing map at that position. At the first $\\mathbb Z$, $\\ker(\\times2)=0$, the image of the zero map, because $\\mathbb Z$ has no 2-torsion. At the second $\\mathbb Z$, $\\operatorname{im}(\\times2)=2\\mathbb Z=\\ker\\pi$. At $\\mathbb Z/2\\mathbb Z$, $\\operatorname{im}\\pi$ is the whole quotient, the kernel of its map to 0. All maps are additive and $\\mathbb Z$-linear. The sequence does not split: a section $s:\\mathbb Z/2\\mathbb Z\\to\\mathbb Z$ would send $[1]$ to an integer $k$ with $2k=s([0])=0$, forcing $k=0$, which cannot satisfy $\\pi(s([1]))=[1]$.

The [morphisms and modules book](#/item/book-morphisms-modules-categories) develops further structure; no general classification theorem is needed for this first encounter.

## Guided practice

### 1. Starter — A linear map

Show $f:\\mathbb Z\\to\\mathbb Z$, $f(n)=3n$, is a $\\mathbb Z$-module map. Find its image and kernel.

**Hint.** Check addition and integer scalar multiplication separately.

**Reasoning.** $f(m+n)=3m+3n$ and $f(rn)=3rn=r f(n)$. Its image is $3\\mathbb Z$ and its kernel is zero because $3n=0$ in $\\mathbb Z$ implies $n=0$.

### 2. Core — Locate exactness

For the short exact sequence above, why is the middle kernel $2\\mathbb Z$ rather than $0$?

**Hint.** Compute the kernel of $\\pi$, not of $\\times2$.

**Reasoning.** $\\pi(n)=[0]$ exactly when $n$ is even. That set is $2\\mathbb Z$, precisely the image of the preceding multiplication-by-2 map. Kernels must be matched with incoming images position by position.

### 3. Transfer — Scalar action versus vector relation

A learner claims any two nonzero vectors in a vector space are scalar multiples. Give a counterexample, then state the valid scalar claim.

**Hint.** Work in $\\mathbb Q^2$.

**Reasoning.** $(1,0)$ and $(0,1)$ are both nonzero and no scalar sends one to the other. The valid claim is that multiplication by any fixed nonzero field scalar $c$ is a bijection $V\\to V$, with inverse multiplication by $c^{-1}$. It does not change a vector's direction into an arbitrary other direction.

### 4. Proof audit — A borrowed complement theorem

“Since $2\\mathbb Z$ is a submodule of the free module $\\mathbb Z$, extend a basis of it to a basis of $\\mathbb Z$.” Identify the unjustified step.

**Hint.** Any complement would contradict the earlier $2k$ argument.

**Reasoning.** Basis extension is a vector-space theorem that uses inverse scalars. Although $\\{2\\}$ is a basis of $2\\mathbb Z$ as a $\\mathbb Z$-module, it cannot be extended to a basis of $\\mathbb Z$: the only possible basis of rank one must generate all integers, while 2 does not, and adding a second generator would produce a nontrivial integer relation. The no-complement proof gives a direct obstruction.
`;export{e as default};