
# Module 1 — Groups from definitions

**Question.** Which properties of addition survive when the operation is composition of motions or permutations? A group records exactly the properties needed to undo a move and regroup a calculation. Commutativity is deliberately absent.

**Entry check.** $S_3$ is the group of all permutations of $\{1,2,3\}$. In cycle notation, $(12)$ swaps 1 and 2 and fixes 3; $(123)$ sends $1\mapsto2\mapsto3\mapsto1$. Read a product from right to left: in $(12)(23)$, 1 first stays put and then goes to 2. Calculate $(12)(23)$ and $(23)(12)$. They are $(123)$ and $(132)$. If you obtained the same permutation, trace the image of 1 through each composition before using a familiar arithmetic rule. [Proof Foundations](#/courses/atlas-proof-foundations) reviews quantified closure arguments.

A **group** is a set $G$ with an associative operation $G\times G\to G$, an element $e$ satisfying $eg=ge=g$, and for each $g$ an element $g^{-1}$ satisfying $gg^{-1}=g^{-1}g=e$. Closure is part of saying the operation maps $G\times G$ into $G$. These axioms give uniqueness: if $e,f$ are identities, $e=ef=f$; if $b,c$ both invert $a$, then $b=b(ac)=(ba)c=c$. Cancellation follows by multiplying $ax=ay$ on the left by $a^{-1}$. In particular, $ab=e$ already implies $b=a^{-1}$ in a group, even when $ab\ne ba$ in general.

**Order matters.** The inverse of $ab$ is $b^{-1}a^{-1}$: $(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=e$, and the reverse product is also $e$. The tempting $a^{-1}b^{-1}$ need not work. In $S_3$, taking $a=(12)$, $b=(23)$ makes $(ab)^{-1}=ba\ne ab=a^{-1}b^{-1}$.

Integers under addition and invertible matrices under multiplication are groups. Integers under multiplication are not: 2 has no integer inverse. Subtraction is not associative. These are different failures, and naming the failed axiom is better than saying only “not a group.”

## The subgroup test

A subset $H\subseteq G$ is a **subgroup** if the inherited operation makes it a group. Here is an efficient equivalent criterion:

> A nonempty subset $H$ is a subgroup if $ab^{-1}\in H$ for every $a,b\in H$.

The forward direction uses closure and inverses. Conversely choose $h\in H$. Then $e=hh^{-1}\in H$. For $a\in H$, apply the criterion to $e,a$ to get $a^{-1}\in H$. Apply it to $a,b^{-1}\in H$ to get $a(b^{-1})^{-1}=ab\in H$. Associativity is inherited from $G$, and the identity and inverses just constructed lie in $H$. We used nonemptiness to obtain the first $h$; the empty set otherwise satisfies the conditional test vacuously.

**Worked example.** In $\mathbb Z$ under addition, $n\mathbb Z$ is a subgroup for every integer $n$: for $a=nr$, $b=ns$, the subgroup expression $a-b=n(r-s)$ remains in $n\mathbb Z$. The same set under integer multiplication is generally not a group. State both the set and its operation.

## Guided practice

### 1. Starter — Find the failed axiom

Is the set of positive integers under addition a group?

**Hint.** Test the identity before inverses.

**Reasoning.** Addition is associative and closed, but its identity 0 is not positive; also no positive integer has an additive inverse in the set. Either failure suffices.

### 2. Core — An intersection

Prove that the intersection of two subgroups $H,K\le G$ is a subgroup.

**Hint.** First locate an element, then use the one-step test.

**Reasoning.** Both contain $e$, so $H\cap K$ is nonempty. If $a,b\in H\cap K$, then $ab^{-1}$ belongs to $H$ and to $K$ by subgroup closure; hence it belongs to their intersection. The criterion applies.

### 3. Transfer — A centralizer subgroup

Fix a square matrix $T$ over a field. Prove that the invertible matrices commuting with $T$ form a subgroup of the general linear group. For $T=\begin{pmatrix}1&0\\0&2\end{pmatrix}$, exhibit an invertible matrix outside that subgroup.

**Hint.** If $AT=TA$, multiply by $A^{-1}$ on both sides to learn what its inverse does. A coordinate swap tests the example.

**Reasoning.** $I$ commutes with $T$. If $AT=TA$ and $BT=TB$, then $(AB)T=A(BT)=A(TB)=(TA)B=T(AB)$. From $AT=TA$, multiplication by $A^{-1}$ on the left and right gives $TA^{-1}=A^{-1}T$. Hence the commuting invertible matrices contain identity and are closed under products and inverses. The swap $S=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ is invertible, while $ST=\begin{pmatrix}0&2\\1&0\end{pmatrix}$ and $TS=\begin{pmatrix}0&1\\2&0\end{pmatrix}$ differ.

### 4. Proof audit — A missing hypothesis

A proposed subgroup proof says: “For all $a,b\in H$, $ab^{-1}\in H$; thus $H$ is a subgroup.” What could be missing?

**Hint.** Try $H=\varnothing$.

**Reasoning.** The universal statement is vacuous for $\varnothing$, which has no identity. Add $H\ne\varnothing$ before invoking the criterion.
