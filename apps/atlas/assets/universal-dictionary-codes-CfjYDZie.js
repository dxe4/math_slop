var e=`---
parent_id: book-information-theory
chapter_id: universal-dictionary-codes
title: "Universal and Dictionary Codes"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Universal and Dictionary Codes

Preparation is type counts, finite entropy concavity, Kraft’s bound and laws of large numbers. The complete universality proof here concerns fixed finite iid sources; dictionary parsing is introduced with its separately delimited claims.

## A code for an unknown finite iid law

Earlier codes used a known source distribution. Here the alphabet of size $q\\ge2$ is known, but the iid probability vector is not. The aim is one fixed coding rule whose expected per-symbol length approaches the entropy of *every fixed* law on that alphabet.

This is a pointwise universality requirement over laws. It does not promise a finite-sample guarantee uniform over all growing alphabets or all possible source classes. A truly unrestricted source could choose any distribution on whole blocks, so no single small model cost could adapt to every such possibility.

We first give a complete finite iid construction using symbol counts. Then we introduce dictionary parsing as a different way to discover repeated structure. The universal iid theorem will be proved for the count code; dictionary universality requires an additional theorem and is identified separately.

This chapter expands the compression theme in Euler’s retained [algorithms information chapter](../algorithms-computation-proof-desk/information-compression-coding.md). The original source, code and exercises stay in place. Its counting and model-cost questions motivate the present construction; no earlier code-execution claim is being extended to these new algorithms.

## Types and their classes

For a block $x^n$ over $q$ symbols, let $n_a$ be the number of occurrences of symbol $a$ and let $\\widehat p_a=n_a/n$. The empirical probability vector $\\widehat p$ is its type. Its type class consists of all blocks having exactly the same counts. The class size is
$$
N(n_1,\\ldots,n_q)=\\frac{n!}{\\prod_an_a!}.
$$
The multinomial count follows by choosing positions for each symbol; zero counts contribute $0!=1$. Fix any agreed lexicographic ordering of the alphabet and of each type class.

A type can be described by $q$ counts between zero and $n$, using
$$
b_n=\\lceil\\log_2(n+1)\\rceil
$$
bits per count. This is wasteful because the counts sum to $n$, but its overhead is easy to bound. The decoder checks that the represented counts sum to the known block length. Invalid headers represent no source block; their unused bit strings cause no mathematical problem.

Given the header, the decoder knows $N$ and therefore knows that the following index has exactly $\\lceil\\log_2N\\rceil$ bits. An index at least $N$ is likewise invalid. An index below $N$ identifies the source block uniquely by the agreed ordering.

## Why the count-and-index description is decodable

The first $qb_n$ bits have a fixed length. After reading them, the decoder calculates the unique payload length. Two valid codewords with different headers cannot prefix one another, because their fixed header portions already differ. With the same header they have the same payload length, and distinct valid indices differ in that payload. Thus the block code is prefix-free for known $n$.

This proof matters because the payload lengths vary between types. Merely writing “send the index” would omit the question of how its length is known. Here it is determined entirely by already decoded data.

Its exact length is
$$
L(x^n)=qb_n+\\lceil\\log_2N(n_1,\\ldots,n_q)\\rceil.
$$
The count header is not assumed free. A receiver with the counts already available as side information would face a different, cheaper coding problem.

The construction does not require efficient enumeration of a giant type class to establish existence. In principle an index can be ranked and unranked recursively using multinomial counts. Arithmetic cost and integer precision would enter an implementation analysis, which is separate from this length theorem.

## The type-class upper bound

Use the empirical law $\\widehat p$ as an auxiliary probability model. Every member of its own type class has probability
$$
\\prod_a\\widehat p_a^{n_a}=2^{-nH(\\widehat p)}.
$$
Here $0^0$ is omitted rather than evaluated; only positive counts enter the product. Since the total probability of the type class under that law is at most one,
$$
N(n_1,\\ldots,n_q)\\le2^{nH(\\widehat p)}.
$$
Consequently
$$
L(x^n)\\le qb_n+nH(\\widehat p)+1.
$$
The bound is deterministic for every input block. It is not yet a source-entropy statement, because empirical entropy is a function of the observed block.

For iid observations from a fixed law $P$, $E\\widehat p=P$. Entropy concavity gives $EH(\\widehat p)\\le H(P)$. Averaging the deterministic bound yields
$$
EL(X^n)\\le nH(P)+q\\lceil\\log_2(n+1)\\rceil+1.
$$
The prefix lower bound supplies $EL(X^n)\\ge H(P^n)=nH(P)$. Hence
$$
0\\le\\frac1nEL(X^n)-H(P)
\\le\\frac{q\\lceil\\log_2(n+1)\\rceil+1}{n}\\longrightarrow0.
$$
This proves the promised universality without knowing $P$. The overhead includes learning the counts; the alphabet size is fixed while $n$ grows.

## Realised rates and model complexity

By the strong law, $\\widehat p\\to P$ almost surely coordinatewise. Finite entropy is continuous, so $H(\\widehat p)\\to H(P)$ almost surely. The deterministic upper bound therefore gives
$$
\\limsup_{n\\to\\infty}L(X^n)/n\\le H(P)
$$
almost surely. Establishing a matching almost-sure lower limit for a sequence of general codes requires a further coding argument; the expected-length sandwich alone does not prove that statement.

One can obtain convergence in probability here with a counting bound. For any prefix code lengths $L_n$ and any positive $\\eta$, the probability of blocks satisfying both $L_n(x^n)<n(H-\\eta)$ and $P^n(x^n)\\le2^{-n(H-\\eta/2)}$ is at most $2^{-n\\eta/2}$. There are fewer than $2^{n(H-\\eta)}$ such short codewords by Kraft, while each such block has the displayed probability upper bound. The exceptional source-surprise event vanishes by asymptotic equipartition. Thus shortfall below $H-\\eta$ has vanishing probability. Combined with the upper bound, $L(X^n)/n\\to H(P)$ in probability.

A growing alphabet changes the overhead. If $q=q_n$ is comparable to $n$, then $q_n\\log n/n$ need not vanish. A model suitable for a fixed finite source may fail to adapt efficiently to a large sparse vocabulary. The theorem’s assumptions identify that boundary explicitly.

## Unknown block length and self-delimitation

If $n$ is not known to the decoder, send it first using a self-delimiting integer code. One simple construction for $n\\ge1$ writes $k=\\lfloor\\log_2n\\rfloor+1$ in unary as $k$ ones followed by a zero, then writes the $k$ binary digits of $n$. Its length is $2k+1=O(\\log n)$.

The decoder first counts unary ones, then reads exactly that many binary digits, and then knows the count-header and index rules. The extra cost divided by $n$ tends to zero, so iid universality survives. The integer code is deliberately simple rather than optimal; its finite cost is stated instead of hidden.

This illustrates a general principle: a model or framing choice with sublinear description length can be asymptotically negligible while remaining important for short messages. An asymptotic rate theorem does not erase a format’s header.

## Dictionary parsing: the LZ78 idea

Fix a finite alphabet and append a special end marker not in the source alphabet. Start a dictionary with the empty phrase, indexed zero. At stage $j$, take the shortest unread phrase not already in the dictionary. It has the form $wa$, where $w$ is a previous dictionary phrase and $a$ is one new symbol. Output the pair “index of $w$, then $a$,” and add $wa$ as dictionary entry $j$.

Appending the end marker ensures that the final unread suffix extends to a new phrase: no earlier phrase contains that marker. The receiver reconstructs each phrase from an already known entry and its new symbol, adds the same entry, and stops when the marker appears. Remove the marker from the output source.

At step $j$, the previous index is in $\\{0,\\ldots,j-1\\}$ and needs $\\lceil\\log_2j\\rceil$ fixed bits; for $j=1$ it needs zero bits. A symbol from the augmented alphabet needs $\\lceil\\log_2(q+1)\\rceil$ bits. The decoder knows the record number $j$, so it knows both field lengths before reading that record.

Induction on $j$ proves that both dictionaries coincide and that each reconstructed phrase matches the encoder’s phrase. This proves injectivity and decoding. It does not alone prove a small asymptotic rate.

## What phrase counting proves

If the parse has $c$ phrases including the terminal phrase, its bit length under the stated simple fields is at most
$$
c\\lceil\\log_2c\\rceil+c\\lceil\\log_2(q+1)\\rceil
\\le c\\log_2c+c\\bigl(1+\\lceil\\log_2(q+1)\\rceil\\bigr).
$$
All phrases are distinct. For each fixed length cutoff $K$, only finitely many phrases over the augmented alphabet have length below $K$; call that number $B_K$. Since total parsed symbol count is $n+1$,
$$
n+1\\ge K(c-B_K).
$$
Holding $K$ fixed while $n\\to\\infty$ gives $\\limsup c/n\\le1/K$, and then letting $K\\to\\infty$ yields $c/n\\to0$ for every infinite input sequence.

However, $c/n\\to0$ does not imply $c\\log c/n\\to0$. Nor does this counting argument identify the entropy rate of a source. The standard LZ78 universality theorem for fixed finite-alphabet stationary ergodic sources requires a deeper parsing/entropy argument; that theorem is a named continuation in the benchmark references, not a result derived by the preceding two lines.

The complete universal theorem proved in this chapter is the count-and-index theorem for finite iid sources. Keeping that claim distinct from dictionary decoding prevents an algorithm description from masquerading as a missing theorem proof.

## Worked example 8.1: A small type class

Over the alphabet $\\{A,B\\}$, a length-four block with counts $(3,1)$ has class size $\\binom41=4$. The header uses two counts with $b_4=3$ bits each, followed by a two-bit index, for eight bits total. This is longer than the four-bit uncompressed binary block. The construction is designed to prove a universal rate as $n$ grows, not to beat every short input. Its model overhead is deliberately visible.

## Worked example 8.2: Parsing a repeated block

Take the source block $ABABABA$ and append $\\#$. LZ78 phrases are $A$, $B$, $AB$, $ABA$, and $\\#$. Their records are $(0,A),(0,B),(1,B),(3,A),(0,\\#)$, because dictionary entry three is $AB$. Concatenating reconstructed phrases gives exactly $ABABABA\\#$. At record four the decoder already knows entry three, so there is no circular definition. Phrase counts alone do not determine whether this short encoded representation beats the raw block.

## Worked example 8.3: A deterministic unknown source

Suppose the fixed but unknown iid source always emits one symbol of a $q$-symbol alphabet. Every realised type has one count $n$ and all others zero, with type-class size one. The count code uses $q\\lceil\\log_2(n+1)\\rceil$ bits and no index bits. Its per-symbol rate tends to zero, the true entropy, even though the decoder initially did not know which symbol was deterministic. A specialised format could use fewer header bits, but universality does not require this construction to be finite-block optimal.

## An adaptive predictive law behind the type code

There is another explicit universal construction on a fixed alphabet. Begin every symbol count at one. At each step, predict a symbol with probability its current count divided by the total current count, then increment the observed symbol’s count.

Every conditional prediction is positive and sums to one. Their product therefore defines a valid probability law on blocks. Multiplying through a block shows that its numerator contains the factorial of each final observed count, while the denominator contains the consecutive totals from the alphabet size through the alphabet size plus block length minus one.

Rearranging gives a particularly useful description: every count vector has the same total probability, and within that count vector every ordered block has the same probability. The number of possible count vectors is the binomial coefficient counting allocations of the block length among the alphabet symbols. The number of ordered blocks is the multinomial type-class size.

Hence the negative log block probability is the logarithm of the number of count vectors plus the logarithm of its type-class size. The latter is at most block length times empirical entropy. The former is at most the alphabet size minus one times the logarithm of block length plus one.

Ideal arithmetic coding of this predictive law therefore achieves the same vanishing per-symbol iid redundancy order as the explicit header-and-index construction. The model cost has moved into sequential predictive probabilities rather than disappeared.

The formula can also be obtained by integrating an iid probability vector against a uniform Dirichlet prior, but that integral is not needed for the proof: the sequential product already establishes both normalisation and the factorial identity.

Starting each count at one avoids assigning zero probability to a symbol not previously observed. It also spends some predictive mass on those possibilities, which is exactly part of the universal overhead. A different initial count changes the finite description and its redundancy, so it should not be silently substituted after seeing the file.

This construction still assumes the alphabet itself is shared and fixed. Discovering a new unlisted symbol requires a representation rule for its identity, just as dictionary entries require a shared symbol alphabet. Universality over probability vectors does not automatically supply universality over arbitrary unknown vocabularies.

## Exercises

### Exercise 8.1
<a id="universal-dictionary-codes-ex-1"></a>

Why does the type index length become known after the header?

<details>
<summary>Hint 1</summary>

The counts determine a multinomial coefficient.

</details>
<details>
<summary>Hint 2</summary>

The index range has exactly that many elements.

</details>
<details>
<summary>Solution</summary>

From the counts the decoder computes $N=n!/\\prod_an_a!$ and hence the fixed payload length $\\lceil\\log_2N\\rceil$. It can read exactly that many bits without a separator. Invalid indices are excluded from the source codebook.

</details>

### Exercise 8.2
<a id="universal-dictionary-codes-ex-2"></a>

Prove the deterministic type-class bound.

<details>
<summary>Hint 1</summary>

Evaluate the empirical product law on the class.

</details>
<details>
<summary>Hint 2</summary>

Its total probability is at most one.

</details>
<details>
<summary>Solution</summary>

Every class member has empirical-law probability $\\prod_a(n_a/n)^{n_a}=2^{-nH(\\widehat p)}$. Multiplying by the class size gives its total probability under that law, at most one. Rearrangement gives $N\\le2^{nH(\\widehat p)}$.

</details>

### Exercise 8.3
<a id="universal-dictionary-codes-ex-3"></a>

Where is iid needed in the expected redundancy theorem?

<details>
<summary>Hint 1</summary>

The block entropy lower bound uses a product law.

</details>
<details>
<summary>Hint 2</summary>

The empirical expectation also uses the common marginal.

</details>
<details>
<summary>Solution</summary>

For iid $P$, $H(X^n)=nH(P)$ and $E\\widehat p=P$. Concavity then bounds expected empirical entropy by $H(P)$. For dependent data the same code remains decodable, but a marginal-entropy bound need not adapt to the smaller entropy rate created by dependence.

</details>

### Exercise 8.4
<a id="universal-dictionary-codes-ex-4"></a>

Can one omit one count from the header?

<details>
<summary>Hint 1</summary>

The counts sum to the known block length.

</details>
<details>
<summary>Hint 2</summary>

The last count is determined.

</details>
<details>
<summary>Solution</summary>

Yes. Send $q-1$ counts, recover the last as $n$ minus their sum, and reject invalid negative values. This reduces the simple header to $(q-1)b_n$ bits and preserves the proof. The original $q$-count version was chosen for symmetry, not optimal finite overhead.

</details>

### Exercise 8.5
<a id="universal-dictionary-codes-ex-5"></a>

Why does the decoder need an end marker or another stopping rule for dictionary coding?

<details>
<summary>Hint 1</summary>

A valid sequence of records can be extended.

</details>
<details>
<summary>Hint 2</summary>

No external block length was assumed in that format.

</details>
<details>
<summary>Solution</summary>

Without a marker, record count or source length, the receiver cannot know whether further phrases are part of the same message. The marker creates a final uniquely recognisable source event. Its probability or coding cost must be included in any exact model comparison.

</details>

### Exercise 8.6
<a id="universal-dictionary-codes-ex-6"></a>

Prove dictionary reconstruction by induction.

<details>
<summary>Hint 1</summary>

Assume the previous dictionaries agree.

</details>
<details>
<summary>Hint 2</summary>

Each record references only a previous entry.

</details>
<details>
<summary>Solution</summary>

At stage $j$, both sides have entries zero through $j-1$ in the same order. The transmitted index selects the same phrase $w$ and the transmitted symbol gives the same extension $wa$. Both output and insert that phrase as entry $j$. Starting from the shared empty entry proves agreement for every record.

</details>

### Exercise 8.7
<a id="universal-dictionary-codes-ex-7"></a>

Does $c/n\\to0$ imply the stated dictionary rate tends to zero?

<details>
<summary>Hint 1</summary>

The rate contains $c\\log c/n$.

</details>
<details>
<summary>Hint 2</summary>

Consider an order such as $c=n/\\log n$.

</details>
<details>
<summary>Solution</summary>

No. If $c$ has order $n/\\log n$, then $c/n\\to0$ but $c\\log c/n$ can remain near a positive constant. The phrase-count argument controls only part of the bit cost. An entropy-rate theorem needs a more refined argument.

</details>

### Exercise 8.8
<a id="universal-dictionary-codes-ex-8"></a>

Why is universality here pointwise over fixed source laws?

<details>
<summary>Hint 1</summary>

Both the alphabet and probability vector are fixed before taking the limit.

</details>
<details>
<summary>Hint 2</summary>

Inspect what happens to the overhead for growing $q$.

</details>
<details>
<summary>Solution</summary>

The proven redundancy bound tends to zero for each fixed finite alphabet and law. If $q$ grows as fast as $n$, the displayed header cost per symbol can grow like $\\log n$. No uniform large-alphabet adaptation theorem follows from the fixed-alphabet result.

</details>

### Exercise 8.9
<a id="universal-dictionary-codes-ex-9"></a>

Explain why a type header is a model description rather than free side information.

<details>
<summary>Hint 1</summary>

The empirical law depends on the current block.

</details>
<details>
<summary>Hint 2</summary>

The receiver does not initially know it.

</details>
<details>
<summary>Solution</summary>

The counts tell the receiver which class to enumerate and which empirical distribution the sender observed. They must therefore be sent unless supplied independently. Counting their length prevents choosing a fitted model after seeing the block and then reporting only its favourable payload cost.

</details>

### Exercise 8.10
<a id="universal-dictionary-codes-ex-10"></a>

Show that the simple integer framing cost is sublinear.

<details>
<summary>Hint 1</summary>

Its length is $2(\\lfloor\\log_2 n\\rfloor+1)+1$.


</details>
<details>
<summary>Hint 2</summary>

Divide by $n$.

</details>
<details>
<summary>Solution</summary>

The length is at most $2\\log_2n+3$, whose ratio to $n$ tends to zero. Hence adding the block-length prefix does not change the limiting iid entropy rate, although it changes every finite-file length and is necessary when $n$ is not otherwise shared.

</details>

## Summary

A count-and-index prefix code achieves entropy rate for every fixed finite iid law while explicitly paying for its empirical model. LZ78 reconstructs phrases from previous dictionary entries and new symbols; its decoding proof and elementary phrase count are distinct from the deeper stationary-ergodic universality theorem.
`;export{e as default};