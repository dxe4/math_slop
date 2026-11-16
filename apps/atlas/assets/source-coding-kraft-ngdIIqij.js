var e=`---
parent_id: book-information-theory
chapter_id: source-coding-kraft
title: "Source Coding and Kraft’s Inequality"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Source Coding and Kraft’s Inequality

Preparation is finite entropy, divergence, binary trees and integer rounding. This is a zero-error variable-length coding chapter, with source law and framing assumptions stated explicitly.

## What a binary source code promises

A binary code assigns a finite bit string $c(x)$ to each source symbol in a finite alphabet. Its length is the nonnegative integer $\\ell_x$. A code is nonsingular if distinct symbols have distinct codewords. It is uniquely decodable if every finite concatenation of codewords has exactly one source-symbol parsing. It is prefix-free if no codeword is a prefix of any other.

Prefix-free implies unique decodability: read from left to right until a codeword ends, which cannot be confused with the beginning of a longer codeword, and repeat. Nonsingularity alone does not suffice. Codewords $0,01,1$ are distinct, but the bit string $01$ can mean the middle symbol or the first followed by the third.

A prefix decoder can stop at each leaf of a binary tree. Its stopping rule depends only on the bits seen so far. This gives an instantaneous symbol boundary without needing a separator. A separator is itself a resource and must be encoded if the alphabet is binary.

For a nontrivial alphabet, lengths are positive. The empty word can be a codeword only when there is a single source symbol in a prefix code. In that special case zero bits per symbol is meaningful if the number of symbols to reconstruct is known externally. It cannot delimit an unknown number of repetitions by itself.

## Kraft’s necessary inequality

**Theorem 6.1.** Every finite binary prefix code satisfies
$$
K=\\sum_x2^{-\\ell_x}\\le1.
$$

**Proof by intervals.** A bit string of length $\\ell$ identifies the dyadic interval in $[0,1)$ whose first $\\ell$ binary digits are those bits. Its length is $2^{-\\ell}$. If one word is a prefix of another, the corresponding interval contains the other interval. Conversely two dyadic intervals from finite binary words either are disjoint or have this prefix containment. A prefix-free set therefore gives disjoint intervals. Their total length cannot exceed one. ∎

Binary expansions at dyadic endpoints have two representations, but the half-open interval convention removes ambiguity. This is a proof about finite intervals and words, not about choosing a random infinite expansion.

An equivalent finite-tree proof extends every leaf to a common depth $L\\ge\\max_x\\ell_x$. A leaf at depth $\\ell_x$ accounts for $2^{L-\\ell_x}$ distinct nodes at depth $L$. These sets cannot overlap in a prefix code, and there are only $2^L$ available nodes. Divide the resulting count by $2^L$.

## Kraft’s converse construction

**Theorem 6.2.** If finitely many nonnegative integer lengths satisfy $\\sum_i2^{-\\ell_i}\\le1$, there exists a prefix code with exactly these lengths.

**Proof.** Sort the lengths so that $\\ell_1\\le\\cdots\\le\\ell_m$. At stage $i$, choose an available binary node at depth $\\ell_i$, avoiding every descendant of previously chosen nodes. Previously chosen codeword $j$ blocks exactly $2^{\\ell_i-\\ell_j}$ nodes at that depth. Their blocked sets are disjoint by induction.

The partial Kraft condition including the present word gives
$$
\\sum_{j<i}2^{\\ell_i-\\ell_j}+1\\le2^{\\ell_i}.
$$
At least one of the $2^{\\ell_i}$ nodes is therefore unblocked. Choose it. It is not below any earlier codeword, and because earlier lengths are no larger, it cannot be an ancestor of an earlier different codeword. This preserves prefix-freeness. Continue through all lengths. ∎

If a length is zero, its term already equals one, so there can be no other lengths. The construction correctly selects the root for that singleton case. The proof gives an actual greedy allocation procedure, although it does not specify which available node to choose when there are several choices.

A length list is not a code until codewords are assigned. Kraft’s converse guarantees a suitable assignment; an arbitrary assignment with those lengths need not be prefix-free. For example, lengths one and two satisfy Kraft, but words $0$ and $00$ do not form a prefix code.

## Uniquely decodable codes and McMillan’s argument

Prefix-free codes are a convenient subclass, but the same length restriction holds for every finite uniquely decodable code with nonempty words.

**Theorem 6.3 (McMillan).** If a finite binary code is uniquely decodable, then $\\sum_i2^{-\\ell_i}\\le1$.

**Proof.** Put $K=\\sum_i2^{-\\ell_i}$ and let $\\ell_{\\max}$ be the largest length. Expanding $K^k$ over all ordered lists of $k$ source symbols gives
$$
K^k=\\sum_L A_{k,L}2^{-L},
$$
where $A_{k,L}$ counts such lists whose concatenated codeword has length $L$. Unique decodability means distinct lists cannot produce the same binary string. Therefore $A_{k,L}\\le2^L$. Possible total lengths lie between zero and $k\\ell_{\\max}$, so there are at most $k\\ell_{\\max}+1$ terms. Hence $K^k\\le k\\ell_{\\max}+1$.

Take $k$th roots and let $k$ tend to infinity. The right side tends to one, so $K\\le1$. ∎

The theorem does not say that every code whose length sum is at most one is uniquely decodable. It says the *lengths* of a uniquely decodable code can be reassigned to some prefix code. Thus when optimising expected length over finite uniquely decodable codes, restricting to prefix codes loses no possible length vector.

The proof also explains why a simple one-symbol counting argument is inadequate. Unique decodability constrains arbitrarily long concatenations. Taking powers of the Kraft sum makes those concatenations visible.

## Entropy is the expected-length lower bound

Let $P$ be a source law with positive mass on its finite support. For a uniquely decodable code, let $K=\\sum_x2^{-\\ell_x}\\le1$ and normalise its length weights to the probability vector $q_x=2^{-\\ell_x}/K$. Direct calculation gives
$$
D(P\\Vert Q)=-H(P)+E_P\\ell_X+\\log_2K.
$$
Consequently
$$
E_P\\ell_X=H(P)+D(P\\Vert Q)-\\log_2K\\ge H(P).
$$
There are two nonnegative penalties: mismatch between $P$ and the normalised length weights, and incomplete use of the available binary tree.

Equality requires both $K=1$ and $P=Q$. Thus exact entropy-length equality holds precisely when the probabilities are dyadic, $p_x=2^{-\\ell_x}$, for the assigned code. For a non-dyadic source the optimal one-symbol expected length is strictly above entropy, though a block code can reduce the excess per source symbol.

If one includes zero-probability symbols in the code alphabet, their lengths consume Kraft mass without appearing in the expectation. The lower bound still holds by applying the argument to the positive support, whose Kraft sum is at most one. Equality then also requires that no positive Kraft mass be wasted on impossible symbols.

## Shannon lengths and their redundancy

Choose
$$
\\ell_x=\\left\\lceil-\\log_2p_x\\right\\rceil
$$
for positive source masses. Then $2^{-\\ell_x}\\le p_x$, so Kraft’s converse constructs a prefix code. Since $-\\log_2p_x\\le\\ell_x<-\\log_2p_x+1$,
$$
H(P)\\le E_P\\ell_X<H(P)+1.
$$
The strict upper bound uses the pointwise strict ceiling inequality, including when the surprise is an integer. The deterministic singleton case permits length zero; if a format insists on a nonempty word even there, that external requirement changes the displayed overhead.

Apply the construction to iid blocks of length $n$. Their entropy is $nH(P)$, so
$$
H(P)\\le\\frac1nE\\ell(X^n)<H(P)+\\frac1n.
$$
Every positive-probability block is reconstructed exactly; lengths now vary from block to block. This is distinct from the preceding chapter’s fixed-length almost-lossless theorem. Both approach the same first-order entropy rate through different coding criteria.

A physical file also needs a framing rule: the block length, source model, codebook and number of blocks must be shared or represented. For a fixed model and large block these may be amortised, but they cannot be silently ignored in a finite-file claim.

## Why average length is a genuine design criterion

A short codeword for one outcome must leave enough tree capacity for the others. Kraft’s inequality quantifies that global constraint. One cannot independently round every desired length downward and expect a decodable code.

Likewise, code optimality is relative to a law. Swapping two codeword assignments changes expected length by $(p_i-p_j)(\\ell_j-\\ell_i)$. If the more probable outcome has the longer codeword, exchanging them improves or preserves average length. This elementary exchange will be the first step of Huffman optimality.

Alphabet size alone does not identify the optimal expected length. A uniform distribution on eight symbols has a natural three-bit fixed code; a very skew distribution can use a one-bit common word and longer rare words, achieving a much smaller average while still assigning every outcome a distinct finite representation.

The optional [prefix-code article](/articles/information-theory-prefix-code/) illustrates tree geometry. The results here provide the necessity, construction and expected-length inequalities on which the next chapter’s optimal algorithm rests.

## Other output alphabets and unequal physical costs

For an output alphabet with $D\\ge2$ symbols, the same tree proof gives $\\sum_xD^{-\\ell_x}\\le1$. Replacing binary logarithms by base-$D$ logarithms in the divergence argument yields expected length at least $H(P)/\\log_2D$ output symbols. Ceiling base-$D$ surprises achieve less than one additional output symbol. The unit conversion is part of the statement: a ternary digit and a bit are not equal physical resources.

This extension assumes every output symbol has the same cost. If transmitting one symbol takes twice as long as another, tree depth no longer equals transmission time. A code that minimises the number of symbols may fail to minimise elapsed time or energy. Such unequal-cost coding is a different optimisation problem and cannot be solved by changing the logarithm base alone.

Even in the binary equal-cost case, the physical transport may require padding to bytes, framing markers or error protection. Kraft and entropy describe the mathematical representation layer. Applying their bounds to a file format requires identifying which costs are counted and which are fixed shared conventions.

## Worked example 6.1: Dyadic equality

For probabilities $(1/2,1/4,1/8,1/8)$ choose words $0,10,110,111$. Their lengths are $1,2,3,3$, and their Kraft sum is $1/2+1/4+1/8+1/8=1$. Expected length is $1/2+1/2+3/8+3/8=7/4$ bits, exactly the entropy. The tree is complete and its dyadic leaf weights match the source. No uniquely decodable code can improve this expectation.

## Worked example 6.2: Shannon lengths need not be optimal

For probabilities $(2/5,3/10,1/5,1/10)$, ceiling surprises give lengths $(2,2,3,4)$. Their Kraft sum is $1/4+1/4+1/8+1/16=11/16$, and expected length is $12/5$ bits. The valid prefix words $0,10,110,111$ instead have expected length $19/10$ bits. Shannon’s construction proves a redundancy bound, not exact one-symbol optimality. Huffman’s algorithm will optimise the integer lengths.

## Worked example 6.3: A feasible list with a poor assignment

The lengths $(1,2,2)$ have Kraft sum one. The words $0,00,01$ have those lengths but are not prefix-free, because the first word prefixes both others. Reassigning as $0,10,11$ gives a prefix code. Kraft’s converse concerns the existence of an assignment, while its necessary direction concerns the actual code. Keeping these two logical directions separate prevents treating a length check as a complete decoding rule.

## Completeness is not the same as matching the source

Feed a prefix decoder independent fair bits. A leaf at depth $\\ell$ is reached with probability $2^{-\\ell}$. Since leaves correspond to disjoint prefix events, their total probability is exactly the Kraft sum. A sum below one leaves positive probability on bit paths that reach no codeword.

For a finite code, the same fact has a finite counting form. At the maximum leaf depth, every existing codeword blocks its descendant nodes. If the Kraft sum is below one, at least one node at that depth remains available and can be added without violating prefix-freeness. A finite prefix code is maximal against adding more words exactly when its Kraft sum is one.

When every source symbol has positive probability, an expected-length optimum can be taken complete. In the finite tree spanned by its leaves, incompleteness implies some internal node has only one used child. Contracting that edge shortens all positive-mass descendants and improves the expected cost. Hence an incomplete optimum would contradict optimality.

Completeness does not alone attain entropy. It removes the unused-tree penalty but can leave a mismatch between dyadic leaf masses and source probabilities. A complete two-bit code for four outcomes always costs two bits per symbol, even when their source probabilities are one-half, one-quarter and two eighths, whose entropy is smaller.

The divergence decomposition separates those effects exactly. Filling unused tree capacity and assigning common outcomes shorter words are related but different improvements. A length list with Kraft sum one can therefore still be a poor code for a particular source law.

This interpretation is also a useful decoder check in thought experiments: maximal tree coverage concerns the set of accepted bit streams, whereas source optimality concerns their probability-weighted use. Neither property can be inferred solely from the other.

## Concatenation preserves decoding without adding separators

Take a prefix code for each source symbol. Concatenating n codewords gives a uniquely decodable representation of an n-symbol block: read from the beginning until a codeword ends, remove that first word, and repeat. The prefix property ensures that the first stopping point is unambiguous, and induction recovers the full block. No extra delimiter bits are required. The output length is exactly the sum of the n individual lengths.

For independent identically distributed source symbols with finite expected codeword length, the law of large numbers makes output length per symbol converge to that expectation. This is a statement about a variable-length stream, distinct from fixed-length compression with a small decoding-failure probability. It also separates expected length from a guaranteed maximum length: a code can have finite expectation but arbitrarily long rare outputs on an infinite alphabet. The finite-alphabet chapter avoids that latter difficulty, while the distinction remains relevant when a coding argument is extended to unbounded data types.

## Exercises

### Exercise 6.1
<a id="source-coding-kraft-ex-1"></a>

Are lengths $(1,1,2)$ feasible for a binary prefix code?

<details>
<summary>Hint 1</summary>

Calculate the Kraft sum.

</details>
<details>
<summary>Hint 2</summary>

A sum greater than one violates necessity.

</details>
<details>
<summary>Solution</summary>

The sum is $1/2+1/2+1/4=5/4>1$, so no prefix code has those lengths. McMillan also rules out any uniquely decodable code with those lengths. The two length-one words already occupy the entire binary tree.

</details>

### Exercise 6.2
<a id="source-coding-kraft-ex-2"></a>

Construct a prefix code with lengths $(2,2,2)$.

<details>
<summary>Hint 1</summary>

Choose three distinct nodes at depth two.

</details>
<details>
<summary>Hint 2</summary>

Equal-length words cannot prefix one another.

</details>
<details>
<summary>Solution</summary>

The words $00,01,10$ work. Their Kraft sum is $3/4$, leaving the fourth depth-two node unused. This incompleteness is allowed: Kraft requires at most one, not exactly one.

</details>

### Exercise 6.3
<a id="source-coding-kraft-ex-3"></a>

Why are distinct codewords insufficient for decoding concatenations?

<details>
<summary>Hint 1</summary>

Use words $0,01,1$.

</details>
<details>
<summary>Hint 2</summary>

Find two parsings of $01$.

</details>
<details>
<summary>Solution</summary>

The string $01$ can be the single codeword $01$ or the concatenation of $0$ and $1$. Thus the code is nonsingular but not uniquely decodable. Symbol-level injectivity does not guarantee injectivity of concatenated source messages.

</details>

### Exercise 6.4
<a id="source-coding-kraft-ex-4"></a>

Prove that prefix-free implies unique decodability.

<details>
<summary>Hint 1</summary>

Compare the first words in two possible parsings.

</details>
<details>
<summary>Hint 2</summary>

Neither can be a proper prefix of the other.

</details>
<details>
<summary>Solution</summary>

If two concatenations are equal, their first codewords start at the same bit. If they differed in length, the shorter would prefix the longer, which is forbidden. They must therefore be the same word. Remove that word and repeat. Induction proves equality of the entire source sequences.

</details>

### Exercise 6.5
<a id="source-coding-kraft-ex-5"></a>

Characterise equality in the entropy lower bound.

<details>
<summary>Hint 1</summary>

Use the normalised length distribution.

</details>
<details>
<summary>Hint 2</summary>

Both displayed nonnegative penalties must vanish.

</details>
<details>
<summary>Solution</summary>

Equality requires $-\\log_2K=0$ and $D(P\\Vert Q)=0$, hence $K=1$ and $p_x=2^{-\\ell_x}$. Conversely these identities make expected length exactly entropy. Thus dyadic probabilities with a complete matching tree attain equality.

</details>

### Exercise 6.6
<a id="source-coding-kraft-ex-6"></a>

Show Shannon lengths satisfy Kraft.

<details>
<summary>Hint 1</summary>

Exponentiation reverses the surprise ceiling in the right way.

</details>
<details>
<summary>Hint 2</summary>

Sum the resulting probability upper bounds.

</details>
<details>
<summary>Solution</summary>

Since $\\ell_x\\ge-\\log_2p_x$, one has $2^{-\\ell_x}\\le p_x$. Summing over positive support gives a Kraft sum at most one. The converse theorem supplies a prefix assignment with those lengths; no claim about an arbitrary assignment is needed.

</details>

### Exercise 6.7
<a id="source-coding-kraft-ex-7"></a>

Explain the role of taking powers in McMillan’s proof.

<details>
<summary>Hint 1</summary>

One-symbol distinctness is too weak.

</details>
<details>
<summary>Hint 2</summary>

The expansion counts lists of $k$ source symbols.

</details>
<details>
<summary>Solution</summary>

$K^k$ groups all source lists of length $k$ by their concatenated bit length. Unique decodability bounds the number in each group by the number of binary strings of that length. Taking $k$ large turns the polynomial count of possible lengths into a vanishing root factor and forces $K\\le1$.

</details>

### Exercise 6.8
<a id="source-coding-kraft-ex-8"></a>

Can a binary prefix code contain the empty word and another word?

<details>
<summary>Hint 1</summary>

The empty word is a prefix of every word.

</details>
<details>
<summary>Hint 2</summary>

Check Kraft as well.

</details>
<details>
<summary>Solution</summary>

No. Prefix-freeness immediately fails because the empty word prefixes the other. Its Kraft contribution is also one, leaving no room for another finite word. A singleton deterministic source can use the empty word only with the required external framing convention.

</details>

### Exercise 6.9
<a id="source-coding-kraft-ex-9"></a>

For iid blocks, derive the per-symbol Shannon redundancy bound.

<details>
<summary>Hint 1</summary>

Block entropy is $nH(P)$.

</details>
<details>
<summary>Hint 2</summary>

Divide the one-block upper bound by $n$.

</details>
<details>
<summary>Solution</summary>

The block prefix code has expected length below $nH(P)+1$ and at least $nH(P)$. Dividing gives a per-symbol excess smaller than $1/n$. The code is zero-error on positive-probability blocks but has variable block lengths.

</details>

### Exercise 6.10
<a id="source-coding-kraft-ex-10"></a>

Why can zero-error variable-length coding beat the full-support fixed-length rate?

<details>
<summary>Hint 1</summary>

Rare blocks can receive long descriptions.

</details>
<details>
<summary>Hint 2</summary>

The expected length weights each cost by its source probability.

</details>
<details>
<summary>Solution</summary>

Fixed-length zero-error coding must reserve enough messages for every support block and pays that same length each time. A prefix code can give common blocks shorter descriptions and rare blocks longer ones while preserving decodability. Its law-weighted average can approach entropy, even when full-support fixed-length rate is larger.

</details>

## Summary

Prefix codes correspond to disjoint tree leaves and satisfy Kraft’s inequality, whose converse constructs every feasible finite length vector. McMillan extends necessity to uniquely decodable codes. Expected length is at least entropy, and Shannon block lengths approach it with less than one extra bit per block.
`;export{e as default};