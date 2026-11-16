var e=`---
parent_id: book-winning-with-invariants
chapter_id: impartial-games
title: "Impartial Games"
level: secondary
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Impartial Games

In the previous chapter, **Positions as a directed graph**, we learned to classify every position of a finite acyclic game as either P (previous player wins) or N (next player wins). That classification is complete but coarse: it tells us who wins, yet it says nothing about how positions interact when we combine them. This chapter introduces the **Sprague–Grundy theory**, which replaces the boolean P/N label with a single nonnegative integer called the **nim-value** or **Grundy number**. The miracle is that disjoint sums of impartial games reduce to ordinary nim addition.

## 2.1 What impartial means

A game is **impartial** when the legal moves from any position depend only on the position, not on which player is about to move. Chess is not impartial: White can move a white pawn, Black cannot. Nim is impartial: any player may reduce any heap. The subtraction games of Chapter 1 are impartial.

Throughout this chapter we assume:

- the game is **finite**: finitely many positions, no directed cycles;
- the game is **impartial**: both players have the same move options from every position;
- play is **normal**: the player with no legal move loses.

These three hypotheses are the setting for Sprague–Grundy theory.

## 2.2 The minimum excluded value

Let $S$ be a finite set of nonnegative integers. The **minimum excluded value**, or **mex**, of $S$ is the smallest nonnegative integer not in $S$:

$$\\operatorname{mex}(S) = \\min \\{ k \\in \\mathbb{Z}_{\\geq 0} : k \\notin S \\}.$$

For example:

- $\\operatorname{mex}(\\{0, 1, 2\\}) = 3$;
- $\\operatorname{mex}(\\{1, 2, 3\\}) = 0$;
- $\\operatorname{mex}(\\emptyset) = 0$;
- $\\operatorname{mex}(\\{0, 2, 3\\}) = 1$.

The mex function is the heart of Sprague–Grundy theory. It turns a set of options into a single number.

## 2.3 The Sprague–Grundy function

Let $G$ be a finite acyclic impartial game. For each position $P$, define its **Grundy number** $g(P)$ recursively:

$$g(P) = \\operatorname{mex}\\bigl(\\{ g(Q) : P \\to Q \\text{ is a legal move} \\}\\bigr).$$

If $P$ is terminal, the set of options is empty, so $g(P) = \\operatorname{mex}(\\emptyset) = 0$.

**Theorem 12.1 (Sprague–Grundy).** A position $P$ is a P-position if and only if $g(P) = 0$.

**Proof.** We prove by induction on the maximum remaining path length from $P$.

*Base case.* If $P$ is terminal, $g(P) = 0$ and $P$ is P.

*Inductive step.* Assume the theorem holds for all positions reachable from $P$. Let $O = \\{ g(Q) : P \\to Q \\}$.

- If $g(P) = 0$, then $0 \\notin O$. By the induction hypothesis, no option of $P$ is a P-position. Therefore every move from $P$ goes to an N-position, so $P$ is P.
- If $g(P) \\neq 0$, then by definition of mex there exists some option $Q$ with $g(Q) = 0$. By the induction hypothesis, $Q$ is a P-position. Therefore $P$ has a move to a P-position, so $P$ is N.

Thus $g(P) = 0 \\iff P$ is P. $\\square$

The Grundy number does more than the boolean P/N label: it tells us **which** P-position to move to when one exists, and it will allow us to add games.

## 2.4 Computing Grundy numbers

Consider the subtraction game with move set $\\{1, 2, 3\\}$. We compute $g(n)$ for small $n$:

- $g(0) = \\operatorname{mex}(\\emptyset) = 0$;
- $g(1) = \\operatorname{mex}(\\{g(0)\\}) = \\operatorname{mex}(\\{0\\}) = 1$;
- $g(2) = \\operatorname{mex}(\\{g(1), g(0)\\}) = \\operatorname{mex}(\\{1, 0\\}) = 2$;
- $g(3) = \\operatorname{mex}(\\{g(2), g(1), g(0)\\}) = \\operatorname{mex}(\\{2, 1, 0\\}) = 3$;
- $g(4) = \\operatorname{mex}(\\{g(3), g(2), g(1)\\}) = \\operatorname{mex}(\\{3, 2, 1\\}) = 0$;
- $g(5) = \\operatorname{mex}(\\{g(4), g(3), g(2)\\}) = \\operatorname{mex}(\\{0, 3, 2\\}) = 1$;
- $g(6) = \\operatorname{mex}(\\{g(5), g(4), g(3)\\}) = \\operatorname{mex}(\\{1, 0, 3\\}) = 2$;
- $g(7) = \\operatorname{mex}(\\{g(6), g(5), g(4)\\}) = \\operatorname{mex}(\\{2, 1, 0\\}) = 3$;
- $g(8) = \\operatorname{mex}(\\{g(7), g(6), g(5)\\}) = \\operatorname{mex}(\\{3, 2, 1\\}) = 0$.

The pattern is $g(n) = n \\bmod 4$. This agrees with Chapter 1: P-positions are exactly those with Grundy number $0$.

Now try move set $\\{1, 3, 4\\}$:

- $g(0) = 0$;
- $g(1) = \\operatorname{mex}(\\{0\\}) = 1$;
- $g(2) = \\operatorname{mex}(\\{g(1)\\}) = \\operatorname{mex}(\\{1\\}) = 0$;
- $g(3) = \\operatorname{mex}(\\{g(2), g(0)\\}) = \\operatorname{mex}(\\{0, 0\\}) = 1$;
- $g(4) = \\operatorname{mex}(\\{g(3), g(1), g(0)\\}) = \\operatorname{mex}(\\{1, 1, 0\\}) = 2$;
- $g(5) = \\operatorname{mex}(\\{g(4), g(2), g(1)\\}) = \\operatorname{mex}(\\{2, 0, 1\\}) = 3$;
- $g(6) = \\operatorname{mex}(\\{g(5), g(3), g(2)\\}) = \\operatorname{mex}(\\{3, 1, 0\\}) = 2$;
- $g(7) = \\operatorname{mex}(\\{g(6), g(4), g(3)\\}) = \\operatorname{mex}(\\{2, 2, 1\\}) = 0$.

The sequence begins $0, 1, 0, 1, 2, 3, 2, 0, \\dots$. The P-positions are those with Grundy number $0$: $0, 2, 7, \\dots$. This matches the direct computation in Chapter 1.

## 2.5 Nim addition

The **nim sum** of two nonnegative integers is their bitwise exclusive-or, written $a \\oplus b$. Equivalently, write $a$ and $b$ in binary and add without carrying. For example:

$$5 \\oplus 3 = 101_2 \\oplus 011_2 = 110_2 = 6.$$

Nim sum is associative and commutative, has identity $0$, and every number is its own inverse: $a \\oplus a = 0$. These properties make $(\\mathbb{Z}_{\\geq 0}, \\oplus)$ an abelian group.

## 2.6 The sum of two games

Given two impartial games $G$ and $H$, their **disjoint sum** $G + H$ is the game in which a player chooses one of the components and makes a legal move in that component. The other component is untouched. Play ends when both components are terminal.

**Theorem 12.2 (Sprague–Grundy, sum formula).** For any positions $P$ in $G$ and $Q$ in $H$,

$$g(P + Q) = g(P) \\oplus g(Q).$$

**Proof.** We prove by induction on the sum of the maximum remaining path lengths in the two components. Let $x = g(P)$ and $y = g(Q)$, and let $z = x \\oplus y$.

We must show two things:

1. From $P + Q$, there is a move to a position whose Grundy number is any $w < z$.
2. From $P + Q$, there is no move to a position whose Grundy number is $z$.

For (1), let $w < z$. Let $b$ be the highest bit where $w$ and $z$ differ. Then $z$ has a $1$ at bit $b$ and $w$ has a $0$. Since $z = x \\oplus y$, exactly one of $x$ or $y$ has a $1$ at bit $b$. Suppose it is $x$. Define $x' = x \\oplus z \\oplus w$. Then $x' < x$ because bit $b$ changes from $1$ to $0$ and higher bits are unchanged. By definition of Grundy number, there exists a move $P \\to P'$ with $g(P') = x'$. Then

$$g(P' + Q) = x' \\oplus y = x \\oplus z \\oplus w \\oplus y = z \\oplus z \\oplus w = w.$$

For (2), suppose there is a move from $P + Q$ to a position with Grundy number $z$. The move changes exactly one component, say $P \\to P'$. Then $g(P') \\oplus y = z = x \\oplus y$, so $g(P') = x$. But $g(P) = \\operatorname{mex}(\\{g(P') : P \\to P'\\})$, so $x$ cannot appear among the options of $P$. This is a contradiction. The same argument holds if the move is in $H$.

Therefore the actual finite option-value set contains every $w<z$ and does not contain $z$. Its mex is $z$, so $g(P+Q)=z$. $\\square$

## 2.7 Nim restated

In Nim, a single heap of size $h$ has Grundy number $g(h) = h$. This is because from a heap of size $h$ we can move to any smaller size $h'$, so the options have Grundy numbers $\\{0, 1, \\dots, h - 1\\}$, and $\\operatorname{mex}$ of that set is $h$.

By the sum formula, a Nim position with heaps $(h_1, h_2, \\dots, h_k)$ has Grundy number

$$g = h_1 \\oplus h_2 \\oplus \\cdots \\oplus h_k.$$

This is exactly the XOR invariant of Chapter 1. The Sprague–Grundy theorem explains **why** XOR works: Nim heaps are impartial components, and their disjoint sum behaves like nim addition.

## 2.8 Common errors

**Error: forgetting that mex requires nonnegative integers.** The mex of $\\{1, 2, 3\\}$ is $0$, not $4$ or some other value. Always check whether $0$ is present.

**Error: assuming $g(P) = 0$ means the position is terminal.** A position can have Grundy number $0$ without being terminal. In the $\\{1, 2, 3\\}$ subtraction game, $g(4) = 0$ but $4$ has three legal moves. What $g(4) = 0$ means is that every option has nonzero Grundy number.

**Error: applying nim addition to partizan games.** The Sprague–Grundy theorem applies only to impartial games. In a partizan game, the two players have different move options, and the sum formula fails. We will study partizan games in the next chapter.

**Error: computing mex over an infinite set.** For finite games the set of options is finite, so mex is well-defined. For infinite games additional care is required.

## 2.9 Practice exercises

### Exercise 2.1

Compute the Grundy numbers for the subtraction game with move set $\\{1, 2, 3, 4\\}$ up to $n = 12$.

**Solution.** The sequence is $0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2$. The pattern is $g(n) = n \\bmod 5$. Proof by induction: for $0 \\leq n < 4$, the option values are $0,\\ldots,n-1$ (empty at $n=0$), so $g(n)=n$. For $n \\geq 4$, write $n = 5k + r$ with $0 \\leq r < 5$; the four predecessor values cover all residues except $r$, so mex gives $r$. $\\square$

### Exercise 2.2

In the subtraction game with move set $\\{1, 3, 4\\}$, compute $g(10)$ and $g(11)$.

**Solution.** Continuing from the text: $g(8) = \\operatorname{mex}(\\{g(7), g(5), g(4)\\}) = \\operatorname{mex}(\\{0, 3, 2\\}) = 1$; $g(9) = \\operatorname{mex}(\\{g(8), g(6), g(5)\\}) = \\operatorname{mex}(\\{1, 2, 3\\}) = 0$; $g(10) = \\operatorname{mex}(\\{g(9), g(7), g(6)\\}) = \\operatorname{mex}(\\{0, 0, 2\\}) = 1$; $g(11) = \\operatorname{mex}(\\{g(10), g(8), g(7)\\}) = \\operatorname{mex}(\\{1, 1, 0\\}) = 2$. $\\square$

### Exercise 2.3

Prove that in any impartial game, $g(P) = 1$ if and only if the set of option Grundy numbers contains $0$ and does not contain $1$.

**Solution.** Write $S=\\{g(Q):P\\to Q\\}$. By definition, $g(P)=\\operatorname{mex}(S)$. This mex equals $1$ exactly when $0\\in S$ and $1\\notin S$. Values $2,3,\\ldots$ may also occur in $S$; for example, $S=\\{0,2\\}$ still has mex $1$. $\\square$

### Exercise 2.4

A game has positions $A \\to B$, $A \\to C$, $B \\to D$, $C \\to D$, and $D$ terminal. Compute the Grundy numbers.

**Solution.** $g(D) = 0$; $g(B) = \\operatorname{mex}(\\{0\\}) = 1$; $g(C) = \\operatorname{mex}(\\{0\\}) = 1$; $g(A) = \\operatorname{mex}(\\{1, 1\\}) = \\operatorname{mex}(\\{1\\}) = 0$. Thus $A$ is a P-position, and both $B$ and $C$ are N. $\\square$

### Exercise 2.5

Show that the Sprague–Grundy sum formula implies the Nim theorem of Chapter 1: a Nim position is P if and only if the XOR of heap sizes is $0$.

**Solution.** Each heap of size $h$ has Grundy number $h$. By the sum formula, the combined position has Grundy number $h_1 \\oplus \\cdots \\oplus h_k$. By the Sprague–Grundy theorem, this is $0$ exactly when the position is P. $\\square$

## 2.10 Looking forward

The Sprague–Grundy theorem reduces every finite impartial game to a single nim heap. In the next chapter, **Partizan Games**, we drop the impartiality hypothesis. Left and Right may have different moves, and the algebraic structure becomes richer: games become numbers, and some positions are genuinely fuzzy, favoring whichever player moves first. The tools of this chapter are the foundation, but partizan theory requires new ideas.
`;export{e as default};