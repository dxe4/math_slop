
# Preface and Reader Guide {#section-1-preface-and-reader-guide}

This is an L3 course connecting probability to representation and communication. Preparation is [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), through [Gaussian vectors](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Linear Algebra](#/books/linear-algebra-structure-proofs). Finite sums, conditional distributions, elementary limits and the law of large numbers are assumed. Continuous channels additionally use densities, integration and covariance.

The first part builds entropy, divergence and information inequalities. The second proves source-coding statements and develops constructive and universal descriptions. The third states a channel model before proving reliable-rate statements and treating Gaussian and algebraic examples. The final part handles dependent sources, distortion, statistical information and application limits.

Logs are base two unless another base is explicitly stated. Information is measured in bits; a base change multiplies it by a fixed constant. Finite-alphabet hypotheses are retained in combinatorial proofs. Differential entropy is introduced separately and is not silently assigned the same properties as discrete entropy.

Every theorem names its source, channel, block length, error criterion and limit where those matter. An asymptotic theorem does not promise zero error at a chosen finite block length. A worst-case distance guarantee and an average random-noise error probability are different claims. Exercises provide staged hints and full solutions after an attempt.

The spelling convention is British English. The first chapter rebuilds Euler's entropy essay, and the universal-coding chapter expands its algorithms chapter. Original sources remain in place. Existing short Unhurried information-theory readings are optional linked companions rather than copied replacements for this sequence.

<a id="section-11-choosing-a-route"></a>
## Choosing a route {#section-13-choosing-a-route}

A source-coding route reads Chapters 1–8 in order, then Chapter 13 for dependent sources and Chapter 14 for distortion. A communication route reads Chapters 1–4 and 9–12, using Chapter 5 for the source-channel comparison. A statistical-information route reads Chapters 1–4 and 15, then the decision and secrecy distinctions in Chapter 16.

Chapter 11 proves the real Gaussian channel theorem under average codebook power and average message error. Chapter 14 proves the finite-alphabet bounded-distortion theorem; it does not silently extend the argument to continuous unbounded distortion. Chapter 13 separates stationary entropy-rate existence from ergodic surprise concentration. Chapter 8 proves finite-iid count-code universality and labels the deeper LZ78 stationary-ergodic theorem as an imported continuation.

Each chapter has three worked examples and ten exercises with two hints and full solutions. The final chapter also has three analytical projects with staged help and worked solutions. Try an exercise before revealing its help, and compare the hypotheses in the solution with those used in your own argument.

<a id="section-19-optional-visual-companions"></a>
## Optional visual companions {#section-21-optional-visual-companions}

The retained Unhurried articles cover [surprise](../../apps/unhurried/articles/information-theory-surprise/index.html), [entropy](../../apps/unhurried/articles/information-theory-entropy/index.html), [joint entropy](../../apps/unhurried/articles/information-theory-joint-entropy/index.html), [KL divergence](../../apps/unhurried/articles/information-theory-kl-divergence/index.html), [mutual information](../../apps/unhurried/articles/information-theory-mutual-information/index.html), [prefix codes](../../apps/unhurried/articles/information-theory-prefix-code/index.html), [Huffman coding](../../apps/unhurried/articles/information-theory-huffman/index.html), [noisy channels](../../apps/unhurried/articles/information-theory-noisy-channel/index.html) and [information estimation](../../apps/unhurried/articles/information-theory-information-estimation/index.html). Their original identities and learner records remain attached to those resources.


For the L4 algebraic continuation, proceed from Chapter 12 to [Linear Codes](../error-correcting-codes/linear-codes.md). That chapter adds information sets, puncturing, shortening and dual identities; the rest of its commissioned book remains in progress.
